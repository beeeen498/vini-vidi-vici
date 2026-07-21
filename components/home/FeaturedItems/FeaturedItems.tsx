"use client";

import { useEffect, useState } from "react";
import { cocktailLists, mockTailLists } from "./data/featuredItemsList";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import styles from "./FeaturedItems.module.scss";

const FeaturedItems = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(max-width: 740px)").matches;
    setIsMobile(match);
  }, []);

  const cocktailsRef = useScrollAnimation<HTMLUListElement>({
    from: { x: -150, opacity: 0 },
    trigger: isMobile ? "top 25%" : "bottom 95%",
  });

  const mocktailsRef = useScrollAnimation<HTMLUListElement>({
    from: { x: 150, opacity: 0 },
    trigger: isMobile ? "top 25%" : "bottom 95%",
  });

  return (
    <section className={styles.featuredItems}>
      {/* cocktails */}
      <div className={styles.popularCocktails}>
        <h2>Most popular cocktails:</h2>

        <ul ref={cocktailsRef} className={styles.popularList}>
          <div className={styles.listItemsContainer}>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li className={styles.popularListItem} key={name}>
                <div className={styles.listItemDetails}>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <div className={styles.listItemPrice}>
                  <span>- ${price}</span>
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
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li className={styles.popularListItem} key={name}>
                <div className={styles.listItemDetails}>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <div className={styles.listItemPrice}>
                  <span>- ${price}</span>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedItems;
