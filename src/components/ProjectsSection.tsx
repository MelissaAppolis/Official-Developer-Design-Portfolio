import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import juaThumb from "@/assets/juaThumb.png";
import babyBoutiqueThumb from "@/assets/babyBoutiqueThumb.png";
import weatherAppThumb from "@/assets/weatherAppThumb.png";
import idimAppThumb from "@/assets/idimAppThumb.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Jua Na MLima",
      description:
        "A modern, responsive tea website. Built with HTML, Javascript, CSS and PHP.",
      image: juaThumb,
      technologies: ["HTML", "Javascript", "CSS", "PHP"],
      liveUrl: "https://www.juanamlima.co.za/",
      githubUrl: "https://github.com/MelissaAppolis/JuaNaMlima.git",
      category: "Web Development",
    },
    {
      title: "The Baby Boutique",
      description:
        "An demo  e-commerce platform for baby products. I built this using HTML, Javascript, CSS and Bootstrap.",
      image: babyBoutiqueThumb,
      technologies: ["HTML", "Javascript", "CSS", "Bootstrap"],
      liveUrl: "https://melissaappolis.github.io/onlineStore/index.html",
      githubUrl:
        "https://github.com/MelissaAppolis/onlineStore?tab=readme-ov-file#description",
      category: "Web Development",
    },
    {
      title: "Weather App",
      description:
        "A sleek React.js app that lets users instantly check real-time weather in any city using the OpenWeatherMap API. Just type in a city name and get up-to-date conditions at a glance.",
      image: weatherAppThumb,
      technologies: ["React", "Bootstrap", "OpenWeather API"],
      liveUrl: "https://weather-app-eight-ecru.vercel.app/",
      githubUrl:
        "https://github.com/MelissaAppolis/WeatherApp?tab=readme-ov-file#Description",
      category: "Web Development",
    },
    {
      title: "Inventory Management App",
      description:
        "Interior Design Inventory Management (IDIM) is a web app that helps interior design companies manage their warehouse stock with ease. Admins can add, update, and delete items, while users can quickly track and view inventory.",
      image: idimAppThumb,
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      githubUrl:
        "https://github.com/MelissaAppolis/inventoryManagementApp?tab=readme-ov-file#Introduction",
      category: "Full Stack",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my personal work showcasing modern web development
            and thoughtful design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border-0 bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                  </div> */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="group/btn"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;