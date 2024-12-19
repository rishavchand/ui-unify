'use client';

import { ChartNoAxesGantt, GithubIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { NavLink } from './Nav-link';

const navLinks = [
  { name: 'Components', href: '/components' },
  { name: 'Docs', href: '/docs' },
  { name: 'Showcase', href: '/showcase' },
] as const;

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/your-username/ui-unify',
    icon: GithubIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/your-username',
    icon: TwitterIcon,
  },
] as const;

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <ChartNoAxesGantt />
            <span className="font-bold text-xl text-red-400">UÍ
              <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
