import React, { useState, useEffect, useRef } from 'react';
import style from './topNav.module.scss';
import logoImg from '../../utils/logo/logoTop.svg';
import { BsBell } from 'react-icons/bs';
import { RiArrowDropLeftFill } from 'react-icons/ri';
import { notificationData } from './notificationData';

const TopNav = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef();

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <div className={style.navbar}>
            <div className={style.logo}>
              <img src={logoImg} className="img-fluid" alt="" />
            </div>
            <ul className={style.topnav}>
              <li className={style.navLinks} onClick={handleDropdownToggle}>
                <RiArrowDropLeftFill />
                <BsBell /> <span>2</span>
              </li>
              <li className={style.navLinks}>Admin</li>
              <li className={style.navLinks}>logout</li>
            </ul>
          </div>
        </nav>
      </header>
      {isDropdownVisible && (
        <Dropdown ref={dropdownRef} />
      )}
    </>
  );
};

export default TopNav;

const Dropdown = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={style.dropdownBox}>
     <div className={style.notificBox}>
     {notificationData.map((data,index)=>(
       <p className={style.notification}>{data.title}</p>
      ))}
     </div>
    </div>
  );
});
