import React from "react";

const ConsultGestAuthen = () =>{

    /* let user = JSON.parse(localStorage.getItem('user-info'))

    const goToservice= () =>{
        //console.log("estoy en service");
        localStorage.clear();
        window.location.href = '/gservice';
    }

    const goToproyecto = () => {
        //console.log("estoy en proyecto");
        localStorage.clear();
        window.location.href = '/gproyecto';
    }
 */
    return (
        <>
        {/* header-slider-area start */}
        <section className="header-slider-area">
            <div
            id="carousel-example-generic"
            className="carousel slide carousel-fade"
            data-ride="carousel"
            >
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li
                data-target="#carousel-example-generic"
                data-slide-to={0}
                className="active"
                />
                <li data-target="#carousel-example-generic" data-slide-to={1} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                <div className="single-slide-item slide-1">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="single-slide-item-content">
                            <h2>
                            Bienvenido <br /> 
                            </h2>
                            <p>
                                En esta sesión puedes gestionar los servicios y proyectos.
                            </p>
                        </div>
                        {/* /.single-slide-item-content*/}
                        </div>
                        {/* /.col*/}
                    </div>
                    {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </div>
                {/* /.single-slide-item*/}
                </div>
                {/* /.item .active*/}
                <div className="item">
                <div className="single-slide-item slide-2">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="single-slide-item-content">
                            <h2>
                            Bienvenido<br /> 
                            </h2>
                            <p>
                            En esta sesión puedes gestionar nuestros servicios y proyectos.
                            </p>
                            <button type="button" className="slide-btn">
                            Servicios
                            </button>
                            <button
                            type="button"
                            className="slide-btn"
                            >
                            Proyectos
                            </button>
                        </div>
                        {/* /.single-slide-item-content*/}
                        </div>
                        {/* /.col*/}
                    </div>
                    {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </div>
                {/* /.single-slide-item*/}
                </div>
                {/* /.item .active*/}
            </div>
            {/* /.carousel-inner*/}
            {/* Controls */}
            <a
                className="left carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="prev"
            >
                <span className="lnr lnr-chevron-left" />
            </a>
            <a
                className="right carousel-control"
                href="#carousel-example-generic"
                role="button"
                data-slide="next"
            >
                <span className="lnr lnr-chevron-right" />
            </a>
            </div>
            {/* /.carousel*/}
        </section>
        {/* /.header-slider-area*/}
        {/* header-slider-area end */}
        </>

    )
}
export default ConsultGestAuthen; 