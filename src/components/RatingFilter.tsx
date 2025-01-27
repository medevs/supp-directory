import { Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface RatingFilterProps {
  minRating: number;
  onRatingChange: (value: number[]) => void;
}

const RatingFilter = ({ minRating, onRatingChange }: RatingFilterProps) => {
  return (
    <div className="px-2">
      <div className="flex items-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onRatingChange([rating])}
            className={`flex items-center justify-center p-2 rounded-full transition-colors ${
              rating <= minRating
                ? "bg-yellow-100"
                : "hover:bg-gray-100"
            }`}
          >
            <Star
              className={`w-5 h-5 ${
                rating <= minRating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      <Slider
        defaultValue={[0]}
        max={5}
        step={0.5}
        value={[minRating]}
        onValueChange={onRatingChange}
        className="w-full"
      />
      <div className="flex items-center mt-3">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="ml-2 text-sm text-gray-600 font-medium">
          {minRating} and up
        </span>
      </div>
    </div>
  );
};

export default RatingFilter;