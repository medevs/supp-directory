import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/data/products';
import { useToast } from "@/components/ui/use-toast";

interface ComparisonContextType {
  comparedProducts: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: React.ReactNode }) => {
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  const addToComparison = useCallback((product: Product) => {
    if (comparedProducts.length >= 3) {
      toast({
        title: "Comparison limit reached",
        description: "You can compare up to 3 products at a time",
        variant: "destructive",
      });
      return;
    }
    
    if (comparedProducts.some(p => p.id === product.id)) {
      toast({
        title: "Product already in comparison",
        description: "This product is already being compared",
        variant: "destructive",
      });
      return;
    }

    setComparedProducts(prev => [...prev, product]);
    toast({
      title: "Product added to comparison",
      description: "You can now compare this product with others",
    });
  }, [comparedProducts, toast]);

  const removeFromComparison = useCallback((productId: string) => {
    setComparedProducts(prev => prev.filter(p => p.id !== productId));
    toast({
      title: "Product removed from comparison",
    });
  }, [toast]);

  const clearComparison = useCallback(() => {
    setComparedProducts([]);
    toast({
      title: "Comparison cleared",
    });
  }, [toast]);

  return (
    <ComparisonContext.Provider value={{
      comparedProducts,
      addToComparison,
      removeFromComparison,
      clearComparison,
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};