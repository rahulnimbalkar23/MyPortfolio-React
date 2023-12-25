import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
        <p>9405482322</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:myemail@gmail.com">rahulnimbalkar125@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/rahul-nimbalkar-266411187">linkedIn.com/rahul-nimbalkar</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/rahulnimbalkar23/">github.com/rahulnimbalkar23</a>
        </li>
      </ul>
    </footer>
  );
};
