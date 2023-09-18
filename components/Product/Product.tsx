import { ProductProps } from "./ProductProps";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card, Rating, Tag, Button, H, P, Divider, Review, ReviewForm } from "../components";
import { decOfNum, priceRu } from "../../helpers/helpers";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Product = motion(forwardRef(({product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
		visible: {
			height: 'auto',
			opacity: 1
		},
		hidden: {
			height: 0,
			opacity: 0
		},
	};

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
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
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount}
            {decOfNum(product.reviewCount, [" отзыв", " отзыва", " отзывов"])}
          </a>
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
          <Button 
            appearance="ghost" 
            arrow={isReviewOpened ? 'down' : 'rigth'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >Читать отзывы</Button>
        </div>
      </Card>  
      <motion.div
        layout
        variants={variants}
        initial={'hidden'}
        animate={isReviewOpened ? 'visible' : 'hidden'}
        className={styles.reviews} 
      >
        <Card 
          color="blue" 
          ref={reviewRef}
          className={styles.reviewsCard} 
        >
          {product.reviews && product.reviews.map(r => (
            <div key={r._id}>
              <Review review={r} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} />
        </Card>
      </motion.div>
    </div>

  );
}));