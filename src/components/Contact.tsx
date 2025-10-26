import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Muktipatel.953@gmail.com', link: 'mailto:Muktipatel.953@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8849104730', link: 'tel:+918849104730' },
    { icon: MapPin, label: 'Location', value: 'Kalol, Gujarat', link: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/mukti-patel-1b9696229' },
    { icon: Github, label: 'GitHub', link: '#' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out! I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-700 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : submitStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
