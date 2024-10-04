import React from "react";
import styles from "./index.module.css"
import Image from "next/image";
import Link from "next/link";

const Article = ({ article, filter = false }) => {
    return (
        <div className={styles.cardImageContainer}>
            <Image
                src={article.backgroundImage}
                alt="Article background"
                className={styles.cardBackgroundImage}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 33vw"
                style={{ filter: filter ? "brightness(0.5)" : "brightness(1)"}}
            />
            <div className={styles.cardOverlay}>
                <div className={styles.logo}>
                    <Image alt="logo" src={article.logo} width={50} height={50} />
                </div>
                <div className={styles.cardText}>
                    <p>{article.text}</p>
                </div>
            </div>
        </div>
    );
}

const ArticleCards = ({ cardDetails, activeIndex }) => {
    return (
        <>
            {cardDetails?.map((card, index) => (
                <Link key={index} className={`${styles.articleCard} ${index === activeIndex ? styles.active : ''}`} href={card.link} rel="noopener noreferrer" target="_blank">
                    <Article article={card} />
                </Link>
            ))}
        </>
    );
};

const AwardCards = ({ cardDetails, activeIndex }) => {
    return (
        <>
            {cardDetails?.map((card, index) => (
                <div key={index} className={`${styles.awardCard} ${index === activeIndex ? styles.active : ''}`}>
                    <Image
                        src={card.backgroundImage}
                        alt="Article background"
                        className={styles.awardBackgroundImage}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 33vw"
                    />
                </div>
            ))}
        </>
    );
};

const QuoteCard = ({ quote }) => {
    return (
        <div className={styles.cardImageContainer}>
            <Image
                src={quote.backgroundImage}
                alt="Article background"
                className={`${styles.cardBackgroundImage} ${styles.quoteBackgroundImage}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 60vw, 33vw"
            />
            <div className={styles.quoteOverlay}>
                <div className={styles.quoteText}>
                    <p>"{quote.text}"</p>
                    <p className={styles.quoteAuthor}>- {quote.author}</p>
                </div>
            </div>
        </div>
    );
};

export { Article, ArticleCards, AwardCards, QuoteCard };