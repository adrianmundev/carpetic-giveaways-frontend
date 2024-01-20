import { setInitializing, setUser } from "@/redux/slices/auth/auth.slice";
import { isInitializingSelector } from "@/redux/slices/auth/selectors";
import { CircleLoader } from "@/shared/components/circle-loader/CircleLoader";
import { authService } from "@/shared/services";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type SessionContainerTypeProps = {
  children: React.ReactNode;
};

export const SessionContainer: React.FC<SessionContainerTypeProps> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const isInitializing = useSelector(isInitializingSelector);

  useEffect(() => {
    authService
      .fetchUserSession()
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(setInitializing(false));
      });
  }, []);

  if (isInitializing) {
    return (
      <div className="tw-min-h-[100vh] tw-w-full tw-grid tw-items-center tw-justify-center">
        <CircleLoader />
      </div>
    );
  }

  return <>{children}</>;
};
