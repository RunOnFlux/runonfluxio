import React from 'react'
import styles from "./index.module.css";

export function DonatePage(){
    return(
        <React.Fragment>
            <section className={styles.section1}>
            <div className='container'>
                <div className='row'>
                    {/* <h6>DONATE</h6> */}
                    <h1>Flux community donations</h1>
                    <p>Flux is a fair-mined, community-oriented cryptocurrency project that has no ICO, no Founders reward, no presale/crowd sale.</p>
‍
                    <p>The donated funds will be accumulated as-needed into transparent addresses and summaries will be included in the Quarterly Transparency Reports.</p>
                </div>
            </div>
            </section>
            <section className={styles.section2}>
               <div className='container'>
                <div className='row mb-5'>
                <h4>Please consider donating to continue the development of the Flux Project.</h4>
                <p><b>Marketing Fund</b> - The marketing fund will be used to fund videos, podcasts, raising awareness of the Flux ecosystem.</p>
                <p><b>Exchange Listings</b> -  The Flux Development Fund does not pay for listing fees. If the community would like to fund paying for exchange listings we will need community donations.</p>
                <p><b>Development Fund</b> - The Development Fund helps pay for Flux and FluxNodes development, future modules such as FluxPay, Zel ID, etc.</p>
                <p><b>Coffee & Beer Fund</b> - The FluxCommunity Team is made up of volunteers giving their time to further the Flux Project. Donate them a beer.</p>
                <p><i>The donated funds will be accumulated as-needed into transparent addresses and summaries will be included in the Quarterly Transparency Reports.</i></p>
                </div>

                <div className='row mb-5'>
                    <h4>Funds</h4>
                    <p>There are four discrete funds that you can contribute to. All your donations go towards the continued development of the Flux project.</p>
                </div>

                <div className='row mb-5'>
                    <h4>Marketing Fund</h4>
                    <p>The marketing fund will be used to fund videos, podcasts, raising awareness of the Flux ecosystem, etc.</p>
                    <p>Flux address: <b><a href='#'>t1SPorEYHQHwWgvcmpxjiHTWoB8zcojkLbM</a></b></p>
                    <p>BTC address: <b><a href='#'> 19XCqu89Ry9v6HZstXvb9eQsvUoY1dise5</a></b></p>
                </div>

                <div className='row mb-5'>
                    <h4>Development fund</h4>
                    <p>The development fund helps pay for Flux and FluxNodes development, future modules such as FluxPay, etc.</p>
                    <p>Flux address: <b><a href='#'> t1KuWRYSQ7ti2rSwnzAf8jYMC6wtSLND2sV</a></b></p>
                    <p>BTC address: <b><a href='#'> 132uRD2G9ZvSFotu3jr1bjFGrHhMVQtZMP</a></b></p>
                </div>

                <div className='row mb-5'>
                    <h4>Exchange listings fund</h4>
                    <p>The Flux development fund does not pay for listing fees. If the community would like to fund paying for exchange listings we will need community donations.</p>
                    <p>Flux address: <b><a href='#'>t1WQccf15vWuVrsT1zfWoiHaW5CAxRCzWvo</a></b></p>
                    <p>BTC address: <b><a href='#'>1DY1cKawxC7uGEQ84EhgaUUapXysaw3GMp</a></b></p>
                </div>

                <div className='row mb-5'>
                    <h4>Coffee & beer fund</h4>
                    <p>The Flux community team is made up of volunteers giving their time to further the Flux project. Donate them a beer.</p>
                    <p>Flux address: <b><a href='#'> t1USPje8JoYdwmgkSFR9iG935iDH7WpR1cD</a></b></p>
                    <p>BTC address: <b><a href='#'> 1BZnjJiAqDrMB3hYJzLb8KwATZ62op326P</a></b></p>
                </div>
               </div>
            </section>
        </React.Fragment>
    )
}