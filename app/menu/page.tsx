"use client";
import type { Metadata } from "next";
import { useEffect, useState } from "react";
import LazySection from "@/components/menu/LazySection/LazySection";
import styles from "./menu.module.scss";
import MenuCategorySelector from "@/components/menu/MenuCategorySelector/MenuCategorySelector";
import FoodItemCard from "@/components/menu/FoodItemCard/FoodItemCard";
import DrinkItemCard from "@/components/menu/DrinkItemCard/DrinkItemCard";
import menuData from "@/components/menu/data/menuData";
import Image from "next/image";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Menu() {
  const [showArrow, setShowArrow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);

      // calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.menuPage} id="menuPage">
      {/* noise filter */}
      <div className={styles.noiseFilter}></div>

      {/* back to top progress ring */}
      <div
        className={`${styles.progressRing} ${showArrow ? styles.show : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="-2 -2 60 60" width="56" height="56">
          {/* background circle */}
          <circle cx="28" cy="28" r="24" />

          {/* progress circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="#E6D393"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress)}`}
            transform="rotate(-90 28 28)"
          />

          {/* arrow */}
          <path
            d="M28 36 L28 20 M22 26 L28 20 L34 26"
            fill="none"
            stroke="#E6D393"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className={styles.menuTitleContainer}>
        <h2>OUR MENU</h2>
        <h3>Savor the Taste of Italy</h3>
        <p>
          Explore our carefully crafted menu featuring fresh ingredients,
          <br />
          authentic recipes, and timeless Italian dishes to satisfy your
          cravings.
        </p>
      </div>

      <MenuCategorySelector />

      <div className={styles.mainMenu}>
        {/* FOOD */}
        <div className={styles.menuItems}>
          {menuData.food.map((category) => (
            <LazySection
              key={category.id}
              id={category.id}
              className={styles.foodCategory}
            >
              {/* decoration */}
              <div className={styles.categoryDecoration}>
                <Image
                  src="/images/Menu/royal-decoration.png"
                  alt="decoration"
                  fill
                  className={styles.menuDecorationImg}
                />
              </div>

              <h2 className={styles.menuTitle}>{category.title}</h2>

              {category.items.map((item) => (
                <FoodItemCard
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </LazySection>
          ))}
        </div>

        {/* divider decoration */}
        <div className={styles.categoryDecoration}>
          <Image
            src="/images/Menu/royal-decoration.png"
            alt="decoration"
            fill
            className={styles.menuDecorationImg}
          />
        </div>

        {/* DRINKS */}
        <div className={styles.drinksSection}>
          {menuData.drinks.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className={`${styles.drinkCategory} ${styles[`variant${index}`]}`}
            >
              <h2 className={styles.menuTitle}>{category.title}</h2>

              {category.items.map((item, i) => (
                <DrinkItemCard
                  key={`${item.name}-${i}`}
                  title={item.name}
                  detail={item.detail}
                  country={item.country}
                  price={item.price}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
