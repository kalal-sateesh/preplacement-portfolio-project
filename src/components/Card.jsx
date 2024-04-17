import styles from "../components/Card.module.css";
import card1 from "../../public/card1.jpg";
import card2 from "../../public/card2.jpg";
import card3 from "../../public/card3.jpg";
const Card = () => {
  return (
    <section className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={card1} alt="Image" width="100%" height="100%" />
        </div>
        <div className={styles.cardHead}></div>
        <div className={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          debitis laborum ducimus officiis esse labore ullam magnam.
        </div>
        <div className={styles.loremText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          debitis laborum ducimus officiis esse labore ullam magnam sit deserunt
          repellat error aliquam ipsa, dignissimos, inventore ad aperiam
          repudiandae vero.
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={card2} alt="Image" width="100%" height="100%" />
        </div>
        <div className={styles.cardHead}>APP DEVELOPMENT</div>
        <div className={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          debitis laborum ducimus officiis esse labore ullam magnam.
        </div>
        <div className={styles.loremText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          debitis laborum ducimus officiis esse labore ullam magnam sit deserunt
          repellat error aliquam ipsa, dignissimos, inventore ad aperiam
          repudiandae vero.
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={card3} alt="Image" width="100%" height="100%" />
        </div>
        <div className={styles.cardHead}>UI / UX DESIGN</div>
        <div className={styles.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          debitis laborum ducimus officiis esse labore ullam magnam.
        </div>
        <div className={styles.loremText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          debitis laborum ducimus officiis esse labore ullam magnam sit deserunt
          repellat error aliquam ipsa, dignissimos, inventore ad aperiam
          repudiandae vero.
        </div>
      </div>
    </section>
  );
};

export default Card;
