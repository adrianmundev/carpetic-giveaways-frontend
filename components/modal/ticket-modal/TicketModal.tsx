import React, { ButtonHTMLAttributes } from "react";
import Modal from "@/components/modal/Modal";
import { useTicketModal } from "./hooks";
import { CircleLoader } from "@/shared/components/circle-loader/CircleLoader";
import { cn } from "@/shared/utils";

const TicketButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="tw-w-14 tw-h-9 tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-rounded-md"
    >
      <span className="tw-font-normal tw-inline-block tw-text-lg tw-leading-6 tw-text-black">
        {children}
      </span>
    </button>
  );
};

export const TicketModal = () => {
  const {
    ticketLoading,
    openTickeModal,
    product,
    question,
    countDown,
    quantity,
    quantityInput,
    questionAnswerId,
    calculatedPrice,
    handleAddToBasketClick,
    handleDecreamentQuantity,
    handleCloseModal,
    handleIncrementQuantity,
    handleSetMaxQuantity,
    handleQuantityChange,
    handleQuestionChange,
  } = useTicketModal();

  if (ticketLoading) {
    return (
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
        <CircleLoader />
      </div>
    );
  }

  if (!product || !question) {
    return null;
  }

  const isBasketBtnDisabled =
    !questionAnswerId ||
    quantity > product.maxTicketsPerPerson ||
    quantityInput.length === 0;

  return (
    <Modal isOpen={openTickeModal} onClose={handleCloseModal}>
      <div className="tw-p-4 tw-text-black tw-flex tw-flex-col tw-items-center">
        <div className="tw-w-2 tw-h-6" />
        <div className="tw-text-xl tw-text-center">
          Select number of tickets
        </div>
        <div className="tw-flex tw-flex-row tw-items-center my-4 mb-0">
          <div
            onClick={handleDecreamentQuantity(1)}
            role="button"
            className={cn(
              "minus-btn operator-btn",
              quantity === 1 && "tw-cursor-default tw-pointer-events-none",
            )}
          />
          <input
            type="text"
            onChange={handleQuantityChange}
            value={quantityInput}
            className="ticket-input"
          />
          <div
            onClick={handleIncrementQuantity(1)}
            role="button"
            className={cn(
              "operator-btn plus-btn",
              quantity === product.maxTicketsPerPerson &&
                "tw-cursor-default tw-pointer-events-none",
            )}
          />
        </div>
        <div className="tw-text-sm tw-text-gray-400 my-3 mt-1">
          Max {product.maxTicketsPerPerson} pp
        </div>
        <div className="tw-flex tw-flex-row tw-items-center tw-gap-2">
          <TicketButton onClick={handleIncrementQuantity(5)}>+5</TicketButton>
          <TicketButton onClick={handleIncrementQuantity(10)}>+10</TicketButton>
          <TicketButton onClick={handleIncrementQuantity(25)}>+25</TicketButton>
          <TicketButton
            onClick={handleSetMaxQuantity(product.maxTicketsPerPerson)}
          >
            Max
          </TicketButton>
        </div>

        <div className="tw-w-full my-3 mb-1">
          <label className="tw-text-sm tw-text-gray-500 tw-font-normal">
            {question.question}
          </label>
          <select
            value={questionAnswerId}
            defaultValue=""
            onChange={handleQuestionChange}
            className="tw-border-black tw-text-base tw-text-black tw-bg-white"
          >
            <option className="tw-bg-white" value="">
              Select answer
            </option>
            {question.answers.map((answer) => (
              <option className="tw-bg-white" key={answer.id} value={answer.id}>
                {answer.answer}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddToBasketClick}
          disabled={isBasketBtnDisabled}
          className="tw-w-full tw-bg-black tw-text-white tw-text-base tw-flex tw-justify-center tw-items-center tw-h-12 tw-uppercase disabled:tw-opacity-35 disabled:tw-cursor-not-allowed"
        >
          Add to basket • £{calculatedPrice}
        </button>
        <div className="tw-text-Accent my-2">
          <span className="tw-text-inherit">
            Closing in {countDown.days}d {countDown.hours}h {countDown.minutes}m{" "}
            {countDown.seconds}s
          </span>
        </div>
      </div>
    </Modal>
  );
};
