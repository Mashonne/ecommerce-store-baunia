"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted){
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-4">
      <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-white px-4 py-2">
        <div className="relative py-2">
          <div className="bottom-5 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-purple-500 p-2 text-xs text-white">
              {cart.items.length}
            </p>
          </div>
          <ShoppingBag size={24} />
        </div>
      </Button>
    </div>
  );
};

export default NavbarActions;
