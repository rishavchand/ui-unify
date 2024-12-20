import React from 'react';

const page = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold align-middle flex justify-center  dark:text-red-400 text-orange-500">
          Introduction
        </h1>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-4">
          Create magical landing pages with components that you can copy and
          paste into your apps.
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          Our platform is a collection of re-usable components from various UI
          libraries like MagicUI, Acernity, and ShadCN that you can copy and
          paste into your web apps.
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          It primarily features components, blocks, and templates geared towards
          creating landing pages and user-facing marketing materials.
        </p>
        <h2 className="text-3xl font-bold align-middle flex justify-center dark:text-red-400 text-orange-500 mt-8">
          Philosophy
        </h2>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          We believe that good design contributes significant value to software.
          It's one of the main methods of establishing trust between you and an
          internet stranger. Trust is important for internet businesses because
          it is the first thing a visitor evaluates before pulling out their
          credit card and becoming a customer.
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          Poor design reflects poorly on your team. It comes off as lazy,
          unfinished, and unstable. It shows that the team doesn't care about
          user experience.
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          Good design indicates that the team behind has their act together. I
          can probably expect good things from them in the future.
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          It makes me think "if they care so much about these tiny details, they
          must care a lot about other things in the company, including their
          customers!".
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          A great example of this in play is{' '}
          <a href="https://linear.app" className="text-blue-500">
            https://linear.app
          </a>{' '}
          landing page which I first came across in 2020. I didn't even need to
          try the product but I already knew that it must be good.
        </p>
        <p className="flex justify-center text-lg font-medium dark:text-gray-400 text-gray-600 mt-4 px-10">
          This library is heavily inspired by{' '}
          <a href="https://ui.shadcn.com" className="text-blue-500">
            https://ui.shadcn.com
          </a>
          ,{' '}
          <a href="https://magicui.com" className="text-blue-500">
            MagicUI
          </a>
          , and{' '}
          <a href="https://acernity.com" className="text-blue-500">
            Acernity
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default page;
