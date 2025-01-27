import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, User } from "lucide-react";
import { stacks } from "@/data/stacks";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StacksFilter from "@/components/StacksFilter";

const Stacks = () => {
  const [minRating, setMinRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("rating");

  const filteredStacks = stacks
    .filter((stack) => {
      const matchesRating = stack.rating >= minRating;
      const matchesCategory = !selectedCategory || 
        products.some(product => 
          stack.products.includes(product.id) && 
          product.category === selectedCategory
        );
      return matchesRating && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "newest") return parseInt(b.id) - parseInt(a.id);
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <Navbar />
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <StacksFilter
              onRatingChange={setMinRating}
              onCategoryChange={setSelectedCategory}
              onSortChange={setSortBy}
            />
          </div>

          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold text-[#8B5CF6] mb-6">
              Supplement Stacks
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStacks.map((stack) => (
                <Link key={stack.id} to={`/stack/${stack.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {stack.name}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {stack.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{stack.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{stack.rating}</span>
                        <span className="text-sm text-gray-500">
                          ({stack.reviews} reviews)
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Includes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {stack.products.map((productId) => {
                            const product = products.find(
                              (p) => p.id === productId
                            );
                            return product ? (
                              <span
                                key={product.id}
                                className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                              >
                                {product.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {stack.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stacks;
