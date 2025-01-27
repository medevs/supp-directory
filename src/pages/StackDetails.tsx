import { useParams } from "react-router-dom";
import { Star, User } from "lucide-react";
import { stacks } from "@/data/stacks";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const StackDetails = () => {
  const { id } = useParams();
  const stack = stacks.find((s) => s.id === id);

  if (!stack) {
    return <div>Stack not found</div>;
  }

  const stackProducts = products.filter((product) =>
    stack.products.includes(product.id)
  );

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <Navbar />
      <div className="container py-8 flex-grow">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h1 className="text-3xl font-bold text-[#8B5CF6] mb-4">{stack.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">{stack.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{stack.rating}</span>
              <span className="text-gray-500">({stack.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{stack.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <div className="flex flex-wrap gap-2">
              {stack.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Products in this Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stackProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StackDetails;
