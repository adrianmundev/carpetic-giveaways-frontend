/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import team_obj from "/public/images/elements/team-obj.png";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "@/redux/slices/auth/selectors";
import { toast } from "react-toastify";
import { transformError } from "@/shared/utils";
import { authService } from "@/shared/services";
import { logoutUser, updateUser } from "@/redux/slices/auth/auth.slice";
import { CircleLoader } from "@/shared/components/circle-loader/CircleLoader";
import React, { useState } from "react";
import { userService } from "@/shared/services/user.service";

const LeftSideMenu = () => {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logoutUser());
      router.replace("/");
    } catch (error) {
      toast.error(transformError(error).message);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("avatar", file);
      const updatedUser = await userService.uploadProfilePicture(formData);
      dispatch(updateUser(updatedUser));
    } catch (error) {
      toast.error(transformError(error).message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <React.Fragment>
      {isUploading && (
        <div className="tw-fixed tw-left-0 tw-right-0 tw-bottom-0 tw-top-0 tw-bg-white tw-opacity-60 tw-z-50 tw-grid tw-items-center tw-justify-center">
          <CircleLoader />
        </div>
      )}
      <div className="col-lg-4">
        <div className="user-card">
          <div className="avatar-upload">
            <div className="obj-el">
              <img src={team_obj.src} alt="team obj" width={220} height={220} />
            </div>
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                onChange={handleUpload}
              />
              <label htmlFor="imageUpload"></label>
            </div>

            {user?.avatar ? (
              <div
                style={{ backgroundImage: `url(${user.avatar})` }}
                className="user-avatar"
              />
            ) : (
              <div className="avatar-preview">
                <div id="imagePreview"></div>
              </div>
            )}
          </div>
          <h3 className="user-card__name">
            {user?.firstName} {user?.lastName}
          </h3>
          <span className="user-card__id">ID : 19535909</span>
        </div>
        <div className="user-action-card">
          <ul className="user-action-list">
            {[
              ["My Tickets", "/user"],
              ["Personal Information", "/user-info"],
              ["Transactions", "/user-transaction"],
              ["Referral Program", "/user-referral"],
              ["Favorite Lotteries", "/user-lottery"],
              ["Help Center", "/contact"],
            ].map(([item, url], i) => (
              <li
                key={item}
                className={`${router.pathname === url && "active"} `}
              >
                <Link href={url}>
                  {item}
                  {i === 0 ? <span className="badge">04</span> : ""}
                </Link>
              </li>
            ))}
            <li onClick={handleLogout}>
              <Link href="/#">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftSideMenu;
