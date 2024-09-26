import React, { useEffect, useState } from "react";
import styles from "./index.module.css"
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ cardDetails }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentCard, setCurrentCard] = useState(cardDetails);

    useEffect(() => {
        if (cardDetails !== currentCard) {
            setIsVisible(false);
            const timer = setTimeout(() => {
                setCurrentCard(cardDetails);
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [cardDetails, currentCard]);

    return (
        <Link className={`${styles.articleCard} ${isVisible ? styles.fadeIn : styles.fadeOut}`} href={currentCard.link} rel="noopener noreferrer" target="_blank">
            <div className={styles.cardImageContainer}>
                <Image
                    src={currentCard.backgroundImage}
                    alt="Article background"
                    className={styles.cardBackgroundImage}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 33vw"
                />
                <div className={styles.cardOverlay}>
                    <div className={styles.logo}>
                        <Image alt="logo" src={currentCard.logo} width={50} height={50} />
                    </div>
                    <div className={styles.cardText}>
                        <p>{currentCard.text}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;