import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails } from "../features/user/userAction";

export const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) dispatch(getUserDetails());
  }, [userToken, dispatch]);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* <!-- Add "active" class when you're on that page" --> */}
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="">
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>
          {userInfo ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="user-profile">
                  {userInfo.username}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Sign out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="sign-in">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sign-up">
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
