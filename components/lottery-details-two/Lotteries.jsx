import { useContext } from "react";
import { AppContext } from "../../context/context";
import SingleLotteryCardTwo from "../cards/SingleLotteryCardTwo";
import Actions from "./Actions";

const Lotteries = () => {
  const { addTicketsTwo, lotterisTwo } = useContext(AppContext);

  return (
    <div className="lottery-wrapper style--two">
      {/* Actions Here */}
      <Actions />

      <div className="row mt-50 mb-none-30">
        {lotterisTwo.map((itm, i) => (
          <div key={itm.id} className="col-lg-6 mb-30">
            {/* single lottey here */}
            <SingleLotteryCardTwo itm={itm} i={i} />
          </div>
        ))}
      </div>
      <div className="lottery-wrapper__btn">
        <button
          type="button"
          className="btn-border text-white bg-transparent"
          onClick={addTicketsTwo}
        >
          Add Tickets
        </button>
      </div>
    </div>
  );
};

export default Lotteries;
