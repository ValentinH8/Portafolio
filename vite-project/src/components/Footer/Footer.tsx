import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInnerContainer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <div className={styles.developerInfo}>
              <h3>&lt;&gt; Valentin Hernandez</h3>
              <p>
                Backend Developer
              </p>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>&lt; Navigation</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>&lt; Social Media</h3>
            <div className={styles.socialIcons}>
              <a href="https://github.com/ValentinH8" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/valentinh8/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <div className={styles.copyrightLinks}>
            
          </div>
          

          {isVisible && (
            <button onClick={scrollToTop} className={styles.scrollButton}>
              ↑
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;