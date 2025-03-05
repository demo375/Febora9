
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MessageSquare, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      toast.success("Your message has been sent successfully. I'll get back to you soon!", {
        position: "bottom-right",
      });
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-accent/5 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-muted-foreground"
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-xl font-bold font-display mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="glass p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="glass p-3 rounded-lg mr-4">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Let's Talk</h4>
                  <p className="text-muted-foreground">
                    I'm available for freelance work
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="glass p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold font-display mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="glass p-3 rounded-full hover:bg-accent/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="glass p-3 rounded-full hover:bg-accent/20 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="glass p-3 rounded-full hover:bg-accent/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-display mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none",
                  isSubmitting ? "cursor-not-allowed opacity-70" : "focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                )}
              >
                <span className={cn(
                  "absolute inset-[-1000%] animate-[spin_2s_linear_infinite]",
                  isSubmitting ? "bg-white/10" : "bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--accent))_0%,#9ca3af_50%,hsl(var(--accent))_100%)]"
                )} />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium backdrop-blur-3xl">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
