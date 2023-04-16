import React from 'react';
import style from "./button.module.scss";
import clsx from 'clsx';

const Button = ({children, className, onClick, variant,rounded}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'blue':
        return style.blue;
      case 'lightPurple':
        return style.lightPurple;
      case 'red':
        return style.red;
      case 'outlineBlue':
        return style.outlineBlue;
      case 'outlineLightPurple':
        return style.outlineLightPurple;
      case 'outlineRed':
        return style.outlineRed;
      default:
        return style.button;  
    }
  };

  const getRoundedStyle = () => {
    switch (rounded) {
      case 'full':
        return style.roundedFull;
      case 'md':
        return style.roundedMd;
      case 'xs':
        return style.roundedxs;
      default:
        return style.button;  
    }
  };

  return (
    <button className={clsx(style.button, getVariantStyle(),getRoundedStyle(), className)} onClick={onClick}>
        {children}
    </button>
  );
};

export default Button;
