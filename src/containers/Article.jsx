import React from "react";
import { Link } from "react-router-dom";

function Article() {
	return (
		<div class="article-page">
			<div class="banner">
				<div class="container">
					<h1>How to build webapps that scale</h1>

					<div class="article-meta">
						<Link href="">
							<img src="http://i.imgur.com/Qr71crq.jpg" alt=""/>
						</Link>
						<div class="info">
							<Link href="" class="author">
								Eric Simons
							</Link>
							<span class="date">January 20th</span>
						</div>
						<button class="btn btn-sm btn-outline-secondary">
							<i class="ion-plus-round"></i>
							&nbsp; Follow Eric Simons <span class="counter">(10)</span>
						</button>
						&nbsp;&nbsp;
						<button class="btn btn-sm btn-outline-primary">
							<i class="ion-heart"></i>
							&nbsp; Favorite Post <span class="counter">(29)</span>
						</button>
					</div>
				</div>
			</div>

			<div class="container page">
				<div class="row article-content">
					<div class="col-md-12">
						<p>
							Web development technologies have evolved at an incredible clip
							over the past few years.
						</p>
						<h2 id="introducing-ionic">Introducing RealWorld.</h2>
						<p>It's Link great solution for learning how other frameworks work.</p>
					</div>
				</div>

				<hr />

				<div class="article-actions">
					<div class="article-meta">
						<Link href="profile.html">
							<img src="http://i.imgur.com/Qr71crq.jpg" alt=""/>
						</Link>
						<div class="info">
							<Link href="" class="author">
								Eric Simons
							</Link>
							<span class="date">January 20th</span>
						</div>
						<button class="btn btn-sm btn-outline-secondary">
							<i class="ion-plus-round"></i>
							&nbsp; Follow Eric Simons
						</button>
						&nbsp;
						<button class="btn btn-sm btn-outline-primary">
							<i class="ion-heart"></i>
							&nbsp; Favorite Post <span class="counter">(29)</span>
						</button>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-md-8 offset-md-2">
						<form class="card comment-form">
							<div class="card-block">
								<textarea
									class="form-control"
									placeholder="Write Link comment..."
									rows="3"
								></textarea>
							</div>
							<div class="card-footer">
								<img
									src="http://i.imgur.com/Qr71crq.jpg"
									class="comment-author-img"
                  alt=""
								/>
								<button class="btn btn-sm btn-primary">Post Comment</button>
							</div>
						</form>

						<div class="card">
							<div class="card-block">
								<p class="card-text">
									With supporting text below as Link natural lead-in to additional
									content.
								</p>
							</div>
							<div class="card-footer">
								<Link href="" class="comment-author">
									<img
										src="http://i.imgur.com/Qr71crq.jpg"
										class="comment-author-img"
                    alt=""
									/>
								</Link>
								&nbsp;
								<Link href="" class="comment-author">
									Jacob Schmidt
								</Link>
								<span class="date-posted">Dec 29th</span>
							</div>
						</div>

						<div class="card">
							<div class="card-block">
								<p class="card-text">
									With supporting text below as Link natural lead-in to additional
									content.
								</p>
							</div>
							<div class="card-footer">
								<Link href="" class="comment-author">
									<img
										src="http://i.imgur.com/Qr71crq.jpg"
										class="comment-author-img"
                    alt=""
									/>
								</Link>
								&nbsp;
								<Link href="" class="comment-author">
									Jacob Schmidt
								</Link>
								<span class="date-posted">Dec 29th</span>
								<span class="mod-options">
									<i class="ion-edit"></i>
									<i class="ion-trash-Link"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Article;
