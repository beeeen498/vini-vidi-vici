"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cocktailLists, mockTailLists } from "./data/featuredItemsList";
import type { Drink } from "./data/featuredItemsList";
import styles from "./FeaturedItems.module.scss";
gsap.registerPlugin(ScrollTrigger);


const FeaturedItems = () => {
    const cocktails: Drink[] = cocktailLists;
    const mocktails: Drink[] = mockTailLists;

    const cocktailsRef = useRef<HTMLUListElement | null>(null);
    const mocktailsRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        gsap.from([cocktailsRef.current, mocktailsRef.current], {
            x: (i) => (i === 0 ? -150 : 150),
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: cocktailsRef.current,
            start: "bottom 95%",
            toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <section className={styles.featuredItems}>
            {/* cocktails */}
            <div className={styles.popularCocktails}>
                <h2>Most popular cocktails:</h2>

                <ul ref={cocktailsRef} className={styles.popularList}>
                    <div className={styles.listItemsContainer}>
                        {cocktailLists.map(({name, country, detail, price}) => (
                            <li className={styles.popularListItem} key={name}>
                                <div className={styles.listItemDetails}>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <div className={styles.listItemPrice}>
                                    <span>- {price}</span>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>

            {/* mocktails */}
            <div className={styles.popularMocktails}>
                <h2>Most loved mocktails:</h2>

                <ul ref={mocktailsRef} className={styles.popularList}>
                    <div className={styles.listItemsContainer}>
                        {mockTailLists.map(({name, country, detail, price}) => (
                            <li className={styles.popularListItem} key={name}>
                                <div className={styles.listItemDetails}>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <div className={styles.listItemPrice}>
                                    <span>- {price}</span>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default FeaturedItems