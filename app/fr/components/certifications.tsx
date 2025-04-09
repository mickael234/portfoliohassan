"use client"

import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 10px;
`

const CardText = styled.p`
  font-size: 0.9rem;
  color: var(--text-light);
`

export default function Certifications() {
  const certifications = [
    { name: "Certificat HTML5", date: "Août 2022" },
    { name: "Certificat en programmation Java", date: "Août 2022" },
    { name: "Certificat des Fondamentaux du marketing numérique", date: "Juin 2022" },
    { name: "Certificat de programmation C", date: "Juin 2022" },
    { name: "Certificat en conception graphique", date: "Juin 2022" },
    { name: "Certificat de diplôme sur les bases de l'informatique", date: "Juin 2022" },
    { name: "Certificat en BUILD Entrepreneurial Leadership Participant", date: "Juillet 2021" },
    { name: "CS50 Fondamentaux Python", date: "Juillet 2024" },
    { name: "Certificat EFSET d'anglais", date: "Décembre 2024" },
  ]

  return (
    <Grid>
      {certifications.map((cert, index) => (
        <Card key={index}>
          <CardTitle>{cert.name}</CardTitle>
          <CardText>{cert.date}</CardText>
        </Card>
      ))}
    </Grid>
  )
}

