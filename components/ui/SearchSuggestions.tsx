"use client";

import Image from "next/image";
import { useDeferredValue, useEffect, useRef, useState } from "react";

import SuggestionItem from "@/components/ui/SuggestionItem";

import { Car } from "@/lib/types";
import { searchCars } from "@/lib/car/data";

const SearchSuggestions = () => {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const [suggestions, setSuggestions] = useState<Car[]>([]);
  const [display, setDisplay] = useState(false);
  const ref = useRef<HTMLDivElement>(null) ;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (deferredSearch && deferredSearch.trim().length > 2) {
        const cars = await searchCars(deferredSearch.trim());
        setSuggestions(cars);
        setDisplay(true);
      } else {
        setSuggestions([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [deferredSearch]);

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
        <input
          id="search"
          type="text"
          onChange={handleChange}
          onFocus={() => setDisplay(true)}
          placeholder="Search for your car..."
          className="block w-full rounded-full border-gray-300 pl-12 focus:border-gray-40 focus:ring-0 md:w-screen"
        />
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
                onClick={() => setDisplay(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
