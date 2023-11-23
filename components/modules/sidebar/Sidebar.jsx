import React from "react";
import styles from '../../../styles/sidebar.module.css'
import { MinusIcon } from '@heroicons/react/24/solid'

function Sidebar() {
  return (
    <div className="h-12 xl:h-screen border  w-full xl:w-12 xl:items-start xl:pt-2  bg-primary  flex items-center justify-center ">
      <input type="checkbox" id="sidebar-toggle" className={`${styles.sidebar__inputChek} position:absolute top-0 right-0 hidden`}/>
      <label htmlFor="sidebar-toggle" className={`${styles.sidebar__label} relative w-full min-h-[1rem] cursor-pointer  flex items-center justify-start z-50`}>
        <div className={`${styles.sidebar__menuIcon} transition-all duration-75 h-0.5 w-6 bg-white mx-3 relative`}></div>
      </label>

     {/* open menu */}
      <div className={`${styles.sidebar__background} bg-zinc-700 z-40`}> 

       <ul className=" child:p-2 child:bg-primary child:w-40 child:flex child:items-center child:justify-center child:m-8 child:cursor-pointer	child:text-white">
        <li>
          <a href="/" className="text-sm">صفحه اصلی</a>
        </li>
        <li>
          <a href="#" className="text-sm">ویزگی ها</a>
        </li>
        <li>
          <a href="#" className="text-sm">نظرات</a>
        </li>
        <li>
          <a href="#" className="text-sm"> خانه ها </a>
        </li>
        <li>
          <a href="#" className="text-sm">گالری </a>
        </li>
        </ul>    

      </div>

    </div>
  );
}

export default Sidebar;
