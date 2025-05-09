
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Navigation } from "@/components/Navigation";
import { ThreeDScene } from "@/components/ThreeDScene";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, Mail, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects = [
  {
    title: "MediSure",
    description: "A smart solution that predicts rural health insurance eligibility, bridging the gap between government policies and underserved communities.",
    technologies: ["Machine Learning", "Python", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://med-suree.vercel.app/",
    githubUrl: "https://github.com/codecaffin4346",
  },
  {
    title: "EcoVista",
    description: "An intelligent waste management platform designed to promote sustainable living through data-driven insights and eco-friendly initiatives.",
    technologies: ["AI", "Python", "React"],
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://ecoawareness-hub.lovable.app/report",
    githubUrl: "https://github.com/codecaffin4346",
  },
  {
    title: "Virgo",
    description: "AI-powered women career development platform helping women navigate their professional journey with personalized guidance.",
    technologies: ["Machine Learning", "NLP", "React"],
    image: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://preview--career-empowerment-haven.lovable.app/",
    githubUrl: "https://github.com/codecaffin4346",
  },
];

const skills = [
  "Machine Learning", "Deep Learning", "Natural Language Processing", 
  "Computer Vision", "Python", "TensorFlow", "PyTorch", "Data Analysis", 
  "Neural Networks", "Scikit-Learn",
];

const Index = () => {
  return (
    <>
      <SplashCursor
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.8}
        SPLAT_RADIUS={0.3}
        COLOR_UPDATE_SPEED={15}
        BACK_COLOR={{ r: 0, g: 0, b: 0.05 }}
      />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <section id="home" className="section flex items-center justify-center">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">
                Nishi <span className="text-neon-purple">Agrawal</span>
              </h1>
              <p className="text-2xl font-semibold text-muted-foreground">
                Navigating the Constellations of Machine Learning
              </p>
              <p className="text-muted-foreground text-lg">
                A Machine Learning enthusiast focused on building intelligent systems that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-2xl"></div>
                <Avatar className="h-64 w-64 rounded-full border-4 border-neon-purple shadow-lg shadow-neon-purple/20">
                  <AvatarImage src="/lovable-uploads/4e3f568a-9858-419f-b200-1820e76b32ce.png" alt="Nishi Agrawal" className="object-cover" />
                  <AvatarFallback className="text-4xl">NA</AvatarFallback>
                </Avatar>
              </div>
              <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] w-full absolute opacity-40 pointer-events-none">
                <ThreeDScene />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-black/20 relative">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-3">About Me</h2>
              <div className="w-16 h-1 bg-neon-purple rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-neon-purple p-2 rounded-md">
                    <User className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Machine Learning enthusiast dedicated to building intelligent systems that solve real-world problems. My expertise spans across various domains of artificial intelligence, with a focus on creating impactful solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding or training models, I'm exploring the latest advancements in AI research and looking for opportunities to apply cutting-edge technology to practical challenges.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-neon-purple p-2 rounded-md">
                    <Code className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold">Skills & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-md text-sm hover:bg-neon-purple/20 transition-colors border border-neon-purple/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
              <div className="w-16 h-1 bg-neon-purple rounded"></div>
              <p className="mt-4 text-center text-muted-foreground max-w-xl">
                Take a look at some of my recent work. Each project showcases different skills and technologies in machine learning and AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section bg-black/20 relative py-16">
          <div className="container mx-auto">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-3">Resume</h2>
              <div className="w-16 h-1 bg-neon-purple rounded mb-8"></div>
              
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-8 py-6 text-lg">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section relative">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
              <div className="w-16 h-1 bg-neon-purple rounded"></div>
              <p className="mt-4 text-center text-muted-foreground max-w-xl">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </div>
            
            <div className="max-w-xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-neon-purple p-2 rounded-md">
                  <Mail className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold">Send Me a Message</h3>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 bg-background/50 rounded-md border border-border focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-background/50 rounded-md border border-border focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 bg-background/50 rounded-md border border-border focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 bg-background/50 rounded-md border border-border focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple h-32 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-neon-purple hover:bg-neon-purple/80">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} - Nishi Agrawal | All rights reserved
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://github.com/codecaffin4346" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/nishi-agrawal-151618283/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:workwithnishi51@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
