
import { motion } from "framer-motion";
import { ArrowDownCircle, Code, Monitor, Layout, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern z-0 opacity-20"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl z-0 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-8"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-balance"
            >
              <span className="text-gradient">Creating digital</span>{" "}
              <span className="relative">
                experiences
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3 text-accent opacity-70"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 C50,0 150,0 200,5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              <span className="text-gradient">that inspire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              I craft immersive digital experiences that blend creative design with cutting-edge technology. Every project is an opportunity to create something truly unique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--accent))_0%,#9ca3af_50%,hsl(var(--accent))_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-sm font-medium backdrop-blur-3xl">
                  Let's collaborate
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-8 py-1 text-sm font-medium transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                View projects
                <ArrowDownCircle className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full max-w-md aspect-square relative"
          >
            <div className="absolute inset-0 rounded-full bg-accent/5 animate-pulse"></div>
            <div className="rotate-container absolute inset-0 flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  stroke="currentColor"
                  strokeOpacity="0.1"
                  strokeWidth="0.5"
                />
                <path
                  d="M50 1C77.0619 1 99 22.9381 99 50C99 77.0619 77.0619 99 50 99"
                  stroke="url(#paint0_linear)"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="50"
                    y1="1"
                    x2="50"
                    y2="99"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="hsl(var(--accent))" />
                    <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 glass p-4 rounded-lg">
              <Code className="h-5 w-5 text-accent" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 glass p-4 rounded-lg">
              <Monitor className="h-5 w-5 text-accent" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 glass p-4 rounded-lg">
              <Layout className="h-5 w-5 text-accent" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass p-4 rounded-lg">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            
            <div className="absolute inset-0 m-10 rounded-full overflow-hidden glass border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex flex-col items-center justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-gradient">PORTFOLIO</h2>
                  <div className="mt-1 text-sm text-accent/80 font-medium">Creative Designer</div>
                  <div className="absolute -bottom-6 w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
      >
        <a
          href="#projects"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ArrowDownCircle className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
