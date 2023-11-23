import React, { useEffect, useState } from "react";
import db from "../../data/db.json";
import Home from "@/components/modules/Home";

function index() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.homes]);
  const [sort, setSort] = useState("-1");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("search", search);
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        let newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        let newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        let newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default:
        break;
    }
  }, [sort]);

  const paginateHandler = (event, page) => {
    event.preventDefault();
    const endIndex = 3 * page;
    const startIndex = endIndex - 3;
    const paginatedHomes = db.homes.slice(startIndex, endIndex);
    setHomes(paginatedHomes);
  };

  return (
    <>
      <div className="p-10 flex items-center justify-between ">
        <div>
          <select
            className="border border-gray-600"
            defaultValue={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="-1"> فیلتر بر اساس </option>
            <option value="price">بر اساس قیمت </option>
            <option value="room">بر اساس تعداد اتاق </option>
            <option value="meterage">بر اساس متر مربع </option>
          </select>
        </div>
        <div>
          <input
            type="search"
            placeholder="type ..."
            className="border border-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid mx-auto mb-8  bg-white px-12 mt-12  sm:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-12 child:w-[70vw] sm:child:h-auto sm:child:w-full">
        {homes.slice(0, 3).map((homeItem) => (
          <Home key={homeItem.id} {...homeItem} />
        ))}
      </div>
      <ul className="pagintion flex justify-center items-center mb-4">
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, index) => (
            <li className="mx-3 bg-primary rounded-full px-3 py-1 cursor-pointer" onClick={(e) => paginateHandler(e, index + 1)}>
              <a href="#">{index + 1}</a>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default index;
