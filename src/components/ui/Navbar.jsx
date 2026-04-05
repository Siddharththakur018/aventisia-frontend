import { Bell, ScanBarcode, Search } from "lucide-react";
import React from "react";
import Dropdown from "../Dropdown";

const Navbar = () => {
  return (
      <div className="flex items-center justify-between gap-6 px-4 py-4 bg-[linear-gradient(90deg,_#1E1B4B_0%,_#4F46E5_50%,_#1E1B4B_100%)]">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl text-white">Worcspace</h1>

          <Dropdown options={["Worcspace1"]} placeholder="Worcspace1" />
        </div>

        <div className="flex items-center gap-2 border rounded-md w-96 px-4 py-3 bg-[#3c378d] cursor-pointer">
          <Search className="text-[#b2affc]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-[#b2affc] outline-none placeholder:text-[#b2affc]"
          />
          <ScanBarcode size={15} className="text-[#b2affc]" />
          <p className="text-[#b2affc] text-xs">K</p>
        </div>

        <div className="flex items-center gap-6">
          <Bell className="text-[#7f7ae6]" />
          <div className="rounded-full bg-[#7f7ae6] px-2 py-2 font-bold">GK</div>
        </div>
      </div>
  );
};

export default Navbar;
