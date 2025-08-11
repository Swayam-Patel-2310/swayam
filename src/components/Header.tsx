
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
          {/* Custom Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Logo Icon Container */}
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative">
                  <Database className="w-6 h-6 text-black absolute -translate-x-1 -translate-y-1" />
                  <Brain className="w-6 h-6 text-black translate-x-1 translate-y-1" />
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-30 -z-10"></div>
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
