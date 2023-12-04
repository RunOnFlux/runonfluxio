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
                            <a href="https://twitter.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="icon" src={image1}/></a>
                            <a href="https://discord.gg/runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image2}/></a>
                            <a href="https://www.facebook.com/runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image3}/></a>
                            <a href="https://bitcointalk.org/index.php?topic=2853688.0" target="_blank" rel="noreferrer"><Image alt="icon" src={image4}/></a>
                            <a href="https://t.me/runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image5}/></a>
                            <a href="https://github.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="icon" src={image6}/></a>
                            <a href="https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw" target="_blank" rel="noreferrer"><Image alt="icon" src={image7}/></a>
                            <a href="https://www.reddit.com/r/Flux_Official" target="_blank" rel="noreferrer"><Image alt="icon" src={image8}/></a>
                            <a href="https://fluxofficial.medium.com/" target="_blank" rel="noreferrer"><Image alt="icon" src={image9}/></a>
                            <a href="https://www.linkedin.com/company/flux-official/mycompany/" target="_blank" rel="noreferrer"><Image alt="icon" src={image10}/></a>
                            <a href="https://www.twitch.tv/runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image11}/></a>
                            <a href="https://www.instagram.com/runonflux_official/" target="_blank" rel="noreferrer"><Image alt="icon" src={image12}/></a>
                            <a href="https://www.tiktok.com/@flux_runonflux" target="_blank" rel="noreferrer"><Image alt="icon" src={image13}/></a>
                            </div>
                            <a href="mailto:info@runonflux.io?subject=Contact%20Flux!" className={styles.btn}>Contact us!</a><br/>
                            <a href="https://support.runonflux.io/" className={styles.btn}>Support Center</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5" >
                        <h5>ECOSYSTEM</h5>
                        <ul>
                            <li><a href="/fluxCloud">Flux Cloud</a></li>
                            <li><Link href="/fluxDapps">DApps</Link></li>
                            <li><Link href="/nodes">FluxNodes</Link></li>
                            <li><Link href="/flux">Flux</Link></li>
                            <li><a href="https://zelcore.io/" target="_blank" rel="noreferrer">Zelcore</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><Link href="/XDAO">XDAO</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>DISCOVER</h5>
                        <ul>
                            <li><a href="/fluxLabs" target="_blank" rel="noreferrer"> FluxLabs</a></li>
                            <li><a href="/fluxCarbon" target="_blank" rel="noreferrer"> Carbon Neutrality</a></li>
                            <li><a href="https://whitepaper.app.runonflux.io/" target="_blank" rel="noreferrer">Whitepaper</a></li>
                            <li><Link href="/roadmap"> Roadmap</Link></li>
                            <li><Link href="/team"> Team</Link></li>
                            <li><a href="/documentation" target="_blank" rel="noreferrer"> Documentation</a></li>
                            <li><Link href="/partners"> Partners</Link></li>
                            <li><a href="https://explorer.runonflux.io/" target="_blank" rel="noreferrer"> Block Explorer</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>DEVELOPERS</h5>
                        <ul>
                        <li><a href="https://jetpack2.app.runonflux.io/hello.html" target="_blank" rel="noreferrer">App</a></li>
                            <li><Link href="/node" target="_blank" rel="noreferrer"> Fluxnode Startup Guide</Link></li>
                            <li><Link href="/guides"> Guides / Helpdesk</Link></li>
                            <li><a href="https://fluxofficial.medium.com/earn-more-with-fractus-cumulus-store-more-flux-earned-cbeac46bc9e7" target="_blank" rel="noreferrer">Fractus</a></li>
                            <li><Link href="/mining"> Miner</Link></li>
                            <li><Link href="/flux#exchanges"> Buy Flux</Link></li>
                            <li><a href="https://gotflux.store/" target="_blank" rel="noreferrer">Flux Store</a></li>
                            <li><a href="https://github.com/RunOnFlux" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a href="https://github.com/RunOnFlux/press" target="_blank" rel="noreferrer">Press Kit</a></li>
                            <li><Link href="/bugBountyProgram">Bug bounty</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 mb-5">
                        <h5>COMMUNITY</h5>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/social">Social</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><a href="https://support.runonflux.io/support/home" target="_blank" rel="noreferrer">Support</a></li>                            
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
