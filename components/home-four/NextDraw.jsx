import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import tag from "/public/images/icon/btn/tag.png";

const renderer = ({ hours, minutes, seconds, days }) => {
  return (
    <>
      <div>
        <span>{days}</span>
        <p>d</p>
      </div>
      <div>
        <span>{hours}</span>
        <p>h</p>
      </div>
      <div>
        <span>{minutes}</span>
        <p>m</p>
      </div>
      <div>
        <span>{seconds}</span>
        <p>s</p>
      </div>
    </>
  );
};

const NextDraw = () => {
  return (
    <div className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="next-draw-area">
              <div className="left">
                <h3 className="title">NEXT DRAW</h3>
                <p>Choose Your Dream car Tickets</p>
              </div>
              <div className="middle">
                <p>Entries Close:</p>
                <div className="clock2">
                  <Countdown
                    date={Date.now() + 1000000000}
                    renderer={renderer}
                  />
                </div>
              </div>
              <div className="right">
                <Link
                  href="/contest"
                  className="cmn-btn style--three btn--sm d-flex align-items-center justify-content-center"
                >
                  <Image src={tag} alt="icon" className="mr-2" /> Buy Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextDraw;
