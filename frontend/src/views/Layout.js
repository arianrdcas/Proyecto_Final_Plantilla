import React from "react";
import HeaderStart from "../components/HeaderStart";
import Menu from "../components/Menu";
import Consult from "./Consult";
import WeDo from "./WeDo";
import About from "./About";
import Services from "./Service";
import Estadistica from "./Estadistica";
import FinishProject from "./FinishProject";
import Team from "./Team";
import PricingTable from "./PricingTable";
import Client from "./Client";
import Sponsor from "./Sponsor";
import News from "./News";
import ContacUs from "./ContactUs";
import StartNow from "./StarNow";
import Footer from "../components/Footer";
//import injectContext from "../store/appContext";


const Layout = () =>{
    return(
        <>
            {/* <HeaderStart />
            <Menu/> */}
            <Consult/>
            <WeDo/>
            <About/>
            <Services/>
            <Estadistica/>
            <FinishProject/>
            <Team />
            <PricingTable />
            <Client />
            <Sponsor />
            <News />
            <ContacUs/>
            <StartNow />
            <Footer />
        </>
    )
    
}

export default Layout;