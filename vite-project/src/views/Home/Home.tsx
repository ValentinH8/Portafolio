import styles from './Home.module.css';
import myImage from '../../assets/YO.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineWorkOutline, MdDownload } from 'react-icons/md';
import { IoStatsChartOutline } from 'react-icons/io5';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLogoJavascript } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";

const Home = () => {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.card}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleAndPic}>
            <div>
              <h1 className={styles.greeting}>
                Hi, I'm Valentín Hernandez
              </h1>
              <p className={styles.role}><strong>Full Stack Developer</strong> |<strong> Backend-Oriented </strong></p>
            </div>
            <div className={styles.profilePictureCircleMobile}>
              <img src={myImage} alt="Valentín Hernandez" />
            </div>
          </div>
          <p className={styles.description}>
            I am passionate about technology and enthusiastic about learning new things every day. I don't have extensive experience, but I strive daily to be as useful as possible          </p>
          <div className={styles.socialIcons}>
            <span>Follow me on:</span>
            <a href="https://github.com/ValentinH8" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ValentinH8" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className={styles.buttons}>
            <button className={styles.exploreProjectsButton}>
              <MdOutlineWorkOutline className={styles.buttonIcon} />
              Explore My Project
            </button>
            <button
  className={styles.downloadCvButton}
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/CV-Valentin-Hernandez-Mateo.pdf";
    link.download = "CV-Valentin-Hernandez-Mateo.pdf";
    link.click();
  }}
>
  <MdDownload className={styles.buttonIcon} />
  Download My CV
</button>

          </div>
          <div className={styles.quickStats}>
            <div className={styles.statHeading}>
              <IoStatsChartOutline className={styles.statsIcon} />
              Quick Stats:
            </div>
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <PiStudent className={styles.statIcon} />
                <span className={styles.statValue}>Junior</span>
                <span className={styles.statLabel}></span>
              </div>
              <div className={styles.statCard}>
                <IoLogoJavascript className={styles.statIcon} />
                <span className={styles.statValue}>JavaScript</span>
                <span className={styles.statLabel}>Main Language</span>
              </div>
              <div className={styles.statCard}>
                <PiSuitcaseSimpleBold className={styles.statIcon} />
                <span className={styles.statValue}>1+ Years</span>
                <span className={styles.statLabel}>Experience</span>
              </div>
              <div className={styles.statCard}>
                <BsCodeSlash className={styles.statIcon} />
                <span className={styles.statValue}>1 Project</span>
                <span className={styles.statLabel}>Total Projects</span>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.profilePictureCircle}>
          <img src={myImage} alt="Valentín Hernandez" />
        </div>
      </div>
    </section>
  );
};

export default Home;