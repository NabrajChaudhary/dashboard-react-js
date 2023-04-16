import React from "react";
import Select from "react-select"
import style from "./reactSelect.module.scss"
import clsx from "clsx";

const ReactSelect = ({
  options,
  value,
  onChange,
  placeholder,
  isMulti,
  isSearchable,
  className,
  label
}) => {
  return (
    <div className={clsx(style.form_contorl,className)}>
      <label className={style.label}>{label}</label>
      <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={isSearchable}
      // menuIsOpen
      classNamePrefix="custom_Select"
      className="custom_Select"
    />
    </div>
  );
};

export default ReactSelect;
