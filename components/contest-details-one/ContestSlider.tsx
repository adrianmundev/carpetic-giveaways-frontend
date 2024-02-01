import React, { useState } from "react";
import { Product } from "@/shared/types/product";
import Image from "next/image";
import Swiper, { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperSlide, Swiper as SwiperReact } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { cn } from "@/shared/utils";
import { FC } from "react";

interface IconCaretDownProps {
  className?: string;
}

const IconCaretDown: FC<IconCaretDownProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 9L12 15L5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ContestSlider = ({ product }: { product: Product }) => {
  const [realIndex, setRealIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const [topSwiper, setTopSwiper] = useState<Swiper | null>(null);
  const handleSlideChange = (swiper: Swiper) => {
    setRealIndex(swiper.realIndex);
  };
  const handleSwiperInit = (swiper: Swiper) => {
    setRealIndex(swiper.realIndex);
  };

  const handleNextSlide = () => {
    topSwiper?.slideNext();
  };
  const handlePrevSlide = () => {
    topSwiper?.slidePrev();
  };

  return (
    <React.Fragment>
      <SwiperReact
        onSwiper={setTopSwiper}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onInit={handleSwiperInit}
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        loop={true}
        navigation={false}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="tw-h-96 tw-w-full"
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="tw-relative tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center">
              <Image src={image.imageUrl} alt="product image" fill />
            </div>
          </SwiperSlide>
        ))}
      </SwiperReact>
      <div className="tw-relative tw-mt-7 tw-flex tw-w-full tw-items-center tw-gap-3">
        <div className="tw-flex tw-items-center tw-justify-center">
          <button
            onClick={handlePrevSlide}
            className="swiper-button-prev-ex5 tw-rounded-full tw-border   tw-p-1  tw-transition tw-border-primary tw-bg-primary tw-text-white"
          >
            <IconCaretDown className="tw-h-5 tw-w-5 tw-rotate-90 tw-rtl:tw--rotate-90" />
          </button>
        </div>
        <div className="swiper tw-w-full">
          <div className="swiper-wrapper">
            <SwiperReact
              onSwiper={setThumbsSwiper}
              modules={[Navigation, FreeMode, Thumbs]}
              navigation={{
                nextEl: ".swiper-button-next-ex5",
                prevEl: ".swiper-button-prev-ex5",
              }}
              freeMode={true}
              watchSlidesProgress={true}
              observer={true}
              observeParents={true}
              loop={true}
              spaceBetween={20}
              slidesPerView="auto"
            >
              {product.images.map((image, i) => {
                return (
                  <SwiperSlide
                    key={i}
                    className={cn(
                      "image-swiper-slide",
                      realIndex === i &&
                        "tw-border-2 tw-border-solid tw-border-primary",
                    )}
                  >
                    <div className="tw-relative tw-h-full tw-w-full">
                      <Image src={image.imageUrl} alt="itemImg" fill />
                    </div>
                  </SwiperSlide>
                );
              })}
            </SwiperReact>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-justify-center">
          <button
            onClick={handleNextSlide}
            className="swiper-button-next-ex5 tw-rounded-full tw-border tw-border-primary tw-p-1 tw-transition hover:tw-border-primary tw-bg-primary tw-text-white"
          >
            <IconCaretDown className="tw-h-5 tw-w-5 tw--rotate-90 tw-rtl:tw-rotate-90" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContestSlider;
