import {
  isAuthenticatedSelector,
  isInitializingSelector,
  userSelector,
} from "@/redux/slices/auth/selectors";
import { useRouter } from "next/router";
import React, { ComponentType, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { CircleLoader } from "../components/circle-loader/CircleLoader";

export interface WithAuthHocParamsInterface {
  redirect?: boolean;
  redirectTo?: string;
  redirectIfAuthenticated?: boolean;
}

export function withAuth<Props>({
  redirect = true,
  redirectTo,
  redirectIfAuthenticated = false,
}: WithAuthHocParamsInterface = {}): (
  WrappedComponent: ComponentType<Props>,
) => ComponentType<Props> {
  const realRedirectTo = redirectTo || (redirectIfAuthenticated ? "/" : "/");

  return (WrappedComponent: ComponentType<Props>): ComponentType<Props> => {
    const WithAuth = (props: Props) => {
      const router = useRouter();
      const user = useSelector(userSelector);
      const isInitializing = useSelector(isInitializingSelector);
      const isAuthenticated = useSelector(isAuthenticatedSelector);

      const shouldRedirect = useMemo(
        // we need both access isAuthenticated and user to consider current session as authenticated
        () =>
          !isInitializing &&
          Boolean(redirectIfAuthenticated) === Boolean(isAuthenticated && user),
        [isInitializing, user, isAuthenticated],
      );

      useEffect(() => {
        // redirect only after first session load
        if (redirect && shouldRedirect) {
          void router.replace(realRedirectTo);
        }
      }, [shouldRedirect, router]);

      // only show loader when initializing session (first time)
      if (isInitializing || shouldRedirect) {
        return (
          <div className="tw-grid tw-flex-1 tw-place-items-center">
            <CircleLoader />
          </div>
        );
      }

      return <WrappedComponent {...props} />;
    };
    return WithAuth;
  };
}
