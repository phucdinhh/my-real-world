import React from "react";
import { Link } from "react-router-dom";

function Article() {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>

          <div className="article-meta">
            <Link href="">
              <img src="http://i.imgur.com/Qr71crq.jpg" alt="" />
            </Link>
            <div className="info">
              <Link href="" className="author">
                Eric Simons
              </Link>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>
              It's Link great solution for learning how other frameworks work.
            </p>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link href="profile.html">
              <img src="http://i.imgur.com/Qr71crq.jpg" alt="" />
            </Link>
            <div className="info">
              <Link href="" className="author">
                Eric Simons
              </Link>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  class="form-control"
                  placeholder="Write Link comment..."
                  rows="3"
                ></textarea>
              </div>
              <div className="card-footer">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                  alt=""
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as Link natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <Link href="" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    class="comment-author-img"
                    alt=""
                  />
                </Link>
                &nbsp;
                <Link href="" className="comment-author">
                  Jacob Schmidt
                </Link>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as Link natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <Link href="" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    class="comment-author-img"
                    alt=""
                  />
                </Link>
                &nbsp;
                <Link href="" className="comment-author">
                  Jacob Schmidt
                </Link>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-edit"></i>
                  <i className="ion-trash-Link"></i>
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
