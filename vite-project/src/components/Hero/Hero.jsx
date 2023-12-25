import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

 export const Hero = () => {
    return (<section className={styles.container}>
     <div className={styles.content}>
     <h1 className={styles.title}>Hi I am Rahul </h1>
     <p className={styles.discription}>I am a dynamic professional with a diverse background, bringing expertise in both software development and data analytics. With 1.5 years of hands-on experience in Java and Spring, I have contributed to the development of robust and scalable applications.

In addition to my programming skills, I possess 1.2 years of experience as a Data Analyst, specializing in Power BI and QlikView. My analytical mindset and proficiency in these tools have enabled me to derive meaningful insights from complex datasets, facilitating informed decision-making</p>
     <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
     </div>
     <img src={getImageUrl("hero/mypic.jpg")} alt="My Image" className={styles.heroImg}/>
     <div className={styles.topBlur}/>
     <div className={styles.bottomBlur}/>
    </section>
    );
};
