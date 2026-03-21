"use client";
import { useState } from "react";
import styles from "./MenuCategorySelector.module.scss";
import menuData from "@/components/menu/data/menuData";

const MenuCategorySelector = () => {
    const [SelectedCategory, setSelectedCategory] = useState("Appetizers");
    const [drinksExpanded, setDrinksExpanded] = useState(false);
    const toggleDrinks = () => setDrinksExpanded(!drinksExpanded);

    const categories = {
        Food: ["Appetizers", "Pasta", "Pizza", "Main Courses", "Desserts"],
        Drinks: ["Wine", "Cocktails", "Mocktails"],
    };

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.categorySelectorContainer}>
            {/* fading line */}
            <div className={styles.fadingLine}></div>

            {/* categories */}
            <div className={styles.categories}>
                {/* main categories */}
                <div className={styles.mainCategories}>
                    {/* foods */}
                    {menuData.food.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleClick(category.id)}
                        className={styles.categoryButton}
                      >
                        {category.title}
                      </button>
                    ))}

                    {/* Drinks */}
                    <button className={styles.categoryButton} onClick={() => setDrinksExpanded(!drinksExpanded)}>
                      Drinks
                    </button>
                </div>

                {/* sub categories */}
                <div className={`${styles.subCategories} ${drinksExpanded ? styles.show : ""}`}>
                    {categories.Drinks.map((item) => (
                        <button
                            key={item}
                            className={styles.subCategoryItem}
                            onClick={() => setSelectedCategory(item)}
                        >
                            {item}
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