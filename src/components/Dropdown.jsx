import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder,
  buttonClass = "",
  menuClass = "",
  itemClass = "",
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target.value)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDropdown);
    return () => document.removeEventListener("mousedown", handleDropdown);
  }, []);
  return (
    <>
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`w-full rounded-full px-4 py-2 flex justify-between items-center border text-white ${buttonClass}`}
        >
          {value ? value : placeholder ? placeholder : ""}
          <ChevronDown />
        </button>
        {open && (
          <div
            className={`absolute mt-2 w-full rounded-lg shadow-lg ${menuClass}`}
          >
            {options.map((item) => (
              <div
                key={item}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer ${itemClass}`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
