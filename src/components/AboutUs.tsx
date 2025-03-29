
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const TeamMember = ({ 
  name, 
  role, 
  image, 
  description 
}: { 
  name: string;
  role: string;
  image: string;
  description: string;
}) => {
  return (
    <Card className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg animate-on-scroll hover:border-kairo-blue/50 transition-all duration-300 neon-border">
      <div className="flex flex-col items-center text-center mb-6">
        <Avatar className="h-40 w-40 mb-6 border-2 border-kairo-blue/50">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="bg-zinc-800 text-white text-xl">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-2xl mb-1 text-white">{name}</h3>
        <p className="text-kairo-blue font-medium mb-4">{role}</p>
      </div>
      <p className="text-gray-300 text-center">{description}</p>
    </Card>
  );
};

const TeamSection = ({ 
  title, 
  image, 
  description 
}: { 
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <Card className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 p-8 rounded-lg animate-on-scroll hover:border-kairo-blue/50 transition-all duration-300 neon-border">
      <div className="flex flex-col items-center text-center mb-6">
        <Avatar className="h-40 w-40 mb-6 border-2 border-kairo-blue/50">
          <AvatarImage src={image} alt={title} className="object-cover" />
          <AvatarFallback className="bg-zinc-800 text-white text-xl">
            {title.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-2xl mb-4 text-white">{title}</h3>
      </div>
      <p className="text-gray-300 text-center">{description}</p>
    </Card>
  );
};

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-zinc-900/50 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Meet Our <span className="text-kairo-blue">Team</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind Kairo's innovative solutions and exceptional service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Kyle Kumar"
            role="Founder, Engineer"
            image="/lovable-uploads/5ed734c0-30ad-4839-96b1-df58296db79e.png"
            description="M.S. Candidate in Data Science and dedicated to quality, scalability, and speed. Developing solutions since 2021, Kyle has successfully completed 14+ projects with a 100% success rate and 5-star reviews."
          />
          
          <TeamMember 
            name="Long Ying" 
            role="Senior Executive Developer"
            image="/lovable-uploads/e588df3e-d84f-4beb-98a7-5807965f77c1.png"
            description="With 10+ years of experience in full-stack development, Long brings deep expertise in scalable architectures and enterprise applications, specializing in high-performance systems."
          />
          
          <TeamMember 
            name="Vinh Tran" 
            role="Full-Stack Developer & Talent Acquisition Specialist"
            image="/lovable-uploads/bfa2424d-ea15-418d-aaa9-6cc04a9347f1.png" 
            description="Vinh ensures our products run flawlessly while securing top jobs for our devs, blending technical expertise with strategic marketing."
          />
        </div>
        
        <div className="mt-16">
          <TeamSection 
            title="Our Team"
            image="/lovable-uploads/3419a0dc-5b38-4acb-81f4-5f9179e6d42d.png"
            description="Behind the scenes, we have a dedicated team of 5+ professionals working across development, job search, and freelance recruitment. Our talented network of developers, designers, and recruiters ensures that we deliver top-quality projects and secure high-value opportunities for both clients and freelancers alike."
          />
        </div>
      </div>
    </section>
  );
}
