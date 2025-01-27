import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, ArrowRight, ArrowLeft } from "lucide-react";

interface QuestionBase {
  type: string;
  question: string;
}

interface RadioQuestion extends QuestionBase {
  type: "radio";
  options: string[];
}

interface TextQuestion extends QuestionBase {
  type: "text" | "textarea";
  placeholder: string;
}

interface FileQuestion extends QuestionBase {
  type: "file";
  accept: string;
}

type Question = RadioQuestion | TextQuestion | FileQuestion;

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const Quiz = ({ isOpen, onClose }: QuizProps) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [files, setFiles] = useState<FileList | null>(null);

  const questions: Record<number, Question> = {
    1: {
      type: "radio",
      question: "What is your primary health goal?",
      options: ["Weight Management", "Muscle Building", "Energy & Focus", "Overall Health", "Immune Support"]
    },
    2: {
      type: "radio",
      question: "How would you describe your current fitness level?",
      options: ["Beginner", "Intermediate", "Advanced", "Professional Athlete"]
    },
    3: {
      type: "text",
      question: "Do you have any specific dietary restrictions or allergies?",
      placeholder: "List any dietary restrictions..."
    },
    4: {
      type: "radio",
      question: "How would you rate your stress level?",
      options: ["Low", "Moderate", "High", "Very High"]
    },
    5: {
      type: "radio",
      question: "How would you rate your sleep quality?",
      options: ["Poor", "Fair", "Good", "Excellent"]
    },
    6: {
      type: "textarea",
      question: "Please describe any existing health conditions or medications:",
      placeholder: "Share any relevant health information..."
    },
    7: {
      type: "file",
      question: "Upload any relevant medical reports or fitness tracking data (optional):",
      accept: ".pdf,.jpg,.png"
    }
  };

  const handleAnswer = (value: any, questionType: string) => {
    if (questionType === "file") {
      setFiles(value);
      setAnswers({ ...answers, [currentQuestion]: value[0]?.name || null });
    } else {
      setAnswers({ ...answers, [currentQuestion]: value });
    }
  };

  const handleNext = () => {
    if (currentQuestion < Object.keys(questions).length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    navigate('/quiz-results', { 
      state: { 
        answers,
        files: files ? Array.from(files).map(file => file.name) : []
      } 
    });
    onClose();
  };

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion as keyof typeof questions];

    switch (currentQ.type) {
      case "radio":
        return (
          <RadioGroup
            onValueChange={(value) => handleAnswer(value, "radio")}
            value={answers[currentQuestion]}
            className="space-y-3"
          >
            {currentQ.options.map((option) => (
              <div key={option} className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-slate-50">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "text":
        return (
          <Input
            placeholder={currentQ.placeholder}
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value, "text")}
            className="w-full"
          />
        );

      case "textarea":
        return (
          <Textarea
            placeholder={currentQ.placeholder}
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value, "textarea")}
            className="min-h-[100px]"
          />
        );

      case "file":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept={currentQ.accept}
                  onChange={(e) => handleAnswer(e.target.files, "file")}
                  multiple
                />
              </label>
            </div>
            {files && Array.from(files).map((file, index) => (
              <p key={index} className="text-sm text-gray-500">{file.name}</p>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const isAnswered = () => {
    if (questions[currentQuestion as keyof typeof questions].type === "file") {
      return true; // File upload is optional
    }
    return !!answers[currentQuestion];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogTitle className="text-2xl font-bold text-center text-[#8B5CF6]">
          Health & Wellness Assessment
        </DialogTitle>
        <Card className="border-0 shadow-none">
          <CardHeader>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#8B5CF6] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / Object.keys(questions).length) * 100}%` }}
              ></div>
            </div>
            <CardTitle className="text-lg font-medium mt-4">
              {questions[currentQuestion as keyof typeof questions].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderQuestion()}
          </CardContent>
          <CardFooter className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </Button>
            {currentQuestion === Object.keys(questions).length ? (
              <Button 
                onClick={handleSubmit}
                disabled={!isAnswered()}
                className="bg-[#8B5CF6] hover:bg-[#7C3AED]"
              >
                See Results
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isAnswered()}
                className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED]"
              >
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default Quiz;
