"use client";

import useSearchModal from "@/hooks/use-search-model";
import { BiSearch } from "react-icons/bi";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import SearchResult from "./search-result";

interface SearchProps {
  data: Product[];
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const searchModal = useSearchModal();

  const [IsMounted, setIsMounted] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) {
    return null;
  }

  const onToggle = () => {
    setIsExpand(!isExpand);
    setSearchQuery("");
  };

  return (
    <div
      className="
          hidden
          lg:block
          w-full 
          md:w-auto 
          rounded-full
          cursor-pointer
        "
    >
      <div
        className="
          text-sm 
          text-gray-600 
          flex 
          flex-row 
          items-center 
          gap-3
                    "
      >
        <input
          className={cn(
            `
             px-5 
             py-1 
             md:text-sm
             font-light 
             bg-white 
             outline-none
             transition
             duration-75
             disabled:opacity-70
             disabled:cursor-not-allowed`,
            isExpand ? "block" : "hidden"
          )}
          placeholder="Search.."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <div
          onClick={onToggle}
          className="
              p-2 
              bg-purple-500 
              rounded-full 
              text-white
            "
        >
          <BiSearch size={18} />
        </div>
      </div>

      {searchQuery !== "" ? (
        <ul onClick={onToggle} className="p-4 transition-all absolute w-1/3 border-[1px] flex flex-col bg-white rounded-md justify-center">
          {searchQuery !== ""
            ? data
                .filter((item) =>
                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((product) => (                
                  <SearchResult key={product.id} data={product} />
                ))
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
