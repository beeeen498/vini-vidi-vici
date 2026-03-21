"use client"
import styles from "./DrinkItemCard.module.scss";

type Props = {
    title: string;
    country: string;
    detail: string;
    price: number;
};

const DrinkItemCard = ({title, country, detail, price}: Props) => {

    return (
        <div className={styles.drinkItemCard}>
            <div className={styles.titleAndPrice}>
                <h3 className={styles.drinkTitle}>{title}</h3>
                <h3 className={styles.drinkPrice}>${price}</h3>
            </div>
            <div className={styles.countryAndDetail}>
                <p>{country} | {detail}</p>
            </div>
        </div>
    )
}

export default DrinkItemCard;