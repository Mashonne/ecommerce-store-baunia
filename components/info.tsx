"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler, useState } from "react";
import { cn } from "@/lib/utils";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = () => {
    cart.addItem(data, quantity);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex gap-4">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-black">Size:</h3>
            <div>{data?.size?.value}</div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-black">Color:</h3>
            <div
              className="h-6 w-6 rounded-full border border-gray-600"
              style={{ backgroundColor: data?.color?.value }}
            />
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <h3 className="font-semibold text-black">Qty:</h3>
            <input
              type="number"
              placeholder="Qty"
              min="1"
              onChange={(event) => setQuantity(Number(event.target.value))}
              onKeyDown={handleKeyDown}
              className={cn(
                "p-2 border-[2px] outline-none w-1/2 text-gray-900 text-sm rounded-lg",
                quantity > data.quantity ? "border-rose-500 text-rose-500" : "border-gray-300"
              )}
            />
          </div>
        </div>
      </div>
      {quantity > data.quantity ? (
        <div
          className="mt-10 p-3 font-semibold rounded-md bg-neutral-300 text-black"
        >
          No enough in Stock
        </div>
      ) : (
        <div className="mt-10 flex-items-center gap-x-3">
          <Button
            onClick={onAddToCart}
            className="flex items-center gap-x-2 text-white bg-black"
          >
            Add To Cart
            <ShoppingCart />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Info;
