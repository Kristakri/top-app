import { HProps } from "./HProps";
import styles from "./H.module.css";
import cn from "classnames";

export const H = ({className, tag, children, ...props}: HProps):JSX.Element => {
  return (<>
    {tag == 'h1' && <h1 className={cn(className, styles.h1)} {...props}>{children}</h1>}
    {tag == 'h2' && <h2 className={cn(className, styles.h2)} {...props}>{children}</h2>}
    {tag == 'h3' && <h3 className={cn(className, styles.h3)} {...props}>{children}</h3>}
    {tag == 'h4' && <h4 className={cn(className, styles.h4)} {...props}>{children}</h4>}
  </>);
};