import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import Link from "next/link";
const ArticleCard = ({ cardDetails, activeIndex }) => {
    return (
        <>
            {cardDetails.map((card, index) => (
                <Link key={index} className={`${styles.articleCard} ${index === activeIndex ? styles.active : ''}`} href={card.link} rel="noopener noreferrer" target="_blank">
                    <div className={styles.cardImageContainer}>
                        <Image
                            src={card.backgroundImage}
                            alt="Article background"
                            className={styles.cardBackgroundImage}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 33vw"
                        />
                        <div className={styles.cardOverlay}>
                            <div className={styles.logo}>
                                <Image alt="logo" src={card.logo} width={50} height={50} />
                            </div>
                            <div className={styles.cardText}>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export { ArticleCard };