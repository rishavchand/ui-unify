import React from 'react';
import { Snippet } from '@nextui-org/snippet';
import { Package, Rocket, CheckCircle } from 'lucide-react';

const InstallationPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Installation Header */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Package className="w-6 h-6 text-orange-500" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Installation
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Follow the steps below to install and set up your Next.js project and
          start using UI-Unify components.
        </p>
      </section>

      {/* Install Next.js */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Rocket className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Install Next.js
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Install Next.js with Create Next App:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
          Step 1: Create a new project
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Run the <code className="dark:bg-zinc-800 px-1 rounded">init</code>{' '}
          command to create a new Next.js project:
        </p>
        <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg'>
          <Snippet color="default" symbol="">
            npx create-next-app@latest
          </Snippet>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">
          Step 2: Setup prompts
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You will see the following prompts during installation:
        </p>

        <Snippet symbol="">
          <span>What is your project named? my-app</span>
          <span>Would you like to use TypeScript? No / Yes</span>
          <span>Would you like to use ESLint? No / Yes</span>
          <span>Would you like to use Tailwind CSS? No / Yes</span>
          <span>Would you like to use `src/` directory? No / Yes</span>
          <span>Would you like to use App Router? (recommended) No / Yes</span>
          <span>
            Would you like to customize the default import alias (@/*)? No / Yes
          </span>
          <span>What import alias would you like configured? @/*</span>
        </Snippet>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">
          Step 3: Start the app
        </h3>
        <Snippet symbol="">
          <span>cd my-app</span>
          <span>npm run dev</span>
        </Snippet>
      </section>

      {/* Utilities Section */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <CheckCircle className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Add Utilities
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Add commonly used utilities to your project by installing the
          following dependencies:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
          Install Dependencies
        </h3>
        <Snippet>npm i framer-motion clsx tailwind-merge</Snippet>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">
          Add Utility Functions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Add the following utility function to your <code>lib/utils.ts</code>{' '}
          file:
        </p>

        <Snippet symbol="">
          <span>{`import { ClassValue, clsx } from "clsx";`}</span>
          <span>{`import { twMerge } from "tailwind-merge";`}</span>
          <span></span>
          <span>{`export function cn(...inputs: ClassValue[]) {`}</span>
          <span>{`  return twMerge(clsx(...inputs));`}</span>
          <span>{`}`}</span>
        </Snippet>
      </section>

      {/* Tailwind Configuration */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <Package className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Base Tailwind Config File
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Here’s the base configuration for your TailwindCSS setup:
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">
          tailwind.config.ts
        </h3>
        <Snippet symbol="">
          <span>{`import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";`}</span>
          <span>{`import { Config } from "tailwindcss";`}</span>
          <span>{`const config: Config = {`}</span>
          <span>{`  content: [`}</span>
          <span>{`    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",`}</span>
          <span>{`    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",`}</span>
          <span>{`    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",`}</span>
          <span>{`  ],`}</span>
          <span>{`  darkMode: "class",`}</span>
          <span>{`  theme: {`}</span>
          <span>{`    extend: {},`}</span>
          <span>{`  },`}</span>
          <span>{`  plugins: [addVariablesForColors],`}</span>
          <span>{`};`}</span>
          <span>{`function addVariablesForColors({ addBase, theme }) {`}</span>
          <span>{`  const allColors = flattenColorPalette(theme("colors"));`}</span>
          <span>{`  const newVars = Object.fromEntries(`}</span>
          <span>{`    Object.entries(allColors).map(([key, val]) => [\`--\${key}\`, val])`}</span>
          <span>{`  );`}</span>
          <span>{`  addBase({ ":root": newVars });`}</span>
          <span>{`}`}</span>
        </Snippet>
      </section>
    </div>
  );
};

export default InstallationPage;
