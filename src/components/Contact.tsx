
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  Calendar,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('F6CH3EkXd-RdQxN2u');

      // Send email with the exact template variables that EmailJS expects
      await emailjs.send(
        'service_2qj16xk',
        'template_tvlww49',
        {
          // Standard EmailJS template variables
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Swayam Patel',
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          // Additional variables that might be expected
          user_name: formData.name,
          user_email: formData.email,
          contact_name: formData.name,
          contact_email: formData.email,
          sender_name: formData.name,
          sender_email: formData.email,
          email: formData.email,
          name: formData.name
        }
      );

      console.log('Email sent successfully with data:', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "swayammpatel2310@gmail.com",
      action: "mailto:swayammpatel2310@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Melbourne, Australia",
      action: null
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Availability",
      value: "Available immediately",
      action: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/swayammpatel",
      color: "hover:text-primary"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Swayam-Patel-2310",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-primary neon-glow">Talk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss data science opportunities, collaborations, or just have a chat about technology
          </p>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mt-6 shadow-primary"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm actively seeking opportunities in data science, machine learning, and analytics. 
                Whether you're a recruiter, potential collaborator, or fellow data enthusiast, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-glow p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary hover:text-primary/80 transition-colors neon-glow"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className={`btn-outline ${social.color}`}
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="ml-2">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-glow p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="bg-background border-border focus:border-primary focus:ring-primary/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="bg-background border-border focus:border-primary focus:ring-primary/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="bg-background border-border focus:border-primary focus:ring-primary/20"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="bg-background border-border resize-none focus:border-primary focus:ring-primary/20"
                  placeholder="Tell me about the opportunity or collaboration you have in mind..."
                />
              </div>

              <Button 
                type="submit" 
                className="btn-primary w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
