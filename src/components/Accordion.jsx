// src/components/Accordion.js
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-white flex justify-between items-center text-left py-2 px-4 bg-neutral-900 hover:bg-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className=" bg-white">
          <table className="min-w-full">
            <tbody>
              {content.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  <td className="px-4 py-2 text-xs md:text-sm">{item.title}</td>
                  <td className="px-4 py-2 text-xs md:text-sm">
                    {item.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Accordion;
