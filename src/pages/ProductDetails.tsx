import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, Bookmark, Pill, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import SimilarProducts from "@/components/SimilarProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock providers data (in a real app, this would come from an API)
const providers = [
  {
    id: 1,
    name: "HealthStore",
    rating: 4.8,
    reviews: 1250,
    url: "https://example.com/healthstore",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=HS"
  },
  {
    id: 2,
    name: "VitaminWorld",
    rating: 4.6,
    reviews: 890,
    url: "https://example.com/vitaminworld",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=VW"
  },
  {
    id: 3,
    name: "NaturalChoice",
    rating: 4.7,
    reviews: 2100,
    url: "https://example.com/naturalchoice",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=NC"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-[#8B5CF6]">Product not found</h1>
      </div>
    );
  }

  const handleTagClick = (tag: string) => {
    navigate('/?tag=' + tag);
  };

  // Mock reviews data (in a real app, this would come from an API)
  const mockReviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      date: "2024-02-15",
      content: "Great product! Really helped with my daily routine.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      date: "2024-02-10",
      content: "Good quality supplement, but a bit pricey.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <Navbar />
      <div className="container py-8 flex-grow">
        <Button
          variant="ghost"
          className="mb-4 text-[#8B5CF6]"
          onClick={() => window.history.back()}
        >
          ← Back
        </Button>

        <Card className="p-8 bg-white">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-lg bg-[#F2FCE2] flex items-center justify-center">
              <Pill className="h-10 w-10 text-[#8B5CF6]" />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-[#8B5CF6] mb-2">{product.name}</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                    <span className="text-gray-500">
                      <Bookmark className="h-5 w-5 inline mr-1" />
                      {product.bookmarks}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                
                {product.dosage && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#8B5CF6] mb-2">Recommended Dosage</h2>
                    <p className="text-gray-700">{product.dosage}</p>
                  </div>
                )}

                {product.benefits && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#8B5CF6] mb-2">Benefits</h2>
                    <ul className="list-disc pl-6">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#8B5CF6] mb-2">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className="text-sm px-3 py-1 bg-[#F2FCE2] text-[#8B5CF6] rounded-full cursor-pointer hover:bg-[#E5F9D0] transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-[#8B5CF6] mb-4">Best Providers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {providers.map((provider) => (
                      <Card key={provider.id} className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarImage src={provider.logo} />
                            <AvatarFallback>{provider.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{provider.name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-sm text-gray-600">
                                {provider.rating} ({provider.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="outline"
                          className="w-full border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#F2FCE2]"
                          onClick={() => window.open(provider.url, "_blank")}
                        >
                          Visit Store <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-[#8B5CF6] mb-6">Reviews</h2>
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-gray-900">{review.author}</h3>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <SimilarProducts currentProduct={product} allProducts={products} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
