import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({appearance, arrow = "none", children, className, ...props }: ButtonProps):JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && 
      <span className={cn('material-symbols-outlined', styles.arrow, {
        [styles.down]: arrow == "down",
      })}>arrow_forward_ios</span>}
    </button>
  );
};