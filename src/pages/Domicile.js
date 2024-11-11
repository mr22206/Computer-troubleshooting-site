import '../styles/pages/Domicile.css';

function Domicile() {
  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Intervention à Domicile</h1>
        <p className="section-subtitle">Un service personnalisé directement chez vous</p>
      </div>

      <div className="domicile-content">
        <div className="service-overview">
          <div className="overview-card">
            <div className="card-header">
              <span className="service-icon">🏠</span>
              <h2>Comment ça se passe ?</h2>
            </div>
            <p>
              Je me déplace à votre domicile, effectue un diagnostic complet de votre situation,
              vous présente les solutions adaptées et commence l'intervention après votre accord.
            </p>
          </div>
        </div>

        <div className="instructions-grid">
          <div className="instruction-card">
            <span className="instruction-icon">📞</span>
            <h3>Prise de Contact</h3>
            <p>Contactez-moi pour décrire votre problème :</p>
            <div className="contact-buttons">
              <a href="tel:0661388374" className="contact-btn phone">
                <span>06 61 38 83 74</span>
              </a>
              <a href="mailto:techinfotuto@gmail.com" className="contact-btn email">
                <span>techinfotuto@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="instruction-card">
            <span className="instruction-icon">📝</span>
            <h3>Diagnostic Initial</h3>
            <p>Description détaillée de votre problème pour préparer l'intervention avec le matériel adapté</p>
          </div>

          <div className="instruction-card">
            <span className="instruction-icon">📅</span>
            <h3>Rendez-vous</h3>
            <p>Planification d'une intervention à l'horaire qui vous convient le mieux</p>
          </div>
        </div>

        <div className="important-notes">
          <h3>Points Importants</h3>
          <div className="notes-grid">
            <div className="note-card">
              <span className="note-icon">⚡</span>
              <div className="note-content">
                <h4>Réactivité</h4>
                <p>Intervention rapide selon vos disponibilités</p>
              </div>
            </div>

            <div className="note-card">
              <span className="note-icon">💼</span>
              <div className="note-content">
                <h4>Matériel</h4>
                <p>J'apporte tout le matériel nécessaire pour l'intervention</p>
              </div>
            </div>

            <div className="note-card">
              <span className="note-icon">💡</span>
              <div className="note-content">
                <h4>Conseil</h4>
                <p>Vérifiez si une intervention à distance n'est pas plus adaptée</p>
              </div>
            </div>
          </div>
        </div>

        <div className="zone-intervention">
          <div className="zone-header">
            <span className="zone-icon">🗺️</span>
            <h3>Zone d'Intervention</h3>
          </div>
          <p>Intervention dans tout le département des Alpes-Maritimes (06)</p>
        </div>
      </div>
    </div>
  );
}

export default Domicile;
