import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Play, Star, CheckCircle, ArrowRight } from 'lucide-react';
import DataScienceIcon from './DataScienceIcon';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Netflix-Style Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-60"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-8">
            {/* Custom Data Science Icon */}
            <div className="flex justify-center mb-8">
              <DataScienceIcon />
            </div>
            
            {/* Netflix-Style Curved Name */}
            <div className="space-y-4">
              <div className="netflix-name-container">
                <div className="text-7xl lg:text-9xl font-netflix font-black tracking-wider uppercase text-primary netflix-curve-effect">
                  SWAYAM
                </div>
                <div className="text-7xl lg:text-9xl font-netflix font-black tracking-wider uppercase text-primary netflix-curve-effect mt-2">
                  PATEL
                </div>
              </div>
            </div>
            
            <div className="text-2xl lg:text-3xl text-muted-foreground font-light">
              <span>A data scientist who builds </span>
              <span className="text-gradient-primary font-semibold neon-glow flex items-center justify-center gap-2">
                <Play className="w-8 h-8" />
                smart solutions
                <CheckCircle className="w-8 h-8" />
              </span>
              <span> from messy data</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Final-year Data Science student at RMIT University with expertise in machine learning, 
            data visualization, and software development. Passionate about transforming complex data 
            into actionable insights.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              className="netflix-button text-lg px-8 py-4 flex items-center gap-3"
              onClick={() => scrollToSection('projects')}
            >
              <Play className="w-5 h-5" />
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 flex items-center gap-3"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-6">
            <a 
              href="https://github.com/Swayam-Patel-2310" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10 netflix-card"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/swayammpatel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10 netflix-card"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/20 border border-secondary/30 animate-neon-flicker netflix-card">
            <div className="w-3 h-3 bg-secondary rounded-full mr-3 pulse-glow"></div>
            <CheckCircle className="w-5 h-5 text-secondary mr-2" />
            <span className="text-secondary font-medium text-lg">Available for opportunities</span>
            <Star className="w-5 h-5 text-secondary ml-2" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary netflix-card p-3"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
