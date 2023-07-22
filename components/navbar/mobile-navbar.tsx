"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LuAlignLeft, LuUser } from "react-icons/lu";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Category } from "@/types";
import useLoginModal from "@/hooks/use-login-model";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

interface MobileNavbarProps {
  data: Category[];
  currentUser?: SafeUser | null;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ data, currentUser }) => {
  const [open, setOpen] = useState(false);
  const loginModal = useLoginModal();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden text-black"
      >
        <LuAlignLeft size={20} />
      </Button>
      <Transition show={open} appear as={Fragment}>
        <Dialog
          open={open}
          as="div"
          className="relative z-40 lg:hidden ease-in-out duration-300"
          onClose={onClose}
        >
          {/* Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={onClose}
          />

          {/* Dialog position */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out-quint duration-700"
              enterFrom="opacity-0 w-0"
              enterTo="opacity-100 w-full"
              leave="transition-all ease-in-out-quint duration-700"
              leaveFrom="opacity-100 w-full"
              leaveTo="opacity-0 w-0"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs gap-1 flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl bg-opacity-70">
                {/* Close Button */}
                <div className="flex items-center justify-end px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>

                {/* Render the Routes */}
                <div className="flex flex-col justify-between h-full">
                  <div className="pt-2 flex flex-col justify-end">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "px-5 py-4 border-b-[1px] bg-purple-400 text-white hover:bg-purple-300 transition-colors",
                          route.active ? "bg-purple-300" : "bg-purple-400"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                  {currentUser?.name ? (
                    <div>
                      <div
                        className="
                      px-5 py-4 
                      flex
                      gap-2
                      bg-black 
                      text-white 
                      cursor-pointer
                      hover:bg-neutral-400
                      border-b-[1px]
                      "
                      >
                        <LuUser size={20} />
                        <label>Hi! {currentUser?.name}</label>
                      </div>
                      <div
                        onClick={() => signOut()}
                        className="
                      px-5 py-4 
                      flex
                      gap-3
                      bg-black 
                      text-white 
                      cursor-pointer
                      hover:bg-neutral-400
                      "
                      >
                        <AiOutlinePoweroff size={20} />
                        <label>Logout</label>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => loginModal.onOpen()}
                      className="
                    px-5 py-4 
                    flex
                    gap-3
                    bg-black 
                    text-white 
                    cursor-pointer
                    hover:bg-neutral-400
                    "
                    >
                      <LuUser size={20} />
                      <label>Login/Signup</label>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNavbar;
