import { Car } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface SuggestionItemProps {
  suggestion: Car;
  onClick: () => void;
}

const SuggestionItem = ({ suggestion, onClick }: SuggestionItemProps) => {
  return (
    <Link
      onClick={onClick}
      href={`/cars/${suggestion.slug}`}
      className="bg-white p-2 flex items-center justify-start"
    >
      <Image
        src={`/images/${suggestion.image}`}
        alt="car"
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-auto max-w-10 mr-1"
      />
      <span>{suggestion.title}</span>
    </Link>
  );
};

export default SuggestionItem;
