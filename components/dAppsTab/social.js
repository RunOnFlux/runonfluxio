import React from "react";
import { DappCard1 } from "./dappCard";
import { DappCard2 } from "./dappCard";
import { DappCard3 } from "./dappCard";
import infrastructure3 from "../../public/images/dapps/infrastructure-3.jpeg"
import logo3 from "../../public/images/dapps/infrastructure-logo-3.jpeg"
import infrastructure34 from "../../public/images/dapps/infrastructure-34.jpeg"
import logo34 from "../../public/images/dapps/infrastructure-logo-34.svg"
import infrastructure35 from "../../public/images/dapps/infrastructure-35.jpeg"
import logo35 from "../../public/images/dapps/infrastructure-35.jpeg"
import infrastructure48 from "../../public/images/dapps/infrastructure-48.jpeg"
import logo48 from "../../public/images/dapps/infrastructure-logo-48.svg"
import social1 from "../../public/images/dapps/social-1.jpeg"
import logo1 from "../../public/images/dapps/social-logo-1.png"
import social2 from "../../public/images/dapps/social-2.jpeg"
import logo2 from "../../public/images/dapps/social-logo-2.svg"
import social3 from "../../public/images/dapps/social-3.jpeg"
import logo03 from "../../public/images/dapps/social-logo-3.png"
import social4 from "../../public/images/dapps/social-6.jpeg"
import logo4 from "../../public/images/dapps/social-logo-6.png"
import social5 from "../../public/images/dapps/social-7.jpeg"
import logo5 from "../../public/images/dapps/social-logo-7.png"
import social6 from "../../public/images/dapps/social-9.jpeg"
import logo6 from "../../public/images/dapps/social-logo-9.png"
export function Social(){
    return(
        <React.Fragment>
               <div className="row">
             
               <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure3} logo={logo3} title={'Timpi'} name={'Timpi'} content={'is the worlds first completely decentralized search engine. Their mission is to deliver freedom and unbiased access to information. Not only freedom to have your Data and Privacy protected, but also to have the freedom to make your own choices without being manipulated.'} btn1={'Infrastructure'} btn2={'Social'} btn3={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure34} logo={logo34} title={'Element'} name={'Element'} content={'is an open network for secure, decentralized communication, connecting 42M+ users over 80K+ deployments. Matrix protocol is an open standard with open source implementations, supporting a vibrant developer ecosystem. Element was founded by the team behind Matrix as a way to bring it to the mainstream.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure35} logo={logo35} title={'Libreddit'} name={'Libreddit'} content={'an alternative private front-end to Reddit. This will allow the user to be void from logging, location, and cookies while exploring the front page of the internet.'} btn1={'Infrastructure'} btn2={'Social'} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure48} logo={logo48} title={'Nitter'} name={''} content={'Alternative Twitter front-end focused on privacy. Using an instance of Nitter (hosted on the Flux network), you can browse Twitter without JavaScript while retaining your privacy. In addition to respecting your privacy, Nitter is on average around 15 times lighter than Twitter, and in some cases serve pages faster.'} btn1={'Infrastructure'} btn2={'Social'} btn3={''}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={social1} logo={logo1} title={'Bibliogram'} name={'Bibliogram'} content={'is a website that takes data from Instagrams public profile views and puts it into a friendlier page that loads faster, gives downloadable images, eliminates ads, generates RSS feeds, and doesnt urge you to sign up.'} btn1={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={social2} logo={logo2} title={'EtherCalc'} name={'EtherCalc'} content={'is an open-source collaborative web spreadsheet with a built-in Redis backend, where people can edit the same document at the same time. Everybodys changes are instantly reflected on all screens. Work together on inventories, survey forms, list management, brainstorming sessions and more!'} btn1={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={social3} logo={logo03} title={'Rustpad'} name={'Rustpad'} content={'is an open-source collaborative code/text editor where multiple people can work on projects together in real-time to build out a project or document in over 50 different supported languages.'} btn1={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={social4} logo={logo4} title={'Focalboard'} name={'Focalboard'} content={' helps define, organize, track and manage work across individuals and teams. Feel free to deploy your own instances using the specifications under global apps list as a reference.'} btn1={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={social5} logo={logo5} title={'Grocy'} name={''} content={' Grocy is a web-based self-hosted groceries & household management solution for your home.Open Source. Built with passion, this dapp pulls together little life goals! Eat better, do more and live with passion.'} btn1={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={social6} logo={logo6} title={'SyncPaint'} name={'SyncPaint'} content={'allows multiple users to draw on one canvas at the same time. You can draw together with other people simply by sharing the link to your room.'} btn1={'Social'}  />
                </div>
                </div>
        </React.Fragment>
    )
}