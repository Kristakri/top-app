import { RatingProps } from "./RatingProps";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState,KeyboardEvent, forwardRef, ForwardedRef, useRef } from "react";

export const Rating = forwardRef((
  {isEditable = false, rating, setRating, error, className, tabIndex, ...props}: RatingProps, 
  ref: ForwardedRef<HTMLDivElement>):JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const computeFocuse = (r: number, i: number): number => {
    if(!isEditable) {
      return -1;
    }
    if(!rating && i == 0) {
      return tabIndex ?? 0;
    }
    if(r == i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

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
          tabIndex={computeFocuse(rating, i)}
          onKeyDown={handleKey}
          ref={r => ratingArrayRef.current?.push(r)}
        >star</span>
      );
    });
    setRatingArray(updatedArray);
  };
  
  const handleKey = (e: KeyboardEvent) => {
    if(!isEditable || !setRating) {
      return;
    }
    if(e.code == "ArrowRight" || e.code == "ArrowUp") {
      if(!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if(e.code == "ArrowLeft" || e.code == "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

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