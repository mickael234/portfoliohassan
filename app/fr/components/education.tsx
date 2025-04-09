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

export default function Education() {
  const educationData = [
    {
      degree: "3ème année Génie logiciel et systèmes d'information",
      institution: "Iteam University, Tunis",
      period: "Oct 2024 - Présent",
      details: [
        "Base solide en développement logiciel",
        "Compétences techniques clés en systèmes d'exploitation, sécurité informatique, machine Learning, webservices, virtualisation et architecture SOA",
      ],
    },
    {
      degree: "2ème année Génie logiciel et systèmes d'information",
      institution: "Iteam University, Tunis",
      period: "Oct 2023 - Juin 2024",
      details: [
        "Formation en développement logiciel, gestion et administration des bases de données, et gestion de projets en méthodologie Agile (Scrum)",
      ],
    },
    {
      degree: "1ère année en Software Engineering (système anglophone)",
      institution: "Université libre de Kigali, Kigali",
      period: "Mars 2023 - Juil 2023",
      details: [
        "Connaissances fondamentales en génie logiciel, concepts de programmation, structures de données et méthodologies de développement",
      ],
    },
    {
      degree: "Classe préparatoire informatique",
      institution: "École supérieure privée d'ingénieries et de technologie (Esprit), Tunis, Tunisie",
      period: "Oct 2021 - Mai 2022",
      details: [
        "Bases solides en mathématiques, algorithmique, programmation et architecture des systèmes informatiques",
      ],
    },
    {
      degree: "Diplôme de fin d'étude secondaire",
      institution: "Cours secondaire méthodisme yopougon kouté, Abidjan, Côte d'Ivoire",
      period: "Sept 2019 - Juil 2021",
      details: ["Spécialisation en mathématiques et sciences de la vie et de la terre"],
    },
  ]

  return (
    <Grid>
      {educationData.map((edu, index) => (
        <Card key={index}>
          <CardTitle>{edu.degree}</CardTitle>
          <CardSubtitle>{edu.institution}</CardSubtitle>
          <CardText>{edu.period}</CardText>
          <List>
            {edu.details.map((detail, i) => (
              <ListItem key={i}>{detail}</ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Grid>
  )
}

