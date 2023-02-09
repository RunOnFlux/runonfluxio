import React from "react";
import styles from "./index.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Image from "next/image";

import platform1 from "../../public/images/supported-platforms/platform1.svg"
import platform2 from "../../public/images/supported-platforms/platform2.svg"
import platform3 from "../../public/images/supported-platforms/platform3.svg"
import platform4 from "../../public/images/supported-platforms/platform4.svg"
import platform5 from "../../public/images/supported-platforms/platform5.svg"
import platform6 from "../../public/images/supported-platforms/platform6.svg"
import platform7 from "../../public/images/supported-platforms/platform7.svg"

export function Slider2(){
    return(
        <React.Fragment>
            <Splide aria-label="My Favorite Images"
                  options={{
                    // perPage: 7,
                    fixedWidth: "7rem",
                    pagination: false,
                    arrows: 0,
                    autoplay: true,
                    rewind: true,
                    rewindSpeed: 10,
                    gap: "5rem",
                    perMove: 1,
                    breakpoints: {

                        // 1371:{
                        //     perPage: 7,
                           
                        // },
                       
                        // 1300:{
                        //     perPage: 6,
                           
                        // },
                        // 1100:{
                        //     perPage: 5,
                           
                        // },
                        991.98: {
                            gap: "2rem"
                          },
                          767.98: {
                            gap: "2rem"
                          },
                          640: {
                            gap: "2rem"
                        },
                          575.98: {
                           gap: "1.5rem"
                          },
                    },
                     
                }}
            >
                
              
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
               
                </Splide>
        </React.Fragment>
    )
}