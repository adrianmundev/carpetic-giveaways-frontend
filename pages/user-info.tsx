import LeftSideMenu from "../components/common/LeftSideMenu";
import Info from "../components/user-info/Info";
import { withAuth } from "@/shared/hocs";

const UserInfo = withAuth()(() => {
  return (
    <>
      <div className="inner-hero-section style--five"></div>

      <div className="mt-minus-150 pb-120">
        <div className="container">
          <div className="row">
            {/* TODO: suer info */}
            <LeftSideMenu />

            {/* Personal details */}
            <Info />
          </div>
        </div>
      </div>
    </>
  );
});

export default UserInfo;
