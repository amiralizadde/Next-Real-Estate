import React from "react";

function Gallery() {
  return (
    <div className=" ">
      <div className="grid grid-cols-8 grid-rows-7    gap-3 p-5 ">
     
         <figure className="col-start-1 col-span-2 row-start-1 row-span-2">
          <img src="img/gal-1.jpeg" alt="Galley house-1" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-3 col-span-3 row-start-1 row-span-3">
          <img src="img/gal-2.jpeg" alt="Galley house-2" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-6 col-span-1 row-start-1 row-span-2">
          <img src="img/gal-3.jpeg" alt="Galley house-3" className=" w-full h-full object-cover" />
        </figure>
          <figure className="col-start-7 col-span-2 row-start-1 row-span-2">
          <img src="img/gal-4.jpeg" alt="Galley house-4" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-1 col-span-2 row-start-3 row-span-3">
          <img src="img/gal-5.jpeg" alt="Galley house-5" className=" w-full h-full object-cover" />
        </figure>
       <figure className="col-start-3 col-span-2  row-start-4 row-span-2">
          <img src="img/gal-6.jpeg" alt="Galley house-6" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-5 col-span-1 row-start-4 row-span-1">
          <img src="img/gal-7.jpeg" alt="Galley house-7" className=" w-full h-full object-cover" />
        </figure>
         <figure className="col-start-6 col-span-2 row-start-3 row-span-2 border">
          <img src="img/gal-8.jpeg" alt="Galley house-8" className=" w-full h-full object-cover" />
        </figure>
       <figure className="col-start-8 col-span-1 row-start-3 row-span-3">
          <img src="img/gal-9.jpeg" alt="Galley house-9" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-1 col-span-1 row-start-6 row-span-2">
          <img src="img/gal-10.jpeg" alt="Galley house-10" className=" w-full h-full object-cover"/>
        </figure>
        <figure className="col-start-2 col-span-2 row-start-6 row-span-2">
          <img src="img/gal-11.jpeg" alt="Galley house-11" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-4 col-span-1 row-start-6 row-span-2">
          <img src="img/gal-12.jpeg" alt="Galley house-12" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-5 col-span-3 row-start-5 row-span-3">
          <img src="img/gal-13.jpeg" alt="Galley house-13" className=" w-full h-full object-cover" />
        </figure>
        <figure className="col-start-8 col-span-1 row-start-6 row-span-2">
          <img src="img/gal-14.jpeg" alt="Galley house-14" className=" w-full h-full object-cover" />
        </figure>
      </div>
    </div>
  );
}

export default Gallery;
