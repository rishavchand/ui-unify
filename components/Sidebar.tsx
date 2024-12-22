'use client';

import { components } from '@/app/(components)/components';

export default function Sidebar() {
  return (
    <div>
      <ul className="flex flex-col justify-center space-x-4 mt-4">
        {components.map((section, index) => (
          <li key={index}>
            <a
              href={`#${
                section.title || section.Installation || section.Components
              }`}
              className="text-gray-600 dark:text-gray-200 hover:underline"
            >
              {section.title || section.Installation || section.Components}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
