import { useRouter } from "next/router";
import db from "../../data/db.json";

function SingleHomeDetailsPage() {
  const router = useRouter();
  console.log('db : ' , db.homes);
  const home = db.homes.find(home=>Number(home.id) === Number(router.query.id))
  console.log('home : ' , home);


  return (
    <div className="grid grid-cols-10 grid-rows-11  my-5 sm:grid-rows-none">
      <div className="col-start-2 col-span-8 row-start-1 row-end-3 sm:col-start-1 sm:col-span-4 sm:row-start-1 sm:row-span-2">
        <img
          src={home?.img}
          className="w-full h-full object-cover sm:p-5"
          alt=""
        />
      </div>
      {/* description */}
      <div className="col-start-2 col-span-8 row-start-3 row-end-5 sm:col-start-5 sm:col-span-6 sm:row-start-1 sm:row-span-5 sm:p-10 sm:child:my-4">
        <p className=" flex justify-between items-center">
          <span className="inline-block text-xl font-semibold ">فروشگاه مجازی ماکسیما </span>
          <span className="xs:inline-block text-xl font-semibold text-end  block my-2">{home?.price} تومان</span>
        </p>
        <div>
          <span className="bg-green-600 px-2 py-1 text-sm text-white"  >ویزه </span>
          <span className="bg-[#c69963] mx-2 px-2 py-1 text-sm text-white">برای اجاره</span>
        </div>
        <p className="text-base my-2">آدرس : تهران , نواب</p>
        <p className="flex justify-between items-center ">
          <span className="text-xl font-bold">مرور کلی </span>
          <span>کد ملک : HZ:21s455</span>
        </p>
        <hr className="my-2" />
        <div className="grid grid-cols-2 md:grid-cols-4 items-center my-2 gap-2">
          <p className=" md:text-center">نوع ملک : {home?.title}</p>
          <p className=" md:text-center">اتاق:{home?.roomCount}</p>
          <p className=" md:text-center">متراز:{home?.meterage}متر</p>
          <p className=" md:text-center">سال ساخت:1402</p>
        </div>
      </div>
      <div className="col-start-2 col-span-8 row-start-5 row-span-6 sm:col-start-1 sm:col-span-9 sm:row-start-5 sm:row-span-5 lg:row-start-3 lg:child:leading-10 lg:mt-5">
        <h2 className="text-2xl font-bold">توضیحات</h2>
        <hr className="my-2" />
        <p className="text-base text-justify leading-7">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          مشاوران دوطرفه به خریدار و فروشنده مشاوره می‌دهند. یک مشاور املاک
          وظیفه دارد که با صداقت به هر دو طرف معامله مشاوره و راهنمایی درستی
          بدهد. مشاوران دوطرفه باید از هر دو طرف چه فروشنده و چه خریدار بخواهند
          که یک قرارداد نمایندگی دوطرفه را امضا کنند. قوانین و مقررات خاصی برای
          مشاوران دوطرفه وجود دارد، این دست از مشاوران نسبت به دو دسته قبل
          کارشان سخت‌تر و پیچیده‌تر است.لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
        </p>
      </div>
    </div>
  );
}

export default SingleHomeDetailsPage;
