"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
          hidden
          lg:block
          w-full 
          md:w-auto 
          rounded-full
          hover:shadow-md 
          transition 
          cursor-pointer
        "
    >
      <div
        className="
                flex 
                flex-row 
                items-center 
                justify-between
                "
      >
        <div
          className="
          text-sm 
          p-2 
          text-gray-600 
          flex 
          flex-row 
          items-center 
          gap-3
                    "
        >
          <div
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
      </div>
    </div>
  );
};

export default Search;
