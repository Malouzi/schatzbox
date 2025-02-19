import { ProductCard } from "../ProductCard";
import { SectionTitles } from "../SectionTitles";
import "./ProductSection.css";

export function ProductSection() {
  return (
   <>
      <section className='product-section'>
        <SectionTitles />
        <div className="products-container">
            <ProductCard imgpath={"/book-1.png"} />
            <ProductCard imgpath={"/book-2.png"} />
            <ProductCard imgpath={"/book-3.png"}/>
            <ProductCard />
        </div>
      </section>

      </>
  );
}