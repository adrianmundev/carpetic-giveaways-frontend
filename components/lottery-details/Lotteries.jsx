import { useContext } from "react";
import { AppContext } from "../../context/context";
import SingleLotteryCard from "../cards/SingleLotteryCard";

const Lotteries = () => {
  const { addTickets, lotteris } = useContext(AppContext);

  return (
    <div className="lottery-wrapper">
      <h2 className="lottery-wrapper__title">Choose your Tickets</h2>
      <p>
        Choose your 7 luckiest numbers by clicking ( 5 numbers + 2 Lucky Stars).
      </p>

      <div className="row mt-50 mb-none-30">
        {lotteris.map((itm) => (
          <div key={itm.id} className="col-lg-4 mb-30">
            {/* Single lottery  */}
            <SingleLotteryCard itm={itm} />
          </div>
        ))}
      </div>

      <div className="lottery-wrapper__btn">
        <button
          type="button"
          className="btn-border text-white bg-transparent"
          onClick={addTickets}
        >
          Add Tickets
        </button>
      </div>
    </div>
  );
};

export default Lotteries;
