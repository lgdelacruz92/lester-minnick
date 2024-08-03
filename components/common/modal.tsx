"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ showModal, setShowModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    setShowModal(false);
  });
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdropVariants}
          animate="visible"
          exit="opacity"
          ref={modalRef}
          id="modal-item-123"
          className="fixed left-0 top-0 h-full w-full bg-black/40"
        >
          <div className="bg-white">Hello world</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
