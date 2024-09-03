import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import newsLogo from "../../public/images/article/news.svg"
import card1Logo from "../../public/images/article/card1Logo.svg"
import card2Logo from "../../public/images/article/card2Logo.svg"
import card3Logo from "../../public/images/article/card3Logo.svg"
import card4Logo from "../../public/images/article/card4Logo.svg"
import card5Logo from "../../public/images/article/card5Logo.svg"
import card6Logo from "../../public/images/article/card6Logo.svg"
import { Carousel } from "./carousel";
import newsLetter from "../../public/images/article/newsletter.svg"
import { FaEnvelopeOpenText } from "react-icons/fa";
export function FluxArticlePage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-4"></div>
                        <div className="col-lg-6 col-md-8">
                            <div className={styles.header}>
                               <h3> Stay on the<br/> Decentralized Train</h3>
                               <p>Catch up with exciting happenings in Flux and the decentralized world.  Read all about the latest topics, news, updates, partnerships and products on our blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                    <div className="row mb-5">
                        <h3>Featured Articles:</h3>
                        <h5><Image alt="logo" src={newsLogo}/> In the News</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.card1}>
                                <div className={styles.logo}>
                                    <Image alt="logo" src={card1Logo}/>
                                </div>
                               <div className={styles.cardText}>
                               <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className={styles.card2}>
                                <div className={styles.logo}>
                                    <Image alt="logo" src={card2Logo}/>
                                </div>
                               <div className={styles.cardText}>
                               <p>CYBER MEDIA CREATIONS
                               Flux and Nvidia: Bringing Web3 to the Next Level</p>
                               </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.card3}>
                                <div className={styles.logo}>
                                    <Image alt="logo" src={card3Logo}/>
                                </div>
                               <div className={styles.cardText}>
                               <p>Decentralized Flux Cloud Launches New Product to Tackle AI Compute Challenges</p>
                               </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.card4}>
                                <div className={styles.logo}>
                                    <Image alt="logo" src={card4Logo}/>
                                </div>
                               <div className={styles.cardText}>
                               <p>Empowering Web Builders: Flux Launches Full Release of WordPress on Decentralized Platform
                              </p>
                               </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.card5}>
                                <div className={styles.logo}>
                                    <Image alt="logo" src={card5Logo}/>
                                </div>
                               <div className={styles.cardText}>
                               <p>Flux Launches FluxCore Beta To Enhance Compute-Efficiency and Boost AI Technology</p>
                               </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.card6}>
                                <div className={styles.logo}>
                                    <Image alt="logo" src={card6Logo}/>
                                </div>
                               <div className={styles.cardText}>
                               <p>FluxOS Breaks Barriers, Introduces Fiat Payments OnRamp Solution with PayPal</p>
                               </div>
                            </div>
                            </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container-fluid" style={{paddingLeft: "0", paddingRight: "0"}}>
                    <div className="row g-0">
                        <div className="col-lg-4 col-md-5">
                            <div className={styles.banner1}>
                               <div className={styles.text1}>
                                <div>
                                <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit parturient, iaculis eget mollis montes auctor primis curabitur vulputate, nunc ligula convallis libero felis dictum.”</p>
                                <h6>- Writer Name here</h6>
                                </div>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className={styles.banner2}>
                                <div className={styles.text2}>
                                    <h5>“Insert Quote Here”</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className="container">
                    <div className="row mb-3">
                        <h4>Flux <span>In the News</span></h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.banner3}>
                                <div className={styles.text5}>
                                    <h5>Future-Proofing: AI And The Decentralized Cloud</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.text6}>
                                <h6>Header here</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit parturient, iaculis eget mollis montes auctor primis curabitur vulputate, nunc ligula convallis libero felis dictum tincidunt. primis curabitur vulputate, nunc ligula convallis libero felis dictum tincidunt. </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit parturient, iaculis eget mollis montes auctor primis curabitur vulputate, nunc ligula convallis. primis curabitur vulputate, nunc ligula convallis libero felis dictum tincidunt. </p>
                                <a>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"100px"}}>
                        <Carousel/>
                    </div>
                </div>
            </section>

            <section className={styles.section5}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.banner4}>
                                <div>
                                <p>“One of the recent exciting highlights of the Tech industry is the increasing acceleration and adoption of artificial intelligence. Al is here to stay, and so is Flux.”</p>
                                <h6>- Daniel Keller</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            
                            </div>
                    </div>
                </div>
            </section>

            <section className={styles.section6}>
                <div className="container">
                    <div className={styles.banner5}>
                        <div className="row">
                            <div className="col-lg-7 col-md-6">
                               <div className={styles.banner5Text}>
                                <div>
                                <h5>Press Release</h5>
                                <p>For all press and media inquiries, please email our team via email. We are committed to providing further details or assist with any questions you may have. Your interest is important to us, and we look forward to assisting you.</p>
                                <h6>For press opportunities please reach out to:</h6>
                                <a>shannon@runonflux.io</a>
                                </div>
                               </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className={styles.banner5Bg}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section7}>
                <div className="container">
                    <div className="row">
                       <div className="col-md-12">
                       <div className={styles.form}>
                          <FaEnvelopeOpenText className={styles.envelope} />
                            <h5>Subscribe to our newsletter</h5>
                            <div className={styles.newsletterContainer}>
                            <form className={styles.newsletterForm} action="#" method="post">
                              <div className={styles.inputWrapper}>
                                <input type="email" className={styles.newsletterInput} placeholder="Enter your email" required />
                                <button type="submit" className={styles.subscribeButton}>Subscribe</button>
                                </div>
                            </form>
                            </div>

                        </div>
                       </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}