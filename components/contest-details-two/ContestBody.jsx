import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContestCard from "./ContestCard";
import ContestSlider from "./ContestSlider";
import Details from "./Details";

const ContestBody = () => {
  return (
    <section className="pb-120 mt-minus-300">
      <div className="container">
        {/* Contest slider  */}
        <ContestSlider />

        <div className="row mt-50 pt-3">
          {/* contest details here */}
          <Details />

          <div className="col-lg-4 mt-lg-0 mt-5">
            <div className="contest-sidebar">
              {/* Contest card here */}
              <ContestCard />

              <ul className="social-links align-items-center">
                <li>Share :</li>
                <li>
                  <Link href="/#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestBody;
