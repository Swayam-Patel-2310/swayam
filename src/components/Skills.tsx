import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { 
  Brain, 
  Database, 
  Code, 
  BarChart3, 
  Cloud, 
  GitBranch,
  Zap,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "PyTorch", level: 85 },
        { name: "Keras", level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 95 }
      ]
    },
    {
      title: "Big Data & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Hadoop", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Web Frameworks",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "Flask", level: 85 },
        { name: "Streamlit", level: 90 },
        { name: "Dash", level: 85 },
        { name: "FastAPI", level: 80 }
      ]
    }
  ];

  const tools = [
    "Git & GitHub",
    "Jupyter Notebooks",
    "VS Code",
    "Apache Kafka",
    "MLflow",
    "Airflow",
    "Linux/Unix",
    "Postman"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent data solutions
          </p>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-glow p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-muted rounded-full border border-border hover:border-primary/50 transition-colors duration-200 glow-effect"
              >
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="card-glow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Core Specializations</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics",
                "Deep Learning",
                "Time Series Forecasting",
                "Recommendation Systems"
              ].map((spec, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="card-glow p-6">
            <div className="flex items-center space-x-3 mb-4">
              <GitBranch className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-semibold">Development Practices</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Version Control",
                "Code Documentation",
                "Testing & Validation",
                "Agile Methodology",
                "CI/CD Pipelines",
                "Model Deployment"
              ].map((practice, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;