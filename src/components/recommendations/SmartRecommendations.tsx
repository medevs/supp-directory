import { Product } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Sparkles, DollarSign, Calendar } from "lucide-react";
import { checkDrugInteractions, getCurrentSeason, getSeasonalRecommendations, scoreProduct } from "@/utils/recommendationEngine";
import ProductCard from "@/components/ProductCard";

interface SmartRecommendationsProps {
  products: Product[];
  answers: Record<string, any>;
}

const SmartRecommendations = ({ products, answers }: SmartRecommendationsProps) => {
  const healthData = {
    healthGoal: answers[1] || "",
    fitnessLevel: answers[2] || "",
    dietaryRestrictions: answers[3] || "",
    stressLevel: answers[4] || "",
    sleepQuality: answers[5] || "",
    healthConditions: answers[6] || "",
    medications: answers[6] || "", // Using health conditions field for medications
  };

  const budget = 100; // Default budget, could be made dynamic
  const season = getCurrentSeason();
  const seasonalTags = getSeasonalRecommendations(season);

  const recommendedProducts = products
    .map(product => ({
      product,
      score: scoreProduct(product, healthData, budget),
      hasInteraction: checkDrugInteractions(healthData.medications, product)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#8B5CF6]">
            <Sparkles className="h-5 w-5" />
            Smart Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Seasonal picks for {season}: {seasonalTags.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <DollarSign className="h-4 w-4" />
              <span>Budget-friendly options under ${budget}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedProducts.map(({ product, hasInteraction }) => (
          <div key={product.id} className="space-y-4">
            <ProductCard product={product} />
            {hasInteraction && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Potential Interaction</AlertTitle>
                <AlertDescription>
                  This supplement may interact with your current medications. Consult your healthcare provider.
                </AlertDescription>
              </Alert>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartRecommendations;