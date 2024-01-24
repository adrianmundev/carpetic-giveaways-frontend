import { LoginForm } from "@/components/modal/login/components/LoginForm";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleSignUpRedirect = () => {
    router.push("/sign-up");
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times"></i>
              </button>
              <h3 className="title">Welcome Back</h3>
              <div className="account-form-wrapper">
                <LoginForm />
                <p className="text-center mt-4">
                  Don&#39;t have an account?{" "}
                  <a
                    onClick={handleSignUpRedirect}
                    href="#"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                    Sign Up Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
