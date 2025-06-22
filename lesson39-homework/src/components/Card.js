import styles from './Card.module.scss';


function Card({ title, price, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>— {title} —</div>
      <div className={styles.price}>{price} ₽</div>
      <div className={styles.description}>{description}</div>
      <button className={styles.button}>Оставить заявку</button>
    </div>
  );
}


export default Card;