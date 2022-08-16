import React from "react";


const CardWedo = (props) =>{
    return (
        <> 
            <div className="single-we-do-box text-center">
                        <div className="we-do-description">
                        <div className="we-do-info">
                            <div className="we-do-img">
                            <img
                                src={props.image}
                                alt="image of consultency"
                            />
                            </div>
                            {/*/.we-do-img*/}
                            <div className="we-do-topics">
                            <h2>
                                <a href="/#">{props.title}</a>
                            </h2>
                            </div>
                            {/*/.we-do-topics*/}
                        </div>
                        {/*/.we-do-info*/}
                        <div className="we-do-comment">
                            <p>
                                {props.descripcion}
                            </p>
                        </div>
                        {/*/.we-do-comment*/}
                        </div>
                        {/*/.we-do-description*/}
                    </div>
        </>
    )
}
export default CardWedo; 