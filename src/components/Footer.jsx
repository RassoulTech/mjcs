import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const handleFooterLink = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, var(--color-primary-dark) 0%, #030714 100%)', 
      borderTop: '1px solid rgba(255, 255, 255, 0.04)', 
      padding: '80px 24px 45px', 
      color: 'var(--color-text-muted-light)' 
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '48px', textAlign: 'left' }}>
        
        {/* Branding Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img src={logoImg} alt="MJCS Logo" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-secondary)' }} />
            <h3 style={{ fontFamily: 'var(--font-title)', color: '#FFFFFF', fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px' }}>MJCS</h3>
          </div>
          <p style={{ fontSize: '14px', marginBottom: '22px', lineHeight: '1.6', color: '#CBD5E1' }}>
            "Une jeunesse consciente, un Sénégal souverain."<br />
            Mouvement citoyen pour la formation civile et l'engagement démocratique.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#" className="footer-social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="footer-social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="footer-social"><i className="fab fa-instagram"></i></a>
            <a href="#" className="footer-social"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '22px', fontFamily: 'var(--font-title)', fontSize: '16px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Raccourcis</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
            <li><a href="#/accueil" onClick={(e) => handleFooterLink(e, 'accueil')} className="footer-link">Accueil</a></li>
            <li><a href="#/histoire" onClick={(e) => handleFooterLink(e, 'histoire')} className="footer-link">Notre Histoire</a></li>
            <li><a href="#/activites" onClick={(e) => handleFooterLink(e, 'activites')} className="footer-link">Nos Activités</a></li>
            <li><a href="#/programme" onClick={(e) => handleFooterLink(e, 'programme')} className="footer-link">Programme & Agora</a></li>
            <li><a href="#/don" onClick={(e) => handleFooterLink(e, 'don')} className="footer-link">Faire un Don</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '22px', fontFamily: 'var(--font-title)', fontSize: '16px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-envelope" style={{ color: 'var(--color-secondary)', fontSize: '15px' }}></i> contact@mjcs.sn</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-phone" style={{ color: 'var(--color-secondary)', fontSize: '15px' }}></i> +221 33 820 00 00</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--color-secondary)', fontSize: '15px' }}></i> Ngoundiane, Région de Thiès, Sénégal</li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '22px', fontFamily: 'var(--font-title)', fontSize: '16px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Lettre d'information</h4>
          <p style={{ fontSize: '14px', marginBottom: '18px', color: '#CBD5E1', lineHeight: '1.5' }}>Inscrivez-vous pour recevoir nos rapports civiques et communiqués.</p>
          {submitted ? (
            <div style={{ backgroundColor: 'rgba(0, 133, 63, 0.1)', border: '1px solid rgba(0, 133, 63, 0.3)', color: '#4ADE80', padding: '14px', borderRadius: 'var(--border-radius-sm)', fontSize: '14px' }}>
              <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i> Merci pour votre inscription !
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Votre e-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="footer-input"
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '12px 18px', borderRadius: 'var(--border-radius-sm)' }}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          )}
        </div>

      </div>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '35px 0' }} />

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '15px', fontSize: '13px', color: '#94A3B8' }}>
        <p>&copy; {new Date().getFullYear()} MJCS (Mouvement Jeunesse Consciente du Sénégal). Tous droits réservés.</p>
        <p>Mouvement indépendant financé exclusivement par ses membres. <a href="#" style={{ color: 'var(--color-secondary)', textDecoration: 'none', borderBottom: '1px solid rgba(126, 151, 235, 0.3)', transition: 'color 0.3s' }}>Charte Éthique</a></p>
      </div>
    </footer>
  );
}
