import styles from "../components/AboutAndContact.module.css";
const AboutAndContact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.contactText}>Contact Me</div>
        <div className={styles.lorem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          ratione totam blanditiis error recusandae tenetur libero debitis nihil
          beatae perspiciatis impedit? Eius voluptas fugit consequatur impedit
          aliquid dolorum quas sapiente.
        </div>
        <div className={styles.mail}>kalalsateesh893@gmail.com</div>
      </div>
      <div className={styles.about}>
        <div className={styles.contactText}>About Me</div>
        <div className={styles.lorem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          ratione totam blanditiis error recusandae tenetur libero debitis nihil
          beatae perspiciatis impedit? Eius voluptas fugit consequatur impedit
          aliquid dolorum quas sapiente.
        </div>
        <div className={styles.loremText}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          ratione totam blanditiis error recusandae tenetur libero debitis nihil
          beatae perspiciatis impedit? Eius voluptas fugit consequatur impedit
          aliquid dolorum quas sapiente.
        </div>
      </div>
    </section>
  );
};

export default AboutAndContact;
