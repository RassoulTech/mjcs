import React from 'react';
import memberAmadou from '../assets/member_amadou.png';
import memberMariama from '../assets/member_mariama.png';
import memberOusmane from '../assets/member_ousmane.png';
import memberAwa from '../assets/member_awa.png';

export default function Histoire() {
  const timelineEvents = [
    {
      date: "Janvier 2024",
      title: "Le Sursaut (Fondation)",
      description: "Naissance d'un collectif informel de diplômés, auto-entrepreneurs et jeunes citoyens à Ngoundiane, dans la région de Thiès. Constatant l'exclusion de la jeunesse des instances décisionnelles, ils rédigent et publient l'Appel de Ngoundiane.",
      icon: "fas fa-feather-alt"
    },
    {
      date: "Août 2024",
      title: "L'Ancrage Territorial",
      description: "Lancement des premières Caravanes Civiques. Des dizaines d'ateliers d'éducation populaire sont organisés sur le terrain à Thiès, Kaolack et Saint-Louis pour former les jeunes à la citoyenneté active.",
      icon: "fas fa-map-marked-alt"
    },
    {
      date: "Mars 2025",
      title: "La Structuration Nationale",
      description: "Organisation du premier Congrès National du MJCS. Structuration des comités locaux dans les 14 régions du pays et au sein de la diaspora. Adoption officielle de la charte graphique et du logo (cerveau de la conscience citoyenne).",
      icon: "fas fa-landmark"
    },
    {
      date: "Mai 2026",
      title: "L'Agora Citoyenne & Le Numérique",
      description: "Lancement de la plateforme interactive pour la co-construction du programme politique. Le mouvement atteint le cap des 12 000 membres engagés pour un Sénégal souverain et indépendant.",
      icon: "fas fa-laptop"
    }
  ];

  const bureauMembres = [
    {
      initials: "AD",
      name: "Amadou Diallo",
      role: "Président, Coordonnateur National",
      bio: "Ancien leader étudiant, diplômé en Sciences Politiques. Il consacre son action à la promotion de l'éducation populaire et de la formation civique des jeunes.",
      photo: memberAmadou
    },
    {
      initials: "MS",
      name: "Mariama Sarr",
      role: "Resp. Souveraineté Numérique",
      bio: "Ingénieure en cybersécurité et activiste du Libre. Elle pilote le développement des infrastructures numériques du mouvement et milite pour l'indépendance technologique.",
      photo: memberMariama
    },
    {
      initials: "OD",
      name: "Dr. Ousmane Diagne",
      role: "Resp. Économie & Territoires",
      bio: "Économiste spécialisé dans le développement rural. Il supervise les propositions pour l'agriculture locale et l'insertion des jeunes diplômés dans les régions.",
      photo: memberOusmane
    },
    {
      initials: "AN",
      name: "Awa Ndiaye",
      role: "Secrétaire Générale",
      bio: "Militante associative de terrain. Elle coordonne le déploiement des Caravanes Civiques régionales et gère les relations avec les comités de quartier.",
      photo: memberAwa
    }
  ];

  const president = bureauMembres[0];
  const otherMembers = bureauMembres.slice(1);

  return (
    <div>
      {/* Title Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #050B1E 100%)', padding: '100px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', position: 'relative' }}>
        {/* Decorative background blur ring */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(126, 151, 235, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge" style={{ marginBottom: '16px' }}>
            <span>NOTRE IDENTITÉ</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginBottom: '20px', fontWeight: '900' }}>Notre Histoire</h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted-light)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Découvrez la genèse d'un sursaut citoyen né d'une volonté collective de replacer la jeunesse consciente au cœur des destins du Sénégal.
          </p>
        </div>
      </section>

      {/* Timeline Section (Light) */}
      <section className="section-light" style={{ padding: '120px 24px' }}>
        <div className="container">
          <div className="section-header reveal reveal-visible">
            <span className="category-badge" style={{ backgroundColor: 'rgba(11, 27, 79, 0.06)', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Les Étapes Clés
            </span>
            <h2 style={{ color: 'var(--color-primary)', fontWeight: '800' }}>L'évolution du mouvement</h2>
            <p>De l'Appel de Ngoundiane au déploiement de l'Agora nationale.</p>
          </div>

          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} reveal`}>
                <div className="timeline-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(11, 27, 79, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '16px' }}>
                      <i className={event.icon}></i>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-secondary)' }}>{event.date}</span>
                  </div>
                  <h3 style={{ fontSize: '21px', color: 'var(--color-primary)', marginBottom: '10px', fontFamily: 'var(--font-title)', fontWeight: '700' }}>{event.title}</h3>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '15px', lineHeight: '1.6' }}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bureau National Section (Dark) */}
      <section className="section-dark" style={{ padding: '120px 24px' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="category-badge" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Gouvernance
            </span>
            <h2 style={{ fontWeight: '800' }}>Le Bureau National</h2>
            <p>Une équipe collégiale, bénévole et engagée, assurant la direction et le déploiement opérationnel du MJCS.</p>
          </div>

          {/* President Card at the top (centered) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '64px' }}>
            <div className="reveal reveal-right" style={{ width: '100%', maxWidth: '680px', transitionDelay: '0.2s' }}>
              <div className="glass-card float-president-card" style={{ 
                borderLeft: '5px solid var(--color-accent)', 
                position: 'relative',
                boxShadow: '0 20px 45px rgba(0, 133, 63, 0.08), var(--shadow-dark-card)',
                height: '100%',
                padding: '44px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  background: 'linear-gradient(135deg, var(--color-accent), #00a850)',
                  color: '#FFFFFF',
                  padding: '8px 20px',
                  fontSize: '11px',
                  fontWeight: '700',
                  borderBottomLeftRadius: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  boxShadow: '0 4px 10px rgba(0, 133, 63, 0.2)'
                }}>
                  Coordonnateur National
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  {president.photo ? (
                    <img 
                      src={president.photo} 
                      alt={president.name} 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                        border: '3px solid #FFFFFF',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), var(--glow-secondary)'
                      }} 
                    />
                  ) : (
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontSize: '28px', fontWeight: '800', fontFamily: 'var(--font-title)', border: '3px solid #FFFFFF', boxShadow: 'var(--glow-secondary)' }}>
                      {president.initials}
                    </div>
                  )}
                  <div>
                    <h3 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '4px' }}>{president.name}</h3>
                    <span style={{ fontSize: '14px', color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{president.role}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--color-text-muted-light)', fontSize: '15px', lineHeight: '1.7' }}>
                  {president.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Other Members below in a Marquee scrolling banner */}
          <div className="reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="marquee-container">
              <div className="marquee-content">
                {[...otherMembers, ...otherMembers, ...otherMembers, ...otherMembers].map((membre, index) => {
                  // Stagger float animation delays for a beautiful wavy effect
                  const floatDelay = (index % otherMembers.length) * 1.5;
                  
                  return (
                    <div 
                      key={index} 
                      style={{ width: '380px', paddingRight: '32px', flexShrink: 0 }}
                    >
                      <div 
                        className="glass-card float-bureau-card" 
                        style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          height: '100%',
                          animationDelay: `${floatDelay}s`,
                          padding: '36px',
                          borderTop: index % 2 === 0 ? '3px solid var(--color-secondary)' : '3px solid var(--color-gold)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                          {membre.photo ? (
                            <img 
                              src={membre.photo} 
                              alt={membre.name} 
                              style={{ 
                                width: '64px', 
                                height: '64px', 
                                borderRadius: '50%', 
                                objectFit: 'cover', 
                                border: '2px solid #FFFFFF',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.25)'
                              }} 
                            />
                          ) : (
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: index % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontSize: '22px', fontWeight: '800', fontFamily: 'var(--font-title)', border: '2px solid #FFFFFF' }}>
                              {membre.initials}
                            </div>
                          )}
                          <div>
                            <h3 style={{ fontSize: '19px', color: '#FFFFFF', fontWeight: '700', marginBottom: '4px' }}>{membre.name}</h3>
                            <span style={{ fontSize: '13px', color: 'var(--color-secondary)', fontWeight: '600' }}>{membre.role}</span>
                          </div>
                        </div>
                        <p style={{ color: 'var(--color-text-muted-light)', fontSize: '14px', lineHeight: '1.6', flexGrow: 1 }}>
                          {membre.bio}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
