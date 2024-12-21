import React, { Children } from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
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
      <div className="grid grid-cols-6 min-h-screen  border-t border-gray-200 dark:border-gray-700">
        <div className="col-span-1 px-4  border-r  pt-4 border-gray-200 dark:border-gray-700">
            
        </div>
        <div className="col-span-5 mt-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
