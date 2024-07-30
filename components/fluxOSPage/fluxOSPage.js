/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import styles from "./index.module.css"
import Image from "next/image";
import logo1 from "../../public/images/fluxOS-logo1.svg"

import fluxcloud from "../../public/images/fluxcloud.svg"
import payment1 from "../../public/images/images/payment1.svg"
import payment2 from "../../public/images/images/payment2.svg"
import payment3 from "../../public/images/images/payment3.svg"
import solutions from "../../public/images/images/solutions.svg"
export function FluxOSPage(){
    

    return(
        <React.Fragment>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className={styles.logo1}>
                                <Image alt="logo" src={logo1}/>
                                <h1>The Brain of <br/>FluxCloud</h1>
                                <p>FluxOS powers FluxCloud, providing seamless integration and optimal functionality. It is built on the MEVN stack (Mongo, Express, Vue, Node) with advanced dockerization.</p>
                                <div className="mt-4">
                            <a className={styles.btn2} href="https://home.runonflux.io/" rel="noreferrer" target="_blank">FluxOS</a>
                            <a className={styles.btn1} href="https://github.com/RunOnFlux/flux" rel="noreferrer" target="_blank">Github</a>
                        </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className="container">
                    <div className="row mb-4">
                        <h3>Cutting-Edge Tech Stack</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.techStack}>
                            {/* <Image alt="logo" src={''} /> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.techStackList}>
                                <ol>
                                    <li>
                                        <span>Modern MEVND Stack</span>
                                        <p>MongoDB, Express, Vue, Node, and Docker.</p>
                                        </li>
                                    <li>
                                        <span>JavaScript Node.js</span>
                                        <p></p>
                                    </li>
                                    <li>
                                        <span>Express.js</span>
                                        <p>Four-tiered RESTful API and WebSocket support.</p>
                                    </li>
                                    <li>
                                        <span>MongoDB backend</span>
                                        <p>Stores Information like connected users, system metrics, and applications.</p>
                                    </li>
                                    <li>
                                        <span>Vue.js Framework</span>
                                        <p>Front-end wrapper to interact with the API backend in a user friendly way.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container">
                    <div className="row mb-4">
                        <h3>The Magic Behind <br/> <span>FluxCloud</span></h3>
                        <p>FluxCloud - the first and largest Web3 cloud platform- is revolutionizing the cloud space, offering a decentralized alternative to traditional giants like AWS, Google Cloud, or Microsoft Azure. Powered by individuals/ FluxNode operators worldwide, Flux Cloud is committed to serving the people without storing personal data, eliminating points of failure, and ensuring blazing-fast, secure performance - all at more affordable prices than any other cloud provider.</p>
                    </div>
                    <div className="row d-none d-xl-block d-lg-block ">
                        <div className={styles.fluxcloud}>
                            {/* <Image alt="img" src={fluxcloud}/> */}
                        </div>
                    </div>
                    <div className="row d-xl-none d-lg-none ">
                        <div className="col-md-6 mb-4">
                            <div className={styles.card}>
                                <h4 className={styles.cardHead}>
                                    Communication
                                </h4>
                                <ul>
                                    <li>FluxNode messages use serialized objects</li>
                                    <li>Includes timestamp, message type, public key, broadcast data, and data signature</li>
                                    <li>Standardized format ensures efficient, secure transmission</li>
                                    <li>Facilitates smooth communication between FluxNodes</li>
                                </ul>
                            </div>
                        </div>
                      
                        <div className="col-md-6 mb-4">
                        <div className={styles.card}>
                                <h4 className={styles.cardHead}>
                                    Verification
                                </h4>
                                <ul>
                                    <li>FluxNodes: strict message acceptance criteria</li>
                                    <li>Criteria include timestamp validation, message type verification, and signature matching</li>
                                    <li>Public key must correspond to verified FluxNode on blockchain</li>
                                    <li>Ensures network security, integrity, and reliable communication</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div className={styles.card}>
                                <h4 className={styles.cardHead}>
                                    Rejection
                                </h4>
                                <ul>
                                    <li>Only authorized nodes, called FluxNodes, participate in FluxOS</li>
                                    <li>Non-compliant messages rejected</li>
                                    <li>Enhances network security, minimizes disruptions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div className={styles.card}>
                                <h4 className={styles.cardHead}>
                                    Connection
                                </h4>
                                <ul>
                                    <li>FLarge peer-to-peer network</li>
                                    <li>Facilitates seamless data transmission</li>
                                    <li>Enables users to utilize platform fully</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div className={styles.card}>
                                <h4 className={styles.cardHead}>
                                    Management
                                </h4>
                                <ul>
                                    <li>FluxNodes' peer-to-peer network: real-time access to critical info</li>
                                    <li>Information includes running apps, available resources</li>
                                    <li>Enables intelligent resource allocation, optimal app deployment</li>
                                    <li>Streamlines app management, enhances network efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className="container">
                    <div className="row" style={{marginBottom: "100px"}}>
                        <div className="col-md-6 mb-4">
                            <h3>Flexible Payment Options</h3>
                            <p>Empowering developers, FluxOS offers flexible payment options. Whether in Flux or fiat currencies, Stripe and PayPal make transactions seamless. With the new fiat payment on-ramp, users can deploy apps on FluxOS using traditional currencies like USD or EUR. This eliminates the hassle of managing cryptocurrency wallets and exchanges, streamlining the process of launching applications in a web3 environment.</p>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.paymentOptions}>
                                <span href="" className={styles.paymentOptionContainer}>
                                    <Image alt="logo" src={payment1}/>PayPal
                                </span>
                                <span href="" className={styles.paymentOptionContainer}>
                                    <Image alt="logo" src={payment2}/>Stripe
                                </span>
                            </div>
                            <div className={styles.paymentOptions}>
                                <span href="" className={styles.paymentOptionContainer}>
                                    <Image alt="logo" src={payment3}/>Flux
                                </span>
                                <span href="#" className={styles.paymentOptionContainer}>
                                   <h6>More TBA...</h6>
                                </span>
                            </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4" style={{display: "inline-flex", alignItems: "center"}}>
                            <div>
                            <h3>Multiple Sing-In Solutions</h3>
                            <p>Unlock the full potential of FluxOS with multiple login options, via crypto wallet or mainstream login solutions through Flux SingleSignOn. Simply log in to www.home.runonflux.io using your Gmail, Apple ID, or Email, and experience unparalleled convenience in spawning and managing your apps. </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                                <div className={styles.solutions}>
                                    {/* <Image alt="logo" src={solutions}/> */}
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}