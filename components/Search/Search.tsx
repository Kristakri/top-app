import { SearchProps } from "./SearchProps";
import styles from "./Search.module.css";
import cn from "classnames";
import { Button, Input } from "../components";
import { useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props}: SearchProps):JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key == "Enter") {
      goToSearch();
    }
  };

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search
      }
    })
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input 
        placeholder="Поиск..."
        value={search}
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={() => goToSearch()}
      >
        <span className="material-symbols-outlined">search</span>
      </Button>
    </div>
  );
};