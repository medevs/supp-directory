import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import CompareButton from "../CompareButton";
import type { Product } from "@/data/products";

interface ProductActionsProps {
  product: Product;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const { toast } = useToast();

  const findBestPrice = () => {
    if (!product.providers) return null;
    return product.providers.reduce((min, provider) => {
      const currentPrice = parseFloat(provider.price.replace('$', ''));
      const minPrice = parseFloat(min.price.replace('$', ''));
      return currentPrice < minPrice ? provider : min;
    });
  };

  const bestPrice = findBestPrice();

  const handlePriceClick = () => {
    if (bestPrice) {
      toast({
        title: "Best Price Found!",
        description: `${bestPrice.name} offers the best price at ${bestPrice.price}`,
      });
      window.open(bestPrice.url, '_blank');
    }
  };

  return (
    <div className="mt-auto space-y-2">
      {bestPrice && (
        <Button
          variant="outline"
          className="w-full text-xs sm:text-sm flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
          onClick={handlePriceClick}
        >
          <DollarSign className="h-4 w-4" />
          Best Price: {bestPrice.price}
        </Button>
      )}
      <CompareButton product={product} />
      <Link to={`/product/${product.id}`} className="block w-full">
        <Button
          variant="default"
          className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-xs sm:text-sm"
        >
          View Details
        </Button>
      </Link>
    </div>
  );
};

export default ProductActions;