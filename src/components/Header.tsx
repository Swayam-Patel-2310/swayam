import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

/** Reusable SP Logo (amber/orange on dark site theme) */
const LogoSP = ({ size = 48 }: { size?: number }) => {
  return (
    <div
      className="relative rounded-xl border border-amber-500/30 shadow-glow overflow-hidden"
      style={{ width: size, height: size }}
      aria-label="SwayamWorks logo"
    >
      {/* Dark site-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0f] via-[#111213] to-black" />
      {/* Soft amber glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-600/10 blur-md" />

      {/* SP Mark */}
      <svg
        viewBox="0 0 128 128"
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.35))' }}
        role="img"
      >
        <defs>
          <linearGradient id="spAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="55%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* S (kept as a lightning/diagonal style with rounded caps/joins) */}
        <path
          d="M94 8 L38 64
             C32 70 35 80 46 80
             L78 80
             C91 80 95 96 85 104
             L20 120"
          stroke="url(#spAmber)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* P (vertical stem + bowl, same stroke weight/roundness) */}
        <path
          d="M72 44 L72 118
             M72 44 L96 44
             C108 44 112 58 104 66
             C100 70 95 72 88 72
             L72 72"
          stroke="url(#spAmber)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center space-x-3 group">
            <LogoSP size={48} />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 group-hover:from-amber-300 group-hover:to-orange-400 transition-colors">
                SwayamWorks
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
                .online
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium hover:neon-glow"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="btn-primary"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="btn-primary mt-2"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
