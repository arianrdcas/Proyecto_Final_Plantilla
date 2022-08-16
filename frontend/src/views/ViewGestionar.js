import React from "react";

import HeaderStartAuthen from "../components/HeaderStartAuthen";
import MenuAuthen from "../components/MenuAuthen";
import ConsultGestAuthen from "./ConsultGestAuthen";
import Footer from "../components/Footer";


function ViewGestionar() {
    return (
        <>
            <HeaderStartAuthen/>
            <MenuAuthen/>
            <ConsultGestAuthen/>
            <Footer/>
        </>
    )
}

export default ViewGestionar;