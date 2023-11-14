import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  mapMarker,
  faKey,
  faLock,
  faMapMarker,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <>
      <div className="columns-1 sm:columns-2 xl:columns-3 p-5 px-10 space-y-5 sm:p-10 sm:child:min-h-[100px] child:overflow-y-auto xl:p-20 xl:px-40  ">
        <div className="flex">
          <FontAwesomeIcon icon={faGlobe} />
          <div className="mr-3">
            <h4 className="text-base font-medium xl:font-bold">بهترین خانه های لوکس جهان</h4>
            <p className="text-xs xl:text-sm mt-2 ">
              نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان
              وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را
              ایجاد کردند
            </p>
          </div>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faMapMarker} />
          <div className="mr-3">
            <h4 className="text-base font-medium xl:font-bold">همه خانه ها در مکان های برتر</h4>
            <p className="text-xs xl:text-sm mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
         <div className="flex">
          <FontAwesomeIcon icon={faKey} />
          <div className="mr-3">
            <h4 className="text-base font-medium xl:font-bold" >خانه جدید در یک هفته</h4>
            <p className="text-xs xl:text-sm mt-2">
              ز آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
              معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
              نشان دهند که قالب طراحی شده
            </p>
          </div>
        </div>
       <div className="flex">
          <FontAwesomeIcon icon={faLock} />
          <div className="mr-3">
            <h4 className="text-base font-medium xl:font-bold">فقط بهترین خواص</h4>
            <p className="text-xs xl:text-sm mt-2">
              تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از
              اینکه متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها
              چگونه در نظر گرفته شده است.
            </p>
          </div>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faMapMarker} />
          <div>
            <h4 className="text-base font-medium xl:font-bold">پرداخت های ایمن در بعدی</h4>
            <p className="text-xs xl:text-sm mt-2">
              ر نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد
              دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و
              اینکار زمان بر خواهد بود.
            </p>
          </div>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faTrophy} />
          <div className="mr-3">
            <h4 className="text-base font-medium xl:font-bold">1% مشاوران املاک برتر</h4>
            <p className="text-xs xl:text-sm mt-2">
              همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در
              مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز
              کنند.
            </p>
          </div>
        </div>
      </div>

      {/* <FontAwesomeIcon icon={faSearch} style={{ fontSize: 100, color: "blue" }} /> */}
    </>
  );
}

export default Features;
