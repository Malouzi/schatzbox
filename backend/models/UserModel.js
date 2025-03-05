import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
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
  verified: Date,
  roles: {
    type: [
      {
        type: String,
        enum: ["USER", "ADMIN"],
      },
    ],
    default: ["USER"],
  },
  permissions: [
    {
      type: String,
      enum: ["CREATE_USER", "VIEW_USER", "UPDATE_USER", "DELETE_USER"],
    },
  ],
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();

  delete obj.password;
  delete obj.__v;

  return obj;
};

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password);
});

export const User = model("user", userSchema);
