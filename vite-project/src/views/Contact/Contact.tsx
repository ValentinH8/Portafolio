import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDatosFormulario({ ...datosFormulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_npmmc3e', 'template_gwvy2he', form.current, 'Bim9ZqGhuYsvHh6VB').then(
        () => {
          alert('¡Mensaje enviado con éxito!');
          setDatosFormulario({
            nombre: '',
            email: '',
            asunto: '',
            mensaje: '',
          });
        },
        () => {
          alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        }
      );
    }
  };

  return (
    <section id="contact" className={styles.seccionContacto}>
      <div className={styles.contenedorSocial}>
        <h2>Conecta Conmigo</h2>
        <p>Sígueme en redes sociales para estar al tanto de mis últimos proyectos, novedades tech y mi camino como desarrollador. ¡Conectemos y construyamos algo increíble juntos!</p>
        <div className={styles.bloquesSocial}>
          <a href="https://linkedin.com/in/ValentinH8" target="_blank" rel="noopener noreferrer" className={`${styles.bloqueSocial} ${styles.linkedin}`}>
            <span className={styles.iconoSocial}>in</span>
            <div className={styles.infoSocial}>
              <h3>LinkedIn</h3>
              <p>@ValentinH8</p>
            </div>
          </a>
          <a href="https://github.com/ValentinH8" target="_blank" rel="noopener noreferrer" className={`${styles.bloqueSocial} ${styles.github}`}>
            <span className={styles.iconoSocial}>git</span>
            <div className={styles.infoSocial}>
              <h3>GitHub</h3>
              <p>@ValentinH8</p>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.contenedorFormulario}>
        <h2>Formulario de Contacto</h2>
        <p>¿Tienes un proyecto en mente? Mándame un mensaje y te responderé lo antes posible.</p>
        <form ref={form} className={styles.formularioMensaje} onSubmit={handleSubmit}>
          <h3>Envíame un mensaje</h3>
          <div className={styles.grupoInput}>
            <label htmlFor="nombre">Nombre *</label>
            <input type="text" id="nombre" name="nombre" value={datosFormulario.nombre} onChange={handleChange} placeholder="Tu nombre completo" required />
          </div>
          <div className={styles.grupoInput}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" value={datosFormulario.email} onChange={handleChange} placeholder="tu@email.com" required />
          </div>
          <div className={styles.grupoInput}>
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto" value={datosFormulario.asunto} onChange={handleChange} placeholder="Consulta, colaboración, etc." />
          </div>
          <div className={styles.grupoInput}>
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea id="mensaje" name="mensaje" value={datosFormulario.mensaje} onChange={handleChange} rows={4} placeholder="Cuéntame sobre tu proyecto, requisitos, plazos y presupuesto..." required></textarea>
          </div>
          <button type="submit" className={styles.botonEnviar}>
            <span className={styles.iconoEnviar}>✈️</span> Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
