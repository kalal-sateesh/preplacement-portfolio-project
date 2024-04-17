import styles from "../components/Main.module.css";

const Main = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.nameText}>
            <span>
              <b>Hi, </b> I am Sateesh Kumar Goud
            </span>
          </div>
          <div className={styles.profession}>FRONTEND DEVELOPER</div>
        </div>
      </section>
      <div className={styles.works}>
        <span>
          WORK , I CAN DO FOR <b>YOU</b>
        </span>
      </div>
    </>
  );
};

export default Main;
