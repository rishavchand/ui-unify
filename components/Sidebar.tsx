'use client';

import { components } from '@/app/(components)/components';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-[80%] sm:w-[300px] fixed left-0 top-0 h-screen bg-white dark:bg-black border-r-2 border-gray-200 dark:border-gray-700 overflow-auto z-50">
      <div className="px-4 pl-10 h-full pt-6">
        {components.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              {section.title || section.Installation || section.Components}
            </h2>
            <ul className="space-y-1">
              {section.children.map((child, idx) => (
                <li key={idx}>
                  <a
                    href={child.Link}
                    className={`text-gray-600 dark:text-gray-200 hover:underline transition-all duration-300 ease-in-out ${
                      pathname === child.Link ? 'font-bold text-red-500' : ''
                    }`}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
