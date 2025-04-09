"use client"

import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import styles from "./project-card.module.css"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  stats?: {
    js?: string
    css?: string
    html?: string
  }
}

export default function ProjectCard({ title, description, image, link, tags, stats }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image || "/placeholder.svg"} alt={title} width={600} height={400} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {stats && (
          <div className={styles.stats}>
            {stats.js && (
              <div className={styles.statBar}>
                <span className={styles.statLabel}>JavaScript</span>
                <div className={styles.statBarFill} style={{ width: stats.js, backgroundColor: "#f1e05a" }}>
                  {stats.js}
                </div>
              </div>
            )}
            {stats.css && (
              <div className={styles.statBar}>
                <span className={styles.statLabel}>CSS</span>
                <div className={styles.statBarFill} style={{ width: stats.css, backgroundColor: "#563d7c" }}>
                  {stats.css}
                </div>
              </div>
            )}
            {stats.html && (
              <div className={styles.statBar}>
                <span className={styles.statLabel}>HTML</span>
                <div className={styles.statBarFill} style={{ width: stats.html, backgroundColor: "#e34c26" }}>
                  {stats.html}
                </div>
              </div>
            )}
          </div>
        )}

        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <Link href={link} target="_blank" className={styles.link}>
            <Github className={styles.icon} />
            <span>Code source</span>
          </Link>
          <Link href={`${link}/deployments`} target="_blank" className={styles.link}>
            <ExternalLink className={styles.icon} />
            <span>Demo live</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

