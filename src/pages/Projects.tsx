
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectsFilter from "@/components/ProjectsFilter";
import ProjectsPagination from "@/components/ProjectsPagination";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string>("all");
  const projectsPerPage = 6;
  
  // Apply filtering
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
    
  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Extract all unique tags for filter options
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-24">
          <div className="absolute inset-0 grid-pattern z-0 opacity-20"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold section-heading mb-6">
                Projects Portfolio
              </h1>
              <p className="text-muted-foreground">
                Explore my complete collection of projects, showcasing innovation, 
                creativity, and technical excellence across various domains.
              </p>
            </motion.div>
            
            <ProjectsFilter 
              tags={allTags} 
              activeFilter={filter} 
              onFilterChange={handleFilterChange} 
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <ProjectCard 
                  key={`${project.title}-${index}`} 
                  project={project} 
                  fullWidth={false}
                />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects match your filter criteria.</p>
              </div>
            )}
            
            {filteredProjects.length > projectsPerPage && (
              <ProjectsPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
