
import { Users, BookOpen, HeartPulse, ArrowRight } from 'lucide-react';

const Resource = () => {
  const resources = [
    {
      icon: <Users size={32} className="text-purple-600" />,
      title: "Support Groups",
      description:
        "Connect with others who understand your journey. Find local and virtual meetings tailored to your needs.",
      color: "bg-purple-50",
    },
    {
      icon: <BookOpen size={32} className="text-blue-600" />,
      title: "Expert Resources",
      description:
        "Access a curated library of medical articles, nutrition guides, and treatment information verified by experts.",
      color: "bg-blue-50",
    },
    {
      icon: <HeartPulse size={32} className="text-rose-600" />,
      title: "Wellness & Care",
      description:
        "Tools for daily symptom tracking, meditation sessions, and mental health support for you and your family.",
      color: "bg-rose-50",
    },
  ];
  return (
    <section id="resources" className="py-20 bg-softGray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl text-dark mb-4">
            Comprehensive care resources
          </h2>
          <p className="text-gray-600 text-lg font-light">
            We provide the tools and community you need to feel empowered every
            step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer"
            >
              <div
                className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center text-dark font-medium group-hover:text-accent transition-colors">
                Learn more{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resource;
