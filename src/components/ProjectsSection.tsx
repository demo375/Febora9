
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Immersive Portfolio",
    description: "A cutting-edge portfolio website with 3D elements and smooth animations, showcasing creative work in an interactive experience.",
    tags: ["React", "Three.js", "GSAP", "Tailwind"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a focus on user experience, featuring product filtering, cart functionality and payment processing.",
    tags: ["Next.js", "Prisma", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "AI-Powered Dashboard",
    description: "An AI-powered analytics dashboard that transforms complex data into actionable insights through visualizations and machine learning.",
    tags: ["React", "D3.js", "TensorFlow.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity }}
      className="mb-24 last:mb-0"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div 
          style={{ y }}
          className="flex-1 lg:order-1 rounded-2xl overflow-hidden aspect-video relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <div className={`flex-1 ${index % 2 !== 0 ? 'lg:order-0' : 'lg:order-1'}`}>
          <span className="text-sm font-mono text-muted-foreground">Project {String(index + 1).padStart(2, '0')}</span>
          <h3 className="mt-2 text-3xl font-display font-bold">{project.title}</h3>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium rounded-full glass"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="mt-6 text-muted-foreground">{project.description}</p>
          
          <div className="mt-8 flex gap-4">
            <a 
              href={project.links.live} 
              className="inline-flex items-center text-sm font-medium magical-underline"
            >
              View Live <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
            <a 
              href={project.links.github} 
              className="inline-flex items-center text-sm font-medium magical-underline"
            >
              Source Code <Github className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24">
      <div className="absolute inset-0 grid-pattern z-0 opacity-20"></div>
      
      <motion.div
        style={{ y }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold section-heading"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-muted-foreground"
          >
            Explore a collection of my most significant work, showcasing my expertise in creating innovative digital solutions.
          </motion.p>
        </div>

        <div className="mt-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
