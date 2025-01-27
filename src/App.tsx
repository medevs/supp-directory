import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Stacks from "./pages/Stacks";
import StackDetails from "./pages/StackDetails";
import QuizResults from "./pages/QuizResults";
import Comparison from "./pages/Comparison";
import { ComparisonProvider } from "./contexts/ComparisonContext";

function App() {
  return (
    <ComparisonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/stacks" element={<Stacks />} />
          <Route path="/stack/:id" element={<StackDetails />} />
          <Route path="/quiz-results" element={<QuizResults />} />
          <Route path="/comparison" element={<Comparison />} />
        </Routes>
      </Router>
    </ComparisonProvider>
  );
}

export default App;