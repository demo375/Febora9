
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Code, Layout, Zap, LineChart, Monitor, Tablet } from "lucide-react";

const expertiseAreas = [
  {
    title: "Front-End Development",
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and best practices.",
    icon: <Code className="h-6 w-6 text-accent" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user experiences and beautiful interfaces that balance aesthetics with functionality.",
    icon: <Layout className="h-6 w-6 text-accent" />,
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, efficiency, and smooth user experiences across all devices.",
    icon: <Zap className="h-6 w-6 text-accent" />,
    skills: ["Core Web Vitals", "Lazy Loading", "Code Splitting", "Bundle Analysis", "Caching Strategies"]
  },
  {
    title: "Analytics & Data Visualization",
    description: "Transforming complex data into clear, interactive visualizations that tell compelling stories.",
    icon: <LineChart className="h-6 w-6 text-accent" />,
    skills: ["D3.js", "Chart.js", "Data Analysis", "Dashboard Design", "Interactive Reports"]
  },
  {
    title: "Interactive Experiences",
    description: "Creating engaging web experiences with animations, 3D elements, and innovative interactions.",
    icon: <Monitor className="h-6 w-6 text-accent" />,
    skills: ["GSAP", "Three.js", "WebGL", "Canvas", "SVG Animations"]
  },
  {
    title: "Responsive & Mobile Design",
    description: "Ensuring flawless experiences across all devices with mobile-first design principles.",
    icon: <Tablet className="h-6 w-6 text-accent" />,
    skills: ["Mobile-First Development", "Adaptive Layouts", "Touch Interactions", "Progressive Web Apps", "Device Testing"]
  }
];

const ExpertiseCard = ({ area, index }: { area: typeof expertiseAreas[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  
  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className={cn(
        "glass p-8 rounded-2xl flex flex-col h-full",
        index % 3 === 0 ? "lg:mt-16" : "",
        index % 3 === 1 ? "lg:mt-8" : ""
      )}
    >
      <div className="flex items-center mb-4">
        <div className="glass p-3 rounded-xl mr-4 flex-shrink-0">
          {area.icon}
        </div>
        <h3 className="text-xl font-bold font-display">{area.title}</h3>
      </div>
      
      <p className="text-muted-foreground mt-4 mb-6">{area.description}</p>
      
      <div className="mt-auto">
        <h4 className="text-sm font-medium mb-3">Skills & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {area.skills.map((skill) => (
            <span key={skill} className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="expertise" ref={sectionRef} className="relative py-24 overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-accent/5 to-transparent"></div>
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold section-heading"
          >
            My Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-muted-foreground"
          >
            I specialize in creating exceptional digital experiences through a combination of technical skills and creative vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
