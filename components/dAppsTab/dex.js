import React from "react";
import { DappCard1 } from "./dappCard";
import { DappCard2 } from "./dappCard";
import { DappCard3 } from "./dappCard";
import infrastructure13 from "../../public/images/dapps/infrastructure-13.png"
import logo13 from "../../public/images/dapps/infrastructure-logo-13.svg"
import infrastructure15 from "../../public/images/dapps/infrastructure-15.jpeg"
import logo15 from "../../public/images/dapps/infrastructure-logo-15.png"
import infrastructure17 from "../../public/images/dapps/infrastructure-17.jpeg"
import logo17 from "../../public/images/dapps/infrastructure-logo-17.png"
import infrastructure20 from "../../public/images/dapps/infrastructure-20.jpeg"
import logo20 from "../../public/images/dapps/infrastructure-logo-20.png"
import infrastructure21 from "../../public/images/dapps/infrastructure-21.jpeg"
import logo21 from "../../public/images/dapps/infrastructure-logo-21.png"
import infrastructure22 from "../../public/images/dapps/infrastructure-22.jpeg"
import logo22 from "../../public/images/dapps/infrastructure-logo-22.svg"
import infrastructure31 from "../../public/images/dapps/infrastructure-31.jpeg"
import logo31 from "../../public/images/dapps/infrastructure-logo-31.png"
import infrastructure33 from "../../public/images/dapps/infrastructure-33.jpeg"
import logo33 from "../../public/images/dapps/infrastructure-logo-33.png"
export function Dex(){
    return(
        <React.Fragment>
               <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure13} logo={logo13} title={'Sushiswap'} name={'Sushiswap'} content={'is a decentralized exchange, a decentralized lending market, yield instruments, an auction platform, an AMM framework and staking derivatives.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure15} logo={logo15} title={'KDSwap'} name={'KDSwap'} content={'is the first gas-free decentralized exchange. This dApp is built on the Kadena blockchain, and is running on decentralized Flux nodes for a true web 3.0 experience. Users can trade KDA and all KDA tokens on KDSwap without paying any gas fees, thanks to Kadena’s innovative concept of public gas stations..'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
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
                <DappCard3 header={infrastructure31} logo={logo31} title={'Sifchain'} name={'Sifchain'} content={'the omni-chain solution for DEXs, has been deployed on our Web3 infrastructure. They are committed to creating a blockchain and cryptocurrency world where any asset across the globe can move freely between different blockchains, and do so quickly and at the cheapest price possible. Currently Sifchain enables routing from Ethereum main net to the Cosmos Ecosystem.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                <DappCard3 header={infrastructure33} logo={logo33} title={'KADDEX'} name={'Flux'} content={'has partnered with KADDEX to deliver decentralized infrastructure for their ambitious and one-of-a-kind decentralized finance application. By running KADDEX on Flux it becomes a truly decentralized Web 3.0 application. It is a great example of the potential of Web 3.0 and what great things can come from being committed to delivering truly decentralized technology.'} btn1={'Infrastructure'} btn2={'Dapp'} btn3={'Dex'}  />
                </div>
                
                </div>
        </React.Fragment>
    )
}