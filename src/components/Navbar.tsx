import { Link } from "react-router-dom";
import { Scale, ClipboardList } from "lucide-react";
import { useComparison } from "@/contexts/ComparisonContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Quiz from "./Quiz";

const Navbar = () => {
  const { comparedProducts } = useComparison();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-[#8B5CF6]">
            SupplementGuide
          </Link>
          
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-[#8B5CF6] flex items-center gap-2"
              onClick={() => setIsQuizOpen(true)}
            >
              <ClipboardList className="h-5 w-5" />
              Take Quiz
            </Button>
            <Link to="/stacks" className="text-gray-600 hover:text-[#8B5CF6]">
              Stacks
            </Link>
            <Link to="/comparison" className="text-gray-600 hover:text-[#8B5CF6] flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Compare
              {comparedProducts.length > 0 && (
                <Badge variant="secondary" className="bg-[#F2FCE2] text-[#8B5CF6]">
                  {comparedProducts.length}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
      <Quiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </nav>
  );
};

export default Navbar;