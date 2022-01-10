import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav class="navbar navbar-light">
			<div class="container">
				<Link class="navbar-brand" to="index.html">
					conduit
				</Link>
				<ul class="nav navbar-nav pull-xs-right">
					<li class="nav-item">
						{/* <!-- Add "active" class when you're on that page" --> */}
						<Link class="nav-link active" to="">
							Home
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="">
							<i class="ion-compose"></i>&nbsp;New Article
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="">
							<i class="ion-gear-a"></i>&nbsp;Settings
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="">
							Sign in
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="">
							Sign up
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
