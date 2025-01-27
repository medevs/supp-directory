import { Product } from "@/data/products";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Clock, Scale, Shield } from "lucide-react";

interface SafetyAlertsProps {
  product: Product;
  userAllergies?: string[];
  userMedications?: string[];
  currentSupplements?: Product[];
}

const SafetyAlerts = ({ product, userAllergies = [], userMedications = [], currentSupplements = [] }: SafetyAlertsProps) => {
  // Check for drug interactions
  const hasDrugInteraction = userMedications.some(med => 
    product.description.toLowerCase().includes(med.toLowerCase())
  );

  // Check for allergies
  const hasAllergyRisk = userAllergies.some(allergy => 
    product.description.toLowerCase().includes(allergy.toLowerCase())
  );

  // Check timing conflicts with current supplements
  const hasTimingConflict = currentSupplements.some(supp => 
    supp.dosage?.toLowerCase().includes("morning") && 
    product.dosage?.toLowerCase().includes("morning")
  );

  // Check if exceeds maximum daily dosage
  const exceedsMaxDosage = currentSupplements.some(supp => 
    supp.name === product.name
  );

  return (
    <div className="space-y-2">
      {hasDrugInteraction && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Potential Drug Interaction</AlertTitle>
          <AlertDescription>
            This supplement may interact with your current medications. Consult your healthcare provider.
          </AlertDescription>
        </Alert>
      )}

      {hasAllergyRisk && (
        <Alert variant="destructive">
          <Shield className="h-4 w-4" />
          <AlertTitle>Allergy Alert</AlertTitle>
          <AlertDescription>
            This product may contain ingredients you're allergic to.
          </AlertDescription>
        </Alert>
      )}

      {hasTimingConflict && (
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertTitle>Timing Conflict</AlertTitle>
          <AlertDescription>
            Consider spacing out this supplement from others taken at the same time.
          </AlertDescription>
        </Alert>
      )}

      {exceedsMaxDosage && (
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle>Maximum Dosage Warning</AlertTitle>
          <AlertDescription>
            You're already taking this supplement. Taking more may exceed recommended dosage.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default SafetyAlerts;