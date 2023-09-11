import { SkillsProps } from "./SkillsProps";
import styles from "./Skills.module.css";
import cn from "classnames";
import { Card, H, Tag } from "../components";
import { priceRu } from "../../helpers/helpers";

export const Skills = ({ tags }: SkillsProps):JSX.Element => {
  return (
    <section className={styles.skills}>
      <H tag="h2">Получаемые навыки</H>
      {tags.map(t => <Tag color="primary" key={t}>{t}</Tag>)}
    </section>
  );
};