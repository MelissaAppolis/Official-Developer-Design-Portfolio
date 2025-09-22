import { Code2, Figma, Palette, Smartphone, Globe, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      items: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript ES6+",
        "HTML5 & CSS3",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design, prototyping, design systems",
      items: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Accessibility",
      ],
    },
    {
      icon: Figma,
      title: "Design Tools",
      description: "Figma",
      items: ["Figma"],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach, cross-platform compatibility",
      items: ["Mobile-First", "Progressive Web Apps", "Cross-Browser"],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web standards and best practices",
      items: ["REST APIs", "Git & GitHub"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building and maintaining robust server-side applications and APIs",
      items: ["PHP", "Node.js", "SQL Server", "MySQL"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div 
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;