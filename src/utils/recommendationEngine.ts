import { Product } from "@/data/products";

type HealthData = {
  healthGoal: string;
  fitnessLevel: string;
  dietaryRestrictions: string;
  stressLevel: string;
  sleepQuality: string;
  healthConditions: string;
  medications?: string;
};

type Season = 'spring' | 'summer' | 'fall' | 'winter';

export const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
};

export const getSeasonalRecommendations = (season: Season) => {
  const recommendations = {
    spring: ['immune support', 'allergy relief', 'energy'],
    summer: ['hydration', 'skin health', 'energy'],
    fall: ['immune support', 'vitamin D', 'mood support'],
    winter: ['vitamin D', 'immune support', 'mood support']
  };
  
  return recommendations[season];
};

const drugInteractionRisks = new Map([
  ['blood thinners', ['omega-3', 'ginkgo', 'garlic supplements']],
  ['antidepressants', ['st johns wort', 'sam-e', '5-htp']],
  ['thyroid medication', ['calcium', 'iron', 'magnesium']],
]);

export const checkDrugInteractions = (medications: string, product: Product): boolean => {
  const medicationsList = medications.toLowerCase().split(',').map(m => m.trim());
  
  for (const medication of medicationsList) {
    const riskySupplements = drugInteractionRisks.get(medication) || [];
    if (riskySupplements.some(supplement => 
      product.name.toLowerCase().includes(supplement) || 
      product.description.toLowerCase().includes(supplement)
    )) {
      return true;
    }
  }
  
  return false;
};

export const scoreProduct = (
  product: Product,
  healthData: HealthData,
  budget: number
): number => {
  let score = 0;
  
  // Match with health goal
  if (product.tags.includes(healthData.healthGoal.toLowerCase())) {
    score += 3;
  }
  
  // Consider fitness level appropriateness
  if (healthData.fitnessLevel === 'Beginner' && !product.tags.includes('advanced')) {
    score += 2;
  }
  
  // Price consideration
  const price = parseFloat(product.pricing.replace('$', ''));
  if (price <= budget) {
    score += 2;
  }
  
  // Seasonal relevance
  const seasonalTags = getSeasonalRecommendations(getCurrentSeason());
  if (product.tags.some(tag => seasonalTags.includes(tag))) {
    score += 2;
  }
  
  // Rating consideration
  score += product.rating;
  
  return score;
};