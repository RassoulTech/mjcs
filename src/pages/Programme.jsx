import React, { useState, useEffect } from 'react';

export default function Programme() {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [votes, setVotes] = useState({
    fablabs: 1452,
    livrets: 894,
    bourses: 2105,
    congres: 642
  });

  useEffect(() => {
    const savedVote = localStorage.getItem('mjcs_agora_vote');
    if (savedVote) {
      setHasVoted(true);
      setSelectedOption(savedVote);
    }
  }, []);

  const options = [
    { id: 'fablabs', label: "Création de 10 nouveaux FabLabs régionaux pour la formation au numérique.", key: 'fablabs' },
    { id: 'livrets', label: "Impression de 2 000 livrets civiques pour équiper les Caravanes d'éducation.", key: 'livrets' },
    { id: 'bourses', label: "Bourses d'incubation pour 50 jeunes entrepreneurs et coopératives agricoles.", key: 'bourses' },
    { id: 'congres', label: "Organisation d'un Congrès mondial des Jeunes Citoyens de la Diaspora.", key: 'congres' }
  ];

  const handleVoteSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return;

    // Simulate database update
    setVotes(prev => ({
      ...prev,
      [selectedOption]: prev[selectedOption] + 1
    }));
    setHasVoted(true);
    localStorage.setItem('mjcs_agora_vote', selectedOption);
  };

  const getTotalVotes = () => {
    return Object.values(votes).reduce((sum, v) => sum + v, 0);
  };

  const getPercentage = (key) => {
    const total = getTotalVotes();
    if (total === 0) return 0;
    return Math.round((votes[key] / total) * 100);
  };

  return (
    <div>
      {/* Title Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #050B1E 100%)', padding: '100px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(126, 151, 235, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge" style={{ marginBottom: '16px' }}>
            <span>NOTRE PROJET</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginBottom: '20px', fontWeight: '900' }}>Programme & Agora</h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted-light)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Découvrez nos axes programmatiques pour refonder la souveraineté du Sénégal et participez aux votes consultatifs de notre Agora.
          </p>
        </div>
      </section>

      {/* Piliers Détaillés Section (Light) */}
      <section className="section-light" style={{ padding: '120px 24px' }}>
        <div className="container">
          <div className="section-header reveal reveal-visible">
            <span className="category-badge" style={{ backgroundColor: 'rgba(11, 27, 79, 0.06)', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Manifeste du MJCS
            </span>
            <h2 style={{ color: 'var(--color-primary)', fontWeight: '800' }}>Nos propositions phares</h2>
            <p>Notre programme politique est fondé sur l'autonomie, l'instruction populaire et la co-décision territoriale.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Pilier 1 */}
            <div className="light-card reveal" style={{ padding: '44px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(11, 27, 79, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '22px' }}>
                  <i className="fas fa-book-reader"></i>
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--color-primary)', fontFamily: 'var(--font-title)', fontWeight: '800' }}>
                  P1. Éducation Populaire & Leadership Civique
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '24px', fontSize: '16px', lineHeight: '1.7' }}>
                L'indépendance de la pensée est le préalable à toute souveraineté nationale. Nous mettons en œuvre des dispositifs éducatifs pour former la conscience des citoyens.
              </p>
              <div className="divider-glow" style={{ margin: '20px 0', background: 'linear-gradient(90deg, #E2E8F0, transparent)' }}></div>
              <ul className="premium-list" style={{ fontSize: '15px' }}>
                <li><strong style={{ color: 'var(--color-primary)' }}>Académies Citoyennes :</strong> Création de cours ouverts de droit civique, de gestion budgétaire et d'économie populaire.</li>
                <li><strong style={{ color: 'var(--color-primary)' }}>Bibliothèques Populaires :</strong> Lancement d'espaces de lecture et de débats gérés par les sections locales dans les quartiers.</li>
                <li><strong style={{ color: 'var(--color-primary)' }}>Bourses Civiques :</strong> Financement participatif par la diaspora pour soutenir les étudiants méritants en situation de précarité.</li>
              </ul>
            </div>

            {/* Pilier 2 */}
            <div className="light-card reveal" style={{ padding: '44px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)', animationDelay: '0.1s' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(0, 133, 63, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: '22px' }}>
                  <i className="fas fa-wallet"></i>
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--color-primary)', fontFamily: 'var(--font-title)', fontWeight: '800' }}>
                  P2. Souveraineté Économique & Numérique
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '24px', fontSize: '16px', lineHeight: '1.7' }}>
                Nous devons relocaliser notre production, protéger nos ressources et notre écosystème numérique pour offrir des opportunités réelles d'emplois locaux.
              </p>
              <div className="divider-glow" style={{ margin: '20px 0', background: 'linear-gradient(90deg, #E2E8F0, transparent)' }}></div>
              <ul className="premium-list" style={{ fontSize: '15px' }}>
                <li><strong style={{ color: 'var(--color-primary)' }}>Label "Consommer Sénégalais" :</strong> Valorisation commerciale des productions issues de l'agriculture et de l'artisanat locaux.</li>
                <li><strong style={{ color: 'var(--color-primary)' }}>Incubateurs Ruraux :</strong> Financement initial pour l'installation de coopératives agricoles auto-gérées par les jeunes.</li>
                <li><strong style={{ color: 'var(--color-primary)' }}>Indépendance des Données :</strong> Militantisme pour l'hébergement local des données administratives et l'adoption de technologies open source.</li>
              </ul>
            </div>

            {/* Pilier 3 */}
            <div className="light-card reveal" style={{ padding: '44px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)', animationDelay: '0.2s' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(126, 151, 235, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', fontSize: '22px' }}>
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--color-primary)', fontFamily: 'var(--font-title)', fontWeight: '800' }}>
                  P3. Démocratie Participative Locale
                </h3>
              </div>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '24px', fontSize: '16px', lineHeight: '1.7' }}>
                Nous voulons rompre avec la centralisation excessive des décisions politiques. Notre objectif est de donner le pouvoir de contrôle et d'initiative aux sections territoriales.
              </p>
              <div className="divider-glow" style={{ margin: '20px 0', background: 'linear-gradient(90deg, #E2E8F0, transparent)' }}></div>
              <ul className="premium-list" style={{ fontSize: '15px' }}>
                <li><strong style={{ color: 'var(--color-primary)' }}>Co-construction des réformes :</strong> Consultation obligatoire et vote des membres sur chaque axe programmatique majeur.</li>
                <li><strong style={{ color: 'var(--color-primary)' }}>Budgets Participatifs Locaux :</strong> Gestion d'une enveloppe de développement allouée et décidée par les comités de quartier.</li>
                <li><strong style={{ color: 'var(--color-primary)' }}>Agora Citoyenne :</strong> Notre outil numérique de consultation directe pour débattre et acter nos positions officielles.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Agora Section (Dark) */}
      <section className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', padding: '120px 24px' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="category-badge" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', color: 'var(--color-secondary)', marginBottom: '16px' }}>
              L'Agora Citoyenne
            </span>
            <h2 style={{ fontWeight: '800' }}>Espace de Vote & Débats</h2>
            <p>Le MJCS fonctionne selon le principe démocratique. Donnez votre avis sur le projet de développement civique prioritaire en 2026.</p>
          </div>

          <div className="grid-2">
            
            {/* Informative Text */}
            <div className="reveal">
              <h3 style={{ fontSize: '28px', color: '#FFFFFF', marginBottom: '24px', fontFamily: 'var(--font-title)', fontWeight: '800', lineHeight: '1.3' }}>
                Votre voix construit notre action politique.
              </h3>
              <p style={{ color: 'var(--color-text-muted-light)', marginBottom: '20px', fontSize: '16px', lineHeight: '1.7' }}>
                À l'inverse des mouvements traditionnels où les leaders décident seuls dans des bureaux à Dakar, le MJCS soumet ses investissements civiques à la consultation populaire.
              </p>
              <p style={{ color: 'var(--color-text-muted-light)', marginBottom: '24px', fontSize: '16px', lineHeight: '1.7' }}>
                Chaque trimestre, un budget d'action est alloué au projet plébiscité par les membres. Votez pour guider l'affectation de nos ressources bénévoles.
              </p>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <i className="fas fa-info-circle" style={{ color: 'var(--color-secondary)', fontSize: '20px' }}></i>
                <span style={{ fontSize: '14px', color: 'var(--color-text-muted-light)' }}>
                  Pour voter, vous devez être membre actif du MJCS. Le système utilise un cookie local anonymisé pour éviter les votes doubles.
                </span>
              </div>
            </div>

            {/* Voting Form / Results Box */}
            <div className="reveal">
              <div className="glass-card" style={{ borderTop: '4px solid var(--color-accent)', padding: '40px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), var(--glow-accent)' }}>
                
                {!hasVoted ? (
                  <>
                    <h3 style={{ fontSize: '22px', color: '#FFFFFF', marginBottom: '8px', fontFamily: 'var(--font-title)', fontWeight: '700' }}>Vote Consultatif</h3>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-muted-light)', display: 'block', marginBottom: '24px' }}>
                      Session du 2ème Trimestre 2026
                    </span>

                    <form onSubmit={handleVoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {options.map(option => (
                        <div 
                          key={option.id}
                          className={`vote-option-card ${selectedOption === option.id ? 'selected' : ''}`}
                          onClick={() => setSelectedOption(option.id)}
                        >
                          <input
                            type="radio"
                            name="agora_option"
                            value={option.id}
                            checked={selectedOption === option.id}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            onClick={(e) => e.stopPropagation()} // Prevent double trigger
                          />
                          <span style={{ color: selectedOption === option.id ? '#FFFFFF' : 'var(--color-text-muted-light)', fontSize: '14px', fontWeight: '500', lineHeight: '1.4' }}>
                            {option.label}
                          </span>
                        </div>
                      ))}

                      <button 
                        type="submit" 
                        className="btn btn-accent" 
                        disabled={!selectedOption}
                        style={{ width: '100%', marginTop: '12px' }}
                      >
                        <i className="fas fa-paper-plane"></i> Enregistrer mon vote citoyen
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(0, 133, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}>
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h3 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: '700' }}>Merci pour votre participation !</h3>
                        <span style={{ fontSize: '13px', color: 'var(--color-text-muted-light)' }}>Résultats en temps réel de l'Agora</span>
                      </div>
                    </div>

                    <div className="divider-glow" style={{ margin: '16px 0' }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                      {options.map(option => (
                        <div key={option.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', alignItems: 'flex-start' }}>
                            <span style={{ color: selectedOption === option.id ? '#FFFFFF' : 'var(--color-text-muted-light)', fontWeight: selectedOption === option.id ? '600' : '400', maxWidth: '80%', lineHeight: '1.4' }}>
                              {option.label} {selectedOption === option.id && <span style={{ color: 'var(--color-accent)', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', marginLeft: '6px' }}>(Votre Choix)</span>}
                            </span>
                            <span style={{ color: selectedOption === option.id ? 'var(--color-accent)' : 'var(--color-secondary)', fontWeight: '700' }}>{getPercentage(option.key)}%</span>
                          </div>
                          
                          <div className="progress-bar-container">
                            <div 
                              className="progress-bar-fill" 
                              style={{ 
                                width: `${getPercentage(option.key)}%`, 
                                background: selectedOption === option.id 
                                  ? 'linear-gradient(90deg, var(--color-accent), #00ba58)' 
                                  : 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))' 
                              }}
                            ></div>
                          </div>
                          <span style={{ fontSize: '12px', color: 'var(--color-text-muted-light)' }}>{votes[option.key].toLocaleString()} votes exprimés</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="btn btn-secondary" 
                      onClick={() => {
                        setHasVoted(false);
                        setSelectedOption(null);
                        localStorage.removeItem('mjcs_agora_vote');
                      }} 
                      style={{ width: '100%', marginTop: '28px', padding: '12px 20px', fontSize: '13px' }}
                    >
                      <i className="fas fa-redo"></i> Réinitialiser le vote de démo
                    </button>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
