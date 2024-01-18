import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import contest_b2 from "/public/images/contest/b2.png";
import contest_s1 from "/public/images/contest/s1.png";

import "slick-carousel/slick/slick.css";

const NextBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow prev" onClick={onClick}>
      <i className="las la-angle-left"></i>
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow next" onClick={onClick}>
      <i className="las la-angle-right"></i>
    </button>
  );
};

const ContestSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="contest-details__slider-area">
          <Slider
            asNavFor={nav2}
            arrows={false}
            ref={(slider1) => setNav1(slider1)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((itm) => (
              <div key={itm} className="contest-details__thumb-slider">
                <div key={itm} className="single-slide">
                  <Image src={contest_b2} alt="contest b2" />
                </div>
              </div>
            ))}
          </Slider>

          <div>
            <Slider
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              {...settings}
              className="contest-details__nav-slider"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((itm) => (
                <div key={itm} className="single">
                  <div key={itm} className="single-slide">
                    <Image src={contest_s1} alt="contest s1" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestSlider;
