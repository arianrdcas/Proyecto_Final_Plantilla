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
                  <h3>¿Quieres iniciar un nuevo proyecto con nosotros? ¡Empecemos!</h3>
                </div>
                {/* /.single-new-project*/}
              </div>
              {/* /.col*/}
              <div className="col-md-2 col-sm-4">
                <div className="single-new-project">
                  <Link to="/form" className="slide-btn">
                    Nuevo Proyecto
                  </Link>
                </div>

                <div className=" prueba single-new-project" style={{ marginTop: 25 }}>
                  <Link to="/verproyecto" className="slide-btn">
                    Ver Proyectos
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
