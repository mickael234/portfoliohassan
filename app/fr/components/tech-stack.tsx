"use client"
import {
  Code,
  Globe,
  Database,
  Server,
  Paintbrush,
  GitBranch,
  PenTool,
  FileCode,
  Coffee,
  PiIcon as Python,
  Cpu,
  SmartphoneIcon as Android,
  PiIcon as Php,
  DatabaseIcon,
  Box,
  CloudIcon as Firebase,
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  CodepenIcon as Javascript,
  Smartphone,
  WorkflowIcon as Wordpress,
  ShoppingBag,
  ComputerIcon as Ubuntu,
  DockIcon as Docker,
  ComputerIcon as VirtualMachine,
  Figma,
  Trello,
  Github,
  Cog,
} from "lucide-react"
import styles from "./tech-stack.module.css"

const getIconForCategory = (category: string) => {
  switch (category) {
    case "Programmation":
      return <Code size={20} />
    case "Développement web":
    case "Développement web et CMS":
      return <Globe size={20} />
    case "Administration système":
      return <Server size={20} />
    case "Bases de données":
      return <Database size={20} />
    case "Conception graphique":
      return <Paintbrush size={20} />
    case "Gestion de projet":
      return <GitBranch size={20} />
    case "Outils de développement":
      return <PenTool size={20} />
    default:
      return null
  }
}

const getIconForSkill = (skill: string) => {
  switch (skill.toLowerCase()) {
    case "c":
      return <FileCode size={16} />
    case "c++":
      return <Cpu size={16} />
    case "python":
      return <Python size={16} />
    case "java":
      return <Coffee size={16} />
    case "kotlin":
      return <Android size={16} />
    case "php":
      return <Php size={16} />
    case "sql":
      return <DatabaseIcon size={16} />
    case "mongodb":
      return <Database size={16} />
    case "django":
      return <Box size={16} />
    case "supabase":
      return <Database size={16} />
    case "firebase":
      return <Firebase size={16} />
    case "html5":
      return <Html5 size={16} />
    case "css3":
      return <Css3 size={16} />
    case "javascript":
      return <Javascript size={16} />
    case "react native":
      return <Smartphone size={16} />
    case "wordpress":
      return <Wordpress size={16} />
    case "magento":
      return <ShoppingBag size={16} />
    case "drupal":
      return <Globe size={16} />
    case "prestashop":
      return <ShoppingBag size={16} />
    case "shopify":
      return <ShoppingBag size={16} />
    case "linux (ubuntu)":
      return <Ubuntu size={16} />
    case "docker":
      return <Docker size={16} />
    case "virtualbox":
      return <VirtualMachine size={16} />
    case "vmware":
      return <VirtualMachine size={16} />
    case "oracle sql":
      return <DatabaseIcon size={16} />
    case "postgresql":
      return <DatabaseIcon size={16} />
    case "mysql":
      return <DatabaseIcon size={16} />
    case "plsql":
      return <DatabaseIcon size={16} />
    case "figma":
      return <Figma size={16} />
      case "adobe photoshop":
        return <Figma size={16} />
    case "adobe illustrator":
      return <PenTool size={16} />
    case "canva":
      return <Paintbrush size={16} />
    case "blender (3d)":
      return <Cog size={16} />
    case "scrum":
      return <GitBranch size={16} />
    case "trello":
      return <Trello size={16} />
    case "github":
      return <Github size={16} />
    case "visual studio":
      return <Code size={16} />
    case "code::blocks":
      return <Code size={16} />
    case "sdl":
      return <Cog size={16} />
    case "isis proteus":
      return <Cpu size={16} />
    default:
      return <Code size={16} />
  }
}

export default function TechStack() {
  const technologies = [
    {
      category: "Programmation",
      skills: ["C", "C++", "Python", "Java", "Kotlin"],
    },
    {
      category: "Développement web",
      skills: [
        "PHP",
        "SQL",
        "MongoDB",
        "Django",
        "Supabase",
        "Firebase",
        "HTML5",
        "CSS3",
        "JavaScript",
        "React Native",
      ],
    },
    {
      category: "Développement web et CMS",
      skills: ["WordPress", "Magento", "Drupal", "PrestaShop", "Shopify"],
    },
    {
      category: "Administration système",
      skills: ["Linux (Ubuntu)", "Docker", "VirtualBox", "VMware"],
    },
    {
      category: "Bases de données",
      skills: ["Oracle SQL", "PostgreSQL", "MySQL", "PLSQL", "MongoDB", "Firebase"],
    },
    {
      category: "Conception graphique",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Blender (3D)"],
    },
    {
      category: "Gestion de projet",
      skills: ["Scrum", "Trello", "GitHub"],
    },
    {
      category: "Outils de développement",
      skills: ["Visual Studio", "Code::Blocks", "SDL", "ISIS Proteus"],
    },
  ]

  return (
    <div className={styles.grid}>
      {technologies.map((tech, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.cardTitle}>
            {getIconForCategory(tech.category)}
            {tech.category}
          </h3>
          <ul className={styles.skillList}>
            {tech.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className={styles.skill}>
                <button className={styles.skillButton}>
                  {getIconForSkill(skill)}
                  <span className={styles.skillText}>{skill}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

