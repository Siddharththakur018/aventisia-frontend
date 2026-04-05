import React, { useState } from "react";
import { links } from "./data";
import { Link,useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  return (
    <div className="w-64 h-full bg-gray-100 p-4">
      {links.map((section, i) => (
        <div key={i} className="mb-4">
          <p className="text-sm text-gray-500 mb-2">{section.section}</p>

          {section.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.route}
                key={index}
                onClick={() => setActiveTab(item.route)}
                className={`flex items-center gap-2 p-2 rounded-md ${activeTab === item.route ? "bg-[#bebbff] text-[#3b34b3] font-bold" : "hover:bg-gray-200"} `}
              >
                <Icon size={18} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
