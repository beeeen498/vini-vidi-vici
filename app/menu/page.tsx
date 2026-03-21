"use client";
import { useEffect, useState } from "react";
import styles from "./menu.module.scss";
import MenuCategorySelector from "@/components/menu/MenuCategorySelector/MenuCategorySelector";
import FoodItemCard from "@/components/menu/FoodItemCard/FoodItemCard";
import DrinkItemCard from "@/components/menu/DrinkItemCard/DrinkItemCard";
import menuData from "@/components/menu/data/menuData";
import Image from "next/image";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Menu() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
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

      {/* arrow */}
      <FaArrowAltCircleUp 
        className={`${styles.arrowIcon} ${showArrow ? styles.show : ""}`}
        size={40}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* title */}
      <div className={styles.menuTitleContainer}>
        <h2>OUR MENU</h2>
        <h3>Savor the Taste of Italy</h3>
        <p>
          Explore our carefully crafted menu featuring fresh ingredients,<br />
          authentic recipes, and timeless Italian dishes to satisfy your cravings.
        </p>
      </div>

      <MenuCategorySelector />

      <div className={styles.mainMenu}>
        
        {/* FOOD */}
        <div className={styles.menuItems}>
          {menuData.food.map((category) => (
            <div key={category.id} id={category.id} className={styles.foodCategory}>
              
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
            </div>
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
                  price={parseFloat(item.price.replace("$", ""))}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}