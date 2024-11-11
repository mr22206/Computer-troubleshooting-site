import '../styles/pages/Distance.css';

function Distance() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Dépannage à Distance</h1>
        <p className="section-subtitle">Solution rapide et efficace pour vos problèmes informatiques</p>
      </div>

      <div className="distance-content">
        <div className="process-cards">
          <div className="process-card">
            <span className="step-number">1</span>
            <div className="card-content">
              <h3>Prise de Contact</h3>
              <p>Appelez-nous au <a href="tel:0661388374" className="highlight-link">06 61 38 83 74</a> ou envoyez un email à <a href="mailto:techinfotuto@gmail.com" className="highlight-link">techinfotuto@gmail.com</a></p>
            </div>
          </div>

          <div className="process-card">
            <span className="step-number">2</span>
            <div className="card-content">
              <h3>Installation TeamViewer</h3>
              <p>Téléchargez et installez <a href="https://connect.teamviewer.com/v15" target="_blank" rel="noopener noreferrer" className="highlight-link">TeamViewer QuickSupport</a></p>
            </div>
          </div>

          <div className="process-card">
            <span className="step-number">3</span>
            <div className="card-content">
              <h3>Connexion</h3>
              <p>Communiquez-nous votre ID et mot de passe TeamViewer</p>
            </div>
          </div>

          <div className="process-card">
            <span className="step-number">4</span>
            <div className="card-content">
              <h3>Intervention</h3>
              <p>Nous prenons la main sur votre ordinateur et résolvons votre problème</p>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2>Avantages du Dépannage à Distance</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">⚡</span>
              <h4>Rapidité</h4>
              <p>Intervention immédiate sans déplacement</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">💰</span>
              <h4>Économique</h4>
              <p>Pas de frais de déplacement</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">🕒</span>
              <h4>Flexibilité</h4>
              <p>Horaires adaptés à vos disponibilités</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">🔒</span>
              <h4>Sécurité</h4>
              <p>Connexion sécurisée et contrôle total</p>
            </div>
          </div>
        </div>

        <div className="security-note">
          <div className="note-content">
            <span className="note-icon">ℹ️</span>
            <p>Pour arrêter le contrôle à distance à tout moment, il vous suffit de fermer la fenêtre TeamViewer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Distance;
