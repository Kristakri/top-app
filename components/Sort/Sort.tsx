import { SortEnum, SortProps } from "./SortProps";
import styles from "./Sort.module.css";
import cn from "classnames";

export const Sort = ({sort, setSort, className, ...props}: SortProps):JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span 
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.isActive]: sort == SortEnum.Rating
        })}
      >
        <span className={cn('material-symbols-rounded', styles.sortIcon)}>sort</span>По рейтингу
      </span>

      <span 
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.isActive]: sort == SortEnum.Price
        })}
      >
        <span className={cn('material-symbols-rounded', styles.sortIcon)}>sort</span>По цене
      </span>
    </div>
  );
};