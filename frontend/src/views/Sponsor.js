import React from "react";
import { Link } from "react-router-dom";
import marca from "../assets/images/client/client1.png";
import marca2 from "../assets/images/client/client2.png";
import marca3 from "../assets/images/client/client3.png";
import marca4 from "../assets/images/client/client4.png";


const Sponsor = () =>{
    return (
        <>
            {/*clients start*/}
            <section className="clients">
                <div className="container">
                <div className="clients-area">
                    <div className="owl-carousel owl-theme" id="client">
                    <div className="item">
                        <Link to="#">
                        <img src={marca} alt="brand-image" />
                        </Link>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <Link to="#">
                        <img src={marca2} alt="brand-image" />
                        </Link>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <Link to="#">
                        <img src={marca3} alt="brand-image" />
                        </Link>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <Link to="#">
                        <img src={marca4} alt="brand-image" />
                        </Link>
                    </div>
                    {/*/.item*/}
                    <div className="item">
                        <Link to="#">
                        <img src="assets/images/client/client5.png" alt="brand-image" />
                        </Link>
                    </div>
                    {/*/.item*/}
                    </div>
                    {/*/.owl-carousel*/}
                </div>
                {/*/.clients-area*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.clients*/}
            {/*clients end*/}
            </>

    )
}
export default Sponsor; 