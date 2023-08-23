import React from "react";
import { DappCard1 } from "./dappCard";
import { DappCard2 } from "./dappCard";
import { DappCard3 } from "./dappCard";
import infrastructure3 from "../../public/images/dapps/infrastructure-3.jpeg"
import logo3 from "../../public/images/dapps/infrastructure-logo-3.jpeg"
import dapp from "../../public/images/dapps/dapp-2.jpeg"
import dapplogo from "../../public/images/dapps/dapp-logo-2.png"
import infrastructure13 from "../../public/images/dapps/infrastructure-13.png"
import logo13 from "../../public/images/dapps/infrastructure-logo-13.svg"
import infrastructure14 from "../../public/images/dapps/infrastructure-14.jpeg"
import logo14 from "../../public/images/dapps/infrastructure-logo-14.png"
import infrastructure15 from "../../public/images/dapps/infrastructure-15.jpeg"
import logo15 from "../../public/images/dapps/infrastructure-logo-15.png"
import infrastructure16 from "../../public/images/dapps/infrastructure-16.jpeg"
import logo16 from "../../public/images/dapps/infrastructure-logo-16.png"
import infrastructure17 from "../../public/images/dapps/infrastructure-17.jpeg"
import logo17 from "../../public/images/dapps/infrastructure-logo-17.png"
import infrastructure20 from "../../public/images/dapps/infrastructure-20.jpeg"
import logo20 from "../../public/images/dapps/infrastructure-logo-20.png"
import infrastructure21 from "../../public/images/dapps/infrastructure-21.jpeg"
import logo21 from "../../public/images/dapps/infrastructure-logo-21.png"
import infrastructure22 from "../../public/images/dapps/infrastructure-22.jpeg"
import logo22 from "../../public/images/dapps/infrastructure-logo-22.svg"
import infrastructure23 from "../../public/images/dapps/infrastructure-23.jpeg"
import logo23 from "../../public/images/dapps/infrastructure-logo-23.png"
import infrastructure24 from "../../public/images/dapps/infrastructure-24.jpeg"
import logo24 from "../../public/images/dapps/infrastructure-logo-24.jpeg"
import infrastructure25 from "../../public/images/dapps/infrastructure-25.jpeg"
import logo25 from "../../public/images/dapps/infrastructure-logo-25.png"
import infrastructure26 from "../../public/images/dapps/infrastructure-26.jpeg"
import logo26 from "../../public/images/dapps/infrastructure-logo-26.png"
import infrastructure27 from "../../public/images/dapps/infrastructure-27.jpeg"
import logo27 from "../../public/images/dapps/infrastructure-logo-27.png"
import infrastructure28 from "../../public/images/dapps/infrastructure-28.jpeg"
import logo28 from "../../public/images/dapps/infrastructure-logo-28.png"
import infrastructure29 from "../../public/images/dapps/infrastructure-29.jpeg"
import logo29 from "../../public/images/dapps/infrastructure-logo-29.svg"
import infrastructure30 from "../../public/images/dapps/infrastructure-30.jpeg"
import logo30 from "../../public/images/dapps/infrastructure-logo-30.png"
import infrastructure31 from "../../public/images/dapps/infrastructure-31.jpeg"
import logo31 from "../../public/images/dapps/infrastructure-logo-31.png"
import infrastructure32 from "../../public/images/dapps/infrastructure-32.jpeg"
// import logo32 from "../../public/images/dapps/infr32"
import infrastructure33 from "../../public/images/dapps/infrastructure-33.jpeg"
import logo33 from "../../public/images/dapps/infrastructure-logo-33.png"
import infrastructure34 from "../../public/images/dapps/infrastructure-34.jpeg"
import logo34 from "../../public/images/dapps/infrastructure-logo-34.svg"
import infrastructure36 from "../../public/images/dapps/infrastructure-36.jpeg"
import logo36 from "../../public/images/dapps/infrastructure-logo-36.png"
import infrastructure45 from "../../public/images/dapps/infrastructure-45.jpeg"
import logo45 from "../../public/images/dapps/infrastructure-logo-45.png"


