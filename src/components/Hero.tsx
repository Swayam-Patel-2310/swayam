import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Download, Mail } from 'lucide-react';
import swayamProfile from '@/assets/swayam-professional.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-60"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary font-mono text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary">Swayam</span>
                <br />
                <span className="text-foreground">Patel</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-light">
                <span>A data scientist who builds </span>
                <span className="text-gradient-primary font-semibold">smart solutions</span>
                <span> from messy data</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Final-year Data Science student at RMIT University with expertise in machine learning, 
              data visualization, and software development. Passionate about transforming complex data 
              into actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="btn-primary text-lg px-8 py-3"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline text-lg px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/Swayam-Patel-2310" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/swayammpatel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-primary p-0"
              >
                <Download className="w-6 h-6" />
              </Button>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3 pulse-glow"></div>
              <span className="text-secondary font-medium">Available for opportunities</span>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-scale">
            <div className="relative glow-effect">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 floating-animation">
                <img 
                  src={swayamProfile} 
                  alt="Swayam Patel - Data Scientist" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;