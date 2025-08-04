import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, BarChart3, Heart, TrendingUp, Users, Bot, Wine, Star, Car, MapPin, Briefcase, Database, LineChart, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Focus Bear Cohort Analytics Dashboard",
      description: "Industry capstone project with High Distinction grade. Led development of retention breakdown tab using Python, Dash, and Plotly. Created cohort-based analytics for improving user engagement and product strategy. Adapted visual components for static HTML export using Playwright for AWS deployment.",
      skills: ["Python", "Dash", "Plotly", "AWS", "Playwright", "Data Storytelling"],
      icon: <TrendingUp className="w-6 h-6" />,
      featured: true,
      github: "https://github.com/Swayam-Patel-2310",
      demo: ""
    },
    {
      title: "Smart Diagnosis: Colon Cancer Cell Classification",
      description: "Built end-to-end ML pipeline for cancer diagnosis using colon histopathology images. Developed CNNs for binary and multiclass classification with TensorFlow/Keras. Handled patient-level data splitting, class imbalance via augmentation, and comprehensive performance evaluation.",
      skills: ["TensorFlow", "Keras", "Computer Vision", "Healthcare AI", "CNN"],
      icon: <Brain className="w-6 h-6" />,
      featured: true,
      github: "https://github.com/Swayam-Patel-2310/Smart-Diagnosis-Colon-Cancer-Cell-Classification",
      demo: ""
    },
    {
      title: "SmartJobMatch Web App",
      description: "Created Flask-based web platform matching job seekers and employers. Developed recommendation engine using NLP and ML that recommends job categories based on descriptions. Integrated TF-IDF + cosine similarity with user-friendly UI.",
      skills: ["Flask", "NLP", "TF-IDF", "Machine Learning", "Web Development"],
      icon: <Briefcase className="w-6 h-6" />,
      featured: true,
      github: "https://github.com/Swayam-Patel-2310/SmartJobMatch-WebApp-Flask-ML-Recommendation",
      demo: ""
    },
    {
      title: "Tradewise Stock Trading Platform",
      description: "Created trading insights platform using ARIMA models for stock price forecasting and sentiment analysis with TextBlob and FinBERT. Integrated yfinance and NewsAPI for real-time data. Deployed on Streamlit with Plotly visualizations.",
      skills: ["ARIMA", "Streamlit", "FinBERT", "Time Series", "Sentiment Analysis"],
      icon: <LineChart className="w-6 h-6" />,
      featured: true,
      github: "https://github.com/Swayam-Patel-2310/Tradewise-Stock-Trading-Platform",
      demo: ""
    },
    {
      title: "HDFS Streaming Monitor with Spark",
      description: "Developed Scala application using Apache Spark Streaming to monitor HDFS logs in real-time. Implemented word frequency tracking, co-occurrence statistics, and temporal patterns using updateStateByKey with fault-tolerant streaming architecture.",
      skills: ["Apache Spark", "Scala", "HDFS", "Real-time Analytics", "Big Data"],
      icon: <Database className="w-6 h-6" />,
      featured: false,
      github: "https://github.com/Swayam-Patel-2310/HDFS-Streaming-Monitor-Spark",
      demo: ""
    },
    {
      title: "Prompt Engineering Social Media Analysis",
      description: "Explored public discussions around prompt engineering using Reddit and YouTube data. Implemented comprehensive sentiment analysis using VADER and custom wordlists. Applied LDA topic modeling and social network analysis using NetworkX.",
      skills: ["NLP", "LDA", "NetworkX", "Sentiment Analysis", "Topic Modeling"],
      icon: <MessageSquare className="w-6 h-6" />,
      featured: false,
      github: "https://github.com/Swayam-Patel-2310/Prompt-Engineering-Social-Media-Analysis",
      demo: ""
    },
    {
      title: "Movie Recommender System",
      description: "Built recommendation engine using MovieLens 1M dataset with user-based and item-based KNN collaborative filtering. Developed custom hybrid recommender and benchmarked accuracy using RMSE, MAE, and NDCG metrics.",
      skills: ["KNN", "Collaborative Filtering", "Hybrid Models", "MovieLens", "Python"],
      icon: <Users className="w-6 h-6" />,
      featured: false,
      github: "https://github.com/Swayam-Patel-2310/Movie-Recommender-System-KNN-Based-Collaborative-Filtering-Custom-Model",
      demo: ""
    },
    {
      title: "Hadoop Taxi Trip Analytics",
      description: "Built data pipeline for analyzing NYC taxi trip data using Python-based MapReduce jobs on Hadoop. Implemented clustering (k-means, k-medoids), trip categorization, and company-level aggregation. Designed for AWS EMR deployment.",
      skills: ["Hadoop", "MapReduce", "K-means", "AWS EMR", "Big Data"],
      icon: <Car className="w-6 h-6" />,
      featured: false,
      github: "https://github.com/Swayam-Patel-2310/Hadoop-Taxi-Trip-Analytics",
      demo: ""
    },
    {
      title: "Wine Quality Modeling",
      description: "Performed exploratory data analysis and predictive modeling on wine quality datasets. Built linear regression, classification (logistic, decision tree), and clustering (KMeans) models with parameter tuning and model comparison.",
      skills: ["Classification", "Clustering", "Linear Regression", "Scikit-learn", "EDA"],
      icon: <BarChart3 className="w-6 h-6" />,
      featured: false,
      github: "https://github.com/Swayam-Patel-2310/Wine-Quality-Modelling-Classification-Clustering-Linear-Analysis-with-Python",
      demo: ""
    },
    {
      title: "Maze Pathfinder Algorithms",
      description: "Implemented Python algorithms for generating and solving weighted mazes. Designed mazes using Kruskal's algorithm and solved paths with Dijkstra's algorithm, brute-force search, and greedy heuristics with performance comparison.",
      skills: ["Algorithms", "Dijkstra", "Kruskal", "Graph Theory", "Python"],
      icon: <MapPin className="w-6 h-6" />,
      featured: false,
      github: "https://github.com/Swayam-Patel-2310/Maze-Pathfinder-Algorithms",
      demo: ""
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
