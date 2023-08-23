/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.css"
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import fluxCircle from "../../public/images/flux/Flux-Circle-Thing.svg"
import icon1 from "../../public/images/flux/Volume.svg"
import icon2 from "../../public/images/flux/Union.svg"
import icon3 from "../../public/images/flux/Arrows.svg"
import icon4 from "../../public/images/flux/algo.svg"
import icon5 from "../../public/images/flux/block.svg"
import icon6 from "../../public/images/flux/shield.svg"
import icon7 from "../../public/images/flux/blocktime.svg"
import icon8 from "../../public/images/flux/max supply.svg"
import icon9 from "../../public/images/flux/halving.svg"
import icon10 from "../../public/images/flux/FluxLogo.svg"
import icon11 from "../../public/images/flux/tron.svg"
import icon12 from "../../public/images/flux/Vector.svg"
import icon13 from "../../public/images/flux/kda.svg"
import icon14 from "../../public/images/flux/ergo.svg"
import icon15 from "../../public/images/flux/eth.svg"
import icon16 from "../../public/images/flux/terra.svg"
import icon17 from "../../public/images/flux/bnb.svg"
import icon18 from "../../public/images/flux/sol.svg"
import icon19 from "../../public/images/flux/CoinMetro.svg"
import icon20 from "../../public/images/flux/kucoin_logo.svg"
import icon21 from "../../public/images/flux/Mask-Group-93.png"
import icon22 from "../../public/images/flux/stex.svg"
import icon23 from "../../public/images/flux/gate.io.svg"
import icon24 from "../../public/images/flux/coinex.svg"
import icon25 from "../../public/images/flux/pancakeswap-p-500.png"
import icon26 from "../../public/images/flux/uniswap-p-500.png"
import icon27 from "../../public/images/flux/hotbit.svg"
import icon28 from "../../public/images/flux/tokok.svg"
import icon29 from "../../public/images/flux/safe.svg"
import icon30 from "../../public/images/flux/kr.co.citex.citexclient_1.png"
import icon31 from "../../public/images/flux/bitforex.svg"
import icon32 from "../../public/images/flux/bittrex_flux.svg"
import icon33 from "../../public/images/flux/bitrue.png"
import icon34 from "../../public/images/flux/Mask-Group-92.png"
import icon35 from "../../public/images/flux/ztz.png"
import icon36 from "../../public/images/flux/mandala.svg"
import icon37 from "../../public/images/flux/Logo_CoinDCX.svg"
import icon38 from "../../public/images/flux/icon_nav_logo.00fdaab1.svg"
import icon39 from "../../public/images/flux/52646ad0ee66e6fa85f0ab27d8cef163-logo.svg"
import icon40 from "../../public/images/flux/Hue_Saturation-1_1.png"
import icon41 from "../../public/images/flux/7b.svg"
import icon42 from "../../public/images/flux/log333o-p-500.png"
import icon43 from "../../public/images/flux/simpleswap_logo_b-p-500.png"
import icon44 from "../../public/images/flux/exchange.png"
import icon45 from "../../public/images/flux/222222221-p-500.png"
import icon46 from "../../public/images/flux/9dce065d6e7b38462b629018d776f05654197706-p-500.png"
import icon47 from "../../public/images/flux/swftexchange-p-500.png"
import icon48 from "../../public/images/flux/serum-srmgg-logo.svg"
import icon49 from "../../public/images/flux/Mask-Group-100.png"
import icon50 from "../../public/images/flux/Mask-Group-101.png"
import icon51 from "../../public/images/flux/Group-10185.png"
import icon52 from "../../public/images/flux/Mask-Group-103.png"
import icon53 from "../../public/images/flux/changelly-icon.svg"
import icon54 from "../../public/images/flux/logo.bc59d47-p-500.png"
import icon55 from "../../public/images/flux/U-bitpanda-logo.svg"
import icon56 from "../../public/images/flux/AtomicDEX_Horizontal-Dark.svg"
import icon57 from "../../public/images/flux/images.png"
import icon58 from "../../public/images/flux/bnb-logo2x.png"
import icon59 from "../../public/images/flux/layer101_1_.svg"
import icon60 from "../../public/images/flux/wazirx-logo-blue.8f74de7a-p-500.png"
import icon61 from "../../public/images/flux/aexlogo-freelogovectors.net_-400x133.png"
import icon62 from "../../public/images/flux/cb7bc06.svg"
import icon63 from "../../public/images/flux/crypto-com-seeklogo.com-p-500.png"
import icon64 from "../../public/images/flux/la_logo_blue_400.e27200c5.svg"
import icon65 from "../../public/images/flux/Frame_4123bb.png"
import icon66 from "../../public/images/flux/download-14.png"
import icon67 from "../../public/images/flux/Group-10438.png"
import icon68 from "../../public/images/flux/logolight.png"
import icon69 from "../../public/images/flux/flux-biconomy.png"
import icon70 from "../../public/images/flux/cointigerlogo-freelogovectors.net.svg"
import icon71 from "../../public/images/flux/1a0236252c74-p-500.png"
import icon72 from "../../public/images/flux/logo-8.png"
import icon73 from "../../public/images/flux/Page-1.png"
import icon74 from "../../public/images/flux/coinmark-p-500.png"
import icon75 from "../../public/images/flux/logo-sparkle-violet4x.png"
import icon76 from "../../public/images/flux/logo-light-v2.png"
import icon77 from "../../public/images/flux/798px-Logo_Indodax.png"
import icon78 from "../../public/images/flux/logo-full.svg"
import icon79 from "../../public/images/flux/DEX_LOGO_BLUE-1.svg"
import icon80 from "../../public/images/flux/logo5.0a10841.png"
import icon81 from "../../public/images/flux/logo-desktop-p-500.png"
import icon82 from "../../public/images/flux/download.png"


