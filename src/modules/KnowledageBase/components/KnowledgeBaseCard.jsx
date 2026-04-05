import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Trash2, Pencil } from "lucide-react";

const KnowledgeBaseCard = ({ kb, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col gap-3 hover:shadow-md transition-shadow relative">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800">{kb.name}</h3>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded"
          >
            <MoreVertical size={16} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-7 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-36 py-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Pencil size={14} /> Edit
              </button>
              <button
                onClick={() => { onDelete(kb.id); setMenuOpen(false); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 line-clamp-3 flex-1">
        {kb.description || "No description provided."}
      </p>

      {/* Footer */}
      <div className="text-xs text-gray-400 mt-2">
        Created On: <span className="font-semibold text-gray-600">{kb.createdOn}</span>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;