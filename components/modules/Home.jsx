import React from "react";
import db from "../../data/db.json";
import Link from "next/link";

function Home(item) {
  const { id, img, meterage, price, roomCount, title } = item;

  return (
    <>
        <div className="  bg-[#f9f7f6]  flex flex-col items-center justify-center ">
          {/* image */}
          <div className="h-2/3 w-full">
            <img
              src={`../${img}`}
              className="h-full w-full  object-cover"
              alt=""
            />
            <p className="  w-2/3 text-sm -translate-y-6 bg-[#101d2c] text-white mx-auto text-center py-2">
             {title}
            </p>
          </div>
          {/* details */}
          <div className="h-1/2 w-full  flex flex-col justify-between ">
            <p className="flex justify-between child:w-1/2 mt-5 child:text-xs">
              <span className=" ">مکان</span>
              <span className=" ">{roomCount}اتاق</span>
            </p>
            <p className="flex justify-between child:w-1/2 child:text-xs">
              <span className=" ">{meterage}متر مربع</span>
              <span className=" ">{price}میلیون تومان</span>
            </p>
            <Link href={`/homes/${id}`} className="bg-primary w-full text-white py-2 text-sm text-center">
              مشاهده ملک
            </Link>
          </div>
        </div>
    </>
  );
}

export default Home;
