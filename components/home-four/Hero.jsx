import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VedioModal from "../vedioModal/VedioModal";
import hero_4_bike from "/public/images/elements/hero-4-bike.png";
import hero_4_car_left from "/public/images/elements/hero-4-car-left.png";
import hero_4_car_right from "/public/images/elements/hero-4-car-right.png";
import hero_4_circle from "/public/images/elements/hero-4-circle.png";
import hero_4_obj from "/public/images/elements/hero-4-obj.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VedioModal
        link="https://www.youtube.com/embed/d6xn5uflUjg"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section className="hero style--three">
        <div className="hero__circle">
          <Image src={hero_4_circle} alt="image" />
        </div>
        <div className="hero__obj">
          <Image src={hero_4_obj} alt="image" />
        </div>
        <div className="hero__car-left">
          <Image src={hero_4_car_left} alt="image" />
        </div>
        <div className="hero__bike">
          <Image src={hero_4_bike} alt="image" />
        </div>
        <div className="hero__car-right">
          <Image src={hero_4_car_right} alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="hero__content text-center">
                <div className="hero__subtitle">Try Your Luck!</div>
                <h2 className="hero__title">Win Your Dream Car</h2>
                <p>
                  Don&#39;t miss your chance.Will you be our next lucky winner?
                </p>
                <div className="hero__btn justify-content-center">
                  <Link href="/contest" className="cmn-btn">
                    Participate Now
                  </Link>
                  <button className="video-btn" onClick={() => setIsOpen(true)}>
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
