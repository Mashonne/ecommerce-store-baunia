"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import UpdateQuantity from "@/components/ui/update-quantity";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      const updatedQuantity = items.map((item) => UpdateQuantity(item));
      updatedQuantity.forEach((item) => {
        axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/products/${item.id}`, 
        item)
      })
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll, items]);



  const totalPrice = items.reduce((total, item) => {

    const quantity = item.cartQuantity ? item.cartQuantity : 1

    return (total + Number(item.price))*quantity
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
         <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6 bg-black text-white">
        Checkout
      </Button>
    </div>
  );
}
 
export default Summary;