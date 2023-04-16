import React, { useState } from "react";
import style from "./datePicker.module.scss"
import clsx from "clsx";

const DatePicker = ({className,label,value,onChange}) => {
  return (
   <div className={style.formElement}>
    <label>{label}</label>
     <input
     className={clsx(style.datePicker,className)}
      type="date"
      value={value}
      onChange={onChange}
    />
   </div>
  );
};

export default DatePicker;
