import React, { useState } from 'react';

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '+221 ',
    region: 'Thiès',
    statut: 'Étudiant'
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const regions = [
    'Dakar', 'Diourbel', 'Fatick', 'Kaffrine', 'Kaolack', 'Kédougou', 
    'Kolda', 'Louga', 'Matam', 'Saint-Louis', 'Sédhiou', 'Tambacounda', 
    'Thiès', 'Ziguinchor', 'Diaspora Europe', 'Diaspora Amérique', 'Diaspora Afrique'
  ];

  const statuts = [
    'Étudiant', 
    'Travailleur Indépendant / Entrepreneur', 
    'Salarié du privé', 
    'Fonctionnaire / Service public', 
    'Agriculteur / Producteur', 
    'En recherche d\'opportunités', 
    'Autre'
  ];

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <i className="fas fa-times"></i>
        </button>

        {!success ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div className="hero-badge" style={{ marginBottom: '16px' }}>
                <span style={{ color: 'var(--color-accent)' }}>●</span> ADHÉSION 2026
              </div>
              <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginBottom: '10px', fontWeight: '800' }}>
                Rejoindre le MJCS
              </h2>
              <p style={{ color: 'var(--color-text-muted-light)', fontSize: '15px', lineHeight: '1.5' }}>
                Rejoignez la jeunesse consciente pour bâtir un Sénégal souverain. Remplissez ce formulaire pour créer votre profil citoyen.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label htmlFor="prenom" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted-light)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Prénom</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Amadou"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="nom" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted-light)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Diop"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted-light)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Adresse Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="adresse@exemple.sn"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted-light)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Téléphone (WhatsApp)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label htmlFor="region" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted-light)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Région / Section</label>
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    style={{ cursor: 'pointer' }}
                  >
                    {regions.map(r => <option key={r} value={r} style={{background: '#060D26', color: '#FFF'}}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="statut" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-muted-light)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Votre statut</label>
                  <select
                    id="statut"
                    name="statut"
                    value={formData.statut}
                    onChange={handleChange}
                    style={{ cursor: 'pointer' }}
                  >
                    {statuts.map(s => <option key={s} value={s} style={{background: '#060D26', color: '#FFF'}}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                <input type="checkbox" id="consent" required style={{ marginTop: '5px', accentColor: 'var(--color-accent)' }} />
                <label htmlFor="consent" style={{ fontSize: '12px', color: 'var(--color-text-muted-light)', lineHeight: '1.5' }}>
                  Je confirme accepter la charte d'éthique du MJCS et m'engage à participer activement au développement de ma communauté.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Traitement de votre adhésion...
                  </>
                ) : (
                  <>
                    <i className="fas fa-user-plus"></i>
                    Valider mon Adhésion
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(0, 133, 63, 0.1)', border: '2px solid var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', boxShadow: 'var(--glow-accent)' }}>
              <i className="fas fa-check" style={{ fontSize: '36px', color: 'var(--color-accent)' }}></i>
            </div>
            
            <h2 style={{ fontSize: '30px', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginBottom: '14px', fontWeight: '800' }}>
              Bienvenue, {formData.prenom} !
            </h2>
            
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
              Votre demande d'adhésion pour la section <strong>{formData.region}</strong> a été enregistrée avec succès. Un responsable local va vous contacter par e-mail ou WhatsApp pour valider votre carte d'adhérent numérique.
            </p>

            <div style={{ textAlign: 'left', backgroundColor: 'rgba(126, 151, 235, 0.04)', border: '1px solid rgba(126, 151, 235, 0.15)', borderRadius: '12px', padding: '24px', marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>Prochaines étapes :</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--color-text-light)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-envelope-open-text" style={{ color: 'var(--color-secondary)' }}></i> Vérifiez votre boîte mail pour recevoir notre livret civique d'accueil.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fab fa-whatsapp" style={{ color: 'var(--color-secondary)' }}></i> Rejoignez le groupe de discussion de votre section locale.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="fas fa-graduation-cap" style={{ color: 'var(--color-secondary)' }}></i> Accédez aux formations civiques gratuites en ligne.</li>
              </ul>
            </div>

            <button className="btn btn-secondary" onClick={() => {
              onClose();
              setSuccess(false); // Reset for next time
            }} style={{ width: '100%' }}>
              Fermer la fenêtre
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
