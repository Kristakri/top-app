import { TopPageComponentProps } from "./TopPageComponentProps";
import styles from "./TopPageComponent.module.css";
import cn from "classnames";
import { H, Tag, Card, Advantages, Skills, P, Sort, Product } from "../../components/components";
import { HhData } from "../../components/HhData/HhData";
import { TopLevelCategory } from "../../interfaces/page.intarface";
import { SortEnum } from "../../components/Sort/SortProps";
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps):JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum) => {
    dispathSort({type: sort});
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <H tag="h1">{page.title}</H>
        <Tag color="gray" size="m">{products.length}</Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
      {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p}/>))}
      </div>
      <div className={styles.hhTitle}>
        <H tag="h2">Вакансии - {page.category}</H>
        <Tag color="red" size="m">hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages}/>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Skills tags={page.tags}/>
    </div>
  );
};