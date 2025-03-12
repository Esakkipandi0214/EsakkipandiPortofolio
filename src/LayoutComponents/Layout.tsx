// components/Layout.tsx
import React from "react";
import Sidebar from "@/LayoutComponents/Sidebar";
import Header from "@/LayoutComponents/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex pt-4 bg-[#f6f5f1]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 h-auto flex flex-col">
        <Header />
        <main className="p-2 h-auto">{children}</main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
