import React, { useContext } from "react";
import "./ThemeChanger.css";
import { DataContext } from "../../context/DataContext";

export default function ThemeChanger() {
  const { themeHandler, theme, langHandler, langPre } = useContext(DataContext);
  return (
    <div className="flex flex-row items-center justify-center sm:justify-end mt-6 text-text ">
      <div className="block">
        <label htmlFor="checkbox" className="flex items-center cursor-pointer">
          <div className="relative mr-2">
            <input
              type="checkbox"
              id="checkbox"
              className="sr-only"
              onChange={themeHandler}
              checked={theme === "dark" ? true : false}
            />
          </div>
        </label>
      </div>
 
      <div>
        <div className="  sm:hidden cursor-pointer">
          {langPre === true ? "EN" : "TR"}
        </div>
        <div className="hidden sm:inline-block">
          {theme.toUpperCase()} MOD |
          <span
            className="cursor-pointer text-primary font-bold"
            onClick={langHandler}
          >
            {langPre === true ? "İNGİLİZCE" : "TÜRKÇE"}
          </span>
          'YE GEÇ
        </div>
      </div>
    </div>
  );
}
