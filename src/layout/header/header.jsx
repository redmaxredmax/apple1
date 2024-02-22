import React from "react";
import { Apple } from "../../../public/icons/apple";
import { headerData } from "../../data/data";
import { Phone } from "/public/icons/phone.jsx";
import { SubHeader } from "./sub-header";
import { Tab } from "./tabs";

export const Header = () => {
  console.log();
  return (
    <div className="container">
      <div className="pb-[22px] pt-[20px] flex justify-between items-center">
        <a href="/">
          <Apple />
        </a>
        <ul className="flex gap-[20px]">
          {headerData.map((item) => (
            <li key={item.id}>
              <a
                className="hover:text-primary hover:border-b-2 text-lg"
                href={item.path}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[10px]">
          <Phone />
          <p>+7 812 561 96 62</p>
        </div>
      </div>
      <SubHeader />
      <Tab />
    </div>
  );
};
