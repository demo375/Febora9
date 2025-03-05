
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectType } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectType;
  fullWidth?: boolean;
}

const ProjectCard = ({ project, fullWidth = false }: ProjectCardProps) => {
  // For grid layout (in Projects page)
  if (!fullWidth) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
      >
        <div className="aspect-video relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-display font-bold">{project.title}</h3>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium rounded-full glass bg-accent/10 text-accent-foreground"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full glass">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          
          <div className="mt-6 flex gap-4">
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
              Source <Github className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // For the full-width layout (in HomepageSection)
  return (
    <div className="mb-24 last:mb-0">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div 
          className="flex-1 lg:order-1 rounded-2xl overflow-hidden aspect-video relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-3xl font-display font-bold">{project.title}</h3>
          
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
    </div>
  );
};

export default ProjectCard;
