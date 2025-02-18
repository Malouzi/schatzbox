import { SectionTitles } from "../SectionTitles";
import "./ProductSection.css";

export function ProductSection() {
  return (
   <>
      <section className='product-section'>
        <SectionTitles />
        <div className="products-container">
            <div>Einhorn Schatzsuche</div>
            <div>Piraten Schatzsuche</div>
            <div>Waldtier Schatzsuche</div>
            <div>Detktiv Schatzsuche</div>
        </div>
      </section>

      </>
  );
}