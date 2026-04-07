export interface Project {
  id: string;
  title: string;
  year: string;
  tech: string;
  description: string;
  imageUrls: string[];
  githubUrl?: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    id: "arboretum",
    title: "Arboretum",
    year: "2024",
    tech: "React, WebGL, Node.js",
    description: "A high-performance plant growth simulation using WebGL and complex procedural generation algorithms. This project explores the intersection of nature and digital architecture, providing an immersive 3D environment where users can influence biological growth patterns in real-time.",
    imageUrls: [
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1466721591359-17c7bac02821?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&q=80&w=800"
    ],
    githubUrl: "https://github.com/username/arboretum",
    websiteUrl: "https://arboretum-demo.com"
  },
  {
    id: "echo-protocol",
    title: "Echo Protocol",
    year: "2023",
    tech: "Rust, WebAssembly, Go",
    description: "A decentralized communication protocol built with memory safety and high throughput in mind. Echo Protocol utilizes WebAssembly for client-side processing and Go for its distributed backend architecture, ensuring end-to-end encryption with minimal latency across global nodes.",
    imageUrls: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    ],
    githubUrl: "https://github.com/username/echo-protocol"
  },
  {
    id: "monolith-system",
    title: "Monolith System",
    year: "2023",
    tech: "TypeScript, PostgreSQL",
    description: "An enterprise-grade resource management system designed for architectural firms. It features a robust relational database schema and a highly intuitive dashboard, allowing for seamless tracking of materials, costs, and project timelines across large-scale developments.",
    imageUrls: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    websiteUrl: "https://monolith-system.com"
  },
  {
    id: "vanguard",
    title: "Vanguard",
    year: "2022",
    tech: "Python, TensorFlow, React",
    description: "An advanced threat detection system leveraging machine learning to identify anomalies in network traffic. Vanguard processes massive datasets in real-time, providing security teams with actionable insights and automated response capabilities to mitigate potential vulnerabilities.",
    imageUrls: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
    ],
    githubUrl: "https://github.com/username/vanguard"
  },
];
