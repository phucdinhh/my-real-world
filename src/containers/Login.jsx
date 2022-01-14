import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../actions/auth";

const Login = () => {
  let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const { isLoggedIn } = useSelector((state) => state.authReducer);
	const { message } = useSelector((state) => state.messageReducer);

	const dispatch = useDispatch();

	const handleLogin = async (e) => {
		e.preventDefault();

		setLoading(true);

		await dispatch(login(email, password))
			.then(() => {
        navigate("/");
				alert("thanh cong");
				window.location.reload();
			})
			.catch(() => {
				alert("that bai");
				setLoading(false);
			});

		if (isLoggedIn) {
			navigate("/");
		}
	};

	return (
		<div className="auth-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">Sign in</h1>
						<p className="text-xs-center">
							<Link to="/register">Need an account?</Link>
						</p>

						<form onSubmit={handleLogin}>
							<div className="form-group">
								<input
									className="form-control form-control-lg"
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<input
									className="form-control form-control-lg"
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<button
								className="btn btn-lg btn-primary pull-xs-right"
								disabled={loading}
							>
								{loading && (
									<span className="spinner-border spinner-border-sm"></span>
								)}
								Sign in
							</button>

							{message && (
								<div className="form-group">
									<div className="alert alert-danger" role="alert">
										{message}
									</div>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
