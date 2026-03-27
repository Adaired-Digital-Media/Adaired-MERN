"use client";
import type { Metadata } from "next";
import Link from "next/link";
import AdminAuthGuard from "./AdminAuthGuard";
import Image from "next/image";
import MainLogo from "../../public/Layer_1.svg";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import { MdCategory, MdLogout } from "react-icons/md";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Admin Panel",
//   description: "Admin Dashboard",
// };

const menuData = [
  { label: "Dashboard", path: "/admin", icon: <RiDashboardFill size={20} /> },
  { label: "Blog", path: "/admin/blog", icon: <FaBlog size={20} /> },
  { label: "Blog Category", path: "/admin/blog-category", icon: <MdCategory size={20} /> },
  { label: "Case Study", path: "/admin/case-study", icon: <FaBlog size={20} /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full py-4 bg-slate-50 flex items-center px-6 z-50 shadow-sm">
        <Image src={MainLogo} alt="Logo" width={140} height={50} className="" />
      </header>

      <div className="flex pt-[5.4rem]">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 flex flex-col justify-between transition-all duration-300 ease-in-out border-r border-[#e3e3e3]  ${isOpen ? "w-64" : "w-24"} h-[calc(100vh-4rem)] bg-slate-50 p-4`}
        >
          <div>
            {menuData.map((menu, idx) => {
              const isActive = pathname === menu.path;
              return (
                <Link
                  key={idx}
                  href={menu.path}
                  className={`block rounded-md hover:bg-blue-100 transition active:scale-95 mb-2
                    ${isOpen ? "py-3 px-3" : "py-3 flex justify-center"}
                    ${isActive ? "bg-blue-900 text-white hover:bg-blue-900" : "hover:bg-blue-100"
                    }`}
                >
                  <div
                    className={`flex items-center ${isOpen ? "gap-3" : "justify-center"} `}
                  >
                    <span className="shrink-0">{menu.icon}</span>

                    {isOpen && menu.label}
                  </div>
                </Link>
              );
            })}
          </div>

          <button
            onClick={handleLogout}
            className="block mb-4 py-3 px-3 rounded-md bg-blue-100 hover:bg-red-100 hover:text-red-600 font-semibold transition"
          >
            <div className="flex gap-3 items-center">
              <MdLogout size={20} />
              {isOpen && "Logout"}
            </div>
          </button>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-900 hover:bg-[#FB9100] cursor-pointer rounded-full h-9 w-9 text-white absolute -right-6 top-4 flex items-center justify-center active:scale-95"
          >
            {isOpen ? (
              <IoIosArrowBack size={18} />
            ) : (
              <IoIosArrowForward size={18} />
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className={` ${isOpen ? "ml-64" : "ml-24"} w-full p-6`}>
          <AdminAuthGuard>{children}</AdminAuthGuard>
        </main>
      </div>
    </div>
  );
}
