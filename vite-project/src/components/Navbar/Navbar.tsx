// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { IoMdGlasses } from "react-icons/io";
import { IoGlassesOutline } from "react-icons/io5";

const Navbar = () => {
    // Inicializa el estado con el valor de localStorage
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Guarda el nuevo tema en localStorage
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    useEffect(() => {
        // Aplica la clase al <body> al cargar el componente
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = 100;

            if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
            <ul className={styles.navLinks}>
                <li><a href="#home">HOME</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div className={styles.themeToggle} onClick={toggleTheme}>
                <span>{isDarkMode ? <IoGlassesOutline /> : <IoMdGlasses />}</span>
            </div>
        </nav>
    );
};

export default Navbar;