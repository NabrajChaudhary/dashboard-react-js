import React from 'react'
import style from "./tButon.module.scss"

const TButton = ({children,onClick}) => {
  return (
    <button className={style.tableButton} onClick={onClick}>
        {children}
    </button>
  )
}

export default TButton