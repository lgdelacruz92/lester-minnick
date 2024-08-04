"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const backdropVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
      ease: "easeIn",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: "out",
    },
  },
};

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function Modal({
  showModal,
  setShowModal,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    setShowModal(false);
  });
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          ref={modalRef}
          id="modal-item-123"
          className="fixed left-0 top-0 z-10 h-full w-full bg-black/40"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
