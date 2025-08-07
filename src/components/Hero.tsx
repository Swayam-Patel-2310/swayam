
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Play, Star, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Orange-Black Background */}
      <div className="absolute inset-0 bg-gradient-hero-new opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-glow-muted opacity-40"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-left space-y-8 animate-slide-up">
          <div className="space-y-8">
            {/* Name in Reference Style */}
            <div className="space-y-4">
              <div className="text-5xl lg:text-7xl font-inter font-normal leading-tight text-foreground">
                Hello, I'm
              </div>
              <div className="text-6xl lg:text-8xl font-inter font-bold leading-tight">
                <span className="text-gradient-primary">Swayam Patel</span>
              </div>
              <div className="h-1 w-32 bg-primary rounded-full"></div>
            </div>
            
            <div className="text-xl lg:text-2xl text-muted-foreground font-normal max-w-2xl">
              Data Scientist
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              A Data Scientist with a passion for machine learning, AI, and data analysis. Skilled in Python, R, SQL, and cloud technologies, I've worked on projects ranging from NLP and computer vision to predictive analytics and data visualization. I'm driven by solving real-world problems through innovative solutions and am always eager to learn and collaborate.
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Button 
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
              onClick={() => scrollToSection('projects')}
            >
              <Play className="w-5 h-5" />
              Hire Me Now
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-8 py-4 flex items-center gap-3"
              onClick={() => scrollToSection('projects')}
            >
              Portfolio
            </Button>
          </div>

          <div className="flex items-center justify-start space-x-8 pt-6">
            <a 
              href="https://github.com/Swayam-Patel-2310" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/20 netflix-card"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/swayammpatel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/20 netflix-card"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 border border-primary/30 animate-neon-flicker netflix-card">
            <div className="w-3 h-3 bg-primary rounded-full mr-3 pulse-glow-muted"></div>
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium text-lg">Available for opportunities</span>
            <Star className="w-5 h-5 text-primary ml-2" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground netflix-card p-3"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
