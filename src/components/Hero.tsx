import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile image placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold text-cyan-400">
                MP
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Mukti Patel
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
            BTech in Computer Science (AI & ML)
          </p>

          <p className="text-lg sm:text-xl text-cyan-400/80 mb-8 max-w-2xl mx-auto">
            Innovative tech enthusiast passionate about AI, web development, and creative design
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown className="text-cyan-400" size={32} />
        </button>
      </div>
    </section>
  );
}
