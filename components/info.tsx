"use client";

import { ShoppingCart, Heart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler, useState } from "react";
import { cn } from "@/lib/utils";
import QuantityButton from "./ui/quantity-button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);

  const isQtyValid = quantity > data.quantity;

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
      <div className="flex flex-col md:flex-rowjustify-between">
        <div className="flex flex-col gap-y-6 p-2">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-black">Size:</h3>
            <div className="px-2 border-[1px] rounded-md">
              {data?.size?.value}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-black">Color:</h3>
            <div
              className="h-6 w-6 rounded-full border border-gray-600"
              style={{ backgroundColor: data?.color?.value }}
            />
          </div>
        </div>
        <div className="flex items-center py-2 gap-4">
          <h3 className="font-semibold text-black">Quantity: </h3>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
      {isQtyValid ? (
        <div className="mt-10 p-3 font-semibold rounded-md bg-neutral-300 text-black">
          No enough in Stock
        </div>
      ) : (
        <div className="mt-10 flex items-center gap-4 flex-col md:flex-row">
          <Button
            onClick={onAddToCart}
            className="flex w-full justify-center text-xl items-center gap-x-2 text-white rounded-md bg-black"
          >
            Add To Cart
            <ShoppingCart />
          </Button>
          <Button className="flex justify-center w-full text-xl  items-center gap-x-2 border-[2px] border-black text-black rounded-md bg-neutral-100">
            Favorite
            <Heart />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Info;
