import React, { useState } from "react";
import styles from "./index.module.css"
import Image from "next/image";
import newsLogo from "../../public/images/article/news.svg"
import top100 from "../../public/images/article/top100.png"
import stratusAward from "../../public/images/article/stratusAward.png"

import { Carousel } from "./carousel";
import { ArticleCards } from "./articleCard";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5'
import { IoIosMail } from "react-icons/io";

export function FluxMediaPage({ contentfulData, lowerArticles }){
    const [sliderIndex, setSliderIndex] = useState(0);

    const sliderChange = (offset) => {
        if (sliderIndex + offset > contentfulData.length - 1) return setSliderIndex(0);
        if (sliderIndex + offset < 0) return setSliderIndex(contentfulData.length - 1);
        setSliderIndex((prev) => prev + offset);
    };

    return(
        <React.Fragment>
            <section className={styles.section1}>            
                <div className={styles.header} >
                    <div style={{ display: "flex", marginBottom: "20px", gap: "15px" }}>
                        <Image style={{ alignSelf: "center"}} alt="logo" src={newsLogo}/>
                        <h3 style={{ alignSelf: "center"}}>Flux In the News</h3>
                    </div>
                    <p>Stay up to date with all things Flux. Read all about our latest products, updates, and partnerships. Sign up for our newsletter below to be the first to know.</p>
                </div>     
                <div className={styles.articles} >
                    <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Featured Articles</h3>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: "35px" }}>
                        <IoChevronBackCircleOutline className={styles.sliderArrow}  size={60} onClick={() => sliderChange(-1)} />
                        <ArticleCards cardDetails={contentfulData} activeIndex={sliderIndex} />
                        <IoChevronForwardCircleOutline className={styles.sliderArrow}  size={60} onClick={() => sliderChange(1)} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", paddingTop: "50px" }} >
                        {contentfulData.map((_item, index) => (
                            <div key={`slider-${index}`} className={`${index === sliderIndex ? `${styles.sliderItem} ${styles.sliderItemOn}` : `${styles.sliderItem} ${styles.sliderItemOff}`}`} onClick={() => setSliderIndex(index)} />
                        ))}
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
                                <h6>AI is set to be the most important technology by 2025.</h6>
                                <p>Considering the rapid growth the sector has experienced over the past few years, this is not in the least surprising. The applications of AI have continued to grow across various fields, from smart chatbots that can generate professional resumes based on user prompts, to machine learning models capable of running predictive analysis to solve business problems.</p>
                                <p>Now, when the unique advantages of AI technology are integrated into cloud computing, AI cloud is born. Researchers estimate a global cloud AI market size of $397.81 billion by 2030, citing the growing adoption of generative AI and machine learning models among many industries.</p>
                                <a href="https://www.forbes.com/councils/forbestechcouncil/2024/08/19/future-proofing-ai-and-the-decentralized-cloud">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row"style={{marginTop:"100px"}}>
                        <Carousel articles={lowerArticles} reverseDirection={true} />
                    </div>
                    <div className="row"style={{marginTop:"50px"}}>
                        <Carousel articles={lowerArticles} />
                    </div>
                </div>
            </section>            

            <section className={styles.section5}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.banner4}>
                                <div>
                                    <p>“One of the recent exciting highlights of the Tech industry is the increasing acceleration and adoption of artificial intelligence. AI is here to stay, and so is Flux.”</p>
                                    <h6>- Daniel Keller, CEO Flux</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className="container">
                    <div className="row mb-3 mb-4">
                        <h4>Our <span>Awards</span></h4>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-4 col-md-3">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <Image 
                                    alt="award" 
                                    src={top100} 
                                    style={{ maxWidth: "90%", height: "auto" }} 
                                />
                            </div>
                        </div>
                        <div className="col-3 col-sm-3 col-md-3">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <Image 
                                    alt="award" 
                                    src={stratusAward} 
                                    style={{ maxWidth: "90%", height: "auto" }} 
                                />
                            </div>
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
                                        <h5>Media And Press Inquiries</h5>
                                        <p>For press and media inquiries, please contact our team via email. We're here to provide information and answer any questions you may have. We look forward to assisting you.</p>
                                        <h6>For opportunities please reach out to:</h6>
                                        <a href="mailto:shannon@runonflux.com" style={{ textDecoration: "none" }}><IoIosMail style={{ marginRight: "8px" }}/>shannon@runonflux.com</a>
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