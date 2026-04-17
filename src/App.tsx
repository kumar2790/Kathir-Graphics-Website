import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Palette, 
  Book, 
  Layers, 
  Video, 
  Smartphone, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  MessageCircle,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './logo.png';
import designerImg from './designer.png';
import craftImg from './craft.png';
import GalleryPage from './GalleryPage';
import ScrollToTop from './components/ScrollToTop';

const services = [
  {
    title: "Album & Book Design",
    description: "Elegant layout and high-quality design for commemorative albums and professional books.",
    icon: Book,
  },
  {
    title: "2D Laser Cutting (CAD)",
    description: "Precise industrial-grade CAD designs specifically optimized for 2D laser cutting and fabrication.",
    icon: Layers,
  },
  {
    title: "Print & Marketing",
    description: "Eye-catching Flyers, Pamphlets, and Brochures that capture your brand's essence effectively.",
    icon: Palette,
  },
  {
    title: "Motion & 3D Modeling",
    description: "Professional video editing and realistic 3D modeling for cinematic products and architectural concepts.",
    icon: Video,
  }
];

const galleryImages = [
  "https://picsum.photos/seed/creative1/800/600",
  "https://picsum.photos/seed/design2/800/600",
  "https://picsum.photos/seed/laser3/800/600",
  "https://picsum.photos/seed/video4/800/600",
  "https://picsum.photos/seed/3d5/800/600",
  "https://picsum.photos/seed/print6/800/600",
];

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-colorful-mesh">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1 overflow-hidden shadow-lg shadow-slate-200" style={{ background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)' }}>
              <img src={logo} alt="KG" className="w-full h-full object-contain" onError={(e) => {
                e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/10333/10333068.png";
              }} />
            </div>
            <span className="text-3xl text-text-main font-brand">Kathir Graphics</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
              item === 'Gallery' ? (
                <Link 
                  key={item}
                  to="/gallery"
                  className="text-[12px] font-black uppercase tracking-widest hover:text-accent-magenta text-text-main cursor-pointer transition-colors font-sans"
                >
                  {item}
                </Link>
              ) : (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[12px] font-black uppercase tracking-widest hover:text-accent-magenta text-text-main cursor-pointer transition-colors"
                >
                  {item}
                </button>
              )
            ))}
            <a 
              href="https://app.kathirgraphics.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-text-main text-white rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-accent transition-all shadow-lg flex items-center gap-2"
            >
              Download App <Download size={16} />
            </a>
          </div>

          <button className="md:hidden text-text-main" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                  item === 'Gallery' ? (
                    <Link 
                      key={item}
                      to="/gallery"
                      className="text-[12px] font-black uppercase tracking-widest text-left py-2 font-sans"
                    >
                      {item}
                    </Link>
                  ) : (
                    <button 
                      key={item} 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-[12px] font-black uppercase tracking-widest text-left py-2"
                    >
                      {item}
                    </button>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center py-12 md:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10"
          >
            <p className="micro-label mb-4 md:mb-6">Creative Design Studio</p>
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[7vw] leading-[0.85] font-black mb-6 md:mb-10 tracking-tighter text-text-main relative">
              DESIGN <br />
              <span className="text-gradient">LIMITLESS</span>
            </h1>
            <p className="text-lg md:text-2xl font-medium text-text-dim max-w-xl mb-8 md:mb-12 leading-relaxed">
              We create vibrant, high-impact visuals that define brands. From industrial CAD precision to cinematic motion arts.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-5 bg-text-main text-white rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-accent-magenta transition-all shadow-2xl shadow-slate-200"
              >
                Get Started <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-10 py-5 bg-white text-text-main rounded-2xl font-black uppercase tracking-widest border-2 border-slate-100 hover:border-accent transition-all"
              >
                Our Services
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative order-first lg:order-last mt-12 lg:mt-0"
          >
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-magenta/30 to-accent-amber/30 blur-[80px] md:blur-[120px] rounded-full animate-pulse z-0" />
            
            {/* Main 3D Designer Visual */}
            <div className="relative z-10 flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-20">
              <motion.img 
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, -5, 0],
                  rotate: [0, 1, -1, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                src={designerImg} 
                alt="3D Designer" 
                className="relative z-20 w-full max-w-[220px] sm:max-w-[320px] md:max-w-[420px] h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700 cursor-pointer"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.currentTarget.src = "https://picsum.photos/seed/3d-design/800/800";
                }}
              />
              
              {/* Decorative Floating Icon Tags (Even Circular Spacing around image - Fixed Closer Spacing) */}
              <motion.div 
                animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="flex absolute top-[5%] -right-2 sm:top-[12%] sm:right-[5%] lg:right-[15%] z-30 bg-white/95 backdrop-blur-md p-2 lg:p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-2 lg:gap-3 scale-75 sm:scale-100 origin-right"
              >
                <div className="w-8 h-8 lg:w-9 lg:h-9 bg-accent-amber rounded-lg flex items-center justify-center text-white shrink-0"><Book size={16} /></div>
                <div className="whitespace-nowrap">
                  <p className="text-[7px] lg:text-[8px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Creative</p>
                  <p className="font-bold text-text-main text-[10px] lg:text-sm leading-none">Album Design</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0], x: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex absolute top-[5%] -left-2 sm:top-[12%] sm:left-[5%] lg:left-[15%] z-30 bg-white/95 backdrop-blur-md p-2 lg:p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-2 lg:gap-3 scale-75 sm:scale-100 origin-left"
              >
                <div className="w-8 h-8 lg:w-9 lg:h-9 bg-accent rounded-lg flex items-center justify-center text-white shrink-0"><Layers size={16} /></div>
                <div className="whitespace-nowrap">
                  <p className="text-[7px] lg:text-[8px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Industrial</p>
                  <p className="font-bold text-text-main text-[10px] lg:text-sm leading-none">CAD Drawing</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0], x: [0, 10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="flex absolute bottom-[10%] -right-2 sm:bottom-[15%] sm:right-[5%] lg:right-[15%] z-30 bg-white/95 backdrop-blur-md p-2 lg:p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-2 lg:gap-3 scale-75 sm:scale-100 origin-right"
              >
                <div className="w-8 h-8 lg:w-9 lg:h-9 bg-accent-magenta rounded-lg flex items-center justify-center text-white shrink-0"><Video size={16} /></div>
                <div className="whitespace-nowrap">
                  <p className="text-[7px] lg:text-[8px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Cinematic</p>
                  <p className="font-bold text-text-main text-[10px] lg:text-sm leading-none">Video Editing</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="flex absolute bottom-[10%] -left-2 sm:bottom-[15%] sm:left-[5%] lg:left-[15%] z-30 bg-white/95 backdrop-blur-md p-2 lg:p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-2 lg:gap-3 scale-75 sm:scale-100 origin-left"
              >
                <div className="w-8 h-8 lg:w-9 lg:h-9 bg-accent-emerald rounded-lg flex items-center justify-center text-white shrink-0"><Palette size={16} /></div>
                <div className="whitespace-nowrap">
                  <p className="text-[7px] lg:text-[8px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Marketing</p>
                  <p className="font-bold text-text-main text-[10px] lg:text-sm leading-none">Flyer & Pamphlet</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-accent via-accent-magenta to-accent-amber" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -inset-4 bg-accent-emerald/10 rounded-[3rem] rotate-3" />
              <img 
                src={craftImg} 
                alt="Our Studio" 
                className="relative z-10 w-full aspect-square object-cover rounded-[2.5rem] shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/about-light/1000/1000";
                }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <p className="micro-label mb-6 text-accent-magenta">Professional Mastery</p>
              <h2 className="text-5xl md:text-7xl mb-10 text-text-main">Crafting <span className="text-accent underline decoration-accent-amber/30 underline-offset-8">Stories</span></h2>
              <p className="text-xl text-text-dim leading-relaxed mb-12">
                At <span className="font-brand italic text-accent text-2xl">Kathir Graphics</span>, we believe that design is not just about aesthetics—it's about problem-solving and storytelling. With a focus on high-end premium visuals, we bridge the gap between creative art and technical excellence.
              </p>
              <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-12 mt-12">
                <div>
                  <h4 className="text-5xl font-black mb-2 text-text-main">10+</h4>
                  <p className="micro-label text-slate-400">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-5xl font-black mb-2 text-accent-magenta">500+</h4>
                  <p className="micro-label text-slate-400">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-bg-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="micro-label text-accent-magenta mb-6">Capabilities</p>
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase text-text-main">Vibrant Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((s, i) => {
              const colors = ['border-accent', 'border-accent-magenta', 'border-accent-amber', 'border-accent-emerald'];
              const bgColors = ['bg-accent/5', 'bg-accent-magenta/5', 'bg-accent-amber/5', 'bg-accent-emerald/5'];
              const textColors = ['text-accent', 'text-accent-magenta', 'text-accent-amber', 'text-accent-emerald'];
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`card-premium group border-b-8 ${colors[i % 4]}`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${bgColors[i % 4]} flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                    <s.icon className={textColors[i % 4]} size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-text-main">{s.title}</h3>
                  <p className="text-text-dim leading-relaxed font-medium">
                    {s.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery CTA Section (Simplified) */}
      <section id="gallery" className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-accent-amber mb-6">Selected Works</p>
          <h2 className="text-6xl md:text-9xl text-text-main font-black tracking-tighter mb-10 leading-[0.8] uppercase">
            EXPLORE OUR <br />
            <span className="text-accent underline decoration-accent-magenta/30 underline-offset-8">GALLERIA</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-dim mb-12 font-medium mx-auto max-w-2xl">
            We've moved our full collection to a dedicated page for a better viewing experience. Click below to see our premium design portfolio.
          </p>
          <button 
            onClick={() => navigate('/gallery')}
            className="mx-auto px-12 py-6 bg-text-main text-white rounded-2xl font-black uppercase tracking-widest flex items-center gap-4 hover:bg-accent transition-all shadow-2xl shadow-slate-200"
          >
            View Full Gallery <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Social & Contact Section */}
      <section id="contact" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="micro-label text-accent mb-8">Ready to Start?</p>
          <h2 className="text-6xl md:text-9xl mb-16 font-black tracking-tighter text-text-main">LET'S <span className="text-gradient">CREATE</span></h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8"><Smartphone className="text-accent" size={32} /></div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Phone</h4>
              <p className="text-2xl font-bold text-text-main">+91 90879 79793</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent-magenta/10 rounded-2xl flex items-center justify-center mx-auto mb-8"><Mail className="text-accent-magenta" size={32} /></div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Email</h4>
              <p className="text-xl font-bold text-text-main break-all lowercase">kkumardesigner@gmail.com</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-8"><MapPin className="text-accent-amber" size={32} /></div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Studio</h4>
              <p className="text-lg font-bold text-text-main uppercase">Thanjavur, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12">
            <p className="text-2xl font-medium text-text-dim max-w-2xl">
              We've removed our inquiry form to make things faster. Message us directly on WhatsApp or social media for instant response!
            </p>
            <div className="flex gap-8">
              <a href="https://wa.me/919087979793" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-[#25D366] text-white rounded-[2rem] flex items-center justify-center transition-all hover:scale-110 shadow-xl shadow-green-200">
                <MessageCircle size={36} fill="currentColor" />
              </a>
              <a href="https://www.facebook.com/61570888754293" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-[#1877F2] text-white rounded-[2rem] flex items-center justify-center transition-all hover:scale-110 shadow-xl shadow-blue-200">
                <Facebook size={36} fill="currentColor" />
              </a>
              <a href="https://www.instagram.com/kathir.graphics/" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-[#E4405F] text-white rounded-[2rem] flex items-center justify-center transition-all hover:scale-110 shadow-xl shadow-pink-200">
                <Instagram size={36} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1 shadow-sm" style={{ background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)' }}>
               <img src={logo} alt="KG" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl text-text-main font-brand">Kathir Graphics</span>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400">
            © {new Date().getFullYear()} Kathir Graphics. Established for Brilliance.
          </p>
          <div className="flex gap-10">
            <button onClick={() => scrollToSection('home')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors">Privacy</button>
            <button onClick={() => scrollToSection('home')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors">Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

