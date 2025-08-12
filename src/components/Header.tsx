
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
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-background border border-amber-500/30 rounded-xl flex items-center justify-center shadow-glow backdrop-blur-sm relative overflow-hidden">
                {/* Dark gradient background matching website theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
                
                {/* SP Logo recreated with website colors */}
                <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))' }}
                  >
                    {/* S shape with white/amber tint */}
                    <path 
                      d="M25 25 Q45 5, 65 25 Q75 35, 65 45 L45 45 Q35 35, 45 25 Q55 15, 65 25 Q75 35, 65 45 L35 45 Q15 35, 25 25 Z M35 55 Q25 65, 35 75 L65 75 Q85 65, 75 55 Q65 45, 55 55 L55 75 Q45 85, 35 75 Q25 65, 35 55 Z" 
                      fill="rgba(255, 255, 255, 0.95)"
                      className="drop-shadow-sm"
                    />
                    {/* P shape with white/amber tint */}
                    <path 
                      d="M45 25 L45 75 L55 75 L55 55 L65 55 Q75 45, 65 35 L55 35 L55 25 L45 25 Z M55 35 L65 35 Q70 40, 65 45 L55 45 L55 35 Z" 
                      fill="rgba(255, 255, 255, 0.95)"
                      className="drop-shadow-sm"
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
