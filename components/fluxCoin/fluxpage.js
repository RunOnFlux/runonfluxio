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


import circleGraph from "../../public/images/flux/circleGraph.svg"
import mulitRing from "../../public/images/flux/multichainRing.svg"
import lineConecter from "../../public/images/flux/LineConecter.svg"
import ecosystemImg from "../../public/images/flux/ecosystem.svg"
import walletImg from "../../public/images/flux/wallet.png"
import classNames from "classnames";


export function Flux() {
    const url = 'https://api.runonflux.io/daemon/getzelnodecount';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let thedata = data;
        let element = document.getElementById('percent');
        let element2 = document.getElementById('percent2');
        numofnodes.innerHTML = `${thedata.data.total}`;
      })
      .catch(function(error) {
        console.log(error);
      });

    var i = 0;
    function move(elem2) {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var percentage = elem2.innerHTML.slice(0,2);
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= percentage) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    }

    var j = 0;
    function move2(elem2) {
      if (j == 0) {
        j = 1;
        var elem = document.getElementById("myBar2");
        var percentage = elem2.innerHTML.slice(0,2);
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= percentage) {
            clearInterval(id);
            j = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
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
                        <a className={styles.btnBlue}>Whitepaper</a>
                        <a className={styles.btn}>Docs</a>
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
                        <a className={styles.btn}>FluxPoUW</a>
                        <a className={styles.btn}>FluxNode</a>
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
                        <div className={styles.blue}>440,000,000 FLUX</div>
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
                        <div className={styles.blue}>123,430,000 FLUX</div>
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
                         features of multiple blockchains, such as accessto various DeFi platforms. Flux's parallel 
                         assets are interchangeable 1:1 with native Flux through the Fusion app in Zelcore.</div>
                        <br></br>
                        <a className={styles.btn}>Discover assets</a>
                    </div>
                    <div className={styles.headerright}>
                        <Image className={styles.multiImg} src={mulitRing} alt="Flux-Circle-Graph"></Image>
                    </div>
                </div>
            </div>

            <div className={styles.tron}>
                <div className={styles.tronImgCont}>
                    <div className={styles.fluxlogo}>
                        <Image src={icon10}></Image>
                    </div>
                    <div className={styles.lineConecter}>
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
                    </div>
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
                    <a className={styles.btn3}>All</a>
                    <a className={styles.btn3}>CEX</a>
                    <a className={styles.btn3}>DEX</a>
                    <a className={styles.btn3}>DeFi</a>
                    <hr></hr>
                    <div className={styles.Exparent}>
                        <div className={styles.div1}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon19}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Coinmetro
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon20}></Image>
                                </div>
                                <div className={styles.extext}>
                                    KuCoin
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon17}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Binance
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>                       
                        </div>
                        <div className={styles.div4}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon21}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Onus
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon22}></Image>
                                </div>
                                <div className={styles.extext}>
                                    STEX
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon23}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Gate.io
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon24}></Image>
                                </div>
                                <div className={styles.extext}>
                                    CoinEx
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                </div>
                                <div className={styles.extext}>
                                    TRADEOGRE
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div9}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon25}></Image>
                                </div>
                                <div className={styles.extext}>
                                    PancakeSwap
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div10}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon26}></Image>
                                </div>
                                <div className={styles.extext}>
                                    UNISWAP
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div11}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon27}></Image>
                                </div>
                                <div className={styles.extext}>
                                    HotBit
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div12}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon28}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Tokok
                                </div>
                                <a className={styles.btn}>Buy Now</a>
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
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon30}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Citex
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon31}></Image>
                                </div>
                                <div className={styles.extext}>
                                    BitForex
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div4}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon32}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Bittrex
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon33}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Bitrue
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon34}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Bitkan
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon35}></Image>
                                </div>
                                <div className={styles.extext}>
                                    ZT Global
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon36}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Mandala
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div9}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon37}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div10}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon38}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div11}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon39}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div12}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon40}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Attlas
                                </div>
                                <a className={styles.btn}>Buy Now</a>
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
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon42}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon43}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div4}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon44}></Image>
                                </div>
                                <div className={styles.extext}>
                                    ExchangeAssets
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon45}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Hitbtc
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon46}></Image>
                                </div>
                                <div className={styles.extext}>
                                    LBank
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image className={styles.autoHeight} src={icon47}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon48}></Image>
                                </div>
                                <div className={styles.extext}>
                                    SerumDex
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div9}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon49}></Image>
                                </div>
                                <div className={styles.extext}>
                                    BKEX
                                </div>
                                <a className={styles.btn}>Buy Now</a>
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
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon51}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Coinone
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon52}></Image>
                                </div>
                                <div className={styles.extext}>
                                    InstaSwap
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>                       
                        </div>
                        <div className={styles.div4}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon53}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Changelly
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image className={styles.vert} src={icon54}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon55}></Image>
                                </div>
                                <div className={styles.extext}>
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon56}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon57}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div9}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon58}></Image>
                                </div>
                                <div className={styles.extext}>
                                    Binance.us
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div10}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon59}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div11}> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon60}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div12}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image className={styles.autoHeight} src={icon61}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
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
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon63}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon64}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div4}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon65}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon66}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image className={styles.autoHeight} src={icon67}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon68}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon69}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div9}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon70}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div10}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon71}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div11}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon72}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div12}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon73}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
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
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon75}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon76}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div4}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon77}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div5}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon78}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div6}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon79}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div7}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon80}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                        <div className={styles.div8}> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image className={styles.autoHeight} src={icon81}></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a className={styles.btn}>Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.exchanges}>
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
                </div>

                <div className={styles.articles}>

                    <div className={styles.titleText2}>Latest Articles</div>

                    <br></br>

                    <div className={styles.articleGrid}>
                        <div className={styles.div1}> 
                            <div className={styles.guidesContain}>
                                <Image src={walletImg}></Image>
                                <div class={styles.guideName2}>Flux Light Node Setup</div>
                                <p className={styles.smallgrey}>Setup & monitor your Flux Nodes on both ZelCore Mobile or Desktop versions</p>
                            </div>
                        </div>
                        <div className={styles.div2}> 
                            <div className={styles.guidesContain}>
                                <Image src={walletImg}></Image>
                                <div class={styles.guideName2}>Flux Light Node Setup</div>
                                <p className={styles.smallgrey}>Setup & monitor your Flux Nodes on both ZelCore Mobile or Desktop versions</p>
                            </div>
                        </div>
                        <div className={styles.div3}> 
                            <div className={styles.guidesContain}>
                                <Image src={walletImg}></Image>
                                <div class={styles.guideName2}>Flux Light Node Setup</div>
                                <p className={styles.smallgrey}>Setup & monitor your Flux Nodes on both ZelCore Mobile or Desktop versions</p>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    );
}