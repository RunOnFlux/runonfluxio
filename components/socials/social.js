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
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.title}>Stay Connected with us on <br></br> <span className={styles.blue}>Social Media</span></div>
                <div className={styles.greyText}>Don't miss out on the latest updates, news, and exclusive content from our team! Follow us on 
                social media to stay connected with us and be the first to know about our upcoming events, product launches, and special offers.
                 From Facebook to Twitter, Instagram to LinkedIn, we've got you covered.</div>
            </header>
            <section className={styles.social}>
                <div className={styles.subTitle}>Flux Official Global Social Media</div>
                <div className={styles.socials}>
                    <div className={styles.div1}>
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={twitterImg}></Image>
                            <br></br>
                            <a href="https://twitter.com/RunOnFlux" className={styles.btn}>Twitter</a>
                        </div>
                    </div>
                    <div className={styles.div2}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={discordImg}></Image>
                            <br></br>
                            <a href="https://discord.gg/runonflux" className={styles.btn}>Discord</a>
                        </div>
                    </div>
                    <div className={styles.div3}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={facebookImg}></Image>
                            <br></br>
                            <a href="https://www.facebook.com/groups/runonflux/" className={styles.btn}>Facebook</a>
                        </div>
                    </div>
                    <div className={styles.div4}> 
                     <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={bitcoinImg}></Image>
                            <br></br>
                            <a href="https://bitcointalk.org/index.php?topic=2853688.1000" className={styles.btn}>Bitcoin Talk</a>
                        </div>
                    </div>
                    <div className={styles.div5}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={telegramImg}></Image>
                            <br></br>
                            <a href="https://t.me/fluxprotocol" className={styles.btn}>Telegram</a>
                        </div>
                    </div>
                    <div className={styles.div6}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={githubImg}></Image>
                            <br></br>
                            <a href="https://github.com/RunOnFlux" className={styles.btn}>Github</a>
                        </div>
                    </div>
                    <div className={styles.div7}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={youtubeImg}></Image>
                            <br></br>
                            <a href="https://www.youtube.com/channel/UCphbdfb1MXYgUPsdhQPcnGw" className={styles.btn}>Youtube</a>
                        </div>
                    </div>
                    <div className={styles.div8}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={redditImg}></Image>
                            <br></br>
                            <a href="https://www.reddit.com/r/Flux_Official/" className={styles.btn}>Reddit</a>
                        </div>
                    </div>
                    <div className={styles.div9}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={mediumImg}></Image>
                            <br></br>
                            <a href="https://fluxofficial.medium.com/" className={styles.btn}>Medium</a>
                        </div>
                    </div>
                    <div className={styles.div10}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={linkedinImg}></Image>
                            <br></br>
                            <a href="https://fr.linkedin.com/company/flux" className={styles.btn}>LinkedIn</a>
                        </div>
                    </div>
                    <div className={styles.div11}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={twitchImg}></Image>
                            <br></br>
                            <a href="https://twitch.tv/runonflux" className={styles.btn}>Twitch</a>
                        </div>
                    </div>
                    <div className={styles.div12}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={instagramImg}></Image>
                            <br></br>
                            <a href="" className={styles.btn}>Instagram</a>
                        </div></div>
                </div>
            </section>

            <section className={styles.ambassadors}>
                <div className={styles.subTitle}>Flux Official Ambassadors Social Media</div>
                <div className={styles.parent}>
                    <div className={styles.div1}> 
                        <div className={styles.ambCard}>
                            <Image src={indonesia} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Indonesia Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxIndonesia"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div2}> 
                        <div className={styles.ambCard}>
                            <Image src={bulgaria} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Bulgaria Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxBulgaria"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div3}> 
                        <div className={styles.ambCard}>
                            <Image src={canada} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Canada Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxCanada"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div4}> 
                        <div className={styles.ambCard}>
                            <Image src={china} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> China Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/Flux_Chinese"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div5}> 
                        <div className={styles.ambCard}>
                            <Image src={croatia} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Croatia Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/Flux_Croatia"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div6}> 
                        <div className={styles.ambCard}>
                            <Image src={czech} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Czech Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/Flux_CzSk"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div7}> 
                        <div className={styles.ambCard}>
                            <Image src={nederland} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Nederland Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxNederland"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div8}> 
                        <div className={styles.ambCard}>
                            <Image src={persian} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Persian Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/Fluxpersian"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div9}> 
                        <div className={styles.ambCard}>
                            <Image src={germany} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Deutsch Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxDeutsch"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div10}> 
                        <div className={styles.ambCard}>
                            <Image src={greece} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Greek Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxHellas"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div11}> 
                        <div className={styles.ambCard}>
                            <Image src={france} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> France Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/Flux_France"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div12}> 
                        <div className={styles.ambCard}>
                            <Image src={india} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> India Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxIndonesia"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div13}> 
                        <div className={styles.ambCard}>
                            <Image src={italy} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Italy Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/ItaliaFlux"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div14}> 
                        <div className={styles.ambCard}>
                            <Image src={japan} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Japan Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/japan_flux"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div15}> 
                        <div className={styles.ambCard}>
                            <Image src={pakistan} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Pakistan Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxPakistan"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div16}> 
                        <div className={styles.ambCard}>
                            <Image src={poland} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Poland Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxPoland"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div17}> 
                        <div className={styles.ambCard}>
                            <Image src={portugal} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Português Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxPortugues"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div18}> 
                        <div className={styles.ambCard}>
                            <Image src={romania} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Romenia Ambassador</p>
                            <div className={styles.links}>
                                <a href=""><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div19}> 
                        <div className={styles.ambCard}>
                            <Image src={russia} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Russian Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/RussianFlux"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div20}> 
                        <div className={styles.ambCard}>
                            <Image src={spain} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Espanõl Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxEspanol"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div21}> 
                        <div className={styles.ambCard}>
                            <Image src={thailand} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Thailand Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxThailand"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div22}> 
                        <div className={styles.ambCard}>
                            <Image src={venezuela} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Venezuela Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxVenezuela"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div23}> 
                        <div className={styles.ambCard}>
                            <Image src={vietnam} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Vietnam Ambassador</p>
                            <div className={styles.links}>
                                <a href="https://twitter.com/FluxVietNam"><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                    <div className={styles.div24}> 
                        <div className={styles.ambCard}>
                            <Image src={arabic} className={styles.ambCardImg} alt=""></Image>
                            <p className={styles.ambText}>Flux Official <br></br> Arabic Ambassador</p>
                            <div className={styles.links}>
                                <a href=""><Image  className={styles.noBord} src={icon_twitter} alt=""></Image></a>
                            </div>
                        </div></div>
                </div>
            </section>

            {/* <section className={styles.Media}> 
                <div className={styles.subTitle}>Flux Community Managed Media</div>
                
                <div className={styles.comMedia}>
                    <div className={styles.div1}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={icon_greyTwitter}></Image>
                            <br></br>
                            <a href="https://twitter.com/flux_reports" className={styles.btn}>/flux_reports</a>
                        </div>
                    </div>
                    <div className={styles.div2}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={icon_greyTwitter}></Image>
                            <br></br>
                            <a href="https://twitter.com/ExploreLbry" className={styles.btn}>/ExploreLbry</a>
                        </div>
                    </div>
                    <div className={styles.div3}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={icon_globe}></Image>
                            <br></br>
                            <a href="https://tsncrypto.org/" className={styles.btn}>TSN Crypto</a>
                        </div>
                    </div>
                    <div className={styles.div4}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={icon_globe}></Image>
                            <br></br>
                            <a href="https://jefke.blog/" className={styles.btn}>Jefke’s Blog</a>
                        </div>
                    </div>
                    <div className={styles.div5}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={icon_greyTwitter}></Image>
                            <br></br>
                            <a href="https://twitter.com/wponflux" className={styles.btn}>/wponflux</a>
                        </div>
                    </div>
                    <div className={styles.div6}> 
                        <div className={styles.card}>
                            <Image className={styles.cardImg} alt={"img"} src={icon_globe}></Image>
                            <br></br>
                            <a href="https://wponflux.com/blog/" className={styles.btn}>WPONFLUX</a>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    )
}