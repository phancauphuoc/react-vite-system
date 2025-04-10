import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { menuLeftItem } from "./menuListLeft";

const MenuLeft = () => {
  const [openMenu, setOpenMenu] = useState<{ [key: number | string]: boolean }>(
    {}
  );
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleMenu = (index: number | string) => {
    setOpenMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    if (collapsed) setCollapsed(false);
  };

  return (
    <div
      className={`h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Menu content scrollable */}
      <div className="flex-1 p-4">
        {!collapsed && <div className="text-2xl font-bold mb-6">My App</div>}
        <nav className="flex flex-col gap-2">
          {menuLeftItem.map((item, index) => {
            const isOpen = item.name && openMenu[item.name];

            return (
              <div key={index}>
                {item.menuchild ? (
                  <div
                    className="flex justify-between items-center cursor-pointer px-1 py-2 rounded hover:bg-gray-700"
                    onClick={() => item.name && toggleMenu(item.name)}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.icon as React.ReactNode}</span>
                      <span>{!collapsed && item.name}</span>
                    </div>
                    {!collapsed && (
                      <span>
                        {isOpen ? (
                          <ChevronUpIcon className="w-4 h-4" />
                        ) : (
                          <ChevronDownIcon className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className="flex items-center gap-2 px-1 py-2 rounded hover:bg-gray-700"
                  >
                    <span>{item.icon as React.ReactNode}</span>
                    <span>{!collapsed && item.name}</span>
                  </Link>
                )}

                {item.menuchild && (
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.menuchild.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href || "#"}
                        className="block pl-8 py-2 text-sm hover:bg-gray-800 rounded"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Collapse button fixed at bottom */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => {
            setCollapsed(!collapsed);
            setOpenMenu({});
          }}
          className="p-1 rounded hover:bg-gray-700 w-full flex justify-center"
        >
          {collapsed ? (
            <ChevronRightIcon className="w-6" />
          ) : (
            <ChevronLeftIcon className="w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MenuLeft;
