import styles from "./Advantages.module.css";
import cn from "classnames";
import { Card, H, P } from "../components";
import { priceRu } from "../../helpers/helpers";
import { AdvantagesProps } from "./AdvantagesProps";

export const Advantages = ({advantages}: AdvantagesProps):JSX.Element => {
  return (
    <section className={styles.advantages}>
      <H tag="h2">Преимущества</H>

      {advantages.map(a => (
        <div key={a._id} className={styles.item}>
          <div className={styles.title}>
            <div className={styles.icon}><span className="material-symbols-rounded">done</span></div>
            <H tag="h3">{a.title}</H>
          </div>
          <div className={styles.content}>
            <P>{a.description}</P>
          </div>
        </div>
      ))}

    </section>
  );
};