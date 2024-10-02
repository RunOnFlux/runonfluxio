import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from "./index.module.css"
import { Article } from './articleCard';
import {Autoplay,  EffectCoverflow, Pagination } from 'swiper/modules';

export function Carousel({ articles , reverseDirection = false}){
    return(
      <div>
         <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: reverseDirection }}
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
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               1024: {  
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               1440: { 
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
            }}
         >
            {articles.map((article, index) => (
                <SwiperSlide key={index} style={{height: "300px", width: "329px", padding: "0 20px"}}>
                    <a target="_blank" href={article.link} className={`${styles.articleCard} ${styles.active}`} style={{height: "250px"}}>
                        <Article article={article} filter={true} />
                    </a>
                </SwiperSlide>
            ))}

         </Swiper>
      </div>
   )
}