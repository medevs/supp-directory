import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      onSelectCategory(categoryFromUrl);
    }
  }, [searchParams, selectedCategory, onSelectCategory]);

  return (
    <div className="space-y-3">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "ghost"}
            className={`w-full justify-start transition-all duration-200 ${
              selectedCategory === category.name 
                ? "bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-md" 
                : "hover:bg-[#F2FCE2] text-[#8B5CF6] hover:translate-x-1"
            }`}
            onClick={() => onSelectCategory(category.name)}
          >
            <Icon className="mr-2 h-4 w-4" />
            {category.name}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;