import lineLogos from "../../public/images/flux/logoline.svg"

import circleGraph from "../../public/images/flux/circleGraph.svg"
import mulitRing from "../../public/images/flux/multichainRing.svg"
import lineConecter from "../../public/images/flux/LineConecter.svg"
import ecosystemImg from "../../public/images/flux/ecosystem.svg"
import walletImg from "../../public/images/flux/wallet.png"
import classNames from "classnames";


export function Flux() {
    let circsup = 0;
    const url = 'https://explorer.runonflux.io/api/statistics/circulating-supply';
    const url2 = 'https://api.runonflux.io/daemon/getzelnodecount';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let thedata = data;
            let roundedData = String(thedata).split('.')[0];
            circsup = parseInt(roundedData);
            move(roundedData);
        })
        .catch(function (error) {
            console.log(error);
        });

    fetch(url2)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let thedata = data;
            let whatweneed = "cumulus-enabled";
            let cumulus = thedata.data["cumulus-enabled"];
            let stratus = thedata.data["stratus-enabled"];
            let nimbus = thedata.data["nimbus-enabled"];
            let cumulusAmount = parseInt(cumulus) * 1000;
            let stratisAmount = parseInt(stratus) * 40000;
            let nimbusAmount = parseInt(nimbus) * 12500;
            let locked = cumulusAmount + stratisAmount + nimbusAmount;
            // stratus 40k
            // nimbus 12500
            move2(locked);
        })
        .catch(function (error) {
            console.log(error);
        });

    var i = 0;
    function move(percent) {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var elemnum = document.getElementById("percent");
            var elemtext = document.getElementById("amount");
            var percentage = parseInt(percent) / 440000000 * 100;
            percentage = Math.round(percentage)
            console.log(percent);
            var width = percentage;
            elemnum.innerHTML = width + "%";
            elem.style.width = width + "%";

            let ccnum = String(percent);
            let ccnumspaced = ccnum.match(/.{1,3}/g);
            elemtext.innerHTML = ccnumspaced.join(',') + " FLUX";
        }
    }


    var j = 0;
    function move2(percent) {
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar2");
            var elemnum = document.getElementById("percent2");
            var elemtext = document.getElementById("amount2");
            var percentage = parseInt(percent) / circsup * 100;
            percentage = Math.round(percentage)
            var width = percentage;
            elemnum.innerHTML = width + "%";
            elem.style.width = width + "%";

            let ccnum = String(percent);
            let ccnumspaced = ccnum.match(/.{1,3}/g);
            elemtext.innerHTML = ccnumspaced.join(',') + " FLUX";
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className={styles.spacer}>
                    <div className={styles.headerleft}>
                        <div className={styles.titleText}>A world <br></br> powered by <span className={styles.blue}>Flux</span></div>
                        <div className={styles.subText}>Flux cryptocurrency powers the ecosystem and is used to purchase resources, collateralize
                            nodes, and fuel transactions on FluxOS. It rewards both miners for validating transactions and FluxNode
                            operators for providing computational resources</div>
                        <br></br>
                        <a href="https://fluxwhitepaper.app.runonflux.io/" className={styles.btnBlue}>Whitepaper</a>
                        <a href="https://docs.runonflux.io/" className={styles.btn}>Docs</a>
                    </div>
                    <div className={styles.headerright}>
                        <Image className={styles.headerImg} src={fluxCircle} alt="Flux-Circle-Thing"></Image>
                    </div>
                </div>

                <div className={styles.headerInfo}>
                    <div className={styles.infoCard}>
                        <div className={styles.iconCircle}>
                            <Image src={icon1}></Image>
                        </div>
                        <div className={styles.infoCardText}>
                            <div className={styles.blue}>25.4M+</div>
                            <div className={styles.subText}>TOTAL VOLUME</div>
                            <div className={styles.blueLine}></div>
                        </div>
                    </div>
                    <div className={styles.infoCardMiddle}>
                        <div className={styles.iconCircle}>
                            <Image src={icon2}></Image>
                        </div>
                        <div className={styles.infoCardText}>
                            <div className={styles.blue}>4.6M+ Ts/s</div>
                            <div className={styles.subText}>HASH RATE</div>
                            <div className={styles.blueLine}></div>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.iconCircle}>
                            <Image src={icon3}></Image>
                        </div>
                        <div className={styles.infoCardText}>
                            <div className={styles.blue}>342k+</div>
                            <div className={styles.subText}>TRANSACTIONS</div>
                            <div className={styles.blueLine}></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.asset}>
                <div className={styles.spacer}>
                    <div className={styles.headerleft}>
                        <div className={styles.titleText2}>The <span className={styles.blue}>Flux</span> Asset</div>
                        <div className={styles.subText}>The total block reward on the Flux
                            blockchain is divided equally between POW miners and FluxNode operators
                            for every block. In addition, there is a hierarchy among the different
                            FluxNode tiers, with the most computationally heavy FluxNode entitled
                            to the largest share of the initial 50% distribution reserved for FluxNode.</div>
                        <br></br>
                        <a href="https://pouwlitepaper.app.runonflux.io/" className={styles.btn}>FluxPoUW</a>
                        <a href="https://www.runonflux.io/flux-nodes.html" className={styles.btn}>FluxNode</a>
                    </div>
                    <div className={styles.headerright}>
                        <Image className={styles.assetImg} src={circleGraph} alt="Flux-Circle-Graph"></Image>
                    </div>
                </div>
            </div>

            <div className={styles.tokenomics}>
                <div className={styles.tokenHead}>
                    <div className={styles.subTitle}><span className={styles.blue}>Flux</span> Tokenomics</div>
                    <div className={styles.subTitle2}><span className={styles.paddingRight}>Max Supply</span>
                        <span className={styles.blue}>440,000,000 FLUX</span></div>
                    <hr></hr>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.left}>
                        <div className={styles.barTitle}>Circulating Supply</div>
                    </div>
                    <div className={styles.right}>
                        <div id="amount" className={styles.blue}>440,000,000 FLUX</div>
                        <div id="percent" className={styles.centerBlue}>73%</div>

                        <div className={styles.myProgress} id="myProgress">
                            <div className={styles.myBar} id="myBar"></div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className={styles.progressBar2}>
                    <div className={styles.left}>
                        <div className={styles.barTitle}>Locked Supply <span className={styles.hidden}>_||||</span></div>
                    </div>
                    <div className={styles.right}>
                        <div id="amount2" className={styles.blue}>123,430,000 FLUX</div>
                        <div id="percent2" className={styles.centerBlue}>42%</div>

                        <div className={styles.myProgress} id="myProgress2">
                            <div className={styles.myBar2} id="myBar2"></div>
                        </div>
                    </div>
                    <hr className={styles.hidden}></hr>
                </div>
            </div>

            <div className={styles.statCards}>
                <div className={styles.div1}>
                    <div className={styles.statCard}>
                        <div className={styles.statImgContainer}>
                            <Image src={icon4} className={styles.statImg}></Image>
                        </div>
                        <div className={styles.smallBlackText}>Hashing Algorithm</div>
                        <div className={styles.subTitle2}>FLUXPoUW</div>
                        <div className={styles.smallBottomText}>Equihash 125_4</div>
                    </div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.statCard}>
                        <div className={styles.statImgContainer}>
                            <Image src={icon5} className={styles.statImg}></Image>
                        </div>
                        <div className={styles.smallBlackText}>Block Reward</div>
                        <div className={styles.subTitle2}>37.5 FLUX</div>
                    </div>
                </div>
                <div className={styles.div3}>
                    <div className={styles.statCard}>
                        <div className={styles.statImgContainer}>
                            <Image src={icon6} className={styles.statImg}></Image>
                        </div>
                        <div className={styles.smallBlackText}>Reward Distribution</div>
                        <div className={styles.subTitle2}>50% POW - 50% NODE</div>
                    </div>
                </div>
                <div className={styles.div4}>
                    <div className={styles.statCard}>
                        <div className={styles.statImgContainer}>
                            <Image src={icon7} className={styles.statImg}></Image>
                        </div>
                        <div className={styles.smallBlackText}>Block Time</div>
                        <div className={styles.subTitle2}>2 MINUTES</div>
                    </div>
                </div>
                <div className={styles.div5}>
                    <div className={styles.statCard}>
                        <div className={styles.statImgContainer}>
                            <Image src={icon8} className={styles.statImg}></Image>
                        </div>
                        <div className={styles.smallBlackText}>Max Supply</div>
                        <div className={styles.subTitle2}>440,000,000</div>
                    </div>
                </div>
                <div className={styles.div6}>
                    <div className={styles.statCard}>
                        <div className={styles.statImgContainer}>
                            <Image src={icon9} className={styles.statImg}></Image>
                        </div>
                        <div className={styles.smallBlackText}>Halving</div>
                        <div className={styles.subTitle2}>2,5 YEARS</div>
                    </div>
                </div>
            </div>

            <div className={styles.asset}>
                <div className={styles.spacer}>
                    <div className={styles.headerleft}>
                        <div className={styles.titleText2}><span className={styles.blue}>Flux</span> is a <span className={styles.blue}>Multichain</span> <br></br>Cryptocurrency</div>
                        <div className={styles.subText}>With Flux's parallel assets, you can leverage the beneficial
                            features of multiple blockchains, such as acceshttps://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.mdsto various DeFi platforms. Flux's parallel
                            assets are interchangeable 1:1 with native Flux through the Fusion app in Zelcore.</div>
                        <br></br>
                        <a href="https://www.runonflux.io/parallel.html" className={styles.btn}>Discover assets</a>
                    </div>
                    <div className={styles.headerright}>
                        <Image className={styles.multiImg} src={mulitRing} alt="Flux-Circle-Graph"></Image>
                    </div>
                </div>
            </div>

            <div className={styles.tron}>
                <div className={styles.tronImgCont}>
                    <div className={styles.linelogoclass}>
                        <Image src={lineLogos}></Image>
                    </div>
                    {/* <div className={styles.fluxlogo}>
                        <Image src={icon10}></Image>
                    </div> */}
                    {/* <div className={styles.lineConecter}>
                        <Image src={lineConecter}></Image>
                    </div>
                    <div className={styles.logoLinks}>
                        <a className={styles.circles}>
                            <Image src={icon11}></Image>
                        </a>
                        <a className={styles.circles2}>
                            <Image src={icon12}></Image>
                        </a>
                        <a className={styles.circles3}>
                            <Image src={icon13}></Image>
                        </a>
                        <a className={styles.circles4}>
                            <Image src={icon14}></Image>
                        </a>
                        <a className={styles.circles5}>
                            <Image src={icon15}></Image>
                        </a>
                        <a className={styles.circles6}>
                            <Image src={icon16}></Image>
                        </a>
                        <a className={styles.circles7}>
                            <Image src={icon17}></Image>
                        </a>
                        <a className={styles.circles8}>
                            <Image src={icon18}></Image>
                        </a>
                    </div> */}
                </div>
            </div>

            <div className={styles.eco}>
                <div className={styles.textCont}>
                    <div className={styles.titleText2}>The<span className={styles.blue}> Flux</span> Ecosystem</div>
                    <div className={styles.subText}>
                        The Flux Ecosystem is a state-of-the-art blockchain network that
                        encompasses several integral components, including parallel assets with Layer 1 blockchains like
                        Solana, AVAX, and ALGO.
                        <br></br>
                        <br></br>
                        Additionally, it encompasses projects that are being built in collaboration with FluxLabs, a diverse and
                        vibrant global community, and its own self-custody wallet, Zelcore, which is renowned for its safety and
                        decentralization. Other essential elements of the Flux Ecosystem include Flux Cloud, FluxNodes, and various
                        decentralized applications (dApps) that operate on the Flux network.</div></div>

                <Image src={ecosystemImg}></Image>
            </div>

            <div className={styles.exchanges}>
                <div className={styles.titleText2}>Exchanges</div>
                <div className={styles.subText2}>
                    Flux is a digital asset that is listed on several different exchanges, each of which offers various features
                    such as buying and selling.

                    <br></br>
                    <br></br>

                    <i className={styles.subText3}>It is important to note that none of these exchanges are controlled by Flux, and in case of any issues with
                        any of these exchanges, you must address them directly with the exchange.</i>

                    <br></br>
                    <br></br>

                    For more markets see <a href="https://coinmarketcap.com/currencies/zel/m">CoinMarketCap </a>or <a href="https://www.coingecko.com/en/coins/flux-zelcash">CoinGecko.</a>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <hr></hr>
                <div className={styles.Exparent}>
                    <div className={styles.div1}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon19}></Image>
                            </div>
                            <div className={styles.extext}>
                                Coinmetro
                                <a href="https://go.coinmetro.com/exchange/FLUX/buy" className={styles.btn}>Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon20}></Image>
                            </div>
                            <div className={styles.extext}>
                                KuCoin
                                <a href="https://trade.kucoin.com/FLUX-USDT" className={styles.btn}>Buy Now</a>

                            </div>

                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon17}></Image>
                            </div>
                            <div className={styles.extext}>
                                Binance
                                <a href="https://www.binance.com/en/trade/FLUX_USDT?ref=GSWE4RZE" className={styles.btn}>Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon21}></Image>
                            </div>
                            <div className={styles.extext}>
                                Onus
                                <a href="https://goonus.io/en/markets/FLUX/" className={styles.btn}>Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon22}></Image>
                            </div>
                            <div className={styles.extext}>
                                STEX
                                <a href="https://app.stex.com/en/trading/pair/BTC/FLUX/1D" className={styles.btn}>Buy Now</a>

                            </div>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon23}></Image>
                            </div>
                            <div className={styles.extext}>
                                Gate.io
                                <a href="https://www.gate.io/trade/FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon24}></Image>
                            </div>
                            <div className={styles.extext}>
                                CoinEx
                                <a href="https://www.coinex.com/exchange/flux-usdt" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div8}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon82}></Image>
                            </div>
                            <div className={styles.extext}>
                                TRADEOGRE
                                <a href="https://tradeogre.com/exchange/BTC-FLUX" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div9}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon25}></Image>
                            </div>
                            <div className={styles.extext}>
                                PancakeSwap
                                <a href="https://pancakeswap.finance/info/pool/0xa19d4ff09b6e0defd6032859ae13c4ca53c341dd" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div10}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon26}></Image>
                            </div>
                            <div className={styles.extext}>
                                UNISWAP
                                <a href="https://info.uniswap.org/#/pools/0x5d1461990f636d35030cb603559d6a9d4487f9ca" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div11}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon27}></Image>
                            </div>
                            <div className={styles.extext}>
                                HotBit
                                <a href="https://www.hotbit.io/exchange?symbol=FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div12}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon28}></Image>
                            </div>
                            <div className={styles.extext}>
                                Tokok
                                <a href="https://www.tokok.com/market?symbol=ZEL_BTC" className={styles.btn}>Buy Now</a>
                            </div>
                        </div></div>
                </div>
                <div className={styles.Exparent}>
                    <div className={styles.div1}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon29}></Image>
                            </div>
                            <div className={styles.extext}>
                                SafeTrade
                                <a href="https://safe.trade/trading/fluxbtc" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon30}></Image>
                            </div>
                            <div className={styles.extext}>
                                Citex
                                <a href="https://trade.citex.co.kr/trade/FLUX_BTC" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon31}></Image>
                            </div>
                            <div className={styles.extext}>
                                BitForex
                                <a href="https://www.bitforex.com/en/spot/flux_usdt" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon32}></Image>
                            </div>
                            <div className={styles.extext}>
                                Bittrex
                                <a href="https://bittrex.com/Market/Index?MarketName=USDT-FLUX" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon33}></Image>
                            </div>
                            <div className={styles.extext}>
                                Bitrue
                                <a href="https://www.bitrue.com/trade/flux_usdt" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon34}></Image>
                            </div>
                            <div className={styles.extext}>
                                Bitkan
                                <a href="https://bitkan.pro/trade/FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon35}></Image>
                            </div>
                            <div className={styles.extext}>
                                ZT Global
                                <a href="https://www.ztbzh.net/exchange?coin=FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div8}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon36}></Image>
                            </div>
                            <div className={styles.extext}>
                                Mandala
                                <a href="https://trade.mandala.exchange/en/trade/basic/FLUX_BTC" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div9}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon37}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://coindcx.com/trade/FLUXUSDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div10}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon38}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.pionex.com/en-US/trade/FLUX_USDT/pionex.v2" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div11}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon39}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://stealthex.io/?from=flux&to=usdttrc20" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div12}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon40}></Image>
                            </div>
                            <div className={styles.extext}>
                                Attlas
                                <a href="https://attlas.io/en/spot/FLUX_VNDC" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Exparent}>
                    <div className={styles.div1}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon41}></Image>
                            </div>
                            <div className={styles.extext}>
                                Sevenb
                                <a href="https://sevenb.io/" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon42}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.tokocrypto.com/trade/FLUX_BTC" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon43}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://simpleswap.io/coins/flux" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon44}></Image>
                            </div>
                            <div className={styles.extext}>
                                ExchangeAssets
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon45}></Image>
                            </div>
                            <div className={styles.extext}>
                                Hitbtc
                                <a href="https://hitbtc.com/flux-to-usdt" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon46}></Image>
                            </div>
                            <div className={styles.extext}>
                                LBank
                                <a href="https://www.lbank.info/exchange/flux/usdt" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image className={styles.autoHeight} src={icon47}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.allchainbridge.com/#/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div8}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon48}></Image>
                            </div>
                            <div className={styles.extext}>
                                SerumDex
                                <a href="https://portal.projectserum.com/#tabSection" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div9}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon49}></Image>
                            </div>
                            <div className={styles.extext}>
                                BKEX
                                <a href="https://www.bkex.com/trade/FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className={styles.Exparent}>
                    <div className={styles.div1}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon50}></Image>
                            </div>
                            <div className={styles.extext}>
                                Bolsadx
                                <a href="https://exchange.bolsadx.lat/en/trade/FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon51}></Image>
                            </div>
                            <div className={styles.extext}>
                                Coinone
                                <a href="https://coinone.co.kr/exchange/trade/flux/krw" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon52}></Image>
                            </div>
                            <div className={styles.extext}>
                                InstaSwap
                                <a href="https://instaswap.io/" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image className={styles.autoHeight} src={icon53}></Image>
                            </div>
                            <div className={styles.extext}>
                                Changelly
                                <a href="https://changelly.com/buy-crypto" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image className={styles.vert} src={icon54}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://swapspace.co/?to=flux&amount=0.1" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon55}></Image>
                            </div>
                            <div className={styles.extext}>
                            </div>
                            <a href="https://www.bitpanda.com/en/prices/flux-flux#" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon56}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://atomicdex.io/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div8}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon57}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.digifinex.com/en-ww/trade/USDT/FLUX" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div9}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.circle}>
                                <Image src={icon58}></Image>
                            </div>
                            <div className={styles.extext}>
                                Binance.us
                                <a href="https://www.binance.us/en/trade/pro/FLUX_USDT" className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div10}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon59}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://swyftx.com/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div11}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon60}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://wazirx.com/exchange/FLUX-USDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div12}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image className={styles.autoHeight} src={icon61}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.aex.com/page/new_trade.html#/?symbol=flux_usdt" className={styles.btn}>Buy Now</a>
                        </div></div>
                </div>
                <div className={styles.Exparent}>
                    <div className={styles.div1}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon62}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.bitget.com/en/spot/FLUXUSDT_SPBL" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon63}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://crypto.com/exchange/trade/spot/FLUX_USDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon64}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://latoken.com/exchange/FLUX_USDT?utm_source=new_listing&utm_medium=new_listing&utm_campaign=FLUX_listing&shortlink=bgib6m4b&c=FLUX_listing&pid=new_listing&deep_link_value=latokenapp://trade/FLUX/USDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon65}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://sunflowercorp.com/futures/flux-to-usdt" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon66}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.xt.com/trade/flux_usdt" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image className={styles.autoHeight} src={icon67}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://swap.kaddex.com/?token0=FLUX&token1=KDA" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon68}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.billance.com/spot/exchange/FLUX_USDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div8}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon69}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://biconomy.com/exchange?coin=FLUX_USDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div9}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon70}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.cointiger.com/en-us/#/trade_center?coin=flux_usdt" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div10}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon71}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.bityard.com/en-US/trade/spot/FLUXUSDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div11}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon72}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://swap.menu/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div12}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon73}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://swapzone.io/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Exparent}>
                    <div className={styles.div1}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon74}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://www.coinmark.vip/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon75}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://spectrum.fi/dex" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon76}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://phemex.com/spot/trade/FLUXUSDT" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div4}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon77}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://indodax.com/market/FLUXIDR" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon78}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://wirexapp.com/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div6}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon79}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://digitalexchange.id/basic-trading/FLUXIDR" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div7}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image src={icon80}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://invest.matrixport.com/" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                    <div className={styles.div8}>
                        <div className={styles.Exchangecard}>
                            <div className={styles.rect}>
                                <Image className={styles.autoHeight} src={icon81}></Image>
                            </div>
                            <div className={styles.extext}>

                            </div>
                            <a href="https://changenow.io/?from=fluxmainnet&to=btc" className={styles.btn}>Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={styles.exchanges}>
                    <div className={styles.titleText2}>Wallets</div>
                    <div className={styles.subText2}>
                        Flux is a digital asset that is listed on several different wallets, each of which offers various features 
                        such as trading and staking.

                        <br></br>
                        <br></br>

                        <i className={styles.subText3}>It is important to note that none of these exchanges are controlled by Flux, and in case of any issues with
                        any of these exchanges, you must address them directly with the exchange.</i>

                        <br></br>
                        <br></br>

                        For more markets see <a href="https://coinmarketcap.com/currencies/zel/m">CoinMarketCap </a>or <a href="https://www.coingecko.com/en/coins/flux-zelcash">CoinGecko.</a>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a className={styles.btn3}>Mainnet</a>
                    <a className={styles.btn3}>BSC</a>
                    <a className={styles.btn3}>ETH</a>
                    <a className={styles.btn3}>DeFi</a>
                    <hr></hr>
                    <div className={styles.walletGrid}>
                        <div className={styles.div1}> 
                            <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                        <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                        <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div4}> 
                            <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                            <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                        <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                            <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                            <div className={styles.walletCard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.walletText}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Download</a>
                            </div>
                        </div>
                    </div>
                </div> */}
        </main>
    );
}