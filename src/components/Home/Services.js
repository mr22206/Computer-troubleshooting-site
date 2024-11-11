import '../../styles/components/Services.css';

function Services() {
  const services = [
    {
      title: "Assistance Personnalisée",
      description: "Accompagnement sur-mesure pour vos démarches numériques : impôts, carte grise, compte en ligne...",
      icon: "🎯",
      color: "#4834d4"
    },
    {
      title: "Dépannage Général",
      description: "Résolution de problèmes Windows, déblocage FRP, maintenance matérielle et logicielle.",
      icon: "🔧",
      color: "#00d2d3"
    },
    {
      title: "Formation",
      description: "Initiations et perfectionnement en informatique, adaptés à votre niveau.",
      icon: "📚",
      color: "#0097e6"
    },
    {
      title: "Sécurité",
      description: "Protection antivirus, sauvegardes, sécurisation de vos données et appareils.",
      icon: "🔒",
      color: "#44bd32"
    },
    {
      title: "Optimisation",
      description: "Amélioration des performances de vos appareils, nettoyage et mise à jour.",
      icon: "⚡",
      color: "#f0932b"
    },
    {
      title: "Support à Distance",
      description: "Intervention rapide via TeamViewer, disponible 7j/7 selon vos besoins.",
      icon: "🌐",
      color: "#833471"
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
              <button className="learn-more">En savoir plus</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
