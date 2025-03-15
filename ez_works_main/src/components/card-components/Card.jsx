import styles from "./Card.module.css";

function Card({ title, description, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={icon} alt={title} className={styles.icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Card;
