/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import partner1 from "../../public/images/partners/partner1.svg"
import partner2 from "../../public/images/partners/partner2.svg";
import partner3 from "../../public/images/partners/partner3.svg";
// import partner4 from "../../public/images/partners/partner4.png";
import partner5 from "../../public/images/partners/partner5.svg";
// import partner6 from "../../public/images/partners/partner6.png";
import partner7 from "../../public/images/partners/partner7.svg";
import partner8 from "../../public/images/partners/partner8.svg"
import partner9 from "../../public/images/partners/partner9.svg"
// import partner10 from "../../public/images/partners/partner10.png"
import partner11 from "../../public/images/partners/partner11.svg"
import partner12 from "../../public/images/partners/partner12.svg"
import partner13 from "../../public/images/partners/partner13.svg"
import partner14 from "../../public/images/partners/partner14.svg"
// import partner15 from "../../public/images/partners/partner15.svg"
import partner16 from "../../public/images/partners/partner16.svg"
import partner17 from "../../public/images/partners/partner17.svg"
import partner18 from "../../public/images/partners/partner18.svg"
import partner19 from "../../public/images/partners/partner19.svg"
import partner20 from "../../public/images/partners/partner20.svg"
import partner21 from "../../public/images/partners/partner21.svg"
import partner22 from "../../public/images/partners/partner22.svg"
import partner24 from "../../public/images/partners/partner24.svg"
import partner25 from "../../public/images/partners/partner25.svg"
import partner26 from "../../public/images/partners/partner26.svg"
import partner27 from "../../public/images/partners/partner27.svg"
import partner28 from "../../public/images/partners/kiterocket.jpg"
import kucoin from "../../public/images/partners/kucoin-partners.png"
import gemini from "../../public/images/partners/Gemini.png"
import paxos from "../../public/images/partners/Paxos.png"
import maker from "../../public/images/partners/MakerDAO.png"
import monero from "../../public/images/partners/mymonero-p-500.png"
import binance from "../../public/images/partners/Binance.png"
import linkIcon from "../../public/images/partners/icons8-external-link.svg"
import suse from "../../public/images/partners/suse.svg"
import timpi from "../../public/images/partners/timpi.svg"
import scalia from "../../public/images/partners/scalia.svg"
import dns from "../../public/images/partners/3dns.svg"
import nicehash from "../../public/images/partners/nicehash.svg"
export function PartnersPage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row mb-5">
                        {/* <h6>PARTNERS</h6> */}
                        <h4>Partners and teams that work with Flux</h4>
                        <h5>FluxOS is a revolutionary second-layer operating system application that allows hardened Dockerized apps to run on Flux’s fully decentralized computational network.</h5>  
                    </div>
                    {/* <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner15} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>NVIDIA</h1>
                                            <h2><b>Nvidia Inception program</b></h2>
                                            <h3>Flux has been accepted into the Nvidia Inception program. As a premier partner, Flux will be able to evolve faster through access to NVIDIA’s cutting-edge technology and experts, networking events, and co-marketing support.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> */}

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={suse} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>SUSE</h1>
                                           
                                            <h3>SUSE, a global leader in enterprise-grade open-source solutions, trusted by over 60% of the Fortune 500, powers mission-critical workloads with Rancher, NeuVector, and SUSE Linux Enterprise, collaborating with partners and communities to enable innovation from the data center to the cloud and beyond, employing over 2,400 people globally and listed on the Frankfurt Stock Exchange.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner19} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Seeed Studio</h1>
                                            <h2><b>AIoT Hardware Service Platform</b></h2>
                                            <h3>In 2008, Seeed was founded with the vision of "Making Technology Accessible for All". Seeed provides global developers with open-source hardware modules and IoT devices in the fields of sensor monitoring, edge computing, and IoT hardware services including R&D, manufacturing, and distribution.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner16} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>OVHcloud</h1>
                                            <h2><b>Flux expands its reach into Europe with the continent's cloud leader</b></h2>
                                            <h3>Through this new partnership, Flux is continuing to bridge the gap between Web2.0 and Web3.0 infrastructure so they can iterate tech together and build a better future for all. Working with OVHcloud and their robust presence worldwide, Flux can get more nodes on the network and increase computational capacity.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={nicehash} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>NiceHash</h1>
                                            <h2><b>Leading platform for mining</b></h2>
                                            <h3>NiceHash is the world’s leading hashpower marketplace and one of the most recognized names in the blockchain industry. Most will know it as one of the simplest ways to get into blockchain mining.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner14} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>LUMEN</h1>
                                            <h2><b>Powering the 4th Industrial Revolution</b></h2>
                                            <h3>Flux can now offer Enterprise level infrastructure powered by Lumen Technologies, our new strategic partner and ally in building the future of the Internet. Also, node operators can now share nodes, creating a new and simple way for everyone to participate in building Web3.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner5} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>FIO</h1>
                                            <h2><b>Making Crypto Products Easier</b></h2>
                                            <h3>Zelcore & Flux is partnering with FIO Protocol and will utilize their amazing technology to improve the user experience and lower the bar for entry to the Zelcore & Flux ecosystem.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                   

                  

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer7} col-lg-6`}><Image className={styles.partnerLogo} src={partner21} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Swapzone</h1>
                                            <h2><b>Swapzone is a cryptocurrency exchange aggregator</b></h2>
                                            <h3>Browse through services, compare exchange rates, analyze and swap cryptocurrency in just one interface. All swaps are custody-free, with no registration needed.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer8} col-lg-6`}><Image className={styles.partnerLogo} src={partner20} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Simple Hold</h1>
                                            <h2><b>Secure Crypto Wallet & your pass to Crypto Universe</b></h2>
                                            <h3>Store, Send, Receive and Swap over 50+ cryptocurrencies. Collect & Store NFTs. Crypto Universe in crossplatform multi-currency wallet!</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner9} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>GSR</h1>
                                            <h2><b>Financial Services for Cryptocurrency Markets</b></h2>
                                            <h3>Experts in programmatic and bilateral trading. We offer programmatic execution services, liquidity provision, as well as custom-built options and structured products.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner13} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Kadena</h1>
                                            {/* <h2><b>Nvidia Inception program</b></h2> */}
                                            <h3>Kadena provides the world’s fastest hybrid blockchain platform, consisting of the only sharded and scalable layer-1 PoW public network, the Kuro permissioned blockchain, and the Pact smart contract language. Kadena solves the scaling challenges of Bitcoin and the security issues of Ethereum.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner2} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>CoinMetro</h1>
                                            <h2><b>Exchange and Staking Platform</b></h2>
                                            <h3>Exclusive partnership with CoinMetro. Flux & Zelcore together to develop new technologies around “ease-of-use” for fiat onramps, centralized exchange development, decentralized exchange models, and more!</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner17} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Presearch</h1>
                                            <h2><b>Presearch is a Decentralized Search Engine</b></h2>
                                            <h3>Presearch Enters Long-Term Partnership With FluxOS (FLUX) Blockchain. will provide nodes services for Presearch project in order to decentralize the internet.
                                                ‍Decentralized internet on Decentralized servers.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    {/* <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner7} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>GetBlock</h1>
                                            <h2><b>GetBlock provides ‘backup solution’ for Flux</b></h2>
                                            <h3>GetBlock enters long-term partnership with Flux (FLUX) blockchain. Flux, a cryptocurrency ecosystem for retail and corporate solutions, has chosen GetBlock as its backup node provider.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> */}

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner18} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Rosetta</h1>
                                            <h2><b>Rosetta is an open standard designed to simplify blockchain deployment and interaction.</b></h2>
                                            <h3>Rosetta API structure, aligning Flux with Coinbase’s initiatives of easy-to-use integration processes.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer16} col-lg-6`}><Image className={styles.partnerLogo} src={monero} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>MyMonero</h1>
                                            <h2><b>Send funds from anywhere, to anywhere, anytime. No bank fees, no processing delays, no holds—ever.</b></h2>
                                            <h3>The simplest way to use the next-generation private digital currency Monero, at the sweet spot between security, convenience, and features.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner11} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>js13kGames</h1>
                                            <h3><b>Js13kGames</b> is a JavaScript coding competition for <b> HTML5 Game Developers</b> The fun part of the competition is the file size limit set to <b>13 kilobytes.</b> The competition will start at <b>13:00 CEST, 13th August</b> and end at <b>13:00 CEST, 13th September 2021. </b></h3>
                                                                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner3} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>CoinRequest</h1>
                                            <h2><b>Crypto Payments Settlement Service</b></h2>
                                            <h3>Request and pay in crypto using ZelCore. Request payment in any supported crypto and send to payer via Telegram, Whatsapp, and more.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={timpi} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Timpi</h1>
                                           
                                            <h3>Timpi is a technology pioneer set to disrupt the status quo through Decentralization, Web3 and AI. Their mission is to democratize the world’s information ensuring a fair and open digital future for all.
                                                At the core of Timpi is our pioneering, proprietary web-scale index. The world’s first wholly independent and decentralized Index, joining the ranks of only five other Web Indexes : Google, Bing, Yandex, Baidu, and Brave.

                                                Coupling our expansive Web-scale Index with leading-edge AI technology, we’re engineering a suite of services that hold user privacy and data dignity paramount.
                                                </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={scalia} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Scalia</h1>
                                           
                                            <h3>Scalia Infrastructure is a pioneering platform that aggregates and scales Decentralized Physical Infrastructure Network (DePIN) resources. Their platform aims to democratize access to decentralized infrastructure resources, enabling individuals, enterprises, and organizations to leverage decentralized technologies with ease.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner26} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Contabo</h1>
                                           
                                            <h3>Contabo is a Germany-based web hosting provider that has been in operation since 2003. They offer a wide range of hosting solutions, including shared hosting, VPS hosting, and dedicated servers.

                                            Deploy virtual private servers within minutes using the Contabo API or CLI, providing quick access to resources whenever needed. Create high-speed virtual private networks, featuring unlimited and unmetered internal traffic for enhanced security and performance.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={dns} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>3DNS</h1>
                                           
                                            <h3>3DNS is the first onchain domain registrar that's compatible in both web2 and web3. This means that you can do things like set email and website records on your domain, as well as send and receive crypto from your domain.

                                            3DNS supports the most popular domain TLD's, including .com, .xyz, .co, .io, .box and more.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="row">
                        <div className="col mb-5">
                            <div className={styles.card}>
                                <div className="row">
                                    <div className={`${styles.partnerContainer} col-lg-6`}><Image className={styles.partnerLogo} src={partner28} alt="partners"/></div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h1>Kiterocket Marketing Agency</h1>
                                            <h2><b>KITEROCKET DELIVERS PR-FORWARD COMMUNICATION SERVICES DRIVEN BY CONNECTED CATEGORY EXPERTS.</b></h2>
                                            <h3>Their clients are visionary companies solving complex technology, sustainability and humanitarian challenges. We tell their stories across PR and marketing platforms to open doors, increase brand awareness, drive adoption, and achieve the exceptional.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                <div style={{marginTop: "100px"}}>
                <div className="row mb-3">
                        {/* <h6>AFFILIATES</h6> */}
                        <h4>Affiliates with Flux project</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className={styles.card2}>
                                <div className={styles.cardImg}>
                                    <Image alt="partners" src={kucoin}/> 
                                </div>
                                <div className={styles.cardText}>
                                <h1>KuCoin</h1>
                                    <h2><b>Exchange</b></h2>
                                    <h3>Trade $FLUX and various other crypto assets on KuCoin.</h3>
                                </div>

                                <div className={styles.link}>
                                    <a href="#" target="_blank">Visit now <Image alt="icon" src={linkIcon}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className={styles.card2}>
                                <div className={styles.cardImg}>
                                    <Image alt="partners" src={gemini}/> 
                                </div>
                                <div className={styles.cardText}>
                                <h1>Gemini Dollar</h1>
                                    <h2><b>Stablecoin Asset</b></h2>
                                    <h3>The world’s first regulated stablecoin. Gemini dollar combines the creditworthiness and price stability of the U.S. dollar with blockchain technology and the oversight of U.S. regulators.</h3>
                                </div>

                                <div className={styles.link}>
                                    <a href="#" target="_blank">Visit now <Image alt="icon" src={linkIcon}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className={styles.card2}>
                                <div className={styles.cardImg}>
                                    <Image alt="partners" src={paxos}/> 
                                </div>
                                <div className={styles.cardText}>
                                <h1>Paxos Standard</h1>
                                    <h2><b>Stablecoin Asset</b></h2>
                                    <h3>Transact at the Speed of the Internet. Exchange US dollars for Paxos Standard Tokens to move money anywhere, anytime. Paxos Standard combines the stability of the dollar with the efficiency of blockchain technology.</h3>
                                </div>

                                <div className={styles.link}>
                                    <a href="#" target="_blank">Visit now <Image alt="icon" src={linkIcon}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className={styles.card2}>
                                <div className={styles.cardImg}>
                                    <Image alt="partners" src={maker}/> 
                                </div>
                                <div className={styles.cardText}>
                                <h1>MakerDAO Dai</h1>
                                    <h2><b>Stablecoin Asset</b></h2>
                                    <h3>Dai is an asset-backed, hard currency for the 21st century. The first decentralized stablecoin on the Ethereum blockchain.</h3>
                                </div>

                                <div className={styles.link}>
                                    <a href="#" target="_blank">Visit now <Image alt="icon" src={linkIcon}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className={styles.card2}>
                                <div className={styles.cardImg}>
                                    <Image alt="partners" src={binance}/> 
                                </div>
                                <div className={styles.cardText}>
                                <h1>Binance</h1>
                                    <h2><b>Exchange</b></h2>
                                    <h3>Binance is one of the largest cryptocurrency exchanges in the space.</h3>
                                </div>

                                <div className={styles.link}>
                                    <a href="#" target="_blank">Visit now <Image alt="icon" src={linkIcon}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}