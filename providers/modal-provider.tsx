"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";
import RegisterModal from "@/components/modals/register-modal";

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
      <RegisterModal />
    </>
  );
};

export default ModalProvider;
