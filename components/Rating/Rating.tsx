import { RatingProps } from "./RatingProps";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState,KeyboardEvent, forwardRef, ForwardedRef } from "react";

export const Rating = forwardRef((
    {isEditable = false, rating, setRating, error, className, ...props}: RatingProps, 
    ref: ForwardedRef<HTMLDivElement>
  ):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span 
          className={cn('material-symbols-outlined', styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeUserRating(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) => isEditable && handleSpace(i + 1, e)}
        >star</span>
      );
    });
    setRatingArray(updatedArray);
  };
  
  const handleSpace = (i: number, e: KeyboardEvent<HTMLElement>) => {
    if(e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  }

  const changeUserRating = (rating: number) => {
    if(!isEditable || !setRating) {
      return;
    }
    setRating(rating);
  };

  const changeDisplay = (i: number) => {
    if(!isEditable || !setRating) {
      return;
    }
    constructRating(i);
  };

  return (
    <div
      ref={ref}
      className={cn({
				[styles.error]: error
			})}
      {...props}
    >
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
 );
});