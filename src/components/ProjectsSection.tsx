import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projects";

const featuredProjects = projectsData.slice(0, 6);

const ProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
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
  const [visibleProjects, setVisibleProjects] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const showMoreProjects = () => {
    setVisibleProjects(prev => 
      prev + 3 > featuredProjects.length ? featuredProjects.length : prev + 3
    );
  };

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
          {featuredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {visibleProjects < featuredProjects.length ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <Button 
              onClick={showMoreProjects}
              variant="outline" 
              size="lg"
              className="group bg-background/50 border-accent/30 hover:bg-accent/10 backdrop-blur-sm"
            >
              <span className="mr-2">View More Projects</span>
              <PlusCircle className="h-4 w-4 transition-transform group-hover:rotate-90" />
            </Button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <Button
              asChild
              variant="outline" 
              size="lg"
              className="group bg-background/50 border-accent/30 hover:bg-accent/10 backdrop-blur-sm"
            >
              <Link to="/projects">
                <span className="mr-2">View All Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
