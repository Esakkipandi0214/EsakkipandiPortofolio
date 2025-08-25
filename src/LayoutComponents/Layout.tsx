// components/Layout.tsx
import React from "react";
import Sidebar from "@/LayoutComponents/Sidebar";
import Header from "@/LayoutComponents/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full pt-4 bg-[#f6f5f1]">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 h-auto w-full overflow-x-hidden flex flex-col">
        <Sidebar />
        <Header />
        <main className="p-2 w-full overflow-x-hidden h-auto">{children}</main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
