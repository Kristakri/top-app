import { ReviewProps } from "./ReviewProps";
import styles from "./Review.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { P, Rating } from "../components";

export const Review = ({review, className, ...props}: ReviewProps):JSX.Element => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={cn(className, styles.review)}>
      <span className={cn("material-symbols-outlined", styles.userIcon)}>account_circle</span>
      <div>
        <span><strong>{name}</strong>: {title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>
      <Rating rating={rating} className={styles.rating}/>
      <P size="small" className={styles.description}>{description}</P>
    </div>
    
  );
};