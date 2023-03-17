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
import platform8 from "../../public/images/supported-platforms/platform8.svg"
import platform9 from "../../public/images/supported-platforms/platform9.svg"
import platform10 from "../../public/images/supported-platforms/platform10.svg"
import platform11 from "../../public/images/supported-platforms/platform11.png"
import platform12 from "../../public/images/supported-platforms/platform12.svg"
import platform13 from "../../public/images/supported-platforms/platform13.png"
import platform14 from "../../public/images/supported-platforms/platform14.svg"
import platform15 from "../../public/images/supported-platforms/platform15.svg"
import platform16 from "../../public/images/supported-platforms/platform16.svg"
import platform17 from "../../public/images/supported-platforms/platform17.svg"
import platform18 from "../../public/images/supported-platforms/platform18.svg"
import platform19 from "../../public/images/supported-platforms/platform19.svg"
import platform20 from "../../public/images/supported-platforms/platform20.svg"
import platform21 from "../../public/images/supported-platforms/platform21.svg"
import platform22 from "../../public/images/supported-platforms/platform22.svg"
import platform23 from "../../public/images/supported-platforms/platform23.svg"
import platform24 from "../../public/images/supported-platforms/platform24.svg"
import platform25 from "../../public/images/supported-platforms/platform25.png"
import platform26 from "../../public/images/supported-platforms/platform26.svg"
import platform27 from "../../public/images/supported-platforms/platform27.svg"
import platform28 from "../../public/images/supported-platforms/platform28.svg"
import platform29 from "../../public/images/supported-platforms/platform29.svg"
import platform30 from "../../public/images/supported-platforms/platform30.svg"
import platform31 from "../../public/images/supported-platforms/platform31.svg"
// import platform32 from "../../public/images/supported-platforms/platform32.svg"
import platform33 from "../../public/images/supported-platforms/platform33.svg"
import platform34 from "../../public/images/supported-platforms/platform34.svg"
import platform35 from "../../public/images/supported-platforms/platform35.png"
import platform36 from "../../public/images/supported-platforms/platform36.png"
import platform37 from "../../public/images/supported-platforms/platform37.svg"
import platform38 from "../../public/images/supported-platforms/platform38.jpg"
import platform39 from "../../public/images/supported-platforms/platform39.svg"
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
                <div className={styles.partnerImg2}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform8} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform9} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform10} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform11} alt="Image 1" style={{height: "50px !important"}}/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform12} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform13} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform14} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform15} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform16} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform17} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform18} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform19} alt="Image 1"/>
                    </div>
                </SplideSlide>          
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform20} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform21} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform22} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform23} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform24} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform25} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform26} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform27} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform28} alt="Image 1" style={{height: "50px !important"}}/>
                    </div>
                </SplideSlide>   
                 <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform29} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform30} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform31} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                {/* <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform32} alt="Image 1" style={{height: "50px !important"}}/>
                    </div>
                </SplideSlide>   */}
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform33} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform34} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform35} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform36} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform37} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform38} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform39} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform8} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform9} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform10} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform11} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform12} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform13} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform14} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform15} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform16} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform17} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform18} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform19} alt="Image 1"/>
                    </div>
                </SplideSlide>          
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform20} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform21} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform22} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform23} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform24} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform25} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform26} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform27} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform28} alt="Image 1"/>
                    </div>
                </SplideSlide>   
                 <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform29} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform30} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform31} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                {/* <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform32} alt="Image 1"/>
                    </div>
                </SplideSlide>   */}
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform33} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform34} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform35} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform36} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform37} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform38} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform39} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform8} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform9} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform10} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform11} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform12} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform13} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform14} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform15} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform16} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform17} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform18} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform19} alt="Image 1"/>
                    </div>
                </SplideSlide>          
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform20} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform21} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform22} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform23} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform24} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform25} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform26} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform27} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform28} alt="Image 1"/>
                    </div>
                </SplideSlide>   
                 <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform29} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform30} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform31} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                {/* <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform32} alt="Image 1"/>
                    </div>
                </SplideSlide>   */}
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform33} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform34} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform35} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform36} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform37} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform38} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform39} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform2} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform3} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform4} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform5} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform6} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform7} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform8} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform9} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform10} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform11} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform12} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform13} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform14} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform15} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform16} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform17} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform18} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform19} alt="Image 1"/>
                    </div>
                </SplideSlide>          
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform20} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform21} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform22} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform23} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform24} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform25} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform26} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform27} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform28} alt="Image 1"/>
                    </div>
                </SplideSlide>   
                 <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform29} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform30} alt="Image 1"/>
                    </div>
                </SplideSlide>  

                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform31} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                {/* <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform32} alt="Image 1"/>
                    </div>
                </SplideSlide>   */}
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform33} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform34} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform35} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform36} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform37} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform38} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                <SplideSlide className={styles.splider}>
                <div className={styles.partnerImg2}>
                    <Image src={platform39} alt="Image 1"/>
                    </div>
                </SplideSlide>  
                
                </Splide>
        </React.Fragment>
    )
}