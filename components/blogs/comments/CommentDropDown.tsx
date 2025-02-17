"use client";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function CommentDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const menuItems = [
    // { label: "Edit", onClick: onEdit },
    { label: "Delete", onClick: () => {} },
    // { label: "Report", onClick: () => {} },
  ];

  return (
    <div className="relative">
      {/* <!-- Dropdown menu Start --> */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 transition-colors"
        type="button"
        aria-label="Comment settings"
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      </button>
      <OutsideClickHandler onOutsideClick={handleClickOutside}>
        <div
          className={`absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow transition-opacity ${
            !isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <ul className="py-1 text-sm text-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                  className="w-full text-start py-2 px-4 hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
      {/* <!-- Dropdown menu End --> */}
    </div>
  );
}

export default CommentDropDown;
