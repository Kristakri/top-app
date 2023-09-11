import { HeaderProps } from "./HeaderProps";
import styles from "./Header.module.css";
import cn from "classnames";

export const Header = ({ ...props }: HeaderProps):JSX.Element => {
  return (
    <header {...props}>
      Header
    </header>
  );
};