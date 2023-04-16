import React from 'react'
import style from "./sidebar.module.scss"
import { routesLink } from '../../routes'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={style.sideNav}>
        <nav>
            <ul className={style.navList}>
              {routesLink.map((data, index) => { // Reversed order of data and index in map function
                console.log("data",data);
                return(
                  <li key={data.path} className={style.navItems}>
                    <NavLink to={data.path} >{data.Icon} {data.name}</NavLink>
                  </li>
                )
              })}
            </ul>
        </nav>
    </div>
  )
}

export default SideBar