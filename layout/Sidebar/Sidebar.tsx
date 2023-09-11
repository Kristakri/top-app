import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import { Search } from "../../components/components";

export const Sidebar = ({ className, ...props }: SidebarProps):JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.logo}>
        <span className="material-symbols-outlined">raven</span><strong>Raven</strong>top
      </div>
      <Search />
      <Menu />
    </div>
  );
};