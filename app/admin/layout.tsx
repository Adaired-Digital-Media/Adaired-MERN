import type { Metadata } from "next";
import Link from "next/link";
import AdminAuthGuard from "./AdminAuthGuard";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Dashboard",
};

const menuData = [
  { label: "Dashboard", path: "/admin" },
  { label: "Blog", path: "/admin/blog" },
  { label: "Blog Category", path: "/admin/blog-category" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-16 bg-[#FB9100] flex items-center px-6 z-50 shadow-sm">
        <h2 className="!text-white">Adaind Admin</h2>
      </header>

      <div className="flex pt-16">

        {/* Sidebar */}
        <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-blue-100 p-4">
          {menuData.map((menu, idx) => (
            <Link
              key={idx}
              href={menu.path}
              className="block py-3 px-3 rounded-md hover:bg-gray-200 transition"
            >
              {menu.label}
            </Link>
          ))}
        </aside>

        {/* Main Content */}
        <main className="ml-64 w-full p-6">
          <AdminAuthGuard>
            {children}
          </AdminAuthGuard>
        </main>

      </div>
    </div>
  );
}