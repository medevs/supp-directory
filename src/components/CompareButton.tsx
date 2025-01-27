import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import { useComparison } from "@/contexts/ComparisonContext";
import type { Product } from "@/data/products";

interface CompareButtonProps {
  product: Product;
}

const CompareButton = ({ product }: CompareButtonProps) => {
  const { comparedProducts, addToComparison, removeFromComparison } = useComparison();
  const isCompared = comparedProducts.some(p => p.id === product.id);

  return (
    <Button
      variant={isCompared ? "destructive" : "outline"}
      size="sm"
      onClick={() => isCompared ? removeFromComparison(product.id) : addToComparison(product)}
      className="flex items-center gap-2"
    >
      <Scale className="h-4 w-4" />
      {isCompared ? "Remove from Compare" : "Add to Compare"}
    </Button>
  );
};

export default CompareButton;