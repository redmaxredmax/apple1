import React from "react";
import { advantageData } from "../../data/data";
import { Button } from "../ui/button";
export const Advantage = () => {
  return (
    <div>
      <ul className="grid grid-cols-5 gap-10 center">
        {advantageData.map((item) => (
          <li className="flex flex-col justify-between" key={item.id}>
            <img className="mb-[16px]" src={item.icon} alt="icon" />
            <h3 className="text-2xl font-bold text-center mb-[10px]">{item.name}</h3>
            <p className="text-sm text-dark_gray text-center ">{item.text}</p>
            <Button variant={"advantage"}>подробнее</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
