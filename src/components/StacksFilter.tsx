import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { categories } from "@/data/categories";
import { useSearchParams } from "react-router-dom";

interface StacksFilterProps {
  onRatingChange: (value: number) => void;
  onCategoryChange: (category: string | null) => void;
  onSortChange: (sort: string) => void;
}

const StacksFilter = ({ onRatingChange, onCategoryChange, onSortChange }: StacksFilterProps) => {
  const [minRating, setMinRating] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      onCategoryChange(categoryFromUrl);
    }
  }, [searchParams, onCategoryChange]);

  const handleRatingChange = (value: number[]) => {
    setMinRating(value[0]);
    onRatingChange(value[0]);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6 border">
      <div>
        <Label className="text-lg font-semibold text-[#8B5CF6] mb-4 block">Category</Label>
        <Select 
          onValueChange={(value) => onCategoryChange(value === "all" ? null : value)}
          defaultValue={searchParams.get('category') || "all"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.name} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-lg font-semibold text-[#8B5CF6] mb-4 block">
          Minimum Rating: {minRating}
        </Label>
        <Slider
          defaultValue={[0]}
          max={5}
          step={0.5}
          value={[minRating]}
          onValueChange={handleRatingChange}
          className="w-full"
        />
      </div>

      <div>
        <Label className="text-lg font-semibold text-[#8B5CF6] mb-4 block">Sort By</Label>
        <Select 
          onValueChange={onSortChange}
          defaultValue={searchParams.get('sort') || "rating"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rating</SelectItem>
            <SelectItem value="reviews">Most Reviews</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default StacksFilter;