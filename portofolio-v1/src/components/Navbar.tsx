'use client';

import { Link as ScrollLink } from 'react-scroll';
import LocaleSwitcher from './LocaleSwitcher';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from './ThemeSwitcher';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-gray-900 dark:text-white">
          Mon Portfolio
        </div>
        <div className="flex items-center space-x-6">
          {['hero', 'about', 'projects', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;