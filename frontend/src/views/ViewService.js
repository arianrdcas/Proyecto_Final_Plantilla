import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";

import Footer from "../components/Footer";

import Service from "./Service";
import StartNow from "./StarNow";
import { Link } from "react-router-dom";

const ViewService = () => {

  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (!store.isAuth) history.push("/");
    //actions.getProfile();
  }, []);

  return (
    <>
      {/*about-part start*/}
      <section className="about-part service-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>service</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/">home</Link>
                      <span>//</span>
                    </li>
                    <li>
                      <Link to="/service">service</Link>
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
      <Service />

      <StartNow />
      <Footer />
    </>
  );
};

export default ViewService;
