
export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    live: string;
    github: string;
  };
}

// Extended projects data with more items and diverse tags
export const projectsData: ProjectType[] = [
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
  {
    title: "Digital Art Marketplace",
    description: "A platform for artists to sell digital art as NFTs, featuring a gallery view, auction system, and crypto payment integration.",
    tags: ["React", "Solidity", "Web3.js", "IPFS"],
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a23cbb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Fitness Tracking App",
    description: "A comprehensive fitness app that tracks workouts, nutrition, and progress with personalized recommendations and social features.",
    tags: ["React Native", "GraphQL", "Firebase", "HealthKit"],
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace for teams with real-time document editing, video conferencing, and project management tools.",
    tags: ["TypeScript", "Socket.io", "WebRTC", "Redis"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Immersive VR Experience",
    description: "A virtual reality application that creates immersive experiences for education, training, and entertainment purposes.",
    tags: ["Unity", "C#", "VR", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology, ensuring integrity and immutability of election results.",
    tags: ["Ethereum", "Solidity", "React", "Web3.js"],
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Smart Home Automation",
    description: "An IoT system that connects and controls smart home devices, featuring voice commands, automation routines, and energy optimization.",
    tags: ["IoT", "Node.js", "MQTT", "React Native"],
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae2d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "AI Content Generator",
    description: "A tool that uses artificial intelligence to generate high-quality content for marketing, blogging, and social media purposes.",
    tags: ["Python", "TensorFlow", "NLP", "React"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Augmented Reality Navigation",
    description: "An AR application that overlays directions and points of interest onto the real world, enhancing navigation and exploration.",
    tags: ["AR", "Swift", "ARKit", "CoreML"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    title: "Sustainable Energy Monitor",
    description: "A system that monitors and optimizes energy consumption in buildings, promoting sustainability and reducing carbon footprint.",
    tags: ["IoT", "Data Science", "Python", "React"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      live: "#",
      github: "#"
    }
  },
];
