import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Search,
  StickyNote,
} from "lucide-react";
import React, { useState } from "react";
import SideModal from "./components/SideModal";
import KnowledgeBaseCard from "./components/KnowledgeBaseCard";

const KnowledgeBase = () => {
  const ROWS_PER_PAGE_OPTIONS = [10, 20, 50];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [knowledgeBases, setKnowledgeBases] = useState([]);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCreate = (newKB) => {
    setKnowledgeBases((prev) => [
      {
        ...newKB,
        id: Date.now(),
        createdOn: new Date().toLocaleDateString("en-GB"),
      },
      ...prev,
    ]);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setKnowledgeBases((prev) => prev.filter((kb) => kb.id !== id));
  };

  const filtered = knowledgeBases.filter((kb) =>
    kb.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));

  const paginated = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const goToPage = (page) =>
    setCurrentPage(Math.min(Math.max(1, page), totalPages));

  return (
    <>
      <div className="p-6 flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">KnowledgeBase</h1>
            <div className="flex justify-between items-center gap-4">
              <div className="flex justify-between items-center border border-gray-400 rounded-md px-3 py-2 gap-2">
                <Search className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none text-gray-400"
                />
              </div>
              <div
                onClick={() => setIsModalOpen(true)}
                className="flex justify-between items-center bg-[#5b53ef] text-white px-4 py-2 rounded-md cursor-pointer"
              >
                <Plus />
                Create New
              </div>
            </div>
          </div>
        </div>
        {paginated.length === 0 ? (
          <div className="flex flex-col justify-center items-center py-24 gap-4 border h-[500px] rounded-md border-gray-200 shadow-md">
            <StickyNote size={200} className="text-gray-300" />
            <p className="text-gray-400 text-lg">No knowledge base found</p>
          </div>
        ) : (
          <div className="border h-[500px] rounded-md border-gray-200 shadow-md overflow-y-auto">
            <div className="py-3 px-2 grid grid-cols-3 gap-4">
              {paginated.map((kb) => (
              <KnowledgeBaseCard key={kb.id} kb={kb} onDelete={handleDelete} />
            ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <span>{filtered.length} rows</span>
        <div className="flex items-center gap-4">
          <p>Rows per page</p>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded-md outline-none px-2 cursor-pointer py-2"
          >
            {ROWS_PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <p>
            page {currentPage} of {totalPages}
          </p>
          <div className="flex justify-center items-center gap-3">
            <ChevronsLeft onClick={() => goToPage(1)}  className="border border-gray-300 rounded-md cursor-pointer text-gray-400" />
            <ChevronLeft onClick={() => goToPage(currentPage - 1)} className="border border-gray-300 rounded-md cursor-pointer text-gray-400" />

            <ChevronRight onClick={() => goToPage(currentPage + 1)} className="border border-gray-300 rounded-md cursor-pointer text-gray-400" />
            <ChevronsRight onClick={() => goToPage(totalPages)}  className="border border-gray-300 rounded-md cursor-pointer text-gray-400" />
          </div>
        </div>
      </div>
      <SideModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreate}
      />
    </>
  );
};

export default KnowledgeBase;
