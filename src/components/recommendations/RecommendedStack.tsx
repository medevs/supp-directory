import { Stack } from "@/types/stack";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

interface RecommendedStackProps {
  stack: Stack;
}

const RecommendedStack = ({ stack }: RecommendedStackProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{stack.name}</h3>
              <p className="text-gray-600">{stack.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{stack.rating}</span>
              <span className="text-gray-500">({stack.reviews} reviews)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <User className="h-4 w-4" />
            <span>Created by {stack.author}</span>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <div className="flex flex-wrap gap-2">
              {stack.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedStack;