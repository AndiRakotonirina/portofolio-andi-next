'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Home.hero');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">{t('title')}</h1>
        <p className="text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
