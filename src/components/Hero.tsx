import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white text-4xl font-bold mx-auto shadow-2xl">
              DV
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Développeur Full Stack
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Je crée des expériences web modernes et performantes qui allient design élégant et code de qualité
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="mailto:contact@exemple.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Voir mes projets
            <ArrowDown size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
