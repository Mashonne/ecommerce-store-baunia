"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import { Product } from "@/types";

interface SearchResultProps {
  data: Product;
}

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <>
      <li
        onClick={handleClick}
        className="flex py-4 justify-between cursor-pointer"
      >
        <div className="relative h-12 w-12 rounded-md overflow-hidden">
          <Image
            fill
            src={data.images[0].url}
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="absolute z-10 right-0 top-0"></div>
          <div className="relative">
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-black">{data.name}</p>
            </div>     
          </div>
        </div>
      </li>
    </>
  );
};

export default SearchResult;
