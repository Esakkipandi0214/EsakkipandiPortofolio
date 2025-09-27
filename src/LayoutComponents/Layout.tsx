// components/Layout.tsx
import React from "react";
// import Sidebar from "@/LayoutComponents/Sidebar";
import Header from "@/LayoutComponents/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full pt-4 bg-[#4B0082]">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 h-full w-full overflow-x-hidden flex flex-col">
        <Header />
        <main style={{
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE & Edge
  }} className="p-1 w-full overflow-x-hidden h-auto">{children}</main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
