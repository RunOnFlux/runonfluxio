import React from "react"
import styles from "./index.module.css"
import Image from "next/image"
import kdaImg from "../../public/images/parallel/kda-logo2x.png"
import ethImg  from "../../public/images/parallel/eth-logo2x.png"
import bnbImg  from "../../public/images/parallel/bnb-logo2x.png"
import solImg  from "../../public/images/parallel/sol-logo2x.png"
import trxImg  from "../../public/images/parallel/tron-p-500.png"
import avaImg  from "../../public/images/parallel/terra-avalanche-flux-parallel-logo.png"
import ergImg  from "../../public/images/parallel/ergo-logo.png"
import algoImg from "../../public/images/parallel/algo-logo2x.png"
import polyImg from "../../public/images/parallel/poly-logo2x.png"
import baseImg from "../../public/images/parallel/base-logo2x.png"
import btcImg from "../../public/images/parallel/btc-logo2x.png"
import completedBadge from "../../public/images/parallel/completed-badge.png"
import uniswap from "../../public/images/parallel/uniswap-p-500.png"
import pancakeswap from "../../public/images/parallel/pancakeswap-p-500.png"

export function ParallelMiningPage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                    <div className={styles.header}>
                        <h1>We use <span className={styles.span1}>multiple blockchains </span><br/> so you can focus <span className={styles.span2}>on building</span></h1>
                        <p>Flux provides access to multiple blockchains through parallel assets. Flux is creating ten parallel Flux assets on ten other blockchains that will be interchangeable with the main Flux chain. This provides Flux holders with easy access to all major DeFi platforms.</p>
                        <p>To date, ten parallel assets (KDA, ETH, BSC, SOL, TRX, AVAX, ERG, ALGO, MATIC, BASE) have already been created and distributed to Flux holders, with the last being BTC which will be distributed once integration has been completed.</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className={styles.btns}>
                            <a>Discover More</a>
                            <a>Parallel Rewards</a>
                        </div>
                     </div>
                     <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={btcImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>Bitcoin</p>
                                <h3 style={{color: '#FF9900'}}>FLUX-BTC</h3>
                                <div className={styles.img2}>
                                {/* <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={ethImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>ETHEREUM</p>
                                <h3 style={{color: '#c1c1c1'}}>FLUX-ETH</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={baseImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>Coinbase</p>
                                <h3 style={{color: '#000'}}>FLUX-BASE</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={bnbImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>BINANCE</p>
                                <h3 style={{color: '#fbcd17'}}>FLUX-BSC</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={kdaImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>KADENA</p>
                                <h3 style={{color: '#f855ba'}}>FLUX-KDA</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={solImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>SOLANA</p>
                                <h3 style={{color: '#19d19f'}}>FLUX-SOL</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={trxImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>TRON</p>
                                <h3 style={{color: '#ff060a'}}>FLUX-TRX</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={avaImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>AVALANCHE</p>
                                <h3 style={{color: '#e84142'}}>FLUX-AVA</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={ergImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>ERGO</p>
                                <h3 style={{color: '#000'}}>FLUX-ERG</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={polyImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>POLYGON</p>
                                <h3 style={{color: '#8247e5'}}>FLUX-MATIC</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className={styles.card1}>
                                <div className={styles.img1}>
                                <Image src={algoImg} alt="img1" width={'0'} height={'0'}/>
                                </div>
                                <p>ALGORAND</p>
                                <h3 style={{color: '#000'}}>FLUX-ALGO</h3>
                                <div className={styles.img2}>
                                <Image src={completedBadge} alt="img1" width={'0'} height={'0'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className="container">
                   <div className="row">
                     <h3>Guides to adding <span>liquidity</span></h3>
                     <p>The Flux parallel assets have given Flux access to DeFi platforms on Ethereum, Binance Smart Chain, Solana, Tron, Avalanche and Ergo. Below are step by step guides for adding liquidity on Uniswap and PancakeSwap:</p>
                   </div>
                   <div className="row mb-5">
                    <div className={styles.swap}>
                    <Image src={uniswap} alt="img1" width={'0'} height={'0'}/>
                    <a href="#">Step by step guide to adding liquidity for ETH/FLUX on Uniswap</a>
                    </div>
                      <div className={styles.card2} style={{borderLeftColor: "#c3c3c3"}}>
                        <div>
                        <p>FLUX-ETH Contract Address</p>
                        <a>0x720cd16b011b987da3518fbf38c3071d4f0d1495</a>
                        </div>
                      </div>
                   </div>
                   <div className="row mb-4">
                    <div className={styles.swap}>
                    <Image src={pancakeswap} alt="img1" width={'0'} height={'0'}/>
                    <a href="#">Step by step guide to adding liquidity for BUSD/FLUX on Pancakeswap</a>
                    </div>
                      <div className={styles.card2} style={{borderLeftColor: "#fbcd17"}}>
                        <div>
                        <p>FLUX-BSC Contract Address</p>
                        <a>0xaff9084f2374585879e8b434c399e29e80cce635</a>
                        </div>
                      </div>
                   </div>
                   <div className="row mb-4">
                   <div className={styles.card2} style={{borderLeftColor: "#19d19f"}}>
                        <div>
                        <p>FLUX-SOL Contract Address</p>
                        <a>FLUX1wa2GmbtSB6ZGi2pTNbVCw3zEeKnaPCkPtFXxqXe</a>
                        </div>
                      </div>
                   </div>
                   <div className="row mb-4">
                   <div className={styles.card2} style={{borderLeftColor: "#ff060a"}}>
                        <div>
                        <p>FLUX-TRX Contract Address</p>
                        <a>TWr6yzukRwZ53HDe3bzcC8RCTbiKa4Zzb6</a>
                        </div>
                      </div>
                   </div>
                   <div className="row mb-4">
                   <div className={styles.card2} style={{borderLeftColor: "#ff060a"}}>
                        <div>
                        <p>FLUX-AVAX Contract Address</p>
                        <a>0xc4B06F17ECcB2215a5DBf042C672101Fc20daF55</a>
                        </div>
                      </div>
                   </div>
                   <div className="row mb-4">
                   <div className={styles.card2} style={{borderLeftColor: "#000"}}>
                        <div>
                        <p>FLUX-ERGO Contract Address</p>
                        <a>e8b20745ee9d18817305f32eb21015831a48f02d40980de6e849f886dca7f807</a>
                        </div>
                      </div>
                   </div>
                </div>
            </section>
          
        </React.Fragment>
    )
}