
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:border-neon-purple/50 transition-all">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-background/50 hover:bg-background">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {liveUrl && (
          <Button asChild variant="default" size="sm" className="flex-1 bg-neon-purple hover:bg-neon-purple/80">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
