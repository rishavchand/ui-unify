import { Github, GithubIcon } from 'lucide-react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Spotlight } from './ui/spotlight';

export function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center mt-12 sm:mt-24 overflow-hidden">
        <Spotlight className="hidden sm:block" />
      </div>
      <div className="flex justify-center items-center h-full mt-8 sm:mt-16 px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
            Multiple UI <span className="text-gray-400">Libraries,</span>
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text mt-2">
            One <span>Platform,</span> Simplified
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl font-medium dark:text-slate-200 text-slate-500 text-center">
            Bring together the best components from multiple UI libraries,
          </p>
          <p className="text-lg sm:text-xl font-medium dark:text-slate-200 text-slate-500 text-center">
            making development faster, easier, and more efficient.
          </p>
        </div>
      </div>
      <div className="flex justify-center align-middle mt-8 sm:mt-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3"
          as="button"
        >
          <span className="flex gap-2 text-sm sm:text-base">
            Give a Star ⭐ on <GithubIcon />
          </span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
