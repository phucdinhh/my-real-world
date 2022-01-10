import React from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div class="auth-page">
			<div class="container page">
				<div class="row">
					<div class="col-md-6 offset-md-3 col-xs-12">
						<h1 class="text-xs-center">Sign up</h1>
						<p class="text-xs-center">
							<Link to="">Have an account?</Link>
						</p>

						<ul class="error-messages">
							<li>That email is already taken</li>
						</ul>

						<form>
							<div class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									placeholder="Your Name"
								/>
							</div>
							<div class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									placeholder="Email"
								/>
							</div>
							<div class="form-group">
								<input
									class="form-control form-control-lg"
									type="password"
									placeholder="Password"
								/>
							</div>
							<button class="btn btn-lg btn-primary pull-xs-right">
								Sign up
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
