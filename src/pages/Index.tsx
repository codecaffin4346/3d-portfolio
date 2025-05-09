
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Navigation } from "@/components/Navigation";
import { ThreeDScene } from "@/components/ThreeDScene";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Mail, User } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps",
    technologies: ["React", "OpenWeatherAPI", "ChartJS", "Leaflet"],
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    technologies: ["TypeScript", "Firebase", "React", "Redux"],
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const skills = [
  "ReactJS", "ThreeJS", "TypeScript", "Node.js", "TailwindCSS", 
  "WebGL", "MongoDB", "Next.js", "GraphQL", "CSS/SCSS",
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
                Creative <span className="text-neon-purple">Developer</span> & <br />
                3D Enthusiast
              </h1>
              <p className="text-muted-foreground text-lg">
                I build interactive experiences and digital solutions that combine creativity with technical excellence.
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
            <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] w-full">
              <ThreeDScene />
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
                  I'm a creative developer passionate about building immersive digital experiences. With expertise in both frontend development and 3D graphics, I create websites and applications that stand out from the crowd.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me experimenting with WebGL shaders, contributing to open-source projects, or exploring the latest in web technologies.
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
                Take a look at some of my recent work. Each project showcases different skills and technologies I've mastered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-black/20 relative">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
              <div className="w-16 h-1 bg-neon-purple rounded"></div>
              <p className="mt-4 text-center text-muted-foreground max-w-xl">
                Have a project in mind or just want to connect? Feel free to reach out!
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
                © {new Date().getFullYear()} - All rights reserved
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
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
