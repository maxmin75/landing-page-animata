import { motion } from 'framer-motion'
import './App.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
}

const float = {
  y: [0, -20, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
}

const FloatingShape = ({ className, delay = 0 }) => (
  <motion.div
    className={className}
    animate={{ 
      rotate: [0, 360],
      scale: [1, 1.2, 1]
    }}
    transition={{ 
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay }
    }}
  />
)

function App() {
  return (
    <div className="landing">
      <FloatingShape className="shape shape-1" />
      <FloatingShape className="shape shape-2" delay={1} />
      <FloatingShape className="shape shape-3" delay={2} />

      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo">Brand</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className="btn-nav">Contattaci</a>
        </div>
      </motion.nav>

      <section className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeInUp}>
            Trasforma la tua <span>attività</span> digitale
          </motion.h1>
          <motion.p variants={fadeInUp}>
            La soluzione completa per far crescere il tuo business online. 
            Semplice, potente, conveniente.
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeInUp}>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Inizia gratis
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="dashboard-content">
              <div className="chart-placeholder">
                <motion.div 
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height: "60%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.div 
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height: "80%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
                <motion.div 
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height: "45%" }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                />
                <motion.div 
                  className="bar"
                  initial={{ height: 0 }}
                  animate={{ height: "90%" }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="features">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Perché sceglierci
        </motion.h2>
        <motion.div 
          className="features-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10 }}>
            <div className="feature-icon">🚀</div>
            <h3>Velocità</h3>
            <p>Performance ottimizzate per garantire tempi di caricamento istantanei.</p>
          </motion.div>
          <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10 }}>
            <div className="feature-icon">🔒</div>
            <h3>Sicurezza</h3>
            <p>Protezione avanzata per i tuoi dati con crittografia end-to-end.</p>
          </motion.div>
          <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10 }}>
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Report dettagliati per monitorare le tue metriche in tempo reale.</p>
          </motion.div>
          <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10 }}>
            <div className="feature-icon">⚙️</div>
            <h3>Automazione</h3>
            <p>Semplifica i processi ripetitivi con workflow automatici.</p>
          </motion.div>
          <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10 }}>
            <div className="feature-icon">🌍</div>
            <h3>Globale</h3>
            <p>Raggiungi clienti in tutto il mondo con supporto multilingua.</p>
          </motion.div>
          <motion.div className="feature-card" variants={fadeInUp} whileHover={{ y: -10 }}>
            <div className="feature-icon">💬</div>
            <h3>Supporto</h3>
            <p>Assistenza 24/7 disponibile in italiano e inglese.</p>
          </motion.div>
        </motion.div>
      </section>

      <section id="pricing" className="pricing">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pricing flessibile
        </motion.h2>
        <motion.div 
          className="pricing-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="pricing-card" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
            <h3>Starter</h3>
            <div className="price"><span>€</span>19<span>/mese</span></div>
            <ul>
              <li>Utenti: 5</li>
              <li>10GB storage</li>
              <li>Supporto email</li>
              <li>Analytics base</li>
            </ul>
            <motion.button 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inizia
            </motion.button>
          </motion.div>
          <motion.div className="pricing-card popular" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
            <div className="badge">Popolare</div>
            <h3>Pro</h3>
            <div className="price"><span>€</span>49<span>/mese</span></div>
            <ul>
              <li>Utenti: 25</li>
              <li>100GB storage</li>
              <li>Supporto prioritario</li>
              <li>Analytics avanzato</li>
              <li>API access</li>
            </ul>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inizia
            </motion.button>
          </motion.div>
          <motion.div className="pricing-card" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
            <h3>Enterprise</h3>
            <div className="price"><span>€</span>199<span>/mese</span></div>
            <ul>
              <li>Utenti illimitati</li>
              <li>Storage illimitato</li>
              <li>Supporto dedicato</li>
              <li>Analytics completo</li>
              <li>API access</li>
              <li>Custom integrazioni</li>
            </ul>
            <motion.button 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contattaci
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section id="testimonials" className="testimonials">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cosa dicono i clienti
        </motion.h2>
        <motion.div 
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="testimonial-card" variants={fadeInUp}>
            <p>"Da quando usiamo questa piattaforma, i nostri lead sono aumentati del 150%. Straordinario!"</p>
            <div className="author">
              <div className="avatar">MR</div>
              <div>
                <strong>Marco Rossi</strong>
                <span>CEO, TechCorp</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="testimonial-card" variants={fadeInUp}>
            <p>"Il miglior investimento che abbiamo fatto. Supporto eccellente e risultati garantiti."</p>
            <div className="author">
              <div className="avatar">LB</div>
              <div>
                <strong>Laura Bianchi</strong>
                <span>Marketing Director, StartUp</span>
              </div>
            </div>
          </motion.div>
          <motion.div className="testimonial-card" variants={fadeInUp}>
            <p>"Semplicemente fantastico. La nostra produttività è cresciuta grazie all'automazione."</p>
            <div className="author">
              <div className="avatar">GV</div>
              <div>
                <strong>Giuseppe Verdi</strong>
                <span>Founder, DigitalAgency</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Pronto a iniziare?</h2>
          <p>Unisciti a migliaia di aziende che già utilizzano la nostra piattaforma.</p>
          <motion.button 
            className="btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Prova gratis
          </motion.button>
        </motion.div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>Brand</h4>
            <p>La soluzione digitale per il tuo business.</p>
          </div>
          <div className="footer-links">
            <div>
              <h5>Prodotto</h5>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Documentazione</a>
            </div>
            <div>
              <h5>Azienda</h5>
              <a href="#">Chi siamo</a>
              <a href="#">Blog</a>
              <a href="#">Carriere</a>
            </div>
            <div>
              <h5>Supporto</h5>
              <a href="#">Help Center</a>
              <a href="#">Contatti</a>
              <a href="#">Stato servizio</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Brand. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
