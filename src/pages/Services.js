import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/pages/Services.css';

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      id: "depannage-distance",
      title: "Dépannage à Distance",
      description: "Intervention rapide sur votre ordinateur via TeamViewer",
      icon: "🖥️",
      color: "#4834d4",
      details: [
        "Prise en main à distance sécurisée",
        "Diagnostic complet de votre système",
        "Résolution des problèmes Windows/Mac",
        "Installation de logiciels",
        "Nettoyage et optimisation"
      ]
    },
    {
      id: "intervention-domicile",
      title: "Intervention à Domicile",
      description: "Dépannage et maintenance sur site dans le 06",
      icon: "🏠",
      color: "#00d2d3",
      details: [
        "Déplacement à votre domicile",
        "Diagnostic matériel et logiciel",
        "Réparation sur place",
        "Installation de périphériques",
        "Configuration réseau"
      ]
    },
    {
      id: "formation",
      title: "Formation",
      description: "Initiations et perfectionnement en informatique",
      icon: "📚",
      color: "#0097e6",
      details: [
        "Formation personnalisée",
        "Accompagnement pas à pas",
        "Support pédagogique",
        "Exercices pratiques",
        "Suivi post-formation"
      ]
    },
    {
      id: "securite",
      title: "Sécurité",
      description: "Protection antivirus, sauvegardes, sécurisation de vos données et appareils.",
      icon: "🔒",
      color: "#44bd32",
      details: [
        "Installation d'antivirus",
        "Configuration des sauvegardes",
        "Sécurisation des comptes",
        "Protection des données personnelles",
        "Mise à jour des systèmes de sécurité"
      ]
    },
    {
      id: "optimisation",
      title: "Optimisation",
      description: "Amélioration des performances de vos appareils, nettoyage et mise à jour.",
      icon: "⚡",
      color: "#f0932b",
      details: [
        "Analyse des performances",
        "Nettoyage système",
        "Mise à jour des logiciels",
        "Optimisation du démarrage",
        "Gestion de l'espace disque"
      ]
    },
    {
      id: "creation-sites",
      title: "Création de Sites Web",
      description: "Sites vitrines, e-commerce et applications web sur mesure pour votre activité",
      icon: "🌐",
      color: "#2d98da",
      details: [
        "Sites vitrines professionnels",
        "Solutions e-commerce",
        "Applications web sur mesure",
        "Design responsive",
        "Maintenance et mises à jour"
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="section-header">
        <h1>Nos Services</h1>
        <p className="section-subtitle">Solutions complètes pour tous vos besoins informatiques</p>
      </div>

      <div className="services-detailed">
        {services.map((service) => (
          <div 
            key={service.id} 
            id={service.id} 
            className="service-block"
          >
            <div className="service-header">
              <span className="service-icon">{service.icon}</span>
              <h2>{service.title}</h2>
            </div>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <h3>Ce service inclut :</h3>
              <ul>
                {service.details?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
