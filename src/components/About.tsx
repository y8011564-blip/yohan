import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Code Propre',
      description: 'J\'écris du code maintenable et évolutif en suivant les meilleures pratiques',
    },
    {
      icon: Palette,
      title: 'Design Moderne',
      description: 'Je crée des interfaces utilisateur élégantes et intuitives',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'J\'optimise chaque projet pour des performances maximales',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Je travaille efficacement en équipe et communique clairement',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">
          À propos de moi
        </h2>
        <div className="w-20 h-1 bg-gray-900 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Passionné par le développement web depuis plusieurs années, je transforme des idées en applications
            web performantes et esthétiques. Mon approche combine expertise technique et sensibilité au design
            pour créer des solutions qui dépassent les attentes.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Spécialisé dans les technologies modernes du web, je reste constamment à jour avec les dernières
            tendances et meilleures pratiques de l'industrie. Chaque projet est une opportunité d'innover
            et de repousser les limites du possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
