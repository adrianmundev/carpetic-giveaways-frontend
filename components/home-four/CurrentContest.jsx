import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import contestData from "../../data/contestData";
import ContestCard from "../cards/ContestCard";
import contest_bg from "/public/images/bg/contest-bg.jpg";

//css
import "slick-carousel/slick/slick.css";

const NextBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow prev" onClick={onClick}>
      <i className="las la-long-arrow-alt-left"></i>
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow next" onClick={onClick}>
      <i className="las la-long-arrow-alt-right"></i>
    </button>
  );
};

const CurrentContest = () => {
  const settings = {
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
    <section className="position-relative pt-120 pb-120">
      <div className="bg-el">
        <Image src={contest_bg} alt="contest bg" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.3s"
          >
            <div className="section-header text-center">
              <span className="section-sub-title">
                Try your chance at winning
              </span>
              <h2 className="section-title">Current Contest</h2>
              <p>
                Participants buy tickets and lots are drawn to determine the
                winners.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="contest-slider style--two">
              {contestData.map((itm, i) => (
                <div key={itm.id} className="single">
                  <ContestCard itm={itm} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-lg-12">
            <div className="btn-grp">
              <Link href="/contest" className="btn-border">
                browse more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentContest;
