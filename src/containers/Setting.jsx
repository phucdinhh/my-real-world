import React from "react";

function Setting() {
	return (
		<div class="settings-page">
			<div class="container page">
				<div class="row">
					<div class="col-md-6 offset-md-3 col-xs-12">
						<h1 class="text-xs-center">Your Settings</h1>

						<form>
							<div>
								<div class="form-group">
									<input
										class="form-control"
										type="text"
										placeholder="URL of profile picture"
									/>
								</div>
								<div class="form-group">
									<input
										class="form-control form-control-lg"
										type="text"
										placeholder="Your Name"
									/>
								</div>
								<div class="form-group">
									<textarea
										class="form-control form-control-lg"
										rows="8"
										placeholder="Short bio about you"
									></textarea>
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
