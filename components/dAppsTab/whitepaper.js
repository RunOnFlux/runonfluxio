import React from "react";
import { DappCard1 } from "./dappCard";


import whitepaper1 from "../../public/images/dapps/whitepaper-1.jpeg"
import logo1 from "../../public/images/dapps/whitepaper-logo-1.svg"
import whitepaper2 from "../../public/images/dapps/whitepaper-2.jpeg"
import logo2 from "../../public/images/dapps/whitepaper-logo-2.svg"
import whitepaper3 from "../../public/images/dapps/whitepaper-3.jpeg"
import logo3 from "../../public/images/dapps/whitepaper-logo-3.png"
import whitepaper4 from "../../public/images/dapps/whitepaper-4.jpeg"
import logo4 from "../../public/images/dapps/whitepaper-logo-4.png"


export function Whitepaper(){
    return(
        <React.Fragment>
               <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={whitepaper1} logo={logo1} title={'Flux Whitepaper'} name={''} content={'A Global Deployment of the Flux Whitepaper for Data Retention Purposes on the FluxOS Network.'} btn1={'Whitepaper'}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={whitepaper2} logo={logo2} title={'Presearch Whitepaper'} name={''} content={'Presearch is a community-powered, decentralized search engine that provides better results while protecting your privacy and rewarding you when you search.'} btn1={'Whitepaper'}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={whitepaper3} logo={logo3} title={'Bitcoin Whitepaper'} name={''} content={'A Global Deployment of the Bitcoin Whitepaper for Data Retention Purposes on the FluxOS Network.'} btn1={'Whitepaper'}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={whitepaper4} logo={logo4} title={'Kadena Whitepaper'} name={''} content={'A Global Deployment of the Kadena Public Summary Paper for Data Retention Purposes on the FluxOS Network.'} btn1={'Whitepaper'}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={whitepaper4} logo={logo4} title={'KDA Chainweb WhitePaper'} name={''} content={'A Global Deployment of the Kadena Public Summary Paper for Data Retention Purposes on the FluxOS Network.'} btn1={'Whitepaper'}/>
                </div>
             
                </div>
        </React.Fragment>
    )
}