export function Dapp(){
    return(
        <React.Fragment>
               <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure3} logo={logo3} title={'Timpi'} name={'Timpi'} content={'is the worlds first completely decentralized search engine. Their mission is to deliver freedom and unbiased access to information. Not only freedom to have your Data and Privacy protected, but also to have the freedom to make your own choices without being manipulated.'} btn1={'Infrastructure'} btn2={'Social'} btn3={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard1 header={dapp} logo={dapplogo} title={'Online Complier'} name={'Online Complier'} content={'s a a web-based tool powered by Collegeek Online Tutorials. This tool can be used to learn, build, run test your C, C++, JAVA, Python or Javascript code.'} btn1={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure13} logo={logo13} title={'Sushiswap'} name={'Sushiswap'} content={'is a decentralized exchange, a decentralized lending market, yield instruments, an auction platform, an AMM framework and staking derivatives.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure14} logo={logo14} title={'KDLaunch'} name={'KDLaunch'} content={'The first decentralized IDO platform on Kadena.The term for this is a launchpad, but this term isn’t enough to describe what we do here at KDLaunch. When you participate in an IDO you are making an investment in a new product. KDLaunch will make sure that it is the best investment you can be making.'} btn1={'Infrastructure'} btn2={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure15} logo={logo15} title={'KDSwap'} name={'KDSwap'} content={'is the first gas-free decentralized exchange. This dApp is built on the Kadena blockchain, and is running on decentralized Flux nodes for a true web 3.0 experience. Users can trade KDA and all KDA tokens on KDSwap without paying any gas fees, thanks to Kadena’s innovative concept of public gas stations..'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure16} logo={logo16} title={'Yearn Finance'} name={'Yearn Finance'} content={'is a suite of products in Decentralized Finance (DeFi) that provides yield generation, lending aggregation, and more on the blockchain. The protocol is maintained by various independent developers and is governed by YFI holders.'} btn1={'Infrastructure'} btn2={'Dapp'} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure17} logo={logo17} title={'GMX Exchange'} name={'GMX'} content={'is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades.Trading is supported by a unique multi-asset pool that earns liquidity providers fees from market making, swap fees and leverage trading.Dynamic pricing is supported by Chainlink Oracles and an aggregate of prices from leading volume exchanges.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure20} logo={logo20} title={'Carbon Paws'} name={'Carbon Paws'} content={'is a decentralized EnergyWeb Chain Trading Platform. EnergyWeb Doge (“EWD”) is a project on a mission to offset the carbon emissions produced by the Dogecoin Proof-of-work (“POW”) blockchain. POW chains are run and validated by miners, and have been the focus of many critics lately.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure21} logo={logo21} title={'Osmosis'} name={'Osmosis'} content={'is an advanced AMM protocol built using the Cosmos SDK that will allow developers to design, build and deploy their own customized AMMs.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure22} logo={logo22} title={'Pangolin'} name={'Pangolin'} content={'is a community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic distribution–powered by Avalanche. Pangolin brings you the best trading opportunities to find and maximize your yield.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure23} logo={logo23} title={'Ergo'} name={'The Ergo Auction House'} content={'is the open-source, decentralized NFT marketplace on the Ergo blockchain. Whether visual, audio or a custom token, users can list an NFT on Ergo Auctions or search for other NFTs to acquire.'} btn1={'Infrastructure'} btn2={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure24} logo={logo24} title={'ErgoNames'} name={'ErgoNames'} content={'is Making ERGO human-friendly..'} btn1={'Infrastructure'} btn2={'Dapp'} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure25} logo={logo25} title={'Aave'} name={'Aave'} content={'is a decentralised non-custodial liquidity market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralised (perpetually) or undercollateralised (one-block liquidity) fashion.'} btn1={'Infrastructure'} btn2={''} btn3={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure26} logo={logo26} title={'Haven'} name={'Haven Protocol'} content={'is the world’s only network of private stable assets. Built on Monero and including xUSD, the world’s first private stablecoin. Haven Protocol will change the world by enabling users to hold crypto, in private, without the risk of volatility.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={''}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure27} logo={logo27} title={'Keep3r'} name={'Keep3r'} content={'network is a decentralized keeper network – it connects projects off-loading devops jobs and external teams ready to help. A Job is a term used to refer to a smart contract which is awaiting for an external entity to perform an action.'} btn1={'Infrastructure'} btn2={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure28} logo={logo28} title={'Docushield'} name={'Docushield'} content={'is taking what you need to keep private and secure, and using the most advanced forms of coding, encryption, smart contracts & data scalability to deliver a solution that is easy for everyone to use, impossible to hack, cost effective and will ensure that your documents are forever secure and accessible.'} btn1={'Infrastructure'} btn2={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure29} logo={logo29} title={'Liquity Developer UI'} name={'Liquity'} content={'is a decentralized borrowing protocol that allows you to draw 0% interest loans against Ether used as collateral. Loans are paid out in LUSD - a USD pegged stablecoin, and need to maintain a minimum collateral ratio of only 110%.In addition to the collateral, the loans are secured by a Stability Pool containing LUSD and by fellow borrowers collectively acting as guarantors of last resort'} btn1={'Infrastructure'} btn2={'Dapp'} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure30} logo={logo30} title={'Keep Network'} name={'Keep Network'} content={' is a privacy-focused infrastructure for the public blockchain.The Keep network allows private data to be used on public protocols without sacrificing confidentiality.'} btn1={'Infrastructure'} btn2={'Dapp'} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure31} logo={logo31} title={'Sifchain'} name={'Sifchain'} content={'the omni-chain solution for DEXs, has been deployed on our Web3 infrastructure. They are committed to creating a blockchain and cryptocurrency world where any asset across the globe can move freely between different blockchains, and do so quickly and at the cheapest price possible. Currently Sifchain enables routing from Ethereum main net to the Cosmos Ecosystem.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure32} logo={''} title={'{Paoverview'} name={'Paoverview'} content={'Monitor all your FluxNode rewards, check when their last payment was, when the next one is coming up and more!'} btn1={'Infrastructure'} btn2={'Dapp'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure33} logo={logo33} title={'KADDEX'} name={'Flux'} content={'has partnered with KADDEX to deliver decentralized infrastructure for their ambitious and one-of-a-kind decentralized finance application. By running KADDEX on Flux it becomes a truly decentralized Web 3.0 application. It is a great example of the potential of Web 3.0 and what great things can come from being committed to delivering truly decentralized technology.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure34} logo={logo34} title={'Element'} name={'Element'} content={'is an open network for secure, decentralized communication, connecting 42M+ users over 80K+ deployments. Matrix protocol is an open standard with open source implementations, supporting a vibrant developer ecosystem. Element was founded by the team behind Matrix as a way to bring it to the mainstream.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Social'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure36} logo={logo36} title={'Yacy'} name={'Yacy'} content={'search engine software provides results from a network of independent peers, instead of a central server. It is a distributed network where no single entity decides what to list or order it appears in. Its a Web Search by the people, for the people: decentralized, all users are equal, no central, no search request storage, shared index.'} btn1={'Infrastructure'} btn2={'Dapp'}   />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard2 header={infrastructure45} logo={logo45} title={'Dibi'} name={'Dibi Fetch'} content={'is a decentralized oracle running on the Flux ecosystem to provide aggregated pricing data from major exchanges, as well as now including CMC moving forward. Fetch creates an opportunity for users to have raw, uncontrolled, and unfiltered data in a decentralized and seamless solution.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={''}  />
                </div>
                </div>
        </React.Fragment>
    )
}