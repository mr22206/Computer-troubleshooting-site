import '../../styles/components/Welcome.css';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleRemoteSupport = () => {
    navigate('/Distance');
  };

  const handleHomeVisit = () => {
    navigate('/Domicile');
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section');
    const headerHeight = document.querySelector('.main-header').offsetHeight;
    
    window.scrollTo({
      top: servicesSection.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Dépannage Informatique 06</h1>
          <p className="tagline">Expert en solutions informatiques à votre service</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={handleRemoteSupport}>
              Dépannage à Distance
            </button>
            <button className="btn-secondary" onClick={handleHomeVisit}>
              Intervention à Domicile
            </button>
          </div>
          <div className="emergency-contact">
            <span className="phone-icon">📞</span>
            <div className="contact-details">
              <p className="available-now">Disponible 7j/7</p>
              <a href="tel:0661388374" className="phone-number">06 61 38 83 74</a>
            </div>
          </div>
        </div>
        
        <div className="service-highlights">
          <div className="highlight-card">
            <span className="highlight-icon">⚡</span>
            <h3>Intervention Rapide</h3>
            <p>Diagnostic et dépannage express</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">🔒</span>
            <h3>Service Sécurisé</h3>
            <p>Protection de vos données garantie</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-icon">💰</span>
            <h3>Tarifs Transparents</h3>
            <p>Devis gratuit sans engagement</p>
          </div>
        </div>
      </div>
      <div className="discover-wrapper" onClick={scrollToServices}>
        <div className="discover-pulse">
          <span className="pulse-dot"></span>
          <span className="pulse-ring"></span>
        </div>
        <p className="discover-text">Scrollez pour découvrir</p>
      </div>
    </section>
  );
}

export default Welcome;