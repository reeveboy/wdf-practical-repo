import React from "react";

function Item({ item }) {
  return (
    <div className="flex w-full p-4 bg-rose-200 rounded-lg text-amber-800">
      <img
        className="rounded-lg object-cover max-h-[200px] max-w-[250px] min-h-[200px] min-w-[250px]"
        src={item.image}
      />
      <div className="flex flex-col p-2 max-h-[200px]">
        <div className="capitalize text-md font-bold">{item.name}</div>
        <p className="p-1"></p>
        <div className="text-amber-700 overflow-ellipsis overflow-hidden text-md">
          {item.description}
        </div>
        <p className="p-1"></p>
        <div className="mt-auto self-end text-amber-700 text-xl font-bold">
          &#8377;{item.price}
        </div>
      </div>
    </div>
  );
}

export default Item;
