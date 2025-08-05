
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin } from 'lucide-react';

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
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-gradient-primary neon-glow">Swayam</span>
            <span className="text-foreground">.dev</span>
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

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="https://github.com/Swayam-Patel-2310" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/swayammpatel" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
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
              <div className="flex items-center space-x-4 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                  asChild
                >
                  <a href="https://github.com/Swayam-Patel-2310" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/swayammpatel" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
