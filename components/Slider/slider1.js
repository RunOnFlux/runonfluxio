import React from "react";
import styles from "./index.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Image from "next/image";

import partner2 from "../../public/images/partners/partner2.svg"
import partner3 from "../../public/images/partners/partner3.png"
import partner4 from "../../public/images/partners/partner4.png"
import partner5 from "../../public/images/partners/partner5.png"
import partner6 from "../../public/images/partners/partner6.png"
import partner7 from "../../public/images/partners/partner7.svg"
import partner8 from "../../public/images/partners/partner8.svg"
import partner9 from "../../public/images/partners/partner9.png"
import partner10 from "../../public/images/partners/partner10.png"
import partner11 from "../../public/images/partners/partner11.svg"
import partner12 from "../../public/images/partners/partner12.svg"
import partner13 from "../../public/images/partners/partner13.png"
import partner14 from "../../public/images/partners/partner14.png"
import partner15 from "../../public/images/partners/partner15.svg"
// import partner16 from "../../public/images/partners/partner16.png"
import partner17 from "../../public/images/partners/partner17.png"
import partner18 from "../../public/images/partners/partner18.png"
import partner19 from "../../public/images/partners/nvidia-logo.png"

export function Slider1(){
    return(
        <React.Fragment>
            <Splide aria-label="My Favorite Images"
                  options={{
                    // perPage: 8,
                    fixedWidth: "10rem",
                    pagination: false,
                    arrows: 0,
                    autoplay: true,
                    rewind: true,
                   
                  
                    perMove: 1,
                    gap: "5rem",

                    // breakpoints: {
                      

                    //     1371:{
                    //         perPage: 7,
                           
                    //     },
                       
                    //     1300:{
                    //         perPage: 6,
                           
                    //     },
                    //     1100:{
                    //         perPage: 5,
                           
                    //     },
                    //     991.98: {
                    //         perPage: 5,
                    //       },
                    //       767.98: {
                    //         perPage: 4,
                    //       },
                    //       640: {
                    //         perPage: 3,
                    //     },
                    //       575.98: {
                    //         perPage: 2
                    //       },
                    // },
                     
                }}
            >
                
                <SplideSlide>
                    <div className={styles.partnerImg}>
                    <Image src={partner2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner8} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner9} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner10} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner11} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner12} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner13} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner14} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner15} alt="Image 1"/>
                    </div>
                </SplideSlide>
                {/* <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner16} alt="Image 1"/>
                    </div>
                </SplideSlide> */}
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner17} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner18} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={partner19} alt="Image 1"/>
                    </div>
                </SplideSlide>
                </Splide>
        </React.Fragment>
    )
}