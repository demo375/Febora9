
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const experiences = [
  {
    period: "2022 - Present",
    title: "Senior Frontend Developer",
    company: "TechVision Inc.",
    description: "Leading the development of complex web applications using React and TypeScript. Mentoring junior developers and establishing best practices for the team.",
    achievements: [
      "Reduced load time by 40% through performance optimizations",
      "Implemented micro-frontend architecture for better scalability",
      "Led migration from legacy codebase to modern tech stack"
    ]
  },
  {
    period: "2020 - 2022",
    title: "UI/UX Engineer",
    company: "DesignSphere",
    description: "Created user-centered designs for web and mobile applications. Worked closely with product teams to translate business requirements into intuitive interfaces.",
    achievements: [
      "Designed and implemented component library used across multiple products",
      "Improved user satisfaction scores by 25% through UX improvements",
      "Facilitated design thinking workshops for cross-functional teams"
    ]
  },
  {
    period: "2018 - 2020",
    title: "Frontend Developer",
    company: "WebCraft Solutions",
    description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs.",
    achievements: [
      "Built and deployed 12+ client websites with a focus on performance",
      "Introduced automated testing, increasing code coverage by 70%",
      "Streamlined deployment process, reducing release time by 30%"
    ]
  }
];

const ExperienceItem = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, x }}
      className="relative"
    >
      {/* Timeline */}
      <div className="absolute left-0 top-0 w-12 h-full">
        <div className="absolute left-5 top-8 bottom-0 w-[1px] bg-gradient-to-b from-accent to-accent/5"></div>
        <div className="absolute left-[19px] top-8 w-3 h-3 rounded-full bg-accent"></div>
      </div>

      {/* Content */}
      <div className="ml-16 pb-16">
        <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {experience.period}
        </div>
        <h3 className="text-2xl font-bold font-display">{experience.title}</h3>
        <p className="text-accent">{experience.company}</p>
        <p className="mt-4 text-muted-foreground">{experience.description}</p>
        
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight className="w-4 h-4 text-accent mr-2 mt-1 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="experience" ref={sectionRef} className="relative py-24">
      <div className="absolute inset-0 grid-pattern z-0 opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold section-heading"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-muted-foreground"
          >
            My professional journey has equipped me with a diverse skill set and a deep understanding of creating exceptional digital products.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
