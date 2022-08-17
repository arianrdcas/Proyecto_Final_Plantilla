import React from "react";
import { Link } from "react-router-dom";

const StartNow = () => {
  return (
    <>
      {/* new-project start */}
      <section id="new-project" className="new-project">
        <div className="container">
          <div className="new-project-details">
            <div className="row">
              <div className="col-md-10 col-sm-8">
                <div className="single-new-project">
                  <h3>Want to start a new project with us? Let’s Start!</h3>
                </div>
                {/* /.single-new-project*/}
              </div>
              {/* /.col*/}
              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <Link to="/form" className="slide-btn">
                    start now
                  </Link>
                </div>
                {/* /.single-new-project*/}
              </div>
              {/* /.col*/}
            </div>
            {/* /.row*/}
          </div>
          {/* /.new-project-details*/}
        </div>
        {/* /.container*/}
      </section>
      {/* /.new-project*/}
      {/* new-project end */}
    </>
  );
};
export default StartNow;
