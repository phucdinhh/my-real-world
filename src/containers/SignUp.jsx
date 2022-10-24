import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../features/user/userAction";

const SignUp = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate("/sign-in");
    if (userInfo) navigate("/user-profile");
  }, [navigate, success, userInfo]);

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("password missmath");
      return;
    }

    data.email = data.email.toLowerCase();
    dispatch(signUpUser(data));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="">Have an account?</Link>
            </p>

            {error && (
              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>
            )}

            <form onSubmit={handleSubmit(submitForm)}>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  {...register("username")}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  required
                />
              </div>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                disabled={loading}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
