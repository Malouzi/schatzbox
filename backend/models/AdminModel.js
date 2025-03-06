import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return validator.isEmail(email);
      },
      message: () => "Invalid email",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        return validator.isStrongPassword(password, {
          minLength: 10,
          minNumbers: 1,
          minSymbols: 1,
          minUppercase: 1,
          minLowercase: 1,
        });
      },
      message: () => "Weak password",
    },
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["ADMIN"],
      },
    ],
    default: ["ADMIN"],
  },
  permissions: [
    {
      type: String,
      enum: [
        "CREATE_USER",
        "VIEW_USER",
        "UPDATE_USER",
        "DELETE_USER",
        "CREATE_PRODUCT",
        "UPDATE_PRODUCT",
        "DELETE_PRODUCT",
      ],
    },
  ],
});

adminSchema.methods.toJSON = function () {
  const obj = this.toObject();

  delete obj.password;
  delete obj.__v;

  return obj;
};

adminSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password);
});

export const Admin = model("admin", adminSchema);
