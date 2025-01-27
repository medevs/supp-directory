import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import { products } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onRatingChange: (rating: number) => void;
  onFeaturedChange: (featured: boolean) => void;
  onTagsChange: (tags: string[]) => void;
  onBenefitsChange: (benefits: string[]) => void;
}

const SidebarFilter = ({
  selectedCategory,
  onSelectCategory,
  onPriceRangeChange,
  onRatingChange,
  onFeaturedChange,
  onTagsChange,
  onBenefitsChange,
}: SidebarFilterProps) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minRating, setMinRating] = useState(0);
  const [showFeatured, setShowFeatured] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);

  // Get unique tags and benefits from all products
  const allTags = Array.from(new Set(products.flatMap(product => product.tags)));
  const allBenefits = Array.from(new Set(products.flatMap(product => product.benefits || [])));

  const handleClearFilters = () => {
    setPriceRange([0, 100]);
    setMinRating(0);
    setShowFeatured(false);
    setSelectedTags([]);
    setSelectedBenefits([]);
    onSelectCategory(null);
    onPriceRangeChange([0, 100]);
    onRatingChange(0);
    onFeaturedChange(false);
    onTagsChange([]);
    onBenefitsChange([]);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    onPriceRangeChange([value[0], value[1]]);
  };

  const handleRatingChange = (value: number[]) => {
    setMinRating(value[0]);
    onRatingChange(value[0]);
  };

  const handleFeaturedChange = (checked: boolean) => {
    setShowFeatured(checked);
    onFeaturedChange(checked);
  };

  const handleTagChange = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    onTagsChange(updatedTags);
  };

  const handleBenefitChange = (benefit: string) => {
    const updatedBenefits = selectedBenefits.includes(benefit)
      ? selectedBenefits.filter(b => b !== benefit)
      : [...selectedBenefits, benefit];
    setSelectedBenefits(updatedBenefits);
    onBenefitsChange(updatedBenefits);
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#8B5CF6]">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-[#8B5CF6]"
          onClick={handleClearFilters}
        >
          <X className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" className="w-full space-y-4" defaultValue={["categories"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="text-xl font-semibold text-[#8B5CF6]">
            Categories
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-semibold text-[#8B5CF6]">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-2">
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between mt-3 text-sm text-gray-600">
                <span className="font-medium">${priceRange[0]}</span>
                <span className="font-medium">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-lg font-semibold text-[#8B5CF6]">
            Minimum Rating
          </AccordionTrigger>
          <AccordionContent>
            <RatingFilter minRating={minRating} onRatingChange={handleRatingChange} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tags">
          <AccordionTrigger className="text-lg font-semibold text-[#8B5CF6]">
            Tags
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {allTags.map((tag) => (
                <div key={tag} className="flex items-center space-x-3">
                  <Checkbox
                    id={`tag-${tag}`}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => handleTagChange(tag)}
                  />
                  <Label 
                    htmlFor={`tag-${tag}`} 
                    className="text-sm text-gray-700 cursor-pointer hover:text-[#8B5CF6] transition-colors"
                  >
                    {tag}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="benefits">
          <AccordionTrigger className="text-lg font-semibold text-[#8B5CF6]">
            Benefits
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {allBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <Checkbox
                    id={`benefit-${benefit}`}
                    checked={selectedBenefits.includes(benefit)}
                    onCheckedChange={() => handleBenefitChange(benefit)}
                  />
                  <Label 
                    htmlFor={`benefit-${benefit}`} 
                    className="text-sm text-gray-700 cursor-pointer hover:text-[#8B5CF6] transition-colors"
                  >
                    {benefit}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex items-center space-x-3 pt-4 border-t">
        <Switch
          id="featured"
          checked={showFeatured}
          onCheckedChange={handleFeaturedChange}
        />
        <Label 
          htmlFor="featured" 
          className="text-sm text-gray-700 cursor-pointer hover:text-[#8B5CF6] transition-colors"
        >
          Show Featured Only
        </Label>
      </div>
    </div>
  );
};

export default SidebarFilter;
