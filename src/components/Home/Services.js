import '../../styles/components/Home/Services.css';
import { Link } from 'react-router-dom';


function Services() {
  const services = [
    {
      id: "depannage-distance",
      title: "Dépannage à Distance",
      description: "Intervention rapide sur votre ordinateur via TeamViewer",
      icon: "🖥️",
      color: "#4834d4"
    },
    {
      id: "intervention-domicile",
      title: "Intervention à Domicile",
      description: "Dépannage et maintenance sur site dans le 06",
      icon: "🏠",
      color: "#00d2d3"
    },
    {
      id: "formation",
      title: "Formation",
      description: "Initiations et perfectionnement en informatique, adaptés à votre niveau.",
      icon: "📚",
      color: "#0097e6"
    },
    {
      id: "securite",
      title: "Sécurité",
      description: "Protection antivirus, sauvegardes, sécurisation de vos données et appareils.",
      icon: "🔒",
      color: "#44bd32"
    },
    {
      id: "optimisation",
      title: "Optimisation",
      description: "Amélioration des performances de vos appareils, nettoyage et mise à jour.",
      icon: "⚡",
      color: "#f0932b"
    },
    {
      id: "support-distance",
      title: "Support à Distance",
      description: "Intervention rapide via TeamViewer, disponible 7j/7 selon vos besoins.",
      icon: "🌐",
      color: "#833471"
    },
    {
      id: "creation-sites",
      title: "Création de Sites Web",
      description: "Sites vitrines, e-commerce et applications web sur mesure pour votre activité",
      icon: "🌐",
      color: "#2d98da"
    }
  ];

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Nos Services</h2>
        <p className="section-subtitle">Solutions complètes pour tous vos besoins informatiques</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{'--card-color': service.color}}>
            <div className="service-icon-wrapper">
              <span className="service-icon">{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-footer">
              <Link to={`/services#${service.id}`} className="learn-more">En savoir plus</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
