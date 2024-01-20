import { SignUpForm } from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="2"
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
              <h3 className="title">Create your account</h3>
              <div className="account-form-wrapper">
                <SignUpForm />
                <p className="text-center mt-4">
                  {" "}
                  Have an account?{" "}
                  <a
                    href="#0"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
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

export default SignUp;
