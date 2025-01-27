import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import { MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import ChatInterface from "@/components/chat/ChatInterface";
import SmartRecommendations from "@/components/recommendations/SmartRecommendations";
import SafetyAlerts from "@/components/safety/SafetyAlerts";
import Footer from "@/components/Footer";
import type { Message } from "@/types/chat";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const QuizResults = () => {
  const location = useLocation();
  const answers = location.state?.answers || {};
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your wellness assistant. Feel free to ask me any questions about the recommended supplements or your health goals."
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Extract user health data from quiz answers
  const userHealthData = {
    allergies: (answers[3] || "").split(',').map((a: string) => a.trim()),
    medications: (answers[6] || "").split(',').map((m: string) => m.trim()),
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: newMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const aiResponse = {
        role: "assistant" as const,
        content: "Based on your health assessment, here are some supplements that might be beneficial for you. Would you like more specific information about any of them?"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <Navbar />
      <div className="container py-8 flex-grow">
        <div className="space-y-8">
          <Card className="bg-gradient-to-r from-purple-100 to-blue-100">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#8B5CF6]">
                Your Personalized Supplement Directory
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Based on your health assessment, we've identified supplements that might be beneficial for your needs. 
                Remember to consult with a healthcare professional before starting any supplement regimen.
              </p>
            </CardHeader>
          </Card>

          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertTitle>Directory Purpose</AlertTitle>
            <AlertDescription>
              This is an informational directory to help you learn about supplements that might benefit you. 
              All recommendations are based on your quiz answers and general health information. 
              Always consult with healthcare professionals for personalized medical advice.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#8B5CF6] mb-6">Recommended Supplements</h2>
                <SmartRecommendations products={products} answers={answers} />
                {products.map(product => (
                  <SafetyAlerts
                    key={product.id}
                    product={product}
                    userAllergies={userHealthData.allergies}
                    userMedications={userHealthData.medications}
                  />
                ))}
              </section>
            </div>

            {isDesktop ? (
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#8B5CF6]">Ask About Supplements</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ChatInterface
                      messages={messages}
                      newMessage={newMessage}
                      setNewMessage={setNewMessage}
                      handleSendMessage={handleSendMessage}
                      handleKeyPress={handleKeyPress}
                    />
                  </CardContent>
                </Card>
              </div>
            ) : (
              <>
                <Button
                  className="fixed bottom-20 right-4 h-12 w-12 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] shadow-lg z-50 md:hidden flex items-center justify-center"
                  onClick={() => setIsChatOpen(true)}
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
                  <SheetContent side="bottom" className="h-[80vh] p-0 flex flex-col">
                    <SheetHeader className="p-4 border-b">
                      <SheetTitle className="text-[#8B5CF6]">Ask About Supplements</SheetTitle>
                    </SheetHeader>
                    <div className="flex-1 overflow-hidden">
                      <ChatInterface
                        messages={messages}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        handleSendMessage={handleSendMessage}
                        handleKeyPress={handleKeyPress}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizResults;
