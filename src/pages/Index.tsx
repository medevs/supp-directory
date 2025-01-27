import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SidebarFilter from "@/components/SidebarFilter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [rating, setRating] = useState(0);
  const [showFeatured, setShowFeatured] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);

  useEffect(() => {
    const tagFromUrl = searchParams.get("tag");
    if (tagFromUrl && !selectedTags.includes(tagFromUrl)) {
      setSelectedTags([tagFromUrl]);
    }
  }, [searchParams]);

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 100]);
    setRating(0);
    setShowFeatured(false);
    setSelectedTags([]);
    setSelectedBenefits([]);
    setSearchParams({});
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags([tag]);
    setSearchParams({ tag });
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesRating = product.rating >= rating;
      const matchesPriceRange = true;
      const matchesFeatured = !showFeatured || product.featured;
      const matchesTags = 
        selectedTags.length === 0 || 
        selectedTags.every(tag => product.tags.includes(tag));
      const matchesBenefits = 
        selectedBenefits.length === 0 || 
        selectedBenefits.every(benefit => product.benefits?.includes(benefit));

      return (
        matchesCategory && 
        matchesRating && 
        matchesPriceRange && 
        matchesFeatured &&
        matchesTags &&
        matchesBenefits
      );
    });

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <Navbar />
      <div className="container py-8 px-4 md:px-8 flex-grow">
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-[#8B5CF6]">Products</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="py-4">
                  <SidebarFilter
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    onPriceRangeChange={setPriceRange}
                    onRatingChange={setRating}
                    onFeaturedChange={setShowFeatured}
                    onTagsChange={setSelectedTags}
                    onBenefitsChange={setSelectedBenefits}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden md:block w-full md:w-64">
            <SidebarFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onPriceRangeChange={setPriceRange}
              onRatingChange={setRating}
              onFeaturedChange={setShowFeatured}
              onTagsChange={setSelectedTags}
              onBenefitsChange={setSelectedBenefits}
            />
          </aside>

          {/* Product grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onTagClick={handleTagClick}
                />
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No products match your criteria.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;