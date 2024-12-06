import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div class="flex justify-between font-sans ">
      <div class="flex ">
        <h3>MealPool</h3>
        <div class="flex">
          <span class="text-[#1E1C1C] font-bold text-[18px] ">
            Available on
          </span>

          <span class="text-[#04C92F] font-bold text-[18px]">App Store</span>
          <span class="font-bold">&</span>
          <span class="text-[#04C92F] font-bold text-[18px]">Play Store</span>
        </div>
        <div class="h-[34px] w-[149px] bg-[#EDEAEA] rounded-[17px] flex justify-center items-center  ">
          <h5 class="text-[#9A9A9A] text-[18px] font-bold">Launching Jan</h5>
        </div>
      </div>
      <div class="flex">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#1E1C1C]" : "text-[#1E1C1C66]"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          People
        </NavLink>
        <div class="h-[34px] w-[108px] bg-[#1E1C1C] rounded-[17px] flex items-center justify-center ">
          <h5 class="text-[#FFFFFF] text-[18px] font-bold">Download</h5>
        </div>
      </div>
    </div>
  );
}
