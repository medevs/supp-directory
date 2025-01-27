import { Pill, Star, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#F2FCE2] flex items-center justify-center flex-shrink-0">
          <Pill className="h-5 w-5 sm:h-6 sm:w-6 text-[#8B5CF6]" />
        </div>
        <div className="flex-grow sm:flex-grow-0">
          <Link to={`/product/${product.id}`} className="hover:underline">
            <h3 className="font-semibold text-base sm:text-lg text-[#8B5CF6] line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-start">
        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
          <Bookmark className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>{product.bookmarks}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;