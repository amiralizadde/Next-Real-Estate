import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className="h-auto w-full sm:w-3/4 bg-[#101d2cef] p-8 xl:w-3/4 xl:p-32">
      <div className=" flex flex-col items-center justify-center space-y-5">
        <img src="../img/logo.png" className="w-30 h-8 object-cover" alt="" />
        <h2 className="self-start text-primary text-base font-semibold">
          خانه خودتان:
        </h2>
        <p className="self-start text-white text-2xl font-semibold">
          با خرید خانه نهایت آزادی را احساس کنید
        </p>
        <Link href="/homes" className="self-start bg-primary text-white text-xs font-bold p-2 w-40 h-10 xl:text-base xl:w-60  xl:h-15">
          املاک را مشاهده کنید
        </Link>
        <p  className={`${styles.seeon__text} hidden w-full text-center text-sm text-[#AAAAAA] sm:flex items-center justify-evenly`}>
           دیده میشود در
        </p>
        <div className="hidden child:z-0 child:w-20 child:xl:w-[100px]  child:h-8 child:object-contain child:brightness-75 sm:flex  w-full items-center justify-between">
          <img src="../img/logo-bbc.png" alt="BBC" class="seeon__img" />
          <img src="../img/logo-bi.png" alt="BBC" class="seeon__img" />
          <img src="../img/logo-forbes.png" alt="BBC" class="seeon__img" />
          <img src="../img/logo-techcrunch.png" alt="BBC" class="seeon__img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
