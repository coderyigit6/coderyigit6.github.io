import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ExternalLink, Code2 } from "lucide-react";

const Index = () => {
  const skills = [
    "Python",
    "HTML/CSS",
    "C#",
    "Java",
    "Git",
    "Windows Forms",
    "Web Development",
    "Open Source",
  ];

  const projects = [
    {
      title: "coderyigit-app",
      description: "My rock-paper-scissors app",
      tech: ["Python"],
      link: "https://github.com/coderyigit6/coderyigit-app",
    },
    {
      title: "reversename",
      description: "Reverses a name or word in python",
      tech: ["Python"],
      link: "https://github.com/coderyigit6/reversename",
    },
    {
      title: "linux-6.16",
      description: "My linux kernel that is for mint and ubuntu",
      tech: ["Linux", "Kernel"],
      link: "https://github.com/coderyigit6/linux-6.16",
    },
    {
      title: "browser",
      description: "A simple browser made with Windows Forms",
      tech: ["C#", "Windows Forms"],
      link: "https://github.com/coderyigit6/browser",
    },
    {
      title: "coderyigit6.github.io",
      description: "coderyigit6's example site",
      tech: ["HTML", "CSS"],
      link: "https://github.com/coderyigit6/coderyigit6.github.io",
    },
    {
      title: "small-app",
      description: "A small webview demo like a browser for android",
      tech: ["Java", "Android"],
      link: "https://github.com/coderyigit6/small-app",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-32 w-32 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Code2 className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-bold text-primary-foreground">
            coderyigit6
          </h1>
          <p className="mb-6 text-xl text-primary-foreground/90">
            Open Source Developer | App & Game Creator
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Just writing open-source things. I develop apps, games, and other fun projects.
            I can make simple apps like rock-paper-scissors games and enjoy exploring
            different technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://github.com/coderyigit6", "_blank")}
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.location.href = "mailto:coderyigit@outlook.com"}
            >
              <Mail className="h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-foreground">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-6 py-2 text-base font-medium bg-secondary hover:bg-secondary/80"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-foreground">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="p-6 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 w-full"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://github.com/coderyigit6", "_blank")}
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.location.href = "mailto:coderyigit@outlook.com"}
            >
              <Mail className="h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>© 2024 coderyigit6. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
