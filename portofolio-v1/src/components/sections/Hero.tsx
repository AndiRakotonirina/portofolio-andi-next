'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Home.hero');

  // Variantes d’animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      y: [-2, 2, -2], // animation de flottement
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-sky-100 to-slate-200 dark:from-black dark:to-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image avec animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          src="/your-photo.jpg" // Remplace avec ton image dans public/
          alt="Photo de profil"
          width={300}
          height={300}
          className="rounded-full shadow-xl object-cover"
        />
      </motion.div>

      {/* Texte */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          variants={textVariants}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          variants={textVariants}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start gap-4"
          variants={textVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {t('cta1')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            {t('cta2')}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
