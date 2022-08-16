import React from "react";
import CardPricingTable from "./CardPricingTable";



const PricingTable = () =>{
    return (
        <>
            {/*pricing start */}
            <section id="pricing" className="pricing">
                <div className="container">
                <div className="pricing-details">
                    <div className="section-header text-center">
                    <h2 className="price-head">our pricing table</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="pricing-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <CardPricingTable
                                oferta= "Basic"
                                precio = "99"
                                periodo = "mensual"
                                user = "01 User"
                                project = "01 Project"
                                advisor = "01 Advisor Team"
                                estatistics = "Complete "
                                email = "Support"
                            />
                        </div>    
                        <div className="col-md-3 col-sm-6">
                            <CardPricingTable
                                oferta= "Standar"
                                precio = "299"
                                periodo = "Mensual"
                                user = "05 User"
                                project = "05 Project"
                                advisor = "05 Advisor Team"
                                estatistics = "Complete 2 "
                                email = "Support 2"
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CardPricingTable
                                oferta= "Advance"
                                precio = "499"
                                periodo = "Mensual"
                                user = "10 User"
                                project = "10 Project"
                                advisor = "10 Advisor Team"
                                estatistics = "Complete 3 "
                                email = "Support 3"
                            />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CardPricingTable
                                oferta= "Unlimited"
                                precio = "1099"
                                periodo = "Mensual"
                                user = "11 User"
                                project = "11 Project"
                                advisor = "11 Advisor Team"
                                estatistics = "Complete 4 "
                                email = "Support 4"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>  
            </section>
            </>

    )
}
export default PricingTable; 