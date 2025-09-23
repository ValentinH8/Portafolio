import React from 'react';
import styles from './Project.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Nombre de tu Proyecto 1',
    description: 'Una breve descripción de tu proyecto, destacando sus características principales y las tecnologías que utilizaste. Menciona lo que hace y por qué es importante.',
    image: 'https://via.placeholder.com/600x400',
    githubUrl: 'https://github.com/ValentinH8/tu-proyecto-1',
    liveUrl: 'https://tu-proyecto-1.netlify.app',
  },
  {
    title: 'Nombre de tu Proyecto 2',
    description: 'Otra descripción de un proyecto diferente. Aquí puedes hablar de los desafíos que enfrentaste y cómo los superaste, mostrando tus habilidades de resolución de problemas.',
    image: 'https://via.placeholder.com/600x400',
    githubUrl: 'https://github.com/ValentinH8/tu-proyecto-2',
    liveUrl: 'https://tu-proyecto-2.netlify.app',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Mis Proyectos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={`Captura de ${project.title}`} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkButton}
                >
                  Ver en GitHub
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkButton}
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;