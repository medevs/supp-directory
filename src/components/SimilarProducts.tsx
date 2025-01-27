import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface SimilarProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

const SimilarProducts = ({ currentProduct, allProducts }: SimilarProductsProps) => {
  const similarProducts = allProducts
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || 
       product.tags.some(tag => currentProduct.tags.includes(tag)))
    )
    .slice(0, 3);

  if (similarProducts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-6">Similar Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;