import React from 'react'

function RealTors() {
  return (
    <div className='w-full xl:w-1/4 h-auto border border-orange-400 space-y-6 bg-[#101d2c]'>
      <div className='border flex flex-col items-start space-y-6 h-full child:mr-12'>
        <p className='text-2xl text-primary self-center mt-6'>سه مالک برتر</p>
        <div className='flex items-center'>
          <img src="../img/realtor-1.jpeg" className='rounded-full w-16 h-16' alt="" />
          <div>
            <h2 className='text-xl text-white'>مهدی ایلخانی نسب</h2>
            <p className='text-xs text-[#AAAAAA]'>869 فروش خانه</p>
          </div>
        </div>

        <div className='flex items-center'>
          <img src="../img/realtor-2.jpeg" className='rounded-full w-16 h-16' alt="" />
          <div>
            <h2 className='text-xl text-white'>  کوثر بهشتی</h2>
            <p className='text-xs text-[#AAAAAA]'>243 فروش خانه</p>
          </div>
        </div>

        <div className='flex items-center'>
          <img src="../img/realtor-3.jpeg" className='rounded-full w-16 h-16' alt="" />
          <div>
            <h2 className='text-xl text-white'>  عرشیا احسنی</h2>
            <p className='text-xs text-[#AAAAAA]'>130 فروش خانه</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealTors