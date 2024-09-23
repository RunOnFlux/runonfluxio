
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from "./index.module.css"

import {Autoplay,  EffectCoverflow, Pagination } from 'swiper/modules';
import art1 from "../../public/images/article/Flux Articles/art1.svg"
import art2 from "../../public/images/article/Flux Articles/art2.svg"
import art3 from "../../public/images/article/Flux Articles/art3.svg"
import art4 from "../../public/images/article/Flux Articles/art4.svg"
import art5 from "../../public/images/article/Flux Articles/art5.svg"
import art6 from "../../public/images/article/Flux Articles/art6.svg"
import art8 from "../../public/images/article/Flux Articles/art8.svg"
import art9 from "../../public/images/article/Flux Articles/art9.svg"
import art10 from "../../public/images/article/Flux Articles/art10.svg"
import art11 from "../../public/images/article/Flux Articles/art11.svg"
import art13 from "../../public/images/article/Flux Articles/art13.svg"
import art16 from "../../public/images/article/Flux Articles/art16.svg"
import art17 from "../../public/images/article/Flux Articles/art17.svg"
import art18 from "../../public/images/article/Flux Articles/art18.svg"
import art19 from "../../public/images/article/Flux Articles/art19.svg"
import art20 from "../../public/images/article/Flux Articles/art20.svg"
import art21 from "../../public/images/article/Flux Articles/art21.svg"
import art22 from "../../public/images/article/Flux Articles/art22.svg"

export function Carousel(){
    return(
      <div>
         <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={60}
            pagination={{ clickable: true }}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: false, 
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"    
            breakpoints={{
               320: {  
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               640: { 
                  slidesPerView: 2,
                  spaceBetween: 40,
               },
               768: {  
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
               1024: {  
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
               1200: { 
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
            }}
         >
            <SwiperSlide  >
               <a target="_blank" href="https://techbullion.com/decentralized-flux-cloud-launches-new-product-to-tackle-ai-compute-challenges/" className={styles.banner7}>
                  <Image alt="logo" src={art1}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://cybermediacreations.com/flux-and-nvidia-bringing-web3-to-the-next-level/" className={styles.banner7}>
                  <Image alt="logo" src={art2}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://apnews.com/press-release/accesswire/decentralized-flux-cloud-launches-new-product-to-tackle-ai-compute-challenges-f1169c7a43e21ee2e9914a2d6547efd3" className={styles.banner7}>
                  <Image alt="logo" src={art3}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://markets.businessinsider.com/news/stocks/decentralized-flux-cloud-launches-new-product-to-tackle-ai-compute-challenges-1032943953" className={styles.banner7}>
                  <Image alt="logo" src={art4}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://www.streetinsider.com/Press+Releases/Decentralized+Flux+Cloud+Launches+New+Product+to+Tackle+AI+Compute+Challenges/22595215.html" className={styles.banner7}>
                  <Image alt="logo" src={art5}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://coincu.com/166708-top-10-best-web3-coins-worth-investing-in-2024/" className={styles.banner7}>
                  <Image alt="logo" src={art6}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://finance.yahoo.com/news/empowering-builders-flux-launches-full-130400966.html" className={styles.banner7}>
                  <Image alt="logo" src={art8}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://bnnbreaking.com/tech/revolutionizing-web-hosting-flux-launches-wordpress-on-its-decentralized-platform" className={styles.banner7}>
                  <Image alt="logo" src={art9}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://zycrypto.com/flux-launches-fluxcore-beta-to-enhance-compute-efficiency-and-boost-ai-technology/" className={styles.banner7}>
                  <Image alt="logo" src={art10}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://finance.yahoo.com/news/flux-champions-tech-sports-synergy-160300399.html?soc_src=social-sh&soc_trk=tw&tsrc=twtr&guccounter=1" className={styles.banner7}>
                  <Image alt="logo" src={art11}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://www.forbes.com/sites/forbestechcouncil/2024/05/09/depin-unlocking-new-opportunities-for-scalable-cloud-infrastructure/?sh=549927ec20b9" className={styles.banner7}>
                  <Image alt="logo" src={art13}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://dailyhodl.com/2024/06/11/depin-overcoming-the-challenges-for-a-decentralized-future/" className={styles.banner7}>
                  <Image alt="logo" src={art16}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://finance.yahoo.com/news/flux-launches-fluxedge-alpha-ushering-184900840.html" className={styles.banner7}>
                  <Image alt="logo" src={art17}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://www.forbes.com/sites/forbestechcouncil/2024/07/08/three-reasons-why-your-business-should-switch-to-web3/" className={styles.banner7}>
                  <Image alt="logo" src={art18}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://cioinfluence.com/cloud/web3-and-depin-the-new-infrastructure-juggernaut/" className={styles.banner7}>
                  <Image alt="logo" src={art19}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://dailyhodl.com/2024/07/31/ssp-wallet-leads-the-way-with-schnorr-multisignature-accounts-on-ethereum/" className={styles.banner7}>
                  <Image alt="logo" src={art20}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://dailyhodl.com/2024/08/09/independence-from-web-2-0-three-reasons-why-your-business-should-switch-to-web-3-0/" className={styles.banner7}>
                  <Image alt="logo" src={art21}/>
               </a>
            </SwiperSlide>

            <SwiperSlide >
               <a target="_blank" href="https://www.forbes.com/councils/forbestechcouncil/2024/08/19/future-proofing-ai-and-the-decentralized-cloud/" className={styles.banner7}>
                  <Image alt="logo" src={art22}/>
               </a>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}