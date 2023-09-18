import { ButtonIconProps } from "./ButtonIconProps";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({appearance = 'white', icon, className, ...props }: ButtonIconProps):JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
      })}
      {...props}
    >
      <span className={cn("material-symbols-outlined", styles.buttonIcon)}>{icon}</span>
    </button>
  );
};