"use client"
import styles from "./FoodItemCard.module.scss";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  price: number;
  src?: string,
  image?: string;
};

const MenuItemCard = ({title, description, price, image}: Props) => {

  return (
    <div className={styles.menuItemCard}>
      {/* img */}
      <div className={styles.menuItemImgWrapper}>
        <Image 
          src={image || "/images/menu/placeholder.jpg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 250px"
          className={styles.menuItemImg}
        />
      </div>

      {/* details */}
      <div className={styles.menuDetails}>
        {/* text */}
        <div className={styles.menuItemText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.menuItemPrice}>- ${price}</div>
      </div>
    </div>
  )
}

export default MenuItemCard