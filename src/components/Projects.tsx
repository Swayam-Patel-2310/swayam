import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, BarChart3, Heart, TrendingUp, Users, Bot, Wine, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Diagnosis: Colon Cancer Cell Classification",
      description: "Deep learning model for automated classification of colon cancer cells using computer vision techniques. Achieved 94% accuracy with CNN architecture.",
      skills: ["TensorFlow", "Computer Vision", "Python", "CNN"],
      icon: <Heart className="w-6 h-6" />,
      featured: true,
      github: "#",
      demo: "#"
    },
    {
      title: "SmartJobMatch Web App",
      description: "Full-stack application that matches job seekers with relevant opportunities using NLP and recommendation algorithms.",
      skills: ["Flask", "NLP", "Scikit-learn", "PostgreSQL"],
      icon: <Bot className="w-6 h-6" />,
      featured: true,
      github: "#",
      demo: "#"
    },
    {
      title: "HDFS Log Monitoring with Apache Spark",
      description: "Real-time log analysis system for monitoring HDFS performance and detecting anomalies using Spark Streaming.",
      skills: ["Apache Spark", "Hadoop", "Scala", "Kafka"],
      icon: <BarChart3 className="w-6 h-6" />,
      featured: true,
      github: "#",
      demo: "#"
    },
    {
      title: "Tradewise Stock Forecasting",
      description: "Time series forecasting model for stock price prediction using LSTM networks and technical indicators.",
      skills: ["LSTM", "Time Series", "TensorFlow", "Finance"],
      icon: <TrendingUp className="w-6 h-6" />,
      featured: false,
      github: "#",
      demo: "#"
    },
    {
      title: "Focus Bear Cohort Analytics Dashboard",
      description: "Industry project creating interactive dashboards for user behavior analysis and cohort tracking.",
      skills: ["Power BI", "SQL", "Analytics", "Visualization"],
      icon: <Users className="w-6 h-6" />,
      featured: false,
      github: "#",
      demo: "#"
    },
    {
      title: "Movie Recommender System",
      description: "Collaborative filtering system with content-based recommendations using matrix factorization.",
      skills: ["Collaborative Filtering", "Python", "Pandas", "ML"],
      icon: <Star className="w-6 h-6" />,
      featured: false,
      github: "#",
      demo: "#"
    },
    {
      title: "Wine Quality Modeling",
      description: "Classification model predicting wine quality based on chemical properties using ensemble methods.",
      skills: ["Random Forest", "Feature Engineering", "R", "Classification"],
      icon: <Wine className="w-6 h-6" />,
      featured: false,
      github: "#",
      demo: "#"
    },
    {
      title: "Prompt Engineering Social Media Analysis",
      description: "NLP pipeline for sentiment analysis and trend detection in social media data using advanced prompt engineering.",
      skills: ["NLP", "Prompt Engineering", "Sentiment Analysis", "API"],
      icon: <Brain className="w-6 h-6" />,
      featured: false,
      github: "#",
      demo: "#"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving capabilities across various domains
          </p>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="card-glow p-6 group">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="card-glow p-4 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-primary" asChild>
            <a href="https://github.com/Swayam-Patel-2310" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
