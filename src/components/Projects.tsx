
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/ProjectCarousel";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projectData = [
    {
      title: "Enterprise Admin Dashboard",
      description: "A high-performance, enterprise-grade solution built with PHP and Angular. MySQL for secure, scalable data storage, RESTful APIs for efficient data flow, and responsive design for seamless user experience.",
      images: [
        { src: "/lovable-uploads/22416a3b-cdaf-453b-ae67-055279a58c82.png", alt: "Dashboard overview" },
        { src: "/lovable-uploads/9da8e4c0-ae49-42e8-a2b2-0fec155db291.png", alt: "Wire details page" },
        { src: "/lovable-uploads/031024a0-573e-4c2e-98f1-9c571f336314.png", alt: "Shipyards view" },
        { src: "/lovable-uploads/7648a080-1d1e-4bdc-a370-04bf112fa168.png", alt: "App settings" },
        { src: "/lovable-uploads/08d44550-ab07-497c-a44d-b84c64280314.png", alt: "Database overview" },
        { src: "/lovable-uploads/044deeea-e45d-41e8-bc4b-c41fed1b5b03.png", alt: "Contacts list" },
        { src: "/lovable-uploads/fa394502-07c8-4519-a0a7-85f794ba6f08.png", alt: "Lead routing statistics" }
      ],
      tags: ["PHP", "Angular", "MySQL", "RESTful API", "Enterprise"]
    },
    {
      title: "iOS Lifestyle App",
      description: "A modern iOS application for lifestyle content discovery and sharing. Features categories like beauty, books, podcasts, fitness, and more, with a clean, intuitive interface.",
      images: [
        { src: "/lovable-uploads/9ff61146-7b00-4f81-b989-a70da675dc94.png", alt: "iOS App Screens" }
      ],
      tags: ["Swift", "iOS", "UI/UX", "Mobile", "Lifestyle"]
    },
    {
      title: "ShopMost E-Commerce Platform",
      description: "A GraphQL-based e-commerce platform with comprehensive features built with React, Node.js, and PostgreSQL. Fully modular and customizable with responsive design.",
      images: [
        { src: "/lovable-uploads/6e54d009-d639-4e08-ac27-c8a309443f48.png", alt: "ShopMost platform" }
      ],
      tags: ["React", "Node.js", "GraphQL", "PostgreSQL", "E-commerce"]
    }
  ];

  return (
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
          {projectData.map((project, index) => (
            <ProjectCarousel 
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              tags={project.tags}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="cyber-button">
            View All Projects <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
