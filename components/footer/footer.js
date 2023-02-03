import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../public/images/Flux_white_logo.svg"
import image1 from "../../public/images/twitter_flux_grey2x.png"
import image2 from "../../public/images/discord_fux_grey2x.png"
import image3 from "../../public/images/facebook_flux_grey2x.png"
import image4 from "../../public/images/bitcointalk_flux_grey2x.png"
import image5 from "../../public/images/telegram_flux_grey2x.png"
import image6 from "../../public/images/github_flux_grey2x.png"
import image7 from "../../public/images/youtube_flux_grey2x.png"
import image8 from "../../public/images/reddit_flux_grey2x.png"
import image9 from "../../public/images/medium_flux_grey2x.png"
import image10 from "../../public/images/linkdin.svg"
import image11 from "../../public/images/Mask-Group-972x.png"
import image12 from "../../public/images/flux-instagram.png"
import image13 from "../../public/images/flux-tiktok.png"
export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12 mb-5">
                        <div style={{width: "90%"}}>
                            <a><Image src={logo} alt="logo"/></a>
                            <h6>Flux is a decentralized Web3 cloud infrastructure comprised of user-operated, scalable and globally distributed computational nodes.</h6>
                            <div className={styles.icons}>
                            <a href="#"><Image alt="icon" src={image1}/></a>
                            <a href="#"><Image alt="icon" src={image2}/></a>
                            <a href="#"><Image alt="icon" src={image3}/></a>
                            <a href="#"><Image alt="icon" src={image4}/></a>
                            <a href="#"><Image alt="icon" src={image5}/></a>
                            <a href="#"><Image alt="icon" src={image6}/></a>
                            <a href="#"><Image alt="icon" src={image7}/></a>
                            <a href="#"><Image alt="icon" src={image8}/></a>
                            <a href="#"><Image alt="icon" src={image9}/></a>
                            <a href="#"><Image alt="icon" src={image10}/></a>
                            <a href="#"><Image alt="icon" src={image11}/></a>
                            <a href="#"><Image alt="icon" src={image12}/></a>
                            <a href="#"><Image alt="icon" src={image13}/></a>
                            </div>
                            <a href="#" className={styles.btn}>Contact us!</a><br/>
                            <a href="#" className={styles.btn}>Support Center</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>ECOSYSTEM</h5>
                        <ul>
                            <li><a href="#">FluxOS</a></li>
                            <li><a href="#">Apps</a></li>
                            <li><a href="#">FluxNodes</a></li>
                            <li><a href="#">Flux</a></li>
                            <li><a href="#">Parallel Mining</a></li>
                            <li><a href="#">Zelcore</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">XDAO</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>DISCOVER</h5>
                        <ul>
                            <li><a href="#"> FluxLabs</a></li>
                            <li><a href="#"> Carbon Neutrality</a></li>
                            <li><a href="#">Whitepaper</a></li>
                            <li><a href="#"> Roadmap</a></li>
                            <li><a href="#"> Team</a></li>
                            <li><a href="#"> Documentation</a></li>
                            <li><a href="#"> Partners</a></li>
                            <li><a href="#"> Block Explorer</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>EXPLORE</h5>
                        <ul>
                            <li><a href="#">App</a></li>
                            <li><a href="#"> Node</a></li>
                            <li><a href="#"> Miner</a></li>
                            <li><a href="#"> Buy Flux</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>COMMUNITY</h5>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Bug bounty</a></li>
                            <li><a href="#">Donate</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.footerSubSection} row`}>
                    <div className="col-lg-6 col-md-12 col-12 mb-4">
                        <h3>©2022 Zel Technologies Limited.<br/>
                        All rights reserved.</h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <h3><a href="#">Terms and Conditions</a></h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <h3><a href="#">Privacy Policy</a></h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <h3><a href="#">Bug Bounty Program</a></h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}
