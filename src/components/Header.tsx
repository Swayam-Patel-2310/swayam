
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Star, Play, Database, Brain } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Play },
    { label: 'About', href: '#about', icon: Star },
    { label: 'Projects', href: '#projects', icon: Play },
    { label: 'Skills', href: '#skills', icon: Star },
    { label: 'Contact', href: '#contact', icon: Play },
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
          {/* SP Logo with website theme integration */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Logo Container with dark theme */}
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-amber-500/30 rounded-xl flex items-center justify-center shadow-glow backdrop-blur-sm relative overflow-hidden">
                {/* SP Logo recreated to match the provided design */}
                <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))' }}
                  >
                    {/* Modern "S" shape with gradient */}
                    <defs>
                      <linearGradient id="spGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                    
                    {/* S shape - sleek and modern */}
                    <path 
                      d="M20 25 C20 15, 30 10, 45 15 C55 18, 60 25, 60 35 C60 42, 55 48, 45 50 L35 52 C30 53, 28 55, 30 58 C32 61, 38 62, 45 60 L60 55 L65 65 C55 70, 40 72, 30 68 C15 62, 12 50, 20 40 C25 35, 35 32, 45 30 L55 28 C60 27, 62 25, 60 22 C58 19, 52 18, 45 20 L30 25 Z" 
                      fill="url(#spGradient)"
                      strokeWidth="0"
                    />
                    
                    {/* P shape - matching the modern style */}
                    <path 
                      d="M70 15 L70 85 L60 85 L60 55 L45 55 C35 55, 30 50, 30 40 C30 30, 35 25, 45 25 L60 25 L60 15 L70 15 Z M60 35 L45 35 C42 35, 40 37, 40 40 C40 43, 42 45, 45 45 L60 45 L60 35 Z" 
                      fill="url(#spGradient)"
                      strokeWidth="0"
                    />
                  </svg>
                </div>
              </div>
              {/* Amber glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/10 rounded-xl blur-md opacity-60 -z-10"></div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="text-xl font-bold text-gradient-primary font-inter">
                SwayamWorks
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wider">
                .online
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
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

          {/* Let's Talk Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
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
                className="btn-primary mt-4"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
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
