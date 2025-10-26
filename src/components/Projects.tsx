import { Github, ExternalLink, Code } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
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

  const projects = [
    {
      title: 'MediConnect – Health Portal Prototype',
      description:
        'A responsive health portal prototype designed and developed during a 24-hour hackathon. Features a clean and intuitive UI focused on user experience and accessibility.',
      tech: ['HTML', 'CSS', 'Figma'],
      type: 'Hackathon Project',
      github: '#',
      demo: '#',
    },
    {
      title: 'Hospital Management App',
      description:
        'Comprehensive hospital database management system with a modern front-end interface. Built to streamline hospital operations and improve patient data management.',
      tech: ['HTML', 'CSS', 'Figma'],
      type: 'Academic Project',
      github: '#',
      demo: '#',
    },
    {
      title: 'AUTOMATE Research Paper',
      description:
        'Currently working on a research paper in AUTOMATE under faculty supervision. Exploring automation technologies and their practical applications.',
      tech: ['Research', 'Documentation', 'Analysis'],
      type: 'Research',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105"
              >
                {/* Project type badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold">
                    {project.type}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg inline-block">
                    <Code className="text-cyan-400" size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-800/50 border border-cyan-500/30 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
