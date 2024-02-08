import React from "react";
import Modal from "@/components/modal/Modal";
import { useBasketModal } from "./hooks/useBasketModal";
import Image from "next/image";

export const BasketModal = () => {
  const { handleCloseModal, newBasketItem, openBasketModal, goToBasket } =
    useBasketModal();

  return (
    <Modal
      isOpen={openBasketModal}
      onClose={handleCloseModal}
      contentContainerClass="tw-max-w-2xl"
    >
      <div className="tw-p-6 tw-text-black tw-flex tw-flex-col tw-items-center">
        <h4 className="tw-text-inherit tw-w-full">Added to Basket</h4>
        <div className="tw-w-full tw-h-[1px] tw-bg-gray-400 mt-2 mb-5" />
        <div className="tw-w-full tw-flex tw-items-center tw-gap-5">
          <div className="tw-relative tw-w-[139px] tw-h-[92px]">
            <Image
              src={newBasketItem?.productThumbnail}
              alt="Product Thumbnail"
              fill
            />
          </div>
          <div className="tw-flex-1">
            <h6 className="tw-text-inherit tw-font-normal tw-text-sm md:tw-text-base">
              {newBasketItem?.productName}
            </h6>
            <p className="tw-text-gray-500 tw-font-normal">
              £{newBasketItem?.productPrice} x {newBasketItem?.quantity}
            </p>
          </div>
        </div>
        <button
          onClick={goToBasket}
          className="tw-w-full tw-bg-black tw-text-white tw-text-base tw-flex tw-justify-center tw-items-center tw-h-12 tw-uppercase disabled:tw-opacity-35 disabled:tw-cursor-not-allowed mt-2"
        >
          Go to Basket
        </button>
      </div>
    </Modal>
  );
};
