import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, MessageCircle, Smartphone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Vite mechanism to import all images from a folder
    const imageModules = import.meta.glob('./assets/gallery/*.{png,jpg,jpeg,svg,webp}', { eager: true });
    const loadedImages = Object.values(imageModules).map((mod: any) => mod.default || mod);
    setImages(loadedImages);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Mini Nav */}
      <nav className="fixed top-0 w-full z-50 glass-nav py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1 overflow-hidden shadow-lg shadow-slate-200" style={{ background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)' }}>
              <img src={logo} alt="KG" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl text-text-main font-brand">Kathir Graphics</span>
          </Link>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-2 bg-text-main text-white rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-accent transition-all"
          >
            <Home size={16} /> Back to Home
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-text-main mb-6">OUR GALLERIA</h1>
              <p className="text-xl text-text-dim max-w-2xl font-medium">
                A curated showcase of our most creative design works. All items below are automatically synchronized from our local assets.
              </p>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -100, x: i % 2 === 0 ? -30 : 30, rotate: i % 2 === 0 ? -10 : 10, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  damping: 15,
                  stiffness: 80,
                  delay: (i % 3) * 0.1,
                }}
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 hover:border-accent transition-colors duration-500"
              >
                <img 
                  src={src} 
                  alt={`Gallery Item ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-text-dim italic">No images found. Please add images to the 'src/assets/gallery' folder.</p>
            </div>
          )}
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="py-10 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400">
            © {new Date().getFullYear()} Kathir Graphics.
          </p>
          <div className="flex gap-6">
             <a href="https://wa.me/919087979793" className="text-text-dim hover:text-accent transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
