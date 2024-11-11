import '../styles/pages/Support.css';

function Support() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Support & Contact</h1>
        <p className="section-subtitle">Plusieurs moyens de me joindre pour mieux vous servir</p>
      </div>

      <div className="support-content">
        <div className="contact-grid">
          <div className="contact-card primary">
            <div className="card-header">
              <span className="contact-icon">📞</span>
              <h3>Assistance Téléphonique</h3>
            </div>
            <p className="availability">Disponible 7j/7</p>
            <a href="tel:0661388374" className="contact-button phone">
              06 61 38 83 74
            </a>
            <p className="info-text">
              Pour une assistance immédiate ou une demande urgente
            </p>
          </div>

          <div className="contact-card">
            <div className="card-header">
              <span className="contact-icon">✉️</span>
              <h3>Email</h3>
            </div>
            <p className="availability">Réponse sous 24h</p>
            <a href="mailto:techinfotuto@gmail.com" className="contact-button email">
              techinfotuto@gmail.com
            </a>
            <p className="info-text">
              Pour les demandes détaillées et les devis
            </p>
          </div>

          <div className="contact-card">
            <div className="card-header">
              <span className="contact-icon">💬</span>
              <h3>Discord</h3>
            </div>
            <p className="availability">Communauté active</p>
            <a 
              href="https://discord.gg/zaeGWv74hB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button discord"
            >
              Rejoindre le serveur
            </a>
            <p className="info-text">
              Pour échanger et obtenir de l'aide de la communauté
            </p>
          </div>
        </div>

        <div className="support-features">
          <h2>Pourquoi nous contacter ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔍</span>
              <h4>Diagnostic</h4>
              <p>Analyse gratuite de votre problème</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h4>Devis</h4>
              <p>Estimation gratuite et sans engagement</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📅</span>
              <h4>Rendez-vous</h4>
              <p>Planification d'intervention</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">❓</span>
              <h4>Questions</h4>
              <p>Renseignements sur nos services</p>
            </div>
          </div>
        </div>

        <div className="response-guarantee">
          <div className="guarantee-content">
            <span className="guarantee-icon">⚡</span>
            <div className="guarantee-text">
              <h3>Réponse Rapide Garantie</h3>
              <p>Je m'engage à répondre à toutes les demandes dans les plus brefs délais</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
