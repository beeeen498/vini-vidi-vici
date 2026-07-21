"use client";
import { useState, useEffect } from "react";
import styles from "./MenuCategorySelector.module.scss";
import menuData from "@/components/menu/data/menuData";

const MenuCategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const toggleDrinks = () => setDrinksExpanded(!drinksExpanded);

  // inside the component, add:
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = {
    Food: menuData.food.map((cat) => cat.title), // ["Appetizers", ...]
    Drinks: menuData.drinks.map((cat) => cat.title), // ["Cocktails", "Mocktails", "Wines"]
  };

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setSelectedCategory(id);
      setDrinksExpanded(false);
    }
  };

  return (
    <div
      className={`${styles.categorySelectorContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.fadingLine}></div>

      <div className={styles.categories}>
        {/* main categories */}
        <div className={styles.mainCategories}>
          {menuData.food.map((category) => (
            <button
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ""}`}
            >
              {category.title}
            </button>
          ))}

          {/* Drinks toggle */}
          <button className={styles.categoryButton} onClick={toggleDrinks}>
            Drinks
          </button>
        </div>

        {/* drinks sub-categories */}
        <div
          className={`${styles.subCategories} ${drinksExpanded ? styles.show : ""}`}
        >
          {menuData.drinks.map((category) => (
            <button
              key={category.id}
              className={`${styles.subCategoryItem} ${selectedCategory === category.id ? styles.active : ""}`}
              onClick={() => handleClick(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* fading line */}
      <div className={styles.fadingLine}></div>
    </div>
  );
};

export default MenuCategorySelector;
