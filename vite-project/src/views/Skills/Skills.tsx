import { useState } from 'react';
import styles from './Skills.module.css';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap, FaPython, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiMongodb, SiExpress, SiCplusplus, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const skillIcons = {
    JavaScript: <FaJsSquare style={{ color: '#F7DF1E' }} />,
    TypeScript: <SiTypescript style={{ color: '#007ACC' }} />,
    HTML: <FaHtml5 style={{ color: '#E34F26' }} />,
    CSS: <FaCss3Alt style={{ color: '#1572B6' }} />,
    'Node.js': <FaNodeJs style={{ color: '#339933' }} />,
    'Express.js': <SiExpress style={{ color: '#000000' }} />,
    'React.js': <FaReact style={{ color: '#61DAFB' }} />,
    TailwindCSS: <SiTailwindcss style={{ color: '#06B6D4' }} />,
    Bootstrap: <FaBootstrap style={{ color: '#7952B3' }} />,
    PostgreSQL: <SiPostgresql style={{ color: '#336791' }} />,
    MySQL: <SiMysql style={{ color: '#4479A1' }} />,
    MongoDB: <SiMongodb style={{ color: '#47A248' }} />,
    Python: <FaPython style={{ color: '#3776AB' }} />,
    'C++': <SiCplusplus style={{ color: '#00599C' }} />,
    Figma: <FaFigma style={{ color: '#F24E1E' }} />,
    Photoshop: <SiAdobephotoshop style={{ color: '#31A8FF' }} />,
    Illustrator: <SiAdobeillustrator style={{ color: '#FF9A00' }} />,
};

const skillsData = {
    Resume: {
        title: 'Resume',
        items: [
            'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js',
            'Express.js', 'React.js', 'TailwindCSS', 'Bootstrap', 'PostgreSQL',
            'MySQL', 'MongoDB', 'Python', 'C++', 'Figma',
            'Photoshop', 'Illustrator',
        ],
    },
    Frontend: {
        title: 'Frontend',
        items: [
            'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React.js',
            'TailwindCSS', 'Bootstrap',
        ],
    },
    Backend: {
        title: 'Backend',
        items: [
            'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL',
            'MySQL', 'MongoDB', 'Python', 'C++',
        ],
    },
    Tools: {
        title: 'Tools',
        items: ['Figma', 'Photoshop', 'Illustrator'],
    },
};

type SkillCategory = keyof typeof skillsData;

const Skills = () => {
    const [activeTab, setActiveTab] = useState<SkillCategory>('Resume');

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.skillsCard}>
                <h2 className={styles.heading}>Skills</h2>
                <p className={styles.subheading}>Technologies and tools I work with</p>
                <div className={styles.tabsContainer}>
                    {Object.keys(skillsData).map((key) => {
                        const tabKey = key as SkillCategory;
                        return (
                            <button
                                key={tabKey}
                                className={`${styles.tabButton} ${activeTab === tabKey ? styles.active : ''}`}
                                onClick={() => setActiveTab(tabKey)}
                            >
                                {skillsData[tabKey].title}
                            </button>
                        );
                    })}
                </div>
                <div className={styles.contentWrapper}>
                    <h3 className={styles.cardTitle}>{skillsData[activeTab].title} Skills</h3>
                    <ul className={styles.skillsList}>
                        {skillsData[activeTab].items.map((skill, index) => (
                            <li key={index}>
                                <div className={styles.skillCard}>
                                    <div className={styles.iconWrapper}>
                                        {skillIcons[skill as keyof typeof skillIcons]}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;