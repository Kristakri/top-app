import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: 'primary' | 'white';
  icon: 'expand_less' | 'close' | 'menu';
}