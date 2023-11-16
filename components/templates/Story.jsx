import React from "react";

function Story() {
  return (
    <div className="h-auto mt-10 columns-1 md:columns-2 md:flex md:items-stretch">
      {/* image Story */}
      <div className="bg-primary px-12 py-6 relative md:pt-28 md:w-3/4">
        <img src="../img/story-1.jpeg" alt="" />
        <img
          src="../img/story-2.jpeg"
          className="absolute top-16 right-6 w-2/5 md:left-6 md:right-auto md:scale-150"
          alt=""
        />
      </div>
      {/* content Story */}
      <div className=" flex flex-col justify-center items-start px-6 py-12 bg-[#f9f7f6] md:justify-center xl:px-16	">
        <span className="text-primary">مشتریان خوشحال</span>
        <h1 className="font-extrabold text-3xl mt-3 xl:text-4xl">”بهترین تصمیم زندگی ما“</h1>
        <p className="text-xs	mt-1 xl:w-2/3 xl:text-base">
          متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک
          طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این
          متن برای پرکردن
        </p>
        <button className="mt-2 bg-primary text-white px-6 py-2 text-xs md:mt-3 xl:px-10 xl:py-3 xl:text-base ">خانه خود را پیدا کنید</button>
      </div>
    </div>
  );
}

export default Story;
