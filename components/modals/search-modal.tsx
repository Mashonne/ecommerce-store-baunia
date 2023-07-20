"use client";

import useSearchModal from "@/hooks/use-search-model";

import Modal from "@/components/ui/modal";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const SearchModal = () => {
  const searchModal = useSearchModal();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Modal open={searchModal.isOpen} onClose={searchModal.onClose}>
      <div className="p-2 w-full">
        <div className="px-3 py-2 border-[1px] flex rounded-full">
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="
                            px-5 
                            py-1 
                            w-full 
                            font-light 
                            bg-white 
                            outline-none
                            transition
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                        "
            placeholder="Search.."
          />
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

    </Modal>
  );
};

export default SearchModal;
