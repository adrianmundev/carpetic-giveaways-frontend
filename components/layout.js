import Footer from "./footer/Footer";
import Header from "./header/Header";
import Login from "./modal/login/Login";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* Login Modal */}
      <Login />

      {/* Header section */}
      <Header />

      <div className="tw-grid tw-min-h-[calc(100vh-70px)]">{children}</div>

      {/* Footer section */}
      <Footer />

      {/* scroll-to-top start */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
