interface ProductTagsProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

const ProductTags = ({ tags, onTagClick }: ProductTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          onClick={() => onTagClick(tag)}
          className="text-xs sm:text-sm px-2 py-1 bg-[#F2FCE2] text-[#8B5CF6] rounded-full cursor-pointer hover:bg-[#E5F9D0] transition-colors"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default ProductTags;