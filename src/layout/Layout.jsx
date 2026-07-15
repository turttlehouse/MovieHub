import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* <!-- Sidebar --> */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-800">
          <span className="text-indigo-400">Admin</span>Panel
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <a href="/admin/dashboard" className="block py-2 px-3 rounded hover:bg-gray-800">
            🏠 Dashboard
          </a>
          <a
            href="/admin/dashboard/movie-list"
            className="block py-2 px-3 rounded hover:bg-gray-800"
          >
            📦 Movies List
          </a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">
            👥 Users
          </a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">
            📈 Reports
          </a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-800">
            ⚙️ Settings
          </a>
        </nav>
      </aside>

      {/* <!-- Main Content Area --> */}
      <div className="flex-1 flex flex-col">
        {/* <!-- Header --> */}
        <header className="bg-white shadow flex justify-between items-center px-6 py-4">
          <div></div>
          {/* <!-- Dropdown --> */}
          <div className="relative" x-data="{ open: false }">
            <button
              onclick="toggleDropdown()"
              className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
                className="w-8 h-8 rounded-full"
              />
              <span>Admin</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* <!-- Dropdown Menu --> */}
            <div
              id="dropdownMenu"
              className="hidden absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
              <hr />
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                Logout
              </a>
            </div>
          </div>
        </header>

        {/* <!-- Main Dashboard Content --> */}
        <main className="flex-1 p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
