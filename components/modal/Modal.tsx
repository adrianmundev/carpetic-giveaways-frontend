import { cn } from "@/shared/utils";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  disabled?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  contentContainerClass?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  disabled,
  children,
  contentContainerClass,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          tw-justify-center 
          tw-items-center 
          tw-flex 
          tw-overflow-x-hidden 
          tw-overflow-y-auto 
          tw-fixed 
          tw-inset-0 
          tw-z-50 
          tw-outline-none 
          tw-focus:tw-outline-none
          tw-bg-neutral-800/70
        "
      >
        <div
          className={cn(
            "tw-relative tw-max-w-96 tw-w-full tw-my-6 tw-mx-auto tw-h-auto",
            contentContainerClass,
          )}
        >
          {/*content*/}
          <div
            className={`
            tw-translate
            tw-duration-300
            tw-h-full
            ${showModal ? "tw-translate-y-0" : "tw-translate-y-full"}
            ${showModal ? "tw-opacity-100" : "tw-opacity-0"}
          `}
          >
            <div
              className="
              tw-translate
              tw-h-full
              tw-lg:tw-h-auto
              tw-md:tw-h-auto
              tw-border-0 
              tw-rounded-lg 
              tw-shadow-lg 
              tw-relative 
              tw-flex 
              tw-flex-col 
              tw-w-full 
              tw-bg-white 
              tw-outline-none 
              tw-focus:tw-outline-none
            "
            >
              <button
                className="
                    tw-p-1
                    tw-border-0 
                    tw-hover:tw-opacity-70
                    tw-transition
                    tw-absolute
                    tw-right-3
                    tw-top-3
                  "
                onClick={handleClose}
              >
                <IoMdClose size={20} />
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
