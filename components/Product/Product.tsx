import { ProductProps } from "./ProductProps";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card, Rating, Tag, Button, H, P, Divider } from "../components";
import { decOfNum, priceRu } from "../../helpers/helpers";
import Image from "next/image";

export const Product = ({product, className }: ProductProps):JSX.Element => {
  return (
    <Card className={cn(className, styles.product)}>
      <div className={styles.logo}>
        <Image 
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
          alt={product.title}
          width={70}
          height={70}
        />
      </div>
      <H tag="h3" className={styles.title}>{product.title}</H>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && <Tag color="green" className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
      <div className={styles.tags}>
        {product.categories.map(c => <Tag key={c} color="ghost" className={styles.category}>{c}</Tag>)}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount} {decOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <div className={styles.hr}><Divider /></div>
      <P className={styles.description}>{product.description}</P>
      <div className={styles.feature}>
        {product.characteristics.map(c => (
          <div className={styles.characteristics} key={c.name}>
            <span className={styles.characteristicsName}>{c.name}</span>
            <span className={styles.characteristicsDots}></span>
            <span className={styles.characteristicsValue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && <div className={styles.advantages}>
          <H tag="h4">Преимущества</H>
          <div>{product.advantages}</div>
        </div>}
        {product.disadvantages && <div className={styles.disadvantages}>
          <H tag="h4">Недостатки</H>
          <div>{product.disadvantages}</div>
        </div>}
      </div>
      <div className={styles.hr}><Divider /></div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow={'rigth'}>Читать отзывы  </Button>
      </div>
    </Card>  
  );
};