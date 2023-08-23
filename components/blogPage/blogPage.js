import React from "react";
import styles from "./index.module.css"
import { BlogTab } from "../blogTabs/blogTabs"
export function BlogPage(){
    return(
        <React.Fragment>
               <main className={styles.main}>
              

                <section className={styles.section1}>
                    <div className="container">
                        <div className="row">
                        <h4>Blog</h4>
                        <h5>Flux provides the critical, high-availability infrastructure for the New Web 3 Internet.</h5>  
                        <span><a className={styles.link1} href="" target="_blank">Flux Docs Portal</a> <a href="" target="_blank" className={styles.link1}>Wiki Runonflux</a></span>
                        
                        </div>

                        <div className="row" style={{marginTop:"100px"}}>
                            <h3>Latest News</h3>
                            <p>Stay up to date with the latest Flux news and updates.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.section3}>
                    <div className="container">
                        <div className="row">
                        <BlogTab/>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}