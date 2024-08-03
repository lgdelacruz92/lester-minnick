"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import MobileIcon from "../icons/mobile-icon";
import EmailIcon from "../icons/email-icon";

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
          <div className="absolute left-[50%] top-[50%] flex translate-x-[-50%] flex-col rounded-lg bg-white p-4">
            <div className="text-center font-bold opacity-70">Contacts</div>
            <div className="flex flex-row items-center opacity-50">
              <span>
                <EmailIcon width="16" height="16" fill="var(--cui-gray)" />
              </span>
              <span className="ml-2">email: lgdelacruz92@gmail.com</span>
            </div>
            <div className="flex flex-row items-center opacity-50">
              <span>
                <MobileIcon width="16" height="16" fill="var(--cui-gray)" />
              </span>
              <span className="ml-2">phone: 805-319-8724</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
