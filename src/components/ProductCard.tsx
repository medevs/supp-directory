import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";
import ProductHeader from "@/components/product/ProductHeader";
import ProductTags from "@/components/product/ProductTags";
import ProductActions from "@/components/product/ProductActions";

interface ProductCardProps {
  product: Product;
  onTagClick?: (tag: string) => void;
}

const ProductCard = ({ product, onTagClick }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    if (onTagClick) {
      onTagClick(tag);
    } else {
      navigate('/?tag=' + tag);
    }
  };

  return (
    <Card className="flex flex-col p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:animate-card-hover bg-white min-h-[320px] sm:min-h-[360px]">
      <ProductHeader product={product} />
      
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 flex-grow">
        {product.description}
      </p>
      
      {product.dosage && (
        <p className="text-xs sm:text-sm text-gray-500 mb-4">
          <strong>Recommended Dosage:</strong> {product.dosage}
        </p>
      )}
      
      <ProductTags tags={product.tags} onTagClick={handleTagClick} />
      <ProductActions product={product} />
    </Card>
  );
};

export default ProductCard;