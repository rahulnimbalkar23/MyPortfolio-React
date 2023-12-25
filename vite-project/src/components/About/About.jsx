import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div  className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Sitting with a laptop" className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am frontend Developer with experience in building responsive
                and optimize sites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised backend system and API's </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>I have design multiple dashbaord and reports in Qlikview and PowerBI </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
