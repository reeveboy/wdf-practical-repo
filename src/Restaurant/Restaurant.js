import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
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
    <div className="h-screen flex flex-col items-center p-8 bg-rose-50 text-gray-900 overflow-y-auto">
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
          <Item item={item} />
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
