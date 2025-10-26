import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-cyan-400 fill-cyan-400" size={18} />
            <span>by Mukti Patel</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} Mukti Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
