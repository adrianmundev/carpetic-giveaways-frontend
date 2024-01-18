import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import contestData from "../../data/contestData";
import ContestCard from "../cards/ContestCard";

import "slick-carousel/slick/slick.css";

const NextBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow prev" onClick={onClick}>
      <BsArrowLeft />
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow next" onClick={onClick}>
      <BsArrowRight />
    </button>
  );
};

const ContestSlider = () => {
  const setting = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 700,
    arrows: true,
    dots: false,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="contest-slider-section pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...setting} className="contest-slider">
              {contestData.map((itm, i) => (
                <div key={i} className="single">
                  {/* contest card here */}
                  <ContestCard itm={itm} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestSlider;
