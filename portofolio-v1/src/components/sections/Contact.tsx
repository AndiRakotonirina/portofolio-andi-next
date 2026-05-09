'use client';

import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andi-rakotonirina-367011271/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/AndiRakotonirina',
    icon: Github,
  },
];

const EMAIL = 'andi.nomenjanahary2003@gmail.com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Merci de remplir tous les champs.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Adresse email invalide.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
        <p className="text-center text-muted-foreground mb-8">
          N'hésitez pas à me contacter par email ou via les réseaux sociaux !
        </p>
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-center justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Mail className="w-5 h-5" />
            {EMAIL}
          </a>
          <div className="flex gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label={s.name}
              >
                <s.icon className="w-6 h-6 text-primary" />
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Votre message..."
              rows={5}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {submitted && (
            <div className="text-green-600 text-sm font-semibold">Merci pour votre message !</div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded font-bold hover:bg-primary/90 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
