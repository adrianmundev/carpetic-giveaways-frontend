import Footer from "./footer/Footer";
import Header from "./header/Header";
import Login from "./modal/login/Login";
import SignUp from "./modal/sign-up/SignUp";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* SignUp Modal */}
      <SignUp />

      {/* Login Modal */}
      <Login />

      {/* Header section */}
      <Header />

      {children}

      {/* Footer section */}
      <Footer />

      {/* scroll-to-top start */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
