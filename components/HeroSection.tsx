'use client';
import { Github, GithubIcon, Sparkles, Wand2 } from 'lucide-react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Spotlight } from './ui/spotlight';
import { motion } from 'framer-motion';

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from './ui/text-reveal-card';

import { MarqueeDemo } from './Marque';
import { AnimatedShinyTextDemo } from './ui/AnimatedShinyText';

export function Hero() {
  return (
    <div className="relative  overflow-hidden ">
      <div className="flex justify-center sm:mt-0 mt-4 overflow-hidden">
        <Spotlight className="hidden sm:block" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-full  sm:mt-16 px-4"
      >
        <div className="flex flex-col items-center max-w-4xl">
          <div className="flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-orange-500/10 text-orange-500">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              The Ultimate UI Library Collection
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-7xl font-bold text-center"
          >
            <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
              Multiple UI
            </span>{' '}
            <span className="text-gray-400">Libraries,</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-7xl font-bold text-center mt-2```"
          >
            <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
              One Platform,
            </span>{' '}
            <span className="text-gray-400">Simplified</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center space-y-4"
          >
            <p className="text-xl font-medium dark:text-slate-200 text-slate-500">
              Bring together the best components from multiple UI libraries,
            </p>
            <p className="text-xl font-medium dark:text-slate-200 text-slate-500">
              making development faster, easier, and more efficient.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-12"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => (window.location.href = 'https://github.com')}
            >
              <span className="flex gap-2 text-base font-medium">
                Star on GitHub <GithubIcon className="w-5 h-5" />
              </span>
            </HoverBorderGradient>

            <HoverBorderGradient
              containerClassName="rounded-full"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
              as="button"
              onClick={() => (window.location.href = '/components')}
            >
              <span className="flex gap-2 text-base font-medium">
                Components <Wand2 className="w-5 h-5" />
              </span>
            </HoverBorderGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {['Acernity UI', 'Magic UI', 'Shadcn/ui'].map((lib) => (
              <div key={lib} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-orange-500" />
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {lib}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="flex justify-center mt-12">
        {/* <div>
          <h1 className="flex justify-center align-middle  text-4xl sm:text-6xl text-gray-600 dark:text-gray-400 font-bold ">
            Showcase
          </h1>
          <p className="flex justify-center text-xl font-medium dark:text-gray-400 text-gray-600 mt-4 px-4">
            Explore examples to see how these components can be integrated into
            your projects.
          </p>
        </div> */}
      </div>
      <div className="flex justify-center align-middle mt-12">
        <div className="mt-10 mb-4 ">
          <div>
            <div>
              <h1 className="flex justify-center text-4xl sm:text-6xl font-bold text-gray-600 dark:text-gray-400">
                Components Demo
              </h1>
              <p className="flex justify-center text-lg font-medium  dark:text-gray-400  text-gray-600 mt-4 px-4 ">
                Here are some of the components that you can use to build your
                landing pages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <MarqueeDemo />
        </div>
        <div>
          <AnimatedShinyTextDemo/>
        </div>
        <div className="flex items-center justify-center  rounded-2xl px-10">
          <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry "
          >
            <TextRevealCardTitle>
              Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              This is a text reveal card. Hover over the card to reveal the
              hidden text.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </div>
    </div>
  );
}
