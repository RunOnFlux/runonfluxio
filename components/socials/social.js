/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.css"
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";

// Social Media Logos
import facebookImg from "../../public/images/socials/Vector.svg"
import discordImg from "../../public/images/socials/Vector-1.svg"
import twitterImg from "../../public/images/socials/Vector-2.svg"
import bitcoinImg from "../../public/images/socials/Vector-3.svg"
import telegramImg from "../../public/images/socials/Vector-4.svg"
import githubImg from "../../public/images/socials/Vector-5.svg"
import youtubeImg from "../../public/images/socials/Vector-6.svg"
import redditImg from "../../public/images/socials/Vector-7.svg"
import mediumImg from "../../public/images/socials/Vector-8.svg"
import linkedinImg from "../../public/images/socials/Vector-9.svg"
import twitchImg from "../../public/images/socials/Vector-10.svg"
import instagramImg from "../../public/images/socials/Vector-11.svg"

// Countrys
import indonesia from "../../public/images/socials/indonesia.svg"
import bulgaria from "../../public/images/socials/bulgaria.svg"
import canada from "../../public/images/socials/canada.svg"
import china from "../../public/images/socials/china.svg"
import croatia from "../../public/images/socials/croatia.svg"
import czech from "../../public/images/socials/czech.svg"
import nederland from "../../public/images/socials/netherlands.svg"
import persian from "../../public/images/socials/iran.svg"
import germany from "../../public/images/socials/germany.svg"
import greece from "../../public/images/socials/greece.svg"
import france from "../../public/images/socials/france.svg"
import india from "../../public/images/socials/india.svg"
import italy from "../../public/images/socials/italy.svg"
import japan from "../../public/images/socials/japan.svg"
import pakistan from "../../public/images/socials/pakistan.svg"
import poland from "../../public/images/socials/poland.svg"
import portugal from "../../public/images/socials/portugal.svg"
import romania from "../../public/images/socials/romania.svg"
import russia from "../../public/images/socials/russia.svg"
import spain from "../../public/images/socials/spain.svg"
import thailand from "../../public/images/socials/thailand.svg"
import venezuela from "../../public/images/socials/venezuela.svg"
import vietnam from "../../public/images/socials/vietnam.svg"
import arabic from "../../public/images/socials/arabic.svg"




// Icons
import icon_twitter from "../../public/images/socials/icon/vecter5.svg"


import Modal from 'react-bootstrap/Modal';
import classNames from "classnames";

