import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="text-gradient-primary">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a final-year <span className="text-primary font-semibold">Data Science student at RMIT University</span> with 
                strong technical and analytical skills in machine learning, data visualization, and software development. 
                My work spans NLP applications, recommender systems, health diagnostics, and real-time analytics.
              </p>
              
              <p>
                Through hands-on projects and industry collaborations, I've developed expertise in transforming 
                complex datasets into actionable insights. I'm passionate about leveraging cutting-edge technologies 
                to solve real-world problems and drive data-driven decision making.
              </p>
              
              <p>
                My approach combines <span className="text-secondary font-semibold">technical precision</span> with 
                creative problem-solving, enabling me to build robust machine learning models and intuitive 
                data visualizations that bridge the gap between complex analytics and business value.
              </p>
            </div>

            {/* Status Banner */}
            <div className="card-glow p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-secondary" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary">Currently Seeking Opportunities</h3>
                  <p className="text-muted-foreground">
                    Actively seeking roles in data science, analytics, or machine learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="card-glow p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">Bachelor of Data Science</p>
                    <p className="text-primary">RMIT University</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Graduating December 2025
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Melbourne, Australia
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Specializations Card */}
            <Card className="card-glow p-6">
              <h3 className="text-xl font-semibold mb-4">Core Specializations</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Machine Learning',
                  'Data Visualization',
                  'NLP Applications',
                  'Predictive Analytics',
                  'Big Data Processing',
                  'Statistical Modeling'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Current Focus Card */}
            <Card className="card-glow p-6">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Deep Learning</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-20"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>MLOps</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-16"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cloud Platforms</span>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-18"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;