"use client";

import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

import Avatar from "../avatar";
import MenuItem from "./menu-item";
import { User } from "@prisma/client";

import useRegisterModal from "@/hooks/use-register-model";
import useLoginModal from "@/hooks/use-login-model";

import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="flex flex-row items-center gap-2">
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
            <Avatar src={currentUser?.image}/>
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
              {currentUser ? (
                <>
                  <MenuItem onClick={() => {}} label="My favorites" />
                  <MenuItem onClick={() => {}} label="Watchlist" />
                  <hr />
                  <MenuItem onClick={() => signOut()} label="Logout" />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label="Login" />
                  <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
