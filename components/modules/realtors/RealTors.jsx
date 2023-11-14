import React from "react";

function RealTors() {
  return (
    <div className="w-full xl:w-1/4 h-auto  space-y-6 bg-[#101d2c] ">
      <div className=" mb-5 flex flex-col items-center space-y-6 h-full">
        <p className="text-lg text-primary self-center mt-6 sm:mt-3">سه مالک برتر</p>
        <div className=" sm:flex flex-row items-center sm:px-4  xl:flex-col xl:gap-y-7"> 
          <div className=" m-2 flex flex-col sm:flex-row items-center sm:child:space-x-10 ">
            <img
              src="../img/realtor-1.jpeg"
              className=" rounded-full w-16 h-16 xl:w-20 xl:h-20"
              alt=""
            />
            <div className="mt-3 sm:child:text-start sm:mr-3">
               <h2 className="text-xs sm:text-sm sm:font-normal  xl:text-xl text-white">مهدی ایلخانی نسب</h2>
               <p className="text-[9.5px] text-center text-[#AAAAAA] xl:text-xs">869 فروش خانه</p>
            </div>
          </div>

          <div className=" flex flex-col items-center sm:flex-row sm:child:space-x-10 ">
            <img
              src="../img/realtor-2.jpeg"
              className="rounded-full w-16 h-16 xl:w-20 xl:h-20"
              alt=""
            />
            <div className="mt-3 sm:child:text-start sm:mr-3">
              <h2 className="text-xs text-white xl:text-xl"> کوثر بهشتی</h2>
              <p className="text-[9.5px] text-center text-[#AAAAAA] xl:text-xs">243 فروش خانه</p>
            </div>
          </div>

          <div className=" flex flex-col items-center sm:flex-row sm:child:space-x-10 ">
            <img
              src="../img/realtor-3.jpeg"
              className="rounded-full w-16 h-16 xl:w-20 xl:h-20"
              alt=""
            />
            <div className="mt-3 sm:child:text-start sm:mr-3">
              <h2 className="text-xs text-white xl:text-xl"> عرشیا احسنی</h2>
              <p className="text-[9.5px] text-center text-[#AAAAAA] xl:text-xs">130 فروش خانه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTors;
