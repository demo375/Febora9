
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";

interface ProjectsFilterProps {
  tags: string[];
  activeFilter: string;
  onFilterChange: (tag: string) => void;
}

const ProjectsFilter = ({ tags, activeFilter, onFilterChange }: ProjectsFilterProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center space-y-4"
    >
      <div className="flex items-center space-x-2 mb-2">
        <Filter className="h-4 w-4 text-accent" />
        <span className="text-sm font-medium">Filter Projects:</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={() => onFilterChange("all")}
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full px-4 py-1 text-sm transition-all", 
            activeFilter === "all" 
              ? "bg-accent/20 text-accent hover:bg-accent/30" 
              : "hover:bg-accent/10"
          )}
        >
          All Projects
        </Button>
        
        {tags.map(tag => (
          <Button
            key={tag}
            onClick={() => onFilterChange(tag)}
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-full px-4 py-1 text-sm transition-all", 
              activeFilter === tag 
                ? "bg-accent/20 text-accent hover:bg-accent/30" 
                : "hover:bg-accent/10"
            )}
          >
            {tag}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsFilter;
