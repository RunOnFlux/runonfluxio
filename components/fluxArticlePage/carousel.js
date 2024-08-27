
import card1Logo from "../../public/images/article/card1Logo.svg"
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from "./index.module.css"

import {Autoplay,  EffectCoverflow, Pagination } from 'swiper/modules';
export function Carousel(){
    return(
        <div>
               <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
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
            slidesPerView: 4,
            spaceBetween: 60,
          },

      }}
      >
        <SwiperSlide >
            <div className={styles.card1}>
                <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card1}>
            <div className={styles.logo}>
                <Image alt="logo" src={card1Logo}/>
            </div>
            <div className={styles.cardText}>
            <p>Forbes Three Reasons Why Your Business Should Switch To Web3</p>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
        </div>
    )
}