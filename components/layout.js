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

      {children}

      {/* Footer section */}
      <Footer />

      {/* scroll-to-top start */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