export function Social() {

    return (
        <main>
        <section className={styles.section1}>
            <div className="container">
                <div className="row">
                    <h1>Stay Connected with us on <br/><span className={styles.blue}>Social Media</span></h1>
                    <p>Don't miss out on the latest updates, news, and exclusive content from our team! Follow us on 
                social media to stay connected with us and be the first to know about our upcoming events, product launches, and special offers.
                 From Facebook to Twitter, Instagram to LinkedIn, we've got you covered.</p>
                </div>
            </div>
        </section>

        <section className={styles.section2}>
            <div className="container">
                <div className="row mb-4">
                    <h3>Flux Official Global Social Media</h3>
                </div>
                <div className="row" style={{marginBottom: "100px"}}>
                    <div className="col-lg-2 col-md-3 col-6">
                    <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={twitterImg}></Image>
                            <br></br>
                            <a href="https://twitter.com/RunOnFlux" className={styles.btn}>Twitter</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6">
                    <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={discordImg}></Image>
                            <br></br>
                            <a href="https://discord.gg/runonflux" className={styles.btn}>Discord</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={facebookImg}></Image>
                            <br></br>
                            <a href="https://www.facebook.com/groups/runonflux/" className={styles.btn}>Facebook</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={bitcoinImg}></Image>
                            <br></br>
                            <a href="https://bitcointalk.org/index.php?topic=2853688.1000" className={styles.btn}>Bitcoin Talk</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={telegramImg}></Image>
                            <br></br>
                            <a href="https://t.me/runonflux" className={styles.btn}>Telegram</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={githubImg}></Image>
                            <br></br>
                            <a href="https://github.com/RunOnFlux" className={styles.btn}>Github</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={youtubeImg}></Image>
                            <br></br>
                            <a href="https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw" className={styles.btn}>Youtube</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={redditImg}></Image>
                            <br></br>
                            <a href="https://www.reddit.com/r/Flux_Official/" className={styles.btn}>Reddit</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={mediumImg}></Image>
                            <br></br>
                            <a href="https://fluxofficial.medium.com/" className={styles.btn}>Medium</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={linkedinImg}></Image>
                            <br></br>
                            <a href="https://www.linkedin.com/company/influxtechnology/mycompany/" className={styles.btn}>LinkedIn</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={twitchImg}></Image>
                            <br></br>
                            <a href="https://twitch.tv/runonflux" className={styles.btn}>Twitch</a>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={instagramImg}></Image>
                            <br></br>
                            <a href="https://www.instagram.com/runonflux_official/" className={styles.btn}>Instagram</a>
                        </div>
                        </div>
                </div>
                <div className="row mb-4">
                    <h3>Flux Official Ambassadors Social Media</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                    <div className={styles.ambCard}>
                        <div>
                        <Image src={indonesia} className={styles.ambCardImg} alt=""></Image>
                        </div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Indonesia Ambassador</p> 
                                <a href="https://twitter.com/FluxIndonesia"><Image src={icon_twitter} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                    <div className={styles.ambCard}>
                        <div><Image src={bulgaria} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Bulgaria Ambassador</p>
                                <a href="https://twitter.com/FluxBulgaria"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={canada} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Canada Ambassador</p>
                                <a href="https://twitter.com/FluxCanada"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                          <div className="col-lg-3 col-md-6 col-12">
                             <div className={styles.ambCard}>
                                <div><Image src={china} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> China Ambassador</p>
                                <a href="https://twitter.com/Flux_Chinese"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                    <div className={styles.ambCard}>
                        <div><Image src={croatia} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Croatia Ambassador</p>
                                <a href="https://twitter.com/Flux_Croatia"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                    <div className={styles.ambCard}>
                        <div><Image src={czech} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Czech Ambassador</p>
                                <a href="https://twitter.com/Flux_CzSk"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={nederland} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Netherlands Ambassador</p>
                                <a href="https://twitter.com/FluxNederland"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={persian} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Persian Ambassador</p>
                                <a href="https://twitter.com/Fluxpersian"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div> <Image src={germany} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Deutsch Ambassador</p>
                                <a href="https://twitter.com/FluxDeutsch"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={greece} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Greek Ambassador</p>
                                <a href="https://twitter.com/FluxHellas"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={france} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> France Ambassador</p>
                                <a href="https://twitter.com/Flux_France"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={india} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> India Ambassador</p>
                                <a href="https://twitter.com/FluxIndonesia"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={italy} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Italy Ambassador</p>
                                <a href="https://twitter.com/ItaliaFlux"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={japan} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Japan Ambassador</p>
                                <a href="https://twitter.com/japan_flux"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div> <Image src={pakistan} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Pakistan Ambassador</p>
                                <a href="https://twitter.com/FluxPakistan"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div>  <Image src={poland} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Poland Ambassador</p>
                                <a href="https://twitter.com/FluxPoland"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={portugal} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Português Ambassador</p>
                                <a href="https://twitter.com/FluxPortugues"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div> <Image src={romania} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Romenia Ambassador</p>
                                <a href=""><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={russia} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Russian Ambassador</p>
                                <a href="https://twitter.com/RussianFlux"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div><Image src={spain} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Espanõl Ambassador</p>
                                <a href="https://twitter.com/FluxEspanol"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                        <div className={styles.ambCard}>
                            <div> <Image src={thailand} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Thailand Ambassador</p>
                                <a href="https://twitter.com/FluxThailand"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.ambCard}>
                                <div> <Image src={venezuela} className={styles.ambCardImg} alt=""></Image></div>
                          
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Venezuela Ambassador</p>
                                <a href="https://twitter.com/FluxVenezuela"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.ambCard}>
                                <div><Image src={vietnam} className={styles.ambCardImg} alt=""></Image></div>
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Vietnam Ambassador</p>
                                <a href="https://twitter.com/FluxVietNam"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                            <div className={styles.ambCard}>
                                <div>  <Image src={arabic} className={styles.ambCardImg} alt=""></Image></div>
                           
                            <div className={styles.links}>
                            <p className={styles.ambText}>Flux Official <br></br> Arabic Ambassador</p>
                                <a href=""><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                            </div>

                </div>
            </div>
        </section>
        </main>
    )
}