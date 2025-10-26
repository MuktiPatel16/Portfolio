import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      icon: Users,
      title: 'Head Girl Leadership',
      description: 'Led school-wide operations, mentored prefects, and acted as the primary student representative.',
      category: 'Leadership',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: BookOpen,
      title: 'Research Contribution',
      description: 'Research Paper in AUTOMATE under faculty supervision, exploring automation technologies.',
      category: 'Research',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Hackathon Participant',
      description: 'Active participation in multiple hackathons, developing innovative solutions under time constraints.',
      category: 'Competition',
      color: 'from-cyan-400 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Academic Excellence',
      description: 'Maintaining a stellar CGPA of 9.0/10 while pursuing BTech in CSE with AI & ML specialization.',
      category: 'Academic',
      color: 'from-blue-600 to-cyan-400',
    },
  ];

  const certifications = [
    'Web Development (In Progress)',
    'Machine Learning (In Progress)',
    'Leadership Training Programs',
    'Mentorship Programs',
  ];

  return (
    <section id="achievements" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          {/* Achievement Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${achievement.color} bg-opacity-20 rounded-lg`}>
                    <achievement.icon className="text-cyan-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-slate-800/50 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              Certifications & Professional Development
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Actively pursuing continuous learning and skill development in cutting-edge technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
