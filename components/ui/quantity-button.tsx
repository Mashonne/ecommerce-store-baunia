import { BiPlus, BiMinus } from "react-icons/bi";

interface QuantityButtonProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  quantity,
  setQuantity,
}) => {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <button
        onClick={decrement}
        disabled={quantity < 2}
        className="p-1 outline-none border-[1px] rounded-md text-gray-900 text-sm"
      >
        {}
        <BiMinus size={20} />
      </button>
      <input
        placeholder="1"
        readOnly
        min="1"
        value={quantity}
        className="outline-none mx-5 w-6 text-lg text-gray-900 text-center"
      />
      <button
        onClick={increment}
        disabled={quantity > 9}
        className="p-1 outline-none border-[1px] rounded-md text-gray-900 text-sm"
      >
        {} <BiPlus size={20} />
      </button>
    </div>
  );
};

export default QuantityButton;
