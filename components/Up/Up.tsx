import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/useScrollY";
import styles from "./Up.module.css";
import cn from "classnames";
import { useEffect } from "react";
import { ButtonIcon } from "../components";

export const Up = ():JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    if(y > 400) {
      controls.start({opacity: 1, transform: 'translateY(0px)'});
    } else {
      controls.start({opacity: 0, transform: 'translateY(20px)'});
    }
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      animate={controls}
      className={styles.up} 
      onClick={() => scrollToTop()}
      initial={{opacity: 0, transform: 'translateY(20px)'}}
    >
      <ButtonIcon appearance="primary" icon="expand_less" />
    </motion.div>
  );
};