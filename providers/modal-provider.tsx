"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";
import RegisterModal from "@/components/modals/register-modal";
import LoginModal from "@/components/modals/login-modal";
import SearchModal from "@/components/modals/search-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
      <SearchModal />
      <RegisterModal />
      <LoginModal />
    </>
  );
};

export default ModalProvider;
