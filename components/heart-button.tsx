'use client'

import { MouseEventHandler, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps{
    productId: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    productId,
    onClick
}) => {
    const [hasFavored, setHasFavored] = useState(false);

    const toggleFavorite = () => {
        setHasFavored(!hasFavored)
    }
    return ( 
        <div 
            onClick={toggleFavorite}
            className="
                realtive 
                hover:opacity-80 
                transition 
                cursor-pointer
            "
        >
            <AiOutlineHeart 
                size={28}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart  
                size={24}             
                className={
                    hasFavored ? 'fill-red-500' : 'fill-neutral-500/70'
                }
            />
        </div>
     );
}
 
export default HeartButton;