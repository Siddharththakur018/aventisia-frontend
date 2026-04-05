import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="shrink-0 border-b border-slate-200">
        <Navbar />
      </div>
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto px-10 pt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
