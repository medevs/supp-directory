import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useRef } from "react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border-t p-4 bg-white">
      <div className="flex gap-2">
        <Input
          ref={inputRef}
          placeholder="Ask about your recommendations..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          className="flex-1"
          autoComplete="off"
        />
        <Button
          onClick={onSend}
          className="bg-[#8B5CF6] hover:bg-[#7C3AED]"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;