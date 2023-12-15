import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
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
                            <a href={'/'}><Image src={logo} alt="logo"/></a>
                            <h6>Flux is a decentralized Web3 cloud infrastructure comprised of user-operated, scalable and globally distributed computational nodes.</h6>
                            <div className={styles.icons}>
                                <Link href="/twitter" target="_blank" rel="noreferrer"><Image alt="icon" src={image1}/></Link>
                                <Link href="/discord" target="_blank" rel="noreferrer"><Image alt="icon" src={image2}/></Link>
                                <Link href="/facebook" target="_blank" rel="noreferrer"><Image alt="icon" src={image3}/></Link>
                                <Link href="/bitcoinTalk" target="_blank" rel="noreferrer"><Image alt="icon" src={image4}/></Link>
                                <Link href="/telegram" target="_blank" rel="noreferrer"><Image alt="icon" src={image5}/></Link>
                                <Link href="/github" target="_blank" rel="noreferrer"><Image alt="icon" src={image6}/></Link>
                                <Link href="/youtube" target="_blank" rel="noreferrer"><Image alt="icon" src={image7}/></Link>
                                <Link href="/reddit" target="_blank" rel="noreferrer"><Image alt="icon" src={image8}/></Link>
                                <Link href="/medium" target="_blank" rel="noreferrer"><Image alt="icon" src={image9}/></Link>
                                <Link href="/linkedIn" target="_blank" rel="noreferrer"><Image alt="icon" src={image10}/></Link>
                                <Link href="/twitch" target="_blank" rel="noreferrer"><Image alt="icon" src={image11}/></Link>
                                <Link href="instagram" target="_blank" rel="noreferrer"><Image alt="icon" src={image12}/></Link>
                                <Link href="tiktok" target="_blank" rel="noreferrer"><Image alt="icon" src={image13}/></Link>
                            </div>
                            <Link href="/contact" className={styles.btn}>Contact us!</Link><br/>
                            <Link href="/support" target="_blank" rel="noreferrer" className={styles.btn}>Support Center</Link>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5" >
                        <h5>ECOSYSTEM</h5>
                        <ul>
                            <li><Link href="/fluxCore">FluxCore</Link></li>
                            <li><Link href="/fluxCloud" target="_blank" rel="noreferrer">Flux Cloud</Link></li>
                            <li><Link href="/fluxDapps">DApps</Link></li>
                            <li><Link href="/nodes">FluxNodes</Link></li>
                            <li><Link href="/flux">Flux</Link></li>
                            <li><Link href="/zelcore" target="_blank" rel="noreferrer">Zelcore</Link></li>
                            <li><Link href="/dashboard" target="_blank" rel="noreferrer">Dashboard</Link></li>
                            <li><Link href="/XDAO">XDAO</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>DISCOVER</h5>
                        <ul>
                            <li><Link href="/fluxLabs"> FluxLabs</Link></li>
                            <li><Link href="/fluxCarbon"> Carbon Neutrality</Link></li>
                            <li><Link href="/whitepaper" target="_blank" rel="noreferrer">Whitepaper</Link></li>
                            <li><Link href="/roadmap"> Roadmap</Link></li>
                            <li><Link href="/team"> Team</Link></li>
                            <li><Link href="/documentation" target="_blank" rel="noreferrer"> Documentation</Link></li>
                            <li><Link href="/partners"> Partners</Link></li>
                            <li><Link href="/blockExplorer" target="_blank" rel="noreferrer"> Block Explorer</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>DEVELOPERS</h5>
                        <ul>
                            <li><Link href="/app" target="_blank" rel="noreferrer">App</Link></li>
                            <li><Link href="/node" target="_blank" rel="noreferrer"> Fluxnode Startup Guide</Link></li>
                            <li><Link href="/guides" target="_blank" rel="noreferrer"> Guides / Helpdesk</Link></li>
                            <li><Link href="/fractusnode" target="_blank" rel="noreferrer">Fractus</Link></li>
                            <li><Link href="/mining"> Miner</Link></li>
                            <li><Link href="/flux#exchanges"> Buy Flux</Link></li>
                            <li><Link href="/fluxStore" target="_blank" rel="noreferrer">Flux Store</Link></li>
                            <li><Link href="/github" target="_blank" rel="noreferrer">Github</Link></li>
                            <li><Link href="/pressKit" target="_blank" rel="noreferrer">Press Kit</Link></li>
                            <li><Link href="/bugBountyProgram">Bug bounty</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>COMMUNITY</h5>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/social">Social</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/support" target="_blank" rel="noreferrer">Support</Link></li>                 
                        </ul>
                    </div>
                </div>
                <div className={`${styles.footerSubSection} row`}>
                    <div className="col-lg-6 col-md-12 col-12 mb-4">
                        <h3>©2023 InFlux Technologies Limited.<br/>
                        All rights reserved.</h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <h3><a href={'/termsandconditions'}  rel="noreferrer">Terms and Conditions</a></h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <h3><a href={'/privacyPolicy'} rel="noreferrer">Privacy Policy</a></h3>
                    </div>
                    <div className="col-lg-2 col-md-4 col-4">
                        <h3><a href="/bugBountyProgram" target="_blank" rel="noreferrer">Bug Bounty Program</a></h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}
