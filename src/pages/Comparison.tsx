import { useComparison } from "@/contexts/ComparisonContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Comparison = () => {
  const { comparedProducts, removeFromComparison, clearComparison } = useComparison();

  if (comparedProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
        <Navbar />
        <div className="container py-8 flex-grow">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-[#8B5CF6] mb-4">No Products to Compare</h1>
            <p className="text-gray-600 mb-6">Add some products to compare them side by side.</p>
            <Link to="/">
              <Button>Browse Products</Button>
            </Link>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <Navbar />
      <div className="container py-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#8B5CF6]">Product Comparison</h1>
          <Button variant="outline" onClick={clearComparison}>Clear All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparedProducts.map((product) => (
            <Card key={product.id} className="p-6 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeFromComparison(product.id)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="flex flex-col items-center">
                <img src={product.logo} alt={product.name} className="w-16 h-16 rounded-lg mb-4" />
                <h3 className="font-semibold text-lg text-[#8B5CF6] mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Price</h4>
                  <p>{product.pricing}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>

                {product.dosage && (
                  <div>
                    <h4 className="font-semibold mb-1">Dosage</h4>
                    <p className="text-sm">{product.dosage}</p>
                  </div>
                )}

                {product.benefits && (
                  <div>
                    <h4 className="font-semibold mb-1">Benefits</h4>
                    <ul className="text-sm list-disc pl-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-1">Categories</h4>
                  <p className="text-sm">{product.category}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-[#F2FCE2] text-[#8B5CF6] rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comparison;