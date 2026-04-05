import React, { useState } from "react";
import { X } from "lucide-react";

const SideModal = ({ isOpen, onClose, onCreate }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    vectorStore: "Qdrant",
    embeddingModel: "text-embedding-ada-002",
  });

  const handleSubmit = () => {
    if (!form.name.trim()) return alert("Name is required!");
    onCreate(form);
    setForm({
      name: "",
      description: "",
      vectorStore: "Qdrant",
      embeddingModel: "text-embedding-ada-002",
    });
  };
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[600px] bg-white z-50 shadow-xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-start p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold">Create New Knowledge Base</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 mt-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
              <span className="text-gray-400 font-normal">
                {" "}
                (Cannot be edited later)
              </span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select
              value={form.vectorStore}
              onChange={(e) =>
                setForm({ ...form, vectorStore: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white"
            >
              <option>Qdrant</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select
              value={form.embeddingModel}
              onChange={(e) =>
                setForm({ ...form, embeddingModel: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white"
            >
              <option>text-embedding-ada-002</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end">
          <button onClick={handleSubmit} className="bg-[#5b53ef] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#4a43d4] transition-colors">
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default SideModal;
