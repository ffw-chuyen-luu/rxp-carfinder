"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";

import { Car } from "@/lib/types";
import { searchCars } from "@/lib/car/data";

const DebouncedInput = ({ onInputChange }: { onInputChange: Function }) => {
  const debouncedOnChange = debounce(
    useCallback(
      (inputValue) => {
        onInputChange(inputValue);
      },
      [onInputChange]
    ),
    500
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    debouncedOnChange(newValue);
  };

  return (
    <input
      id="search"
      type="text"
      onChange={handleChange}
      onFocus={handleChange}
      placeholder="Search for your car..."
      className="block w-full rounded-full border-gray-300 pl-12 focus:border-gray-40 focus:ring-0 md:w-screen"
    />
  );
};

const SuggestionItem = ({
  suggestion,
  onSelected,
}: {
  suggestion: Car;
  onSelected: () => void;
}) => {
  return (
    <Link
      onClick={onSelected}
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

const SearchSuggestions = () => {
  const [suggestions, setSuggestions] = useState<Car[]>([]);
  const [display, setDisplay] = useState(false);
  const ref = useRef<HTMLDivElement>(null) ;

  const getSuggestions = async (txt: string) => {
    if (txt && txt.trim().length > 2) {
      const cars = await searchCars(txt);
      setSuggestions(cars);
      setDisplay(true);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setDisplay(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className="relative">
      <div className="flex items-center md:max-w-md mx-auto relative">
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <Image
          src="/images/icons/search.svg"
          alt="search icon"
          width="24"
          height="24"
          className="absolute left-4"
        />
        <DebouncedInput onInputChange={getSuggestions} />
      </div>
      {display && suggestions.length > 0 && (
        <div
          ref={ref}
          className="w-full px-10 text-left absolute z-10 top-11 left-0"
        >
          <div className="bg-gray-200 border-gray-300 p-2 flex flex-col gap-2">
            {suggestions.map((suggestion) => (
              <SuggestionItem
                key={suggestion.id}
                suggestion={suggestion}
                onSelected={() => setDisplay(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
