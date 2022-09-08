import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import StartNow from "./StarNow";
import { Link } from "react-router-dom";

const Project = () => {

  const { store } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (!store.isAuth) history.push("/");
    //actions.getProfile();
  }, []); 

  return (
    <>
    
      {/*about-part start*/}
      <section className="about-part project-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>project</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/">home</Link>
                      <span>//</span>
                    </li>
                    <li>
                      <Link to="/project">Proyecto</Link>
                    </li>
                  </ol>
                  {/*/.breadcrumb*/}
                </div>
                {/*/.container*/}
              </div>
              {/*/.breadcrumbs*/}
            </div>
            {/*/.about-part-content*/}
          </div>
          {/*/.about-part-details*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.about-part*/}
      {/*about-part end*/}
      <StartNow />
    </>
  );
};

export default Project;
