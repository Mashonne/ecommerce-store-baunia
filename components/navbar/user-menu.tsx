"use client";

import { useCallback, useState } from "react";

import Avatar from "../avatar";
import MenuItem from "./menu-item";
import useRegisterModal from "@/hooks/use-register-model";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={toggleOpen}
            className="
                        p-4
                        md:py-1md:px-2
                        border=[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                    "
          >
            <Avatar />
          </div>
        </div>
        {isOpen && (
          <div
            className="
                absolute 
                rounded-xl 
                shadow-md
                w-[60vw]
                md:w-[15vw]
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm
            "
          >
            <div className="flex flex-col cursor-pointer">
              <>
                <MenuItem 
                  onClick={() => {}} 
                  label="Login" 
                />
                <MenuItem 
                  onClick={registerModal.onOpen} 
                  label="Sign up" 
                />
              </>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
