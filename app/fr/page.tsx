"use client"
import Link from "next/link"
import { Github, Instagram, Facebook } from "lucide-react"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Education from "./components/education"
import Experience from "./components/experience"
import Certifications from "./components/certifications"
import styles from "./page.module.css"

const projects = [
  {
    title: "Concours PLT",
    description:
      "Application full-stack avec frontend et backend séparés. Développée avec JavaScript moderne, utilisant des technologies web avancées.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/mickael234/Concours-plt",
    tags: ["JavaScript", "CSS", "HTML", "Frontend", "Backend"],
    stats: {
      js: "70.2%",
      css: "19.8%",
      html: "10%",
    },
  },
  {
    title: "Project Root",
    description: "Projet de développement web avec focus sur l'architecture et la gestion de système.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/mickael234/project-root",
    tags: ["Web Development", "System Architecture"],
  },
  {
    title: "ISO Project",
    description: "Projet lié aux systèmes d'exploitation et à la gestion des images ISO.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/mickael234/ISO",
    tags: ["System", "ISO", "OS"],
  },
]

export default function Page() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              Hassan Ezechiel Diarrassouba
            </Link>
            <div>
              <Link href="#about" className={styles.navLink}>
                À propos
              </Link>
              <Link href="#education" className={styles.navLink}>
                Formation
              </Link>
              <Link href="#experience" className={styles.navLink}>
                Expérience
              </Link>
              <Link href="#projects" className={styles.navLink}>
                Projets
              </Link>
              <Link href="#skills" className={styles.navLink}>
                Compétences
              </Link>
              <Link href="#contact" className={styles.navLink}>
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>À propos de moi</h2>
            <p className={styles.aboutText}>
              Étudiant en dernière année de Génie logiciel et systèmes d'information, passionné par les TI. Compétences
              variées en systèmes d'information, programmation, sécurité, réseaux, design, machine learning et gestion
              de projet (Agile).
            </p>
            <div className={styles.buttonContainer}>
              <a href="/path-to-your-cv.pdf" download className={styles.button}>
                Télécharger CV
              </a>
            </div>
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Github size={24} />
              </a>
              <a
                href="https://instagram.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/votre-username"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </section>

        <section id="education" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Formation</h2>
            <Education />
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Expérience</h2>
            <Experience />
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Projets</h2>
            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Compétences</h2>
            <TechStack />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Certifications</h2>
            <Certifications />
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.aboutText}>N'hésitez pas à me contacter en utilisant les informations suivantes :</p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email :</strong> ezeckieldiarrassouba@gmail.com
              </p>
              <p>
                <strong>Téléphone :</strong> +216 55 406 620
              </p>
              <p>
                <strong>Adresse :</strong> Rue ras Jedir soukra, 2036 Tunis
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 Hassan Ezechiel Diarrassouba. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

