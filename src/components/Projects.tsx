
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
      ],
      tags: ["PHP", "Angular", "MySQL", "RESTful API", "Enterprise"]
    },
    {
      title: "Real Estate Command Dashboard",
      description: "A modern, real estate agency dashboard with advanced contact filtering. Scalable Node.js backend with TypeScript, responsive UI/UX for seamless agent workflow, and MongoDB integration for data storage.",
      images: [
        { src: "/lovable-uploads/08d44550-ab07-497c-a44d-b84c64280314.png", alt: "Database overview" },
        { src: "/lovable-uploads/044deeea-e45d-41e8-bc4b-c41fed1b5b03.png", alt: "Contacts list" },
        { src: "/lovable-uploads/fa394502-07c8-4519-a0a7-85f794ba6f08.png", alt: "Lead routing statistics" },
        { src: "/lovable-uploads/a4ccc9e0-42d3-458e-964d-d1453a63a753.png", alt: "Projects" },
        { src: "/lovable-uploads/b5ba8904-69a5-4654-8774-a9d78e8d95ff.png", alt: "Wire details" },
        { src: "/lovable-uploads/bbb6215d-c86d-4fb5-bf5b-61dc0243f6da.png", alt: "Shipyards map" },
        { src: "/lovable-uploads/52099c9d-a29e-4de7-94fb-fac3f9f526a2.png", alt: "App settings" },
      ],
      tags: ["React", "Node.js", "TypeScript", "MongoDB", "Real Estate"]
    },
    {
      title: "iOS Lifestyle App",
      description: "A modern iOS application for lifestyle content discovery and sharing. Features categories like beauty, books, podcasts, fitness, and more, with a clean, intuitive interface.",
      images: [
        { src: "/lovable-uploads/9ff61146-7b00-4f81-b989-a70da675dc94.png", alt: "iOS App Screens" },
        { src: "/lovable-uploads/01d53dc1-4c9a-450e-a0b5-152225958c77.png", alt: "iOS Lifestyle Details" }
      ],
      tags: ["Swift", "iOS", "UI/UX", "Mobile", "Lifestyle"]
    },
    {
      title: "ShopMost E-Commerce Platform",
      description: "A GraphQL-based e-commerce platform with comprehensive features built with React, Node.js, and PostgreSQL. Fully modular and customizable with responsive design.",
      images: [
        { src: "/lovable-uploads/6e54d009-d639-4e08-ac27-c8a309443f48.png", alt: "ShopMost platform" },
        { src: "/lovable-uploads/edd666b0-98f4-4803-81da-ab21dfc34f1e.png", alt: "E-commerce Features" }
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
