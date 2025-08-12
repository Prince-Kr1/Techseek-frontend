
import { Cpu , Palette, Cloudy, Database, Smartphone, Boxes, CodeXml, Layers, FileUser, FileText, BriefcaseBusiness  } from "lucide-react";


export const companies = ["google", "amazon", "meta", "walmart", "figma", "infosys", "microsoft", "netflix", "oracle", "paytm", "pinterest", "spotify"];

export const jobsCategory = [
  {
    icon: <Cpu />,
    title: "AI/ML",
    desc: "Icons are lightweight, highly optimized scalable vector graphics (SVG)."
  },
  {
    icon: <CodeXml/>,
    title: "Frontend Developer",
    desc: "Handle server-side logic, databases, and APIs to power web applications."
  },
  {
    icon: <Layers />,
    title: "Backend Developer",
    desc: "Handle server-side logic, databases, and APIs to power web applications."
  },
  {
    icon: <Boxes/>,
    title: "DevOps Engineer",
    desc: "Automate deployment, manage infrastructure, and ensure reliable system"
  },
  {
    icon: <Database/>,
    title: "Data Scientist",
    desc: "Analyze large datasets to uncover insights and support decision-making."
  },
  {
    icon: <Cloudy />,
    title: "Cloud Engineer",
    desc: "Design and manage cloud infrastructure on platforms like AWS, Azure, or GCP."
  },
  {
    icon: <Palette/>,
    title: "UI/UX Designer",
    desc: "Design user experiences that are intuitive, accessible, and visually appealing."
  },
  {
    icon: <Smartphone/>,
    title: "Mobile App Developer",
    desc: " Create apps for iOS and Android using technologies like Swift or Flutter."
  },
];

export const processToApply = [
  {
    icon: <FileText className="w-10 h-10" />,
    title: "Build Your Resume",
    desc: "Create a standout resume with your skills."
  },
  {
    icon: <BriefcaseBusiness className="w-10 h-10" />,
    title: "Apply for Job",
    desc: "Find and apply for jobs that match your skills."
  },
  {
    icon: <FileUser className="w-10 h-10" />,
    title: "Get Hired",
    desc: "Connect with employers and start your new job."
  },
];

export const testimonials = [
   {
    name: "Himanshu Jaiswal",
    role: "Dev Media",
    quote:
      "The resume maker is a real time-saver! The templates are professionally designed and easy to customize...",
    avatar: "/avatars/user1.png",
  },
  {
    name: "Sumit Kumar",
    role: "Intern @ ATG",
    quote:
      "The AI-powered resume builder is by far the best I’ve come across. The templates strike the perfect balance...",
    avatar: "/avatars/user2.png",
  },
  {
    name: "Rashika Kumari",
    role: "Intern @ Maya Privacy",
    quote:
      "The Skill Enhancer tool really surprised me! It curated the best learning resources and roadmaps to help...",
    avatar: "/avatars/user3.png",
  },
   {
    name: "Himanshu Jaiswal",
    role: "Dev Media",
    quote:
      "The resume maker is a real time-saver! The templates are professionally designed and easy to customize...",
    avatar: "/avatars/user1.png",
  },
  {
    name: "Sumit Kumar",
    role: "Intern @ ATG",
    quote:
      "The AI-powered resume builder is by far the best I’ve come across. The templates strike the perfect balance...",
    avatar: "/avatars/user2.png",
  },
  {
    name: "Rashika Kumari",
    role: "Intern @ Maya Privacy",
    quote:
      "The Skill Enhancer tool really surprised me! It curated the best learning resources and roadmaps to help...",
    avatar: "/avatars/user3.png",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Find Job", href: "/find-job" },
      { name: "Find Company", href: "/find-company" },
      { name: "Find Employee", href: "/find-employee" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help & Support", href: "/support" },
      { name: "Feedback", href: "/feedback" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
];

