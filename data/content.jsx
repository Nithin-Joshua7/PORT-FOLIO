import { Github, Linkedin, Mail } from "lucide-react";

export const profile = {
  name: "Nithin Joshua",
  firstName: "Nithin",
  role: "Software Development Engineer",
  tagline:
    "Building scalable full-stack applications with modern web technologies",
  location: "Bangalore, Karnataka, India",
  email: "nithinjoshua11@gmail.com",
  resumeUrl: "/resume.pdf",
  available: true,
  bio: "I'm a Software Development Engineer with 1+ year of experience building scalable backend systems and modern full-stack applications. I specialize in TypeScript, Node.js, Fastify, Next.js, React, MongoDB, and Redis. I enjoy designing clean architectures, building reliable APIs, integrating third-party services like Stripe, and creating performant user experiences.",
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "3", label: "Projects Shipped" },
    { value: "15+", label: "Technologies Used" },
    { value: "100%", label: "Passion for Learning" },
  ],
};

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Nithin-Joshua7",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nithinjoshua",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:nithinjoshua11@gmail.com",
    icon: Mail,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const marqueeWords = [
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Fastify",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Stripe",
  "Docker",
  "AWS S3",
  "OpenAI",
  "REST APIs",
  "System Design",
];

export const skills = [
  { name: "TypeScript", level: 95, color: "#3178c6" },
  { name: "Node.js / Fastify", level: 92, color: "#68a063" },
  { name: "React / Next.js", level: 90, color: "#61dafb" },
  { name: "MongoDB", level: 88, color: "#13aa52" },
  { name: "Redis / BullMQ", level: 85, color: "#dc382d" },
  { name: "Docker & Git", level: 82, color: "#2496ed" },
];

export const projects = [
  {
    title: "PayFlow",
    category: "SaaS Platform",
    year: "2026",
    description:
      "A subscription and payment management platform that enables merchants to manage customers, automate recurring billing, send payment links, and process Stripe payments using a scalable microservice architecture.",
    tags: ["Next.js", "Fastify", "MongoDB", "Redis", "BullMQ", "Stripe"],
    gradient: "from-violet-500 via-fuchsia-500 to-indigo-500",
    accent: "#8b5cf6",
  },
  {
    title: "ProfileX Integration Service",
    category: "Backend Integration",
    year: "2026",
    description:
      "Developed scalable service integrations for external APIs with automated request transformations, multipart uploads, authentication, background jobs, and data processing.",
    tags: ["Node.js", "TypeScript", "Fastify", "REST APIs"],
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    accent: "#22d3ee",
  },
  {
    title: "Dreamscape AI",
    category: "AI Web Application",
    year: "2025",
    description:
      "An AI-powered wallpaper generation platform that creates wallpapers from user prompts using Hugging Face APIs, Cloudinary, and a MERN stack backend.",
    tags: ["React", "Node.js", "MongoDB", "Hugging Face"],
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    accent: "#ec4899",
  },
];

export const experience = [
  {
    role: "Associate Software Development Engineer",
    company: "Neokred Technologies Pvt. Ltd.",
    period: "Jul 2025 — Present",
    description:
      "Building scalable backend services using TypeScript, Fastify, MongoDB, Redis, and BullMQ. Developed third-party integrations, payment workflows, background job processing, API automation, and optimized data pipelines.",
  },
  {
    role: "Web Developer Intern",
    company: "Unified Mentor",
    period: "2025",
    description:
      "Worked as a Web Developer Intern at Unified Mentor, where I developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Built responsive and reusable user interfaces.",
  },
];

export const services = [
  {
    title: "Backend Development",
    description:
      "Scalable REST APIs, authentication, integrations, queues, and microservices using Node.js, Fastify, and TypeScript.",
    icon: "code",
  },
  {
    title: "Full Stack Development",
    description:
      "Modern web applications with React, Next.js, MongoDB, and responsive user interfaces.",
    icon: "sparkles",
  },
  {
    title: "API & Payment Integrations",
    description:
      "Stripe, third-party APIs, webhooks, automation workflows, Redis, BullMQ, and cloud integrations.",
    icon: "orbit",
  },
];
