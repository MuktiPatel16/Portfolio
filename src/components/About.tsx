import { Code2, Palette, Sparkles, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const skills = [
    { category: 'Programming', items: ['C++', 'Java', 'Python'], icon: Code2 },
    { category: 'Adobe Suite', items: ['Photoshop', 'Premiere', 'Animate', 'Illustrator'], icon: Palette },
    { category: 'Tools & Platforms', items: ['VS Code', 'Canva', 'Figma', 'GitHub'], icon: Sparkles },
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          {/* Education Card */}
          <div className="mb-12 p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                <GraduationCap className="text-cyan-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Education</h3>
                <p className="text-xl font-semibold text-white mb-1">
                  BTech in Computer Science and Engineering
                </p>
                <p className="text-lg text-cyan-400/80 mb-2">AI & ML Specialization</p>
                <p className="text-gray-300 mb-1">SRM Institute of Science and Technology, Chennai</p>
                <p className="text-gray-400 mb-2">Aug 2024 – May 2028</p>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                  <span className="text-cyan-400 font-bold text-lg">CGPA: 9.0/10</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="mb-12 p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning
              at SRM Institute of Science and Technology. With a strong academic foundation and a CGPA of 9.0,
              I'm dedicated to exploring the intersection of technology, design, and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              My technical expertise spans across programming languages like C++, Java, and Python, combined with
              creative proficiency in the Adobe Creative Suite. I enjoy building intuitive web applications and
              crafting visually compelling designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond academics, I've demonstrated leadership as Head Girl, actively participate in hackathons,
              and contribute to research papers. I'm constantly learning and expanding my skill set in web development
              and machine learning to create meaningful solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <skill.icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800/50 border border-cyan-500/30 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
