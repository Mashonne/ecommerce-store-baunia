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
        <div className="relative h-16 w-16 rounded-md overflow-hidden sm:h-20 sm:w-20">
          <Image
            fill
            src={data.images[0].url}
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="absolute z-10 right-0 top-0"></div>
          <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-black">{data.name}</p>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-gray-500">{data.color.name}</p>
              <p className="text-gray-500 ml-4 border-1 border-gray-200 pl-4">
                {data.size.name}
              </p>
            </div>
            <Currency value={data.price} />
          </div>
        </div>
      </li>
    </>
  );
};

export default SearchResult;
