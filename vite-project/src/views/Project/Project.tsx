import React from 'react';
import styles from './Project.module.css';
import turnos from '../../assets/app-turnos-login.png';
import portfolio from '../../assets/portafolio.png';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'App de Turnos para Barbería 💈',
    description: 'Sistema completo de gestión de turnos para una barbería. Este proyecto Full Stack incluye autenticación de usuarios y un panel de administración para gestionar reservas y clientes. Fue una oportunidad para desarrollar una lógica de negocio robusta.',
    image: turnos,
    githubUrl: 'https://github.com/ValentinH8/app-turnos-login',
    technologies: ['React', 'Node.js', 'NestJS', 'TypeScript', 'SQL', 'TypeORM', 'JWT'], 
  },
  {
    title: 'Portafolio Personal 👨‍💻',
    description: 'Mi perfil de desarrollador y una muestra de mi trabajo. Sirve como un punto de contacto y una presentación de mis habilidades técnicas y proyectos. Construido para demostrar mi dominio de React y la creación de componentes reutilizables.',
    image: portfolio,
    githubUrl: 'https://github.com/ValentinH8/Portafolio',
    technologies: ['React', 'Vite', 'TypeScript', 'CSS'],
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.card}>
      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Mis Proyectos</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.image} alt={`Captura de ${project.title}`} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologiesList}>
                  <h4>Tecnologías Usadas:</h4>
                  <ul>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>

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
    </div>
  );
};

export default Projects;