import React, { useState } from 'react';

export default function Activites() {
  const [selectedRegion, setSelectedRegion] = useState('Ngoundiane');
  const [registrationStatus, setRegistrationStatus] = useState({});

  const actions = [
    {
      title: "Caravane Citoyenne d'Éducation Populaire",
      category: "Civisme & Citoyenneté",
      impact: "35 localités - 3 500 livrets civiques",
      description: "Notre caravane parcourt les départements du Sénégal pour animer des ateliers d'éducation populaire. Nous formons les jeunes sur le fonctionnement des institutions publiques, le suivi budgétaire local et leurs droits constitutionnels afin de forger une citoyenneté responsable.",
      icon: "fas fa-bus-alt",
      color: "var(--color-secondary)"
    },
    {
      title: "FabLabs Communautaires & Souveraineté Tech",
      category: "Numérique & Innovation",
      impact: "3 centres pilotes - 420 jeunes formés",
      description: "Pour briser la dépendance technologique, nous implantons des centres de formation au codage, à l'administration système Linux et à l'électronique open-source. Ces espaces permettent aux jeunes de développer des applications répondant à des problématiques locales (irrigation, gestion des déchets, etc.).",
      icon: "fas fa-laptop-code",
      color: "var(--color-accent)"
    },
    {
      title: "Chantiers Agricoles de Solidarité",
      category: "Souveraineté Alimentaire",
      impact: "12 coopératives - 8 hectares cultivés",
      description: "Nous soutenons activement les jeunes agriculteurs à travers le Sénégal en organisant des chantiers communautaires de maraîchage. Le but est de valoriser la production locale et de sensibiliser la population à la souveraineté alimentaire en consommant sénégalais.",
      icon: "fas fa-tractor",
      color: "var(--color-gold)"
    }
  ];

  const regionalEvents = {
    Ngoundiane: {
      coordinator: "Fatou Kiné Diagne",
      eventDate: "Samedi 30 Mai 2026 - 15h00",
      eventTitle: "Atelier Agora : Co-construction des propositions d'éducation",
      eventPlace: "Foyer des Jeunes de Ngoundiane, Région de Thiès",
      contact: "ngoundiane@mjcs.sn"
    },
    Thiès: {
      coordinator: "Babacar Ndiaye",
      eventDate: "Dimanche 7 Juin 2026 - 10h00",
      eventTitle: "Conférence Souveraineté Économique et Monétaire",
      eventPlace: "Chambre des Métiers de Thiès",
      contact: "thies@mjcs.sn"
    },
    'Saint-Louis': {
      coordinator: "Cheikh Tidiane Sow",
      eventDate: "Samedi 13 Juin 2026 - 16h00",
      eventTitle: "Déploiement Caravane Civique Saint-Louis Nord",
      eventPlace: "Foyer des Jeunes de Sor, Saint-Louis",
      contact: "saintlouis@mjcs.sn"
    },
    Kaolack: {
      coordinator: "Aïssatou Diallo",
      eventDate: "Samedi 20 Juin 2026 - 09h00",
      eventTitle: "Chantier d'aide agricole et de salubrité publique",
      eventPlace: "Commune de Kahone, Kaolack",
      contact: "kaolack@mjcs.sn"
    },
    Ziguinchor: {
      coordinator: "Malick Sonko",
      eventDate: "Samedi 27 Juin 2026 - 15h00",
      eventTitle: "Formation Leadership Civique et Entrepreneuriat",
      eventPlace: "Foyer des Jeunes de Ziguinchor",
      contact: "ziguinchor@mjcs.sn"
    }
  };

  const handleRegisterEvent = (region) => {
    setRegistrationStatus(prev => ({ ...prev, [region]: 'success' }));
    setTimeout(() => {
      // Clear status after 4 seconds
      setRegistrationStatus(prev => ({ ...prev, [region]: '' }));
    }, 4000);
  };

  return (
    <div>
      {/* Title Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #050B1E 100%)', padding: '100px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 133, 63, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge" style={{ marginBottom: '16px' }}>
            <span>NOTRE ACTION</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginBottom: '20px', fontWeight: '900' }}>Nos Activités</h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted-light)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Des actions civiques concrètes sur l'ensemble du territoire pour prouver que le changement commence par l'engagement citoyen local.
          </p>
        </div>
      </section>

      {/* Actions de Terrain Section (Light) */}
      <section className="section-light" style={{ padding: '120px 24px' }}>
        <div className="container">
          <div className="section-header reveal reveal-visible">
            <span className="category-badge" style={{ backgroundColor: 'rgba(11, 27, 79, 0.06)', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Nos Actions de Terrain
            </span>
            <h2 style={{ color: 'var(--color-primary)', fontWeight: '800' }}>L'impact de nos projets</h2>
            <p>Découvrez nos chantiers communautaires et nos programmes de sensibilisation.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {actions.map((action, index) => (
              <div key={index} className="light-card reveal" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '32px', alignItems: 'center', borderLeft: `6px solid ${action.color}`, padding: '40px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '16px', backgroundColor: 'rgba(11, 27, 79, 0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: action.color, fontSize: '32px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
                  <i className={action.icon}></i>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                    <span className="category-badge" style={{ backgroundColor: 'rgba(11, 27, 79, 0.05)', color: 'var(--color-primary)', padding: '5px 12px', fontSize: '11px', fontWeight: '700' }}>{action.category}</span>
                    <span style={{ fontSize: '13px', fontWeight: '700', backgroundColor: 'rgba(0, 133, 63, 0.08)', padding: '6px 14px', borderRadius: 'var(--border-radius-pill)', color: 'var(--color-accent)' }}>{action.impact}</span>
                  </div>
                  <h3 style={{ fontSize: '23px', color: 'var(--color-primary)', marginBottom: '14px', fontFamily: 'var(--font-title)', fontWeight: '800' }}>{action.title}</h3>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '15px', lineHeight: '1.7' }}>{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Agenda Section (Dark) */}
      <section className="section-dark" style={{ padding: '120px 24px' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="category-badge" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Agenda Régional
            </span>
            <h2 style={{ fontWeight: '800' }}>Prochains Événements Locaux</h2>
            <p>Sélectionnez votre région pour découvrir les ateliers du MJCS près de chez vous et participer aux débats.</p>
          </div>

          <div className="grid-2">
            
            {/* Left side: Selector */}
            <div className="reveal">
              <h3 style={{ fontSize: '22px', color: '#FFFFFF', marginBottom: '24px', fontFamily: 'var(--font-title)', fontWeight: '700' }}>Sélectionnez une section régionale</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.keys(regionalEvents).map(region => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    style={{
                      padding: '18px 28px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      backgroundColor: selectedRegion === region ? 'rgba(126, 151, 235, 0.12)' : 'rgba(11, 27, 79, 0.2)',
                      color: selectedRegion === region ? '#FFFFFF' : 'var(--color-text-muted-light)',
                      fontFamily: 'var(--font-title)',
                      fontWeight: '700',
                      fontSize: '15px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'var(--transition-smooth)',
                      boxShadow: selectedRegion === region ? 'var(--glow-secondary)' : 'none'
                    }}
                  >
                    <span>Section {region}</span>
                    <i className="fas fa-arrow-right" style={{ fontSize: '13px', opacity: selectedRegion === region ? 1 : 0.4, transform: selectedRegion === region ? 'translateX(0)' : 'translateX(-4px)', transition: 'var(--transition-fast)' }}></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: Event details */}
            <div className="reveal">
              <div className="glass-card" style={{ borderLeft: '5px solid var(--color-secondary)', padding: '44px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'var(--shadow-dark-card), var(--glow-secondary)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
                    <span className="category-badge" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', color: 'var(--color-secondary)' }}>Section {selectedRegion}</span>
                    <span style={{ fontSize: '12px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: 'var(--border-radius-pill)', color: 'var(--color-text-muted-light)', fontWeight: '600' }}>
                      <i className="fas fa-user-tie" style={{ marginRight: '6px', color: 'var(--color-secondary)' }}></i> Coordo : {regionalEvents[selectedRegion].coordinator}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '28px', fontFamily: 'var(--font-title)', lineHeight: '1.3', fontWeight: '800' }}>
                    {regionalEvents[selectedRegion].eventTitle}
                  </h3>

                  <div className="divider-glow" style={{ margin: '20px 0' }}></div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                        <i className="far fa-calendar-alt"></i>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted-light)', letterSpacing: '0.5px' }}>Date et Heure</strong>
                        <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{regionalEvents[selectedRegion].eventDate}</span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted-light)', letterSpacing: '0.5px' }}>Lieu de rencontre</strong>
                        <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{regionalEvents[selectedRegion].eventPlace}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                        <i className="far fa-envelope"></i>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-text-muted-light)', letterSpacing: '0.5px' }}>Contact local</strong>
                        <span style={{ color: '#FFFFFF', fontWeight: '500' }}>{regionalEvents[selectedRegion].contact}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {registrationStatus[selectedRegion] === 'success' ? (
                    <div style={{ backgroundColor: 'rgba(0, 133, 63, 0.1)', border: '1px solid rgba(0, 133, 63, 0.3)', color: '#4ADE80', padding: '16px', borderRadius: '8px', fontSize: '14px', textAlign: 'center', fontWeight: '600' }}>
                      <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i> Inscription validée ! Un SMS de rappel vous sera envoyé.
                    </div>
                  ) : (
                    <button
                      onClick={() => handleRegisterEvent(selectedRegion)}
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      <i className="far fa-check-circle"></i> S'inscrire à cet atelier gratuit
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
