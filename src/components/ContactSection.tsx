import { Mail, MapPin, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new projects, 
              creative opportunities, and potential collaborations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Me</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get in touch for project inquiries
                </p>
                <a 
                  href="mailto:melissaappolis@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  melissaappolis@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Based in beautiful Cape Town
                </p>
                <span className="text-foreground font-medium">
                  Cape Town, South Africa
                </span>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Coffee Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Let's discuss your project over coffee
                </p>
                <span className="text-foreground font-medium">
                  Always available for a chat
                </span>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <Button 
              size="lg" 
              className="group shadow-elegant hover:shadow-glow transition-all duration-300"
              onClick={() => window.location.href = 'mailto:melissaappolis@gmail.com'}
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;