import { FaRegEdit } from "react-icons/fa";
import {
  EmailAddress,
  PersonalDetails,
  PhoneNumber,
} from "@/components/user-info/components";

const Info = () => {
  return (
    <div className="col-lg-8 mt-lg-0 mt-5">
      <PersonalDetails />
      {/* <div className="user-info-card">
        <div className="user-info-card__header">
          <h3 className="user-info-card__title">Account Settings</h3>
          <button type="button" className="d-flex align-items-start gap-1">
            <FaRegEdit className="fs-4" /> Edit
          </button>
        </div>
        <ul className="user-info-card__list">
          <li>
            <span className="caption">Language</span>
            <span className="value">English (United States)</span>
          </li>
          <li>
            <span className="caption">Time Zone</span>
            <span className="value">(GMT-06:00) Central America</span>
          </li>
          <li>
            <span className="caption">Status</span>
            <span className="value status-active">Active</span>
          </li>
        </ul>
      </div> */}
      <EmailAddress />
      <PhoneNumber />
      <div className="user-info-card">
        <div className="user-info-card__header">
          <h3 className="user-info-card__title">Security</h3>
          <button type="button" className="d-flex align-items-start gap-1">
            <FaRegEdit className="fs-4" /> Edit
          </button>
        </div>
        <ul className="user-info-card__list">
          <li>
            <span className="caption">Password</span>
            <span className="value user-password">***************</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
