interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          role === "user"
            ? "bg-[#8B5CF6] text-white"
            : "bg-white border border-gray-200 text-gray-800"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;