
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold bg-gradient-to-r from-neon-purple to-light-purple text-transparent bg-clip-text">
            Portfolio
          </span>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-neon-purple hover:bg-neon-purple/80">
            Download CV
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden animate-fade-in">
            <nav className="container py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-2 bg-neon-purple hover:bg-neon-purple/80">
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
