import BuyLotteryTicketCard from "../cards/BuyLotteryTicketCard";
import QuickPick from "../quickPick/QuickPick";
import Lotteries from "./Lotteries";

const LotteryBody = () => {
  return (
    <section className="pb-120 mt-minus-300">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* All TIckets  */}
            <Lotteries />
          </div>

          <div className="col-lg-12 mt-50">
            {/* Buy lottery tickets */}
            <BuyLotteryTicketCard />
          </div>

          {/* Quick pick here */}
          <QuickPick />
        </div>
      </div>
    </section>
  );
};

export default LotteryBody;
