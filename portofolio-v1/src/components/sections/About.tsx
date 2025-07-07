'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('Home.about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4 py-16 text-foreground"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          {t('title')}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t('content')}
        </p>

        {/* Bloc de recommandation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 bg-card p-6 rounded-2xl shadow-lg max-w-xl mx-auto"
        >
          <p className="italic text-muted-foreground mb-4">
            {t('content2')}
          </p>
          <p className="text-right font-semibold">
            – Rina, {t('names')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;