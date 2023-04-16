import React from 'react';
import style from "./baselayout.module.scss";
import TopNav from '../TopNav';
import { routesLink } from '../../routes';
import { NavLink } from 'react-router-dom';


const BaseLayout = ({children}) => {
  return (
    <>
      <TopNav/>
      <section className={style.baseLayout}>
        <aside>
          <div className={style.sideNav}>
           <nav>
           <ul className={style.navList}>
              {routesLink.map((data, index) => { // Reversed order of data and index in map function
                return(
                  <li key={data.path} className={style.navItems}>
                    <NavLink to={data.path} className={style.links}>{data.icon} {data.name}</NavLink>
                  </li>
                )
              })}
            </ul>
           </nav>
          </div>
        </aside>
        <main>
          {children}
        </main>
      </section>
    </>
  )
}

export default BaseLayout;
