import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../../context/context";

const SingleLotteryCard = ({ itm }) => {
  const { removeTicket, pickNumbr, luckyNumbr, checkActive } =
    useContext(AppContext);
  return (
    <div className="lottery-single">
      <button
        className="lottery-single__close"
        onClick={() => removeTicket(itm.id)}
      >
        <FaTimes />
      </button>
      <div className="lottery-single__header">
        <span className="titcket-number">Ticket #1</span>
        <ul className="lottery-single__selected-number">
          {[...Array(7)].map((_, i) => (
            <li key={i} className={itm.ticket[i] ? "active" : ""}>
              {itm.ticket[i] || "00"}
            </li>
          ))}
        </ul>
      </div>
      <div className="lottery-single__body">
        <ul className="lottery-single__number">
          {[...Array(50)].map((_, i) => (
            <li
              key={i}
              onClick={(e) => pickNumbr(e, itm.id)}
              className={`${itm.ticket.length >= 5 ? "pe-none" : ""} 
                                  ${
                                    checkActive(itm.id, i + 1, 0, 5)
                                      ? "active"
                                      : ""
                                  }
                                  `}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
      <div className="lottery-single__footer">
        <ul className="lottery-single__number">
          {[...Array(10)].map((_, i) => (
            <li
              key={i}
              onClick={(e) => luckyNumbr(e, itm.id)}
              className={`${
                itm.ticket.length >= 7 || itm.ticket.length < 5 ? "pe-none" : ""
              }  ${checkActive(itm.id, i + 1, 5) ? "active" : ""}`}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleLotteryCard;
