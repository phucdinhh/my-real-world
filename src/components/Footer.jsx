import * as React from "react";
import {Link} from 'react-router-dom';

export const Footer = () => {
	return (
		<footer>
			<div class="container">
				<Link to="/" class="logo-font">
					conduit
				</Link>
				<span class="attribution">
					An interactive learning project from{" "}
					<Link to="https://thinkster.io">Thinkster</Link>. Code &amp; design
					licensed under MIT.
				</span>
			</div>
		</footer>
	);
};
