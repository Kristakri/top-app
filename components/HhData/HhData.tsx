import { HhDataProps } from "./HhDataProps";
import styles from "./HhData.module.css";
import cn from "classnames";
import { Card } from "../components";
import { priceRu } from "../../helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps):JSX.Element => {
  return (
    <section className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.statCount}>{count}</div>
      </Card>
      <Card className={styles.salary}>
       <div>
        <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <span className={cn('material-symbols-outlined', styles.filled)}>stars</span>  
            <span className={cn('material-symbols-outlined')}>stars</span>  
            <span className={cn('material-symbols-outlined')}>stars</span>  
          </div>
       </div>
       <div>
        <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <span className={cn('material-symbols-outlined', styles.filled)}>stars</span>  
            <span className={cn('material-symbols-outlined', styles.filled)}>stars</span>  
            <span className={cn('material-symbols-outlined')}>stars</span>  
          </div>
       </div>
       <div>
        <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <span className={cn('material-symbols-outlined', styles.filled)}>stars</span>  
            <span className={cn('material-symbols-outlined', styles.filled)}>stars</span>  
            <span className={cn('material-symbols-outlined', styles.filled)}>stars</span>  
          </div>
       </div>
      </Card>
    </section>
  );
};