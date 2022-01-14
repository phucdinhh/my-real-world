import React from "react";

const Setting = () => {
	return (
		<div className="settings-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">Your Settings</h1>

						<form>
							<div>
								<div className="form-group">
									<input
										className="form-control"
										type="text"
										placeholder="URL of profile picture"
									/>
								</div>
								<div className="form-group">
									<input
										className="form-control form-control-lg"
										type="text"
										placeholder="Your Name"
									/>
								</div>
								<div className="form-group">
									<textarea
										className="form-control form-control-lg"
										rows="8"
										placeholder="Short bio about you"
									></textarea>
								</div>
								<div className="form-group">
									<input
										className="form-control form-control-lg"
										type="text"
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<input
										className="form-control form-control-lg"
										type="password"
										placeholder="Password"
									/>
								</div>
								<button className="btn btn-lg btn-primary pull-xs-right">
									Update Settings
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Setting;
