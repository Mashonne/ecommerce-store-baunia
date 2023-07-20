"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import HeartButton from "../heart-button";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  data 
}) => {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview :MouseEventHandler<HTMLButtonElement> = (event) =>{
    event.stopPropagation();

    previewModal.onOpen(data);
  }

  const onFavorite :MouseEventHandler<HTMLButtonElement> = (event) =>{
    event.stopPropagation();
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) =>{
    event.stopPropagation();

    cart.addItem(data, 1)
  }

  return (
    <div onClick={handleClick} className="bg-white group p-3 border rounded-xl cursor-pointer space-y-4">
      {/* Images and Actions */}
      <div
        className="
                    aspect-square 
                    w-full 
                    h-full               
                    relative 
                    overflow-hidden 
                    rounded-xl
                    bg-gray-100
                "
      >
        <Image
          fill
          alt="Image"
          src={data?.images?.[0]?.url}
          className="
                        object-cover
                        rounded-md
                        group-hover:scale-110
                        transition
                    "
        />
        <div className="absolute top-3 right-3">
          <HeartButton 
              productId={data.id} 
              onClick={onFavorite}
          />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-cneter">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-sm text-gray-500">{data.category?.name}</p>
          </div>
          {/* Price */}
          <div className="flex items-center justify-between">
            <Currency value={data?.price} />
          </div>
      </div>
    </div>
  );
};

export default ProductCard;
