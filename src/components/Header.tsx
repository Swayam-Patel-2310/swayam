
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
              {/* Logo Container with dark gradient theme */}
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-amber-500/30 rounded-xl flex items-center justify-center shadow-glow backdrop-blur-sm relative overflow-hidden">
                {/* SP Logo with amber/orange colors */}
                <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))' }}
                  >
                    {/* S shape in amber/orange */}
                    <path 
                      d="M20 30 C20 20, 30 15, 40 20 C45 22, 48 25, 48 30 C48 35, 45 38, 40 40 L35 40 C30 40, 25 35, 25 30 C25 25, 30 22, 35 25 L40 25 C45 25, 50 30, 50 35 C50 40, 45 43, 40 45 L25 45 C15 45, 10 40, 10 30 C10 20, 15 15, 25 15 L45 15 C55 15, 60 20, 60 30 M20 55 C15 55, 10 60, 15 65 L35 65 C45 65, 50 70, 45 75 C40 78, 35 75, 35 70 C35 65, 40 62, 45 65 L50 65 C55 65, 60 70, 55 75 C50 78, 45 80, 40 75 L25 75 C15 75, 10 70, 15 65 C20 60, 25 55, 35 55 L50 55 C60 55, 65 60, 60 70" 
                      fill="#f59e0b"
                      stroke="#f59e0b"
                      strokeWidth="1"
                    />
                    {/* P shape in amber/orange */}
                    <path 
                      d="M55 20 L55 80 L65 80 L65 55 L75 55 C85 55, 90 50, 85 40 C80 30, 75 25, 65 25 L65 20 L55 20 Z M65 30 L75 30 C80 30, 82 35, 80 40 C78 45, 75 47, 70 45 L65 45 L65 30 Z" 
                      fill="#f59e0b"
                      stroke="#f59e0b"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
              {/* Amber glow effect matching website theme */}
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
