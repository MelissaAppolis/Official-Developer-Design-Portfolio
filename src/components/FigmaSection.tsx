import { useState } from "react";
import {
  Play,
  Figma,
  ExternalLink,
  Image,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import managementAppThumb from "@/assets/managementAppThumb.png";
import managementAppVid from "@/assets/videos/managementAppVid.mp4";
import votingApp from "@/assets/votingApp.png";
import votingAppThumb from "@/assets/votingAppThumb.png";
import gameQuizThumb from "@/assets/GameQuizMockup.png";
import gameQuizMobileOrange from "@/assets/gameQuizMobileOrange.png";
import gameQuizDashboardOrange from "@/assets/gameQuizDashboardOrange.png";
import gameQuizDashboardGreen from "@/assets/gameQuizDashboardGreen.png";
import gameQuizMobileGreen from "@/assets/gameQuizMobileGreen.png";
import deviceManagementApp from "@/assets/deviceManagementAppThumb.png";
import { Dialog } from "@headlessui/react";

const FigmaSection = () => {
  const [openMedia, setOpenMedia] = useState<{
    type: "image" | "video";
    src: string;
    index?: number;
  } | null>(null);

  //  const isVideo = openMedia
  //    ? openMedia.endsWith(".mp4") ||
  //      openMedia.endsWith(".webm") ||
  //      openMedia.endsWith(".ogg")
  //    : false;

  const prototypes = [
    {
      title: "CRM",
      description:
        "Interactive CRM app with streamlined access to profiles, meals, and requests. Prototypes showcase intuitive workflows, designed for clarity, usability, and an improved user experience.",
      type: "Interactive Prototype",
      category: "Management",
      tools: ["Figma", "Prototype", "After Effects"],
      thumbnail: managementAppThumb,
      isVideo: true,
      // figmaUrl: "#",
      media: [{ type: "video", src: managementAppVid }],
    },
    {
      title: "Voting App",
      description:
        "Mobile-first voting app with category-based choices, secure voter details, and real-time vote tracking. Simple, transparent, and designed for engagement.",
      type: "Design System",
      category: "Mobile App",
      tools: ["Figma"],
      thumbnail: votingAppThumb,
      isVideo: false,
      // figmaUrl: "#",
      media: [{ type: "image", src: votingApp }],
    },
    {
      title: "Device Management App",
      description:
        "Device Management App for real-time monitoring. Track temperatures, receive instant alerts, and view key device stats at a glance. Designed for control and efficiency.",
      type: "Design & Prototype",
      category: "Management",
      tools: ["Figma"],
      thumbnail: deviceManagementApp,
      isVideo: false,
      // figmaUrl: "#",
      media: [{ type: "image", src: deviceManagementApp }],
    },
    {
      title: "Game Quiz and Live Dashboard",
      description:
        "Fast-paced quiz game with a live results dashboard. Players answer timed questions while the dashboard updates scores in real time. Clean, two-color design keeps focus on gameplay and competition.",
      type: "Design",
      category: "Educational",
      tools: ["Figma"],
      thumbnail: gameQuizThumb,
      isVideo: false,
      // figmaUrl: "#",
      media: [
        { type: "image", src: gameQuizMobileOrange },
        { type: "image", src: gameQuizDashboardOrange },
        { type: "image", src: gameQuizMobileGreen },
        { type: "image", src: gameQuizDashboardGreen },
      ],
    },
  ];

  const handleNext = () => {
    if (!openMedia || openMedia.type !== "image") return;
    const proto = prototypes.find((p) =>
      p.media.some((m) => m.src === openMedia.src)
    );
    if (!proto) return;

    const images = proto.media.filter((m) => m.type === "image");
    if (images.length <= 1) return;

    const currentIndex = images.findIndex((m) => m.src === openMedia.src);
    const nextIndex = (currentIndex + 1) % images.length;

    setOpenMedia({
      type: "image",
      src: images[nextIndex].src,
      index: nextIndex,
    });
  };

  const handlePrev = () => {
    if (!openMedia || openMedia.type !== "image") return;
    const proto = prototypes.find((p) =>
      p.media.some((m) => m.src === openMedia.src)
    );
    if (!proto) return;

    const images = proto.media.filter((m) => m.type === "image");
    if (images.length <= 1) return;

    const currentIndex = images.findIndex((m) => m.src === openMedia.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    setOpenMedia({
      type: "image",
      src: images[prevIndex].src,
      index: prevIndex,
    });
  };

  return (
    <section id="figmaProjects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Figma className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Design Prototypes
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive prototypes and design systems crafted in Figma,
            showcasing user-centered design thinking and modern UI patterns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {prototypes.map((prototype, index) => (
            <Card
              key={prototype.title}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border-0 bg-gradient-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-video bg-muted/20">
                  {/* Thumbnail with play icon */}
                  <img
                    src={prototype.thumbnail}
                    alt={prototype.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div> */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    {prototype.media[0].type === "video" ? (
                      <div
                        className="bg-primary/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-primary/30 transition-colors duration-300"
                        onClick={() =>
                          setOpenMedia({
                            type: "video",
                            src: prototype.media[0].src,
                          })
                        }
                      >
                        <Play className="w-8 h-8 text-primary fill-primary" />
                      </div>
                    ) : (
                      <button
                        onClick={() =>
                          setOpenMedia({
                            type: "image",
                            src: prototype.media[0].src,
                            index: 0,
                          })
                        }
                        className="bg-primary/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-primary/30 transition-colors duration-300"
                      >
                        {/* <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-primary/30 transition-colors duration-300"> */}
                        <Image className="w-8 h-8 text-primary" />
                        {/* </div> */}
                      </button>
                    )}
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {prototype.type}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/80 backdrop-blur-sm">
                      {prototype.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {prototype.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {prototype.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {prototype.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* <Button size="sm" className="group/btn">
                    <Figma className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    View in Figma
                  </Button> */}
                  {prototype.media[0].type === "video" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="group/btn bg-primary text-white group-hover/btn:scale-110 transition-transform duration-200"
                      onClick={() =>
                        setOpenMedia({
                          type: "video",
                          src: prototype.media[0].src,
                        })
                      }
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                      Watch Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog
          open={!!openMedia}
          onClose={() => setOpenMedia(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <Dialog.Panel className="bg-black justify-items-center rounded-lg p-4 max-w-4xl w-full">
            {openMedia?.type === "video" ? (
              <video
                src={openMedia.src}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            ) : (
              <>
                <img
                  src={openMedia?.src}
                  alt="Preview"
                  className="max-h-[80vh] max-w-full rounded-lg"
                />
                {/* Prev / Next for images */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
            <button
              onClick={() => setOpenMedia(null)}
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/40"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </Dialog.Panel>
        </Dialog>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
            View Full Portfolio on Figma
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default FigmaSection;
