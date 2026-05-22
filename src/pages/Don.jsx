import React, { useState } from 'react';

export default function Don() {
  const [currency, setCurrency] = useState('XOF'); // XOF (FCFA) or EUR
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('wave');
  const [donating, setDonating] = useState(false);
  const [donated, setDonated] = useState(false);

  const predefinedAmountsXOF = [2000, 5000, 10000, 25000, 50000];
  const predefinedAmountsEUR = [5, 10, 20, 50, 100];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    if (val === '' || !isNaN(val)) {
      setCustomAmount(val);
      setSelectedAmount(val ? parseFloat(val) : 0);
    }
  };

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
    if (curr === 'XOF') {
      setSelectedAmount(5000);
    } else {
      setSelectedAmount(10);
    }
    setCustomAmount('');
  };

  const getImpactMessage = () => {
    // Standardize to FCFA value for calculation (approx 1 EUR = 655 FCFA)
    const amountInXOF = currency === 'XOF' ? selectedAmount : selectedAmount * 655;

    if (amountInXOF <= 0) {
      return "Veuillez entrer un montant pour estimer l'impact de votre don.";
    }
    if (amountInXOF < 3000) {
      const livrets = Math.floor(amountInXOF / 500);
      return `Ce montant permet de financer l'impression de ${livrets} livret${livrets > 1 ? 's' : ''} civique${livrets > 1 ? 's' : ''} pour la formation des jeunes.`;
    }
    if (amountInXOF < 8000) {
      const livrets = Math.floor(amountInXOF / 500);
      return `Ce montant finance l'impression de ${livrets} livrets civiques ou le matériel d'un atelier citoyen de quartier.`;
    }
    if (amountInXOF < 18000) {
      return `Ce montant finance le matériel pédagogique et la sonorisation d'un atelier citoyen départemental de formation.`;
    }
    if (amountInXOF < 40000) {
      return `Ce montant finance l'hébergement cloud sécurisé de l'Agora de vote et du site web pendant un mois entier.`;
    }
    
    const caravanes = Math.floor(amountInXOF / 50000);
    if (caravanes >= 1) {
      return `Ce montant finance le déploiement de ${caravanes} Caravane${caravanes > 1 ? 's' : ''} Civique${caravanes > 1 ? 's' : ''} complète${caravanes > 1 ? 's' : ''} dans une commune rurale (transport de formateurs et livrets).`;
    }
    
    return `Ce montant contribue de façon significative à l'indépendance de nos actions de formation dans les 14 régions.`;
  };

  const handleDonSubmit = (e) => {
    e.preventDefault();
    if (selectedAmount <= 0) return;

    setDonating(true);
    setTimeout(() => {
      setDonating(false);
      setDonated(true);
    }, 1500);
  };

  const getEuroEquivalent = () => {
    if (currency === 'EUR') return selectedAmount;
    return Math.round(selectedAmount / 655.957 * 100) / 100;
  };

  const getXofEquivalent = () => {
    if (currency === 'XOF') return selectedAmount;
    return Math.round(selectedAmount * 655.957);
  };

  return (
    <div>
      {/* Title Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #050B1E 100%)', padding: '100px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', position: 'relative' }}>
        {/* Decorative background blur ring */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(126, 151, 235, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-badge" style={{ marginBottom: '16px' }}>
            <span>SOUVERAINETÉ</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginBottom: '20px', fontWeight: '900' }}>Soutenir le MJCS</h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted-light)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
            Soutenez l'indépendance financière de la jeunesse consciente. Aucun financement extérieur occulte, aucune ingérence politique.
          </p>
        </div>
      </section>

      {/* Conviction & Message Section (Light) */}
      <section className="section-light" style={{ padding: '120px 24px' }}>
        <div className="container grid-2">
          
          <div className="reveal reveal-visible" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              Transparence & Indépendance
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--color-primary)', marginBottom: '24px', fontFamily: 'var(--font-title)', fontWeight: '800', lineHeight: '1.2' }}>
              Pourquoi financer le mouvement ?
            </h2>
            <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '20px', fontSize: '15px', lineHeight: '1.7' }}>
              Le MJCS est né de la volonté de rompre avec les réseaux de clientélisme politique. Pour conserver notre liberté totale de ton et d'action, nous refusons catégoriquement les subventions étatiques et les financements d'organisations étrangères.
            </p>
            <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '24px', fontSize: '15px', lineHeight: '1.7' }}>
              Chaque FCFA ou Euro récolté est audité par notre comité d'éthique et sert uniquement à financer des projets tangibles sur le terrain (ateliers, logistique, cloud, matériel pédagogique).
            </p>
            <div style={{ padding: '20px 24px', backgroundColor: 'rgba(126, 151, 235, 0.06)', borderRadius: '12px', borderLeft: '4px solid var(--color-secondary)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.01)' }}>
              <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <i className="fas fa-file-invoice-dollar" style={{ color: 'var(--color-secondary)' }}></i> Rapport financier annuel
              </span>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted-dark)', lineHeight: '1.6' }}>Un bilan complet des dépenses et des entrées est publié en libre accès sur la plateforme Agora chaque fin d'année.</p>
            </div>
          </div>

          <div className="reveal reveal-visible" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="light-card" style={{ borderLeft: '6px solid var(--color-accent)', padding: '40px', width: '100%' }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '24px', marginBottom: '28px', fontFamily: 'var(--font-title)', fontWeight: '800' }}>Grille d'impact concret</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="impact-item">
                  <span className="impact-item-title">5 000 FCFA (~7.50 €)</span>
                  <div className="impact-item-dots"></div>
                  <span className="impact-item-value">10 livrets civiques</span>
                </div>
                <div className="impact-item">
                  <span className="impact-item-title">20 000 FCFA (~30.00 €)</span>
                  <div className="impact-item-dots"></div>
                  <span className="impact-item-value">Matériel atelier régional</span>
                </div>
                <div className="impact-item">
                  <span className="impact-item-title">50 000 FCFA (~75.00 €)</span>
                  <div className="impact-item-dots"></div>
                  <span className="impact-item-value">Hébergement Agora (1 mois)</span>
                </div>
                <div className="impact-item">
                  <span className="impact-item-title">100 000 FCFA (~150.00 €)</span>
                  <div className="impact-item-dots"></div>
                  <span className="impact-item-value">Déploiement 2 Caravanes</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Donation Simulator (Dark) */}
      <section className="section-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', padding: '120px 24px' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          
          <div className="section-header reveal reveal-visible">
            <span className="category-badge" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Simulateur de Don
            </span>
            <h2 style={{ fontWeight: '800' }}>Formulaire de Contribution</h2>
            <p>Choisissez le montant et votre opérateur de Mobile Money préféré pour soutenir l'indépendance de notre action.</p>
          </div>

          <div className="glass-card reveal reveal-visible" style={{ padding: '44px' }}>
            {!donated ? (
              <form onSubmit={handleDonSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Currency selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted-light)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlignment: 'center' }}>
                    Devise de contribution :
                  </label>
                  <div className="currency-switch">
                    <button
                      type="button"
                      onClick={() => handleCurrencyChange('XOF')}
                      className={`currency-btn ${currency === 'XOF' ? 'active' : ''}`}
                    >
                      Franc CFA (FCFA)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCurrencyChange('EUR')}
                      className={`currency-btn ${currency === 'EUR' ? 'active' : ''}`}
                    >
                      Euro (€)
                    </button>
                  </div>
                </div>

                {/* Predefined Amounts Grid */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted-light)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Sélectionnez un montant :
                  </label>
                  <div className="amount-grid">
                    {(currency === 'XOF' ? predefinedAmountsXOF : predefinedAmountsEUR).map((amt) => {
                      const isSelected = selectedAmount === amt && !customAmount;
                      return (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => handleAmountClick(amt)}
                          className={`amount-btn ${isSelected ? 'active' : ''}`}
                        >
                          {amt.toLocaleString()} {currency === 'XOF' ? 'FCFA' : '€'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Amount Input */}
                <div>
                  <label htmlFor="custom_amount" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted-light)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Ou saisissez un montant personnalisé :
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      id="custom_amount"
                      placeholder="Autre montant..."
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      style={{
                        width: '100%',
                        padding: '16px 70px 16px 20px',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    />
                    <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontWeight: '800', color: 'var(--color-secondary)', fontSize: '15px' }}>
                      {currency === 'XOF' ? 'FCFA' : '€'}
                    </span>
                  </div>
                </div>

                {/* Dynamic Impact Card */}
                <div style={{ 
                  padding: '20px 24px', 
                  backgroundColor: 'rgba(212, 175, 55, 0.04)', 
                  border: '1px solid rgba(212, 175, 55, 0.15)', 
                  borderRadius: '12px', 
                  minHeight: '80px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  boxShadow: 'var(--glow-gold) 0px 0px 30px -15px'
                }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fas fa-heart-circle-check" style={{ color: 'var(--color-gold)', fontSize: '20px' }}></i>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.6', textAlign: 'left', margin: 0, fontWeight: '500' }}>
                    {getImpactMessage()}
                  </p>
                </div>

                {/* Local Payment Badges */}
                <div>
                  <span style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--color-text-muted-light)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Moyen de paiement :
                  </span>
                  <div className="payment-grid">
                    
                    {/* Wave */}
                    <label className={`payment-option-card ${paymentMethod === 'wave' ? 'selected-wave' : ''}`}>
                      <input type="radio" name="payment" value="wave" checked={paymentMethod === 'wave'} onChange={() => setPaymentMethod('wave')} style={{ display: 'none' }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fas fa-money-bill-wave" style={{ fontSize: '18px', color: '#3B82F6' }}></i>
                        <span style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>Wave</span>
                      </div>
                    </label>

                    {/* Orange Money */}
                    <label className={`payment-option-card ${paymentMethod === 'orange' ? 'selected-orange' : ''}`}>
                      <input type="radio" name="payment" value="orange" checked={paymentMethod === 'orange'} onChange={() => setPaymentMethod('orange')} style={{ display: 'none' }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fas fa-mobile-alt" style={{ fontSize: '18px', color: '#F97316' }}></i>
                        <span style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>Orange</span>
                      </div>
                    </label>

                    {/* Card */}
                    <label className={`payment-option-card ${paymentMethod === 'card' ? 'selected-card' : ''}`}>
                      <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} style={{ display: 'none' }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="far fa-credit-card" style={{ fontSize: '18px', color: '#FFFFFF' }}></i>
                        <span style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>Carte</span>
                      </div>
                    </label>

                  </div>
                </div>

                <button
                  type="submit"
                  disabled={donating || selectedAmount <= 0}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', padding: '18px' }}
                >
                  {donating ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Traitement de la transaction...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-hand-holding-heart"></i>
                      Valider mon don de {selectedAmount.toLocaleString()} {currency === 'XOF' ? 'FCFA' : '€'}
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(0, 133, 63, 0.1)', border: '2px solid var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: 'var(--glow-accent)' }}>
                  <i className="fas fa-check" style={{ fontSize: '32px', color: 'var(--color-accent)' }}></i>
                </div>
                
                <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'var(--font-title)', fontWeight: '800' }}>
                  Merci pour votre soutien !
                </h3>

                <p style={{ color: 'var(--color-text-muted-light)', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                  Simulation réussie de paiement pour un montant de <strong style={{ color: '#FFFFFF' }}>{selectedAmount.toLocaleString()} {currency === 'XOF' ? 'FCFA' : '€'}</strong> via <strong style={{ color: '#FFFFFF' }}>{paymentMethod.toUpperCase()}</strong>.
                </p>

                <div style={{ textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', padding: '20px', fontSize: '13.5px', color: 'var(--color-text-muted-light)', border: '1px dashed rgba(255, 255, 255, 0.08)', marginBottom: '32px', lineHeight: '1.6' }}>
                  <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '4px' }}>Note de développement :</strong> Dans l'application finale, ce clic redirigera l'utilisateur vers la passerelle de paiement locale sécurisée (ex: <em>PayTech</em>, <em>PayDunya</em> ou <em>Monetbil</em>) pour débiter son compte Wave ou Orange Money et envoyer les fonds vers la coopérative MJCS.
                </div>

                <button className="btn btn-secondary" onClick={() => setDonated(false)} style={{ width: '100%', padding: '16px' }}>
                  Faire une autre contribution
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

