import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VedioModal from "../vedioModal/VedioModal";
import car_main from "/public/images/elements/car-main.png";
import hero_2_car from "/public/images/elements/hero-2-car.png";
import hero_2_e1 from "/public/images/elements/hero-2-e1.png";
import hero_2_e2 from "/public/images/elements/hero-2-e2.png";
import hero_2_e3 from "/public/images/elements/hero-2-e3.png";
import hero_2_e4 from "/public/images/elements/hero-2-e4.png";
import hero_2_e5 from "/public/images/elements/hero-2-e5.png";
import hero_2_girl from "/public/images/elements/hero-2-girl.png";
import hero_2_star from "/public/images/elements/hero-2-star.png";
import round_shape_3 from "/public/images/elements/round-shape-3.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VedioModal
        link="https://www.youtube.com/embed/d6xn5uflUjg"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <section className="hero style--two bg_img">
        <div className="hero__shape">
          <Image src={round_shape_3} alt="round shape 3" />
        </div>
        <div className="hero-e1">
          <Image src={hero_2_e1} alt="image" />
        </div>
        <div className="hero-e2">
          <Image src={hero_2_e2} alt="image" />
        </div>
        <div className="hero-e3">
          <Image src={hero_2_e3} alt="image" />
        </div>
        <div className="hero-e4">
          <Image src={hero_2_e4} alt="image" />
        </div>
        <div className="hero-e5">
          <Image src={hero_2_e5} alt="image" />
        </div>

        <div className="hero-car">
          <div className="el-car">
            <Image src={hero_2_car} alt="image" />
          </div>
          <div className="el-girl">
            <Image src={hero_2_girl} alt="image" />
          </div>
          <div className="el-star">
            <Image src={hero_2_star} alt="image" />
          </div>
          <div className="el-star-2">
            <Image src={hero_2_star} alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-lg-8 col-md-10">
              <div className="hero__content">
                <div className="hero__subtitle">play anytime, any where</div>
                <h2 className="hero__title">Dream Big Play Small</h2>
                <p>
                  Don&#39;t miss your chance.Will you be our next lucky winner?
                </p>
                <div className="hero__btn">
                  <Link href="/contest" className="cmn-btn">
                    Participate Now
                  </Link>
                  <button className="video-btn" onClick={() => setIsOpen(true)}>
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero__thumb">
                <Image src={car_main} alt="car main" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
