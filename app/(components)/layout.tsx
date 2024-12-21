"use client";
import React, { Children } from 'react';
import { components } from './components';
import { usePathname } from 'next/navigation';

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      <header className="text-center mt-10 pb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
          <span className="font-bold text-red-400">
            UÍ
            <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
          </span>{' '}
          Components
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
          Explore examples and demos of our unified UI components in action.
        </p>
      </header>
      <div className="sm:grid sm:grid-cols-6 min-h-screen">
        <div className="col-span-1 px-4 pl-10 border-r pt-6 border-gray-200 dark:border-gray-700 hidden sm:block">
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
                      className={`text-gray-600 dark:text-gray-200 hover:underline ${
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
        <div className="col-span-5 mt-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
