'use client';

import { Briefcase, GraduationCap, Star } from 'lucide-react';

const parcoursAcademique = [
  {
    date: '2020 - 2022',
    title: 'Licence Informatique',
    description: "Études universitaires en informatique, spécialisation développement web et mobile.",
    icon: GraduationCap,
  },
];

const parcoursPro = [
  {
    date: '2022 - présent',
    title: 'Développeur Web Freelance',
    description: "Création d'applications web modernes pour divers clients, gestion de projets, UI/UX, et optimisation des performances.",
    icon: Briefcase,
  },
  {
    date: '2019',
    title: 'Premier projet personnel',
    description: "Réalisation d'un site portfolio pour découvrir le développement web.",
    icon: Star,
  },
];



import { useState } from 'react';

const Course = () => {
  const [selected, setSelected] = useState('academique');
  const timeline = selected === 'academique' ? parcoursAcademique : parcoursPro;
  const label = selected === 'academique' ? 'Parcours académique' : 'Parcours professionnel';

  return (
    <section className="min-h-screen p-10 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h2 className="text-4xl font-bold text-center mb-6">Parcours</h2>
          <div className="flex gap-2 relative">
            <button
              className={`px-4 py-1 rounded-full text-sm font-bold border transition-all duration-300 relative focus:outline-none
                ${selected === 'academique'
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/40 scale-110 -translate-y-1 ring-2 ring-primary/40'
                  : 'bg-muted text-foreground border-muted-foreground opacity-80 hover:opacity-100'}
              `}
              onClick={() => setSelected('academique')}
            >
              Académique
              {selected === 'academique' && (
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3/4 h-1 bg-primary rounded-full transition-all"></span>
              )}
            </button>
            <button
              className={`px-4 py-1 rounded-full text-sm font-bold border transition-all duration-300 relative focus:outline-none
                ${selected === 'professionnel'
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/40 scale-110 -translate-y-1 ring-2 ring-primary/40'
                  : 'bg-muted text-foreground border-muted-foreground opacity-80 hover:opacity-100'}
              `}
              onClick={() => setSelected('professionnel')}
            >
              Professionnel
              {selected === 'professionnel' && (
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3/4 h-1 bg-primary rounded-full transition-all"></span>
              )}
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4 mt-2">{label}</h3>
        <div className="relative border-l-2 border-primary/40 pl-8">
          {timeline.length === 0 ? (
            <div className="text-muted-foreground">Aucune étape pour ce parcours.</div>
          ) : (
            timeline.map((step, idx) => (
              <div key={idx} className="mb-10 flex items-start group">
                <div className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <step.icon size={22} />
                </div>
                <div className="ml-8">
                  <span className="text-sm text-muted-foreground">{step.date}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{step.title}</h3>
                  <p className="text-base text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Course;