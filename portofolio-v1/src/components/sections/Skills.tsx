'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  LayoutTemplate,
  Palette,
  Database,
  Languages,
  Server
} from 'lucide-react';
import { useState } from 'react';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      {
        name: 'Next.js',
        icon: LayoutTemplate,
        description: 'Framework React moderne pour le développement web côté serveur et statique.'
      },
      {
        name: 'TypeScript',
        icon: Code,
        description: 'Sur-ensemble de JavaScript typé, pour un code plus robuste et maintenable.'
      },
      {
        name: 'Tailwind CSS',
        icon: Palette,
        description: 'Framework CSS utilitaire pour un design rapide et responsive.'
      },
      {
        name: 'Framer Motion',
        icon: Code,
        description: 'Librairie d’animations pour React, simple et puissante.'
      },
      {
        name: 'next-intl',
        icon: Languages,
        description: 'Internationalisation pour Next.js, gestion des langues et traductions.'
      },
    ],
  },
  {
    label: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: Server,
        description: 'Environnement d’exécution JavaScript côté serveur, rapide et scalable.'
      },
      {
        name: 'PostgreSQL',
        icon: Database,
        description: 'Système de gestion de base de données relationnelle open source.'
      },
    ],
  },
  {
    label: 'Autres',
    skills: [
      // Ajoute ici d'autres compétences si besoin
    ],
  },
];


const Skills = () => {
  const [current, setCurrent] = useState(0);
  const group = skillGroups[current];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? skillGroups.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === skillGroups.length - 1 ? 0 : prev + 1));

  return (
    <section className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Mes compétences</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={handlePrev} className="p-2 rounded-full bg-card shadow hover:bg-primary/20 transition-colors">
            ◀
          </button>
          <span className="text-xl font-semibold">{group.label}</span>
          <button onClick={handleNext} className="p-2 rounded-full bg-card shadow hover:bg-primary/20 transition-colors">
            ▶
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={group.label}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {group.skills.length === 0 ? (
              <div className="col-span-full text-muted-foreground">Aucune compétence listée.</div>
            ) : (
              group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flip-card bg-transparent rounded-2xl p-0 shadow-none flex items-center justify-center"
                >
                  <div className="flip-card-inner rounded-2xl w-full h-full">
                    <div className="flip-card-front bg-card rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center w-full h-full cursor-pointer">
                      <skill.icon className="text-primary w-10 h-10 mb-4" />
                      <span className="text-lg font-semibold">{skill.name}</span>
                    </div>
                    <div className="flip-card-back bg-primary rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 cursor-pointer">
                      <span className="text-base font-medium text-center">{skill.description}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;