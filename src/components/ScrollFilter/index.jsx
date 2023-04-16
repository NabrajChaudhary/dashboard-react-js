import React from 'react'
import style from "./scrollFilter.module.scss"
import clsx from 'clsx'


const ScrollFilter = ({className,label,value,onChange,data}) => {
  return (
    <div className={clsx(style.formElement,className)}>
    <label>{label}</label>
    <div className={style.scrollFilteComp}>
    <ul>
       {data.map((data,index)=>(
         <li key={index}>{data.label}</li>
       ))}
     </ul>
    </div>
   </div>
  )
}

export default ScrollFilter