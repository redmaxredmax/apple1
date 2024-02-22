import React from "react";
import clsx from "clsx";
export const Button = ({ type, variant, children, onClick, icon: Icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("", {
        "bg-primary text-white text-xl flex items-center gap-[7px] py-[16px] px-[34px] rounded-[16px]":
          variant == "primary",
        "bg-secondar text-white text-xl py-[16px] px-[34px] flex items-center gap-[10px]  rounded-[16px]":
          variant == "secondary",
        "bg-[url('/public/imgs/banner.png')] bg-no-repeat px-[60px] text-xl text-white py-[20px]":
          variant == "tab",
        "bg-primary focus:bg-secondar text-white text-xl flex items-center gap-[7px] py-[16px] px-[70px]  rounded-[16px]":
          variant == "card",
        "text-primary rounded-[8px] bg-white text-base px-[64px] py-[16px] border-black":
          variant == "advantage",
      })}
    >
      {Icon ? Icon : ""}
      <span>{children}</span>
    </button>
  );
};
