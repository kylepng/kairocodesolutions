
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import HeroCanvas from "@/components/HeroCanvas";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThreeScene from "@/components/ThreeScene";
import { 
  Code, 
  Server, 
  Globe, 
  Database, 
  Layout, 
  Smartphone, 
  ChevronRight, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X,
  GanttChart,
  Rocket,
  Users
} from "lucide-react";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Animation on scroll
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.85;
        
        if (isInViewport) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Navigation */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-md shadow-kairo-blue/10 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-kairo-blue" />
            <span className="font-bold text-2xl text-white glow-text">Kairo</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-gray-400 hover:text-kairo-blue transition-colors">Services</a>
            <a href="#technologies" className="text-gray-400 hover:text-kairo-blue transition-colors">Technologies</a>
            <a href="#projects" className="text-gray-400 hover:text-kairo-blue transition-colors">Projects</a>
            <a href="#testimonials" className="text-gray-400 hover:text-kairo-blue transition-colors">Testimonials</a>
            <a href="#contact">
              <Button className="cyber-button">Contact Us</Button>
            </a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isNavOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg py-4 px-4 border-t border-zinc-800">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-400 hover:text-kairo-blue transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Services
              </a>
              <a 
                href="#technologies" 
                className="text-gray-400 hover:text-kairo-blue transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Technologies
              </a>
              <a 
                href="#projects" 
                className="text-gray-400 hover:text-kairo-blue transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-400 hover:text-kairo-blue transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                Testimonials
              </a>
              <a href="#contact" onClick={() => setIsNavOpen(false)}>
                <Button className="w-full cyber-button">Contact Us</Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with 3D Robot */}
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center overflow-hidden">
        {/* 3D Background */}
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              <span className="text-kairo-blue">Transforming</span> Ideas into Digital <span className="text-kairo-blue">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10">
              Full-stack development expertise to build robust, scalable, and innovative web applications for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="cyber-button">
                Start a Project <ChevronRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-kairo-blue text-kairo-blue hover:bg-kairo-blue/20 px-8 py-6 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px]">
            <HeroCanvas />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-900/50 relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Our <span className="text-kairo-blue">Services</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive full-stack development services to cover all aspects of your digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Frontend Development" 
              description="Crafting responsive, interactive, and intuitive user interfaces with modern frameworks."
              icon={<Layout className="h-10 w-10 text-kairo-blue" />}
            />
            <ServiceCard 
              title="Backend Development" 
              description="Building robust server-side applications with secure, scalable, and efficient architectures."
              icon={<Server className="h-10 w-10 text-kairo-blue" />}
            />
            <ServiceCard 
              title="Database Design" 
              description="Creating optimized data structures and relationships for seamless data management."
              icon={<Database className="h-10 w-10 text-kairo-blue" />}
            />
            <ServiceCard 
              title="API Development" 
              description="Designing and implementing RESTful and GraphQL APIs for seamless integration."
              icon={<Code className="h-10 w-10 text-kairo-blue" />}
            />
            <ServiceCard 
              title="Mobile App Development" 
              description="Developing cross-platform mobile applications that deliver exceptional user experiences."
              icon={<Smartphone className="h-10 w-10 text-kairo-blue" />}
            />
            <ServiceCard 
              title="Web Applications" 
              description="Creating complete web solutions from concept to deployment with scalability in mind."
              icon={<Globe className="h-10 w-10 text-kairo-blue" />}
            />
          </div>
        </div>
      </section>
      
      {/* 3D Scene Section */}
      <section className="py-10 relative overflow-hidden">
        <ThreeScene />
      </section>
      
      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-black relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Technologies We <span className="text-kairo-blue">Use</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage modern technologies to build fast, reliable, and scalable applications.
            </p>
          </div>
          
          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-zinc-900/50 p-1 border border-zinc-800">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-kairo-blue data-[state=active]:text-black">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-kairo-blue data-[state=active]:text-black">Backend</TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-kairo-blue data-[state=active]:text-black">Database</TabsTrigger>
              <TabsTrigger value="devops" className="data-[state=active]:bg-kairo-blue data-[state=active]:text-black">DevOps</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="animate-on-scroll">
              <TechStack 
                title="Frontend Technologies" 
                description="Creating responsive and interactive user interfaces"
                technologies={[
                  "React", "Next.js", "TypeScript", "Tailwind CSS", 
                  "Redux", "Angular", "Vue", "HTML5/CSS3"
                ]}
              />
            </TabsContent>
            <TabsContent value="backend" className="animate-on-scroll">
              <TechStack 
                title="Backend Technologies" 
                description="Building robust server-side applications"
                technologies={[
                  "Node.js", "Express", "NestJS", "Django", 
                  "Laravel", "Spring Boot", "ASP.NET Core", "FastAPI"
                ]}
              />
            </TabsContent>
            <TabsContent value="database" className="animate-on-scroll">
              <TechStack 
                title="Database Technologies" 
                description="Managing data efficiently and securely"
                technologies={[
                  "MongoDB", "PostgreSQL", "MySQL", "Firebase", 
                  "Redis", "Elasticsearch", "DynamoDB", "Supabase"
                ]}
              />
            </TabsContent>
            <TabsContent value="devops" className="animate-on-scroll">
              <TechStack 
                title="DevOps Tools" 
                description="Streamlining development and deployment"
                technologies={[
                  "Docker", "Kubernetes", "AWS", "GitHub Actions", 
                  "Azure DevOps", "Jenkins", "Terraform", "CircleCI"
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-900/50 relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Our Development <span className="text-kairo-blue">Process</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to deliver high-quality solutions on time and within budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="01" 
              title="Discovery" 
              description="We begin by understanding your business, goals, and requirements."
              icon={<Users className="h-10 w-10 text-white" />}
            />
            <ProcessStep 
              number="02" 
              title="Planning" 
              description="Developing a strategic roadmap with milestones and deliverables."
              icon={<GanttChart className="h-10 w-10 text-white" />}
            />
            <ProcessStep 
              number="03" 
              title="Development" 
              description="Building your solution with agile methodology and regular updates."
              icon={<Code className="h-10 w-10 text-white" />}
            />
            <ProcessStep 
              number="04" 
              title="Launch & Support" 
              description="Deployment, testing, and ongoing maintenance to ensure success."
              icon={<Rocket className="h-10 w-10 text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Featured <span className="text-kairo-blue">Projects</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ProjectCard 
              title="E-Commerce Platform" 
              description="A full-featured online store with payment processing, inventory management, and customer analytics."
              tags={["React", "Node.js", "MongoDB", "AWS"]}
            />
            <ProjectCard 
              title="Healthcare Management System" 
              description="An integrated platform for patient records, appointment scheduling, and telemedicine features."
              tags={["Angular", "Python", "PostgreSQL", "Docker"]}
            />
            <ProjectCard 
              title="Real Estate Marketplace" 
              description="A property listing and search platform with virtual tours and mortgage calculator integration."
              tags={["Next.js", "Express", "MySQL", "GCP"]}
            />
            <ProjectCard 
              title="Financial Analytics Dashboard" 
              description="Interactive data visualization tool for financial performance monitoring and forecasting."
              tags={["Vue", "Django", "Redis", "D3.js"]}
            />
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="cyber-button">
              View All Projects <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-zinc-900/50 relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Client <span className="text-kairo-blue">Testimonials</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Kairo transformed our business with a cutting-edge web application that streamlined our operations and delighted our customers."
              author="Sarah Johnson"
              company="TechInnovate Inc."
            />
            <TestimonialCard 
              quote="The team's technical expertise and attention to detail resulted in a product that exceeded our expectations. Highly recommended!"
              author="Michael Chen"
              company="GrowthSphere"
            />
            <TestimonialCard 
              quote="Working with Kairo was seamless from start to finish. They delivered our project on time and within budget with exceptional quality."
              author="Emily Rodriguez"
              company="FutureFocus Media"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Let's Work <span className="text-kairo-blue">Together</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to bring your project to life? Contact us to discuss how we can help.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-zinc-900/70 backdrop-blur-lg rounded-lg border border-zinc-800 p-8 neon-border">
            <form onSubmit={handleContactSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input id="name" placeholder="Your name" required className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input id="subject" placeholder="How can we help?" required className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea id="message" placeholder="Tell us about your project" rows={5} required className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <Button type="submit" className="cyber-button w-full py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-kairo-blue" />
                <span className="font-bold text-2xl glow-text">Kairo</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building exceptional digital experiences through full-stack expertise.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">Frontend Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">Backend Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">API Integration</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-kairo-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@kairocodes.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-center text-gray-500">
              &copy; {new Date().getFullYear()} Kairo Code Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="service-card animate-on-scroll">
      <div className="p-4 bg-kairo-blue/10 rounded-full w-fit mb-6">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
};

const TechStack = ({ title, description, technologies }) => {
  return (
    <div className="bg-zinc-900/70 rounded-lg border border-zinc-800 p-8">
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-kairo-blue/10 border border-kairo-blue/30 text-kairo-blue rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProcessStep = ({ number, title, description, icon }) => {
  return (
    <div className="animate-on-scroll flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="bg-kairo-blue/20 border border-kairo-blue/50 rounded-full w-20 h-20 flex items-center justify-center mb-4 neon-border">
          {icon}
        </div>
        <span className="absolute top-0 right-0 bg-kairo-blue text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
          {number}
        </span>
      </div>
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const ProjectCard = ({ title, description, tags }) => {
  return (
    <Card className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg animate-on-scroll hover:border-kairo-blue/50 transition-all duration-300 neon-border">
      <h3 className="font-bold text-xl mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-kairo-blue/20 border border-kairo-blue/30 text-kairo-blue rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
};

const TestimonialCard = ({ quote, author, company }) => {
  return (
    <Card className="p-8 bg-zinc-900/70 border border-zinc-800 rounded-lg animate-on-scroll hover:border-kairo-blue/30 transition-all duration-300">
      <div className="mb-4 text-kairo-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M11.9999 14.1569L17.4158 9.74099L19.5369 11.862L11.9999 19.3991L4.46287 11.862L6.58407 9.74099L11.9999 14.1569Z"></path>
        </svg>
      </div>
      <p className="italic text-gray-400 mb-6">"{quote}"</p>
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-gray-400">{company}</p>
      </div>
    </Card>
  );
};

export default Index;
