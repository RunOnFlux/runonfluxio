/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from './index.module.css';

export function Careers(){
    return(
       <React.Fragment>
        <section className={styles.section1}>
            <div className='container'>
                <div className='row'>
                    {/* <h6>WORK WITH FLUX FOUNDATION</h6> */}
                    <h1>Help Us Shape Decentralization</h1>
                    <p>Flux's goal is to build the next generation of decentralized computing power. In other words, the Web 3.0, in order to give everyone equal access to a cloud platform that is as applicable to individuals as it is to enterprises.</p>
                    <p className='mt-1'><i>If your vision matches ours, we invite you to join the Flux team.</i></p>

                    {/* <div className={styles.link}><a href='#'>Open Positions</a></div> */}
                </div>
            </div>
        </section>
        <section className={styles.section2}>
            <div className='container'>
                <div className='row'>
                    <h1>Current Openings</h1>
                </div>
                <div className='row'>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>DevOps Engineer</h5>
                            <p>Engineering</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>Full Stack Developer</h5>
                            <p>Developer</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>Front End Developer</h5>
                            <p>Developer</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>Integration Engineer</h5>
                            <p>Engineering</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>DBA</h5>
                            <p>Engineering</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>Software Architect</h5>
                            <p>Developer</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>Content Writer</h5>
                            <p>Developer</p></div>  
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-6 mb-3'>
                        <div className={styles.card}>
                            <div><h5>Product Marketing Manager</h5>
                            <p>Product</p></div>  
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className={styles.lastText}>We are always looking for these positions. If you think you are a good match, please forward your resume and any supporting materials to <a href='mailto:info@runonflux.io'>info@runonflux.io</a></p>
                </div>
            </div>
        </section>
       </React.Fragment>
    )
}