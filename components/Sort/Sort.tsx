import { SortEnum, SortProps } from "./SortProps";
import styles from "./Sort.module.css";
import cn from "classnames";
import { KeyboardEvent } from 'react';

export const Sort = ({sort, setSort, className, ...props}: SortProps):JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span 
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.isActive]: sort == SortEnum.Rating
        })}
        tabIndex={0}
        onKeyDown={(e: KeyboardEvent) => { if(e.code == "Space" || e.code == "Enter") setSort(SortEnum.Rating); }}
      >
        <span className={cn('material-symbols-rounded', styles.sortIcon)}>sort</span>По рейтингу
      </span>

      <span 
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.isActive]: sort == SortEnum.Price
        })}
        tabIndex={0}
        onKeyDown={(e: KeyboardEvent) => { if(e.code == "Space" || e.code == "Enter") setSort(SortEnum.Price); }}
      >
        <span className={cn('material-symbols-rounded', styles.sortIcon)}>sort</span>По цене
      </span>
    </div>
  );
};