"use client"

import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`

const Card = styled.div`
  background-color: var(--background);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text);
  margin-bottom: 10px;
`

const CardSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 10px;
`

const CardText = styled.p`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 5px;
`

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`

const ListItem = styled.li`
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 5px;
`

export default function Experience() {
  const experienceData = [
    {
      title: "Développeur web",
      company: "Freelance, Tunis",
      period: "Janv 2025 - Présent",
      responsibilities: [
        "Conception et gestion d'un site e-commerce pour une boutique d'épices en ligne avec Shopify",
        "Personnalisation du site, ajout de produits, configuration des paiements et livraisons, optimisation SEO",
      ],
    },
    {
      title: "Stage Développeur et maintenance",
      company: "Cafexi Consulting, Abidjan",
      period: "Août 2024 - Oct 2024",
      responsibilities: [
        "Gestion et maintenance du serveur et du parc informatique",
        "Création et mise en ligne du site web de l'entreprise",
        "Gestion des réseaux sociaux et acquisition de clients internationaux",
      ],
    },
    {
      title: "Stage Reflex Security",
      company: "Reflex Security, Abidjan",
      period: "Juil 2023 - Sept 2023",
      responsibilities: [
        "Gestion des fichiers et bilan des salaires",
        "Participation au projet de renforcement de la sécurité informatique",
      ],
    },
  ]

  return (
    <Grid>
      {experienceData.map((exp, index) => (
        <Card key={index}>
          <CardTitle>{exp.title}</CardTitle>
          <CardSubtitle>{exp.company}</CardSubtitle>
          <CardText>{exp.period}</CardText>
          <List>
            {exp.responsibilities.map((resp, i) => (
              <ListItem key={i}>{resp}</ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Grid>
  )
}

