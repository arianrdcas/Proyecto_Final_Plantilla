import React from "react";
import conter1 from "../assets/images/counter/counter1.png";
import conter2 from "../assets/images/counter/counter2.png";
import conter3 from "../assets/images/counter/counter3.png";
import conter4 from "../assets/images/counter/counter4.png";

const Estadistica = () =>{
    return (
        <>
                {/*statistics start*/}
                <section className="statistics">
                <div className="container">
                    <div className="statistics-counter ">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                        <div className="statistics-img">
                            <img
                            src={conter1}
                            alt="counter-icon"
                            />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                            <div className="counter">2556</div>
                            <h3>days worked</h3>
                        </div>
                        {/*/.statistics-content*/}
                        </div>
                        {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                        <div className="statistics-img">
                            <img
                            src={conter2}
                            alt="counter-icon"
                            />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                            <div className="counter">326</div>
                            <h3>project finished</h3>
                        </div>
                        {/*/.statistics-content*/}
                        </div>
                        {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                        <div className="statistics-img">
                            <img
                            src={conter3}
                            alt="counter-icon"
                            />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                            <div className="counter">1526</div>
                            <h3>coffee cup</h3>
                        </div>
                        {/*/.statistics-content*/}
                        </div>
                        {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-md-3 col-sm-6">
                        <div className="single-ststistics-box">
                        <div className="statistics-img">
                            <img
                            src={conter4}
                            alt="counter-icon"
                            />
                        </div>
                        {/*/.statistics-img*/}
                        <div className="statistics-content">
                            <div className="counter">856</div>
                            <h3>client satisfied</h3>
                        </div>
                        {/*/.statistics-content*/}
                        </div>
                        {/*/.single-ststistics-box*/}
                    </div>
                    {/*/.col*/}
                    </div>
                    {/*/.statistics-counter*/}
                </div>
                {/*/.container*/}
                </section>
                {/*/.statistics*/}
                {/*statistics end*/}
            </>
    )
}
export default Estadistica; 