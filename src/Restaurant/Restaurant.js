import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "./Menu";

function Restaurant() {
  const [menu, setMenu] = useState(data);

  useEffect(() => {
    let cats = [];
    data.forEach((val) => {
      if (!cats.includes(val.category)) cats.push(val.category);
    });
    setCategories(cats);
  });
  const [categories, setCategories] = useState([]);

  function handleAll(cat) {
    if (cat == "all") return setMenu(data);

    setMenu(() => {
      return data.filter((val) => {
        if (val.category == cat) return val;
      });
    });
  }

  return (
    <div className="h-screen flex flex-col items-center p-8 bg-gray-100 text-gray-900 overflow-y-auto">
      <div className="text-3xl font-black border-b-2 border-orange-400">
        Our Menu
      </div>
      <p className="p-2"></p>
      <div className="flex">
        <button className="capitalize text-xl" onClick={() => handleAll("all")}>
          All
        </button>
        <p className="p-2"></p>
        {categories.map((cat) => {
          return (
            <>
              <button
                className="capitalize text-xl"
                onClick={() => handleAll(cat)}>
                {cat}
              </button>
              <p className="p-2"></p>
            </>
          );
        })}
      </div>
      <p className="p-2"></p>
      <div className="grid grid-cols-2 gap-4">
        {menu.map((item, idx) => (
          <div className="flex w-full p-4 bg-rose-200 rounded-lg text-amber-800">
            <img
              className="rounded-lg object-cover max-h-[200px] max-w-[250px] min-h-[200px] min-w-[250px]"
              src={item.image}
            />
            <div className="flex flex-col p-2 max-h-[200px]">
              <div className="flex justify-between items-center">
                <div className="capitalize  text-md font-bold">{item.name}</div>
                <div className="text-amber-700 text-xl font-bold">300</div>
              </div>
              <p className="p-1"></p>
              <div className="text-amber-700 overflow-ellipsis overflow-hidden text-md">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
