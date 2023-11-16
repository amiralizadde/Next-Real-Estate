import React from "react";

function Footer() {
  return (
    <>
        <footer className="footer min-h-[200px]  flex flex-col items-center justify-evenly bg-[#101d2c]">
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6  mx-auto  w-full p-10 child:text-white  child:text-start child:m-2 text-base">
            <li className="nav__item">
              <a href="#" className="nav__link">
                خانه رویایی خود را پیدا کنید
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                درخواست پروپوزال
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                برنامه اجاره خانه ها
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                با ما تماس بگیرید
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                ملک خود را ارسال کنید
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                با ما کار کنید
              </a>
            </li>
          </ul>

          <p className="copyright  text-white text-xs">
            &copy; حقوق مادی معنوی این سایت برای
            <strong className="copyright__name text-primary">مهدی ایلخانی نسب</strong>
            محفوظ میباشد
          </p>
        </footer>
    </>
  );
}

export default Footer;
