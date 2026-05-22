import React, { useEffect, useState } from 'react';
import heroIllustration from '../assets/hero_illustration.png';

export default function Accueil({ onNavigate, onOpenJoinModal }) {
  const [stats, setStats] = useState({ members: 0, sections: 0, actions: 0 });

  useEffect(() => {
    // Dynamically increment counters on load
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const targetMembers = 12450;
    const targetSections = 14;
    const targetActions = 180;

    const timer = setInterval(() => {
      currentStep++;
      setStats({
        members: Math.floor((targetMembers / steps) * currentStep),
        sections: Math.floor((targetSections / steps) * currentStep),
        actions: Math.floor((targetActions / steps) * currentStep)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats({ members: targetMembers, sections: targetSections, actions: targetActions });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-dark" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '80px 24px' }}>
        <div className="container hero-grid">
          
          {/* Left side: text with slide in from left */}
          <div className="hero-text reveal reveal-left">
            <div className="hero-badge">
              <span style={{ color: 'var(--color-accent)' }}>●</span> MJCS SÉNÉGAL
            </div>
            
            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', fontFamily: 'var(--font-title)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-1.5px', textTransform: 'uppercase', lineHeight: '1.1' }}>
              Une jeunesse consciente.<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--color-secondary), #A3B8F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Un Sénégal souverain.</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', marginBottom: '40px', color: 'var(--color-text-muted-light)', lineHeight: '1.7', fontWeight: '400' }}>
              Rejoignez le Mouvement Jeunesse Consciente du Sénégal (MJCS). Ensemble, formons l'alternative citoyenne pour bâtir un avenir prospère, juste et indépendant par l'éducation, le travail et la démocratie participative.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onOpenJoinModal}>
                <i className="fas fa-user-plus"></i> Rejoindre le MJCS
              </button>
              <button className="btn btn-secondary" onClick={() => onNavigate('programme')}>
                <i className="fas fa-book-open"></i> Lire le Manifeste
              </button>
            </div>
          </div>

          {/* Right side: image with slide in from right */}
          <div className="hero-image-container reveal reveal-right">
            <img 
              src={heroIllustration} 
              alt="Illustration de la jeunesse consciente du Sénégal" 
              className="hero-illustration-img"
            />
          </div>
          
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section style={{ backgroundColor: 'rgba(6, 13, 38, 0.7)', padding: '50px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.04)', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 5 }}>
        <div className="container grid-3" style={{ textAlign: 'center' }}>
          
          <div className="glass-card" style={{ padding: '24px 20px', background: 'rgba(11, 27, 79, 0.15)', border: '1px solid rgba(255, 255, 255, 0.04)', boxShadow: 'none' }}>
            <h3 style={{ fontSize: '48px', color: 'var(--color-secondary)', fontFamily: 'var(--font-title)', fontWeight: '800', letterSpacing: '-1px' }}>
              {stats.members.toLocaleString()} +
            </h3>
            <div className="divider-glow" style={{ margin: '12px auto', width: '50%' }}></div>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>Adhérents Engagés</p>
          </div>

          <div className="glass-card" style={{ padding: '24px 20px', background: 'rgba(11, 27, 79, 0.15)', border: '1px solid rgba(255, 255, 255, 0.04)', boxShadow: 'none' }}>
            <h3 style={{ fontSize: '48px', color: 'var(--color-secondary)', fontFamily: 'var(--font-title)', fontWeight: '800', letterSpacing: '-1px' }}>
              {stats.sections} / 14
            </h3>
            <div className="divider-glow" style={{ margin: '12px auto', width: '50%' }}></div>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>Régions Représentées</p>
          </div>

          <div className="glass-card" style={{ padding: '24px 20px', background: 'rgba(11, 27, 79, 0.15)', border: '1px solid rgba(255, 255, 255, 0.04)', boxShadow: 'none' }}>
            <h3 style={{ fontSize: '48px', color: 'var(--color-secondary)', fontFamily: 'var(--font-title)', fontWeight: '800', letterSpacing: '-1px' }}>
              {stats.actions} +
            </h3>
            <div className="divider-glow" style={{ margin: '12px auto', width: '50%' }}></div>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600' }}>Actions Civiques Menées</p>
          </div>

        </div>
      </section>

      {/* Le Constat Section (Light) */}
      <section className="section-light" style={{ padding: '120px 24px' }}>
        <div className="container grid-2">
          
          <div className="reveal">
            <span className="category-badge" style={{ backgroundColor: 'rgba(11, 27, 79, 0.06)', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Le Constat
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', color: 'var(--color-primary)', marginBottom: '28px', fontFamily: 'var(--font-title)', fontWeight: '800', lineHeight: '1.2' }}>
              Notre avenir ne doit plus s'écrire sans nous.
            </h2>
            <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '20px', fontSize: '16px', lineHeight: '1.7' }}>
              Plus de 60 % de la population sénégalaise a moins de 25 ans. Pourtant, nos voix sont absentes des décisions majeures. Entre chômage des diplômés, manque d'opportunités locales et absence de transparence, notre potentiel national est bridé.
            </p>
            <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '32px', fontSize: '16px', lineHeight: '1.7' }}>
              Nous refusons la fatalité de l'exode et du statu quo. Il est temps que la jeunesse prenne conscience de sa force politique, de ses capacités intellectuelles et de sa responsabilité historique.
            </p>
            <button className="btn btn-outline-dark" onClick={() => onNavigate('histoire')}>
              Notre Histoire <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </button>
          </div>

          <div className="reveal">
            <div className="light-card" style={{ borderLeft: '5px solid var(--color-accent)', padding: '44px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)' }}>
              <i className="fas fa-quote-left" style={{ fontSize: '42px', color: 'var(--color-accent)', opacity: 0.15, display: 'block', marginBottom: '24px' }}></i>
              <p style={{ fontStyle: 'italic', fontSize: '19px', color: 'var(--color-text-dark)', marginBottom: '24px', lineHeight: '1.7', fontWeight: '500' }}>
                "On ne peut pas développer le Sénégal sans sa force vive principale. La conscience politique de la jeunesse est le premier moteur de notre souveraineté nationale."
              </p>
              <div className="divider-glow" style={{ margin: '20px 0', background: 'linear-gradient(90deg, #E2E8F0, transparent)' }}></div>
              <h4 style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '16px' }}>Bureau National du MJCS</h4>
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted-dark)', fontWeight: '500' }}>Appel de Ngoundiane, Janvier 2024</span>
            </div>
          </div>

        </div>
      </section>

      {/* Les Piliers Section (Dark) */}
      <section className="section-dark" style={{ padding: '120px 24px' }}>
        <div className="container">
          
          <div className="section-header reveal">
            <span className="category-badge" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', color: 'var(--color-secondary)', marginBottom: '16px' }}>
              Notre Plan d'Action
            </span>
            <h2 style={{ fontFamily: 'var(--font-title)', fontWeight: '900' }}>Les trois piliers du MJCS</h2>
            <p>Notre engagement repose sur des actions concrètes structurées autour de trois priorités nationales.</p>
          </div>

          <div className="grid-3" style={{ marginBottom: '60px' }}>
            
            {/* Card 1 */}
            <div className="glass-card reveal">
              <div className="icon-glow-ring" style={{ backgroundColor: 'rgba(126, 151, 235, 0.1)', marginBottom: '28px' }}>
                <i className="fas fa-brain" style={{ fontSize: '28px', color: 'var(--color-secondary)' }}></i>
              </div>
              <h3 style={{ fontSize: '23px', marginBottom: '18px', color: '#FFFFFF', fontWeight: '700' }}>Éducation Populaire & Civique</h3>
              <p style={{ color: 'var(--color-text-muted-light)', fontSize: '15px', lineHeight: '1.7' }}>
                Développer la conscience citoyenne par la formation politique, économique et civique. Chaque adhérent accède à nos ressources académiques pour mener le changement local.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card reveal" style={{ animationDelay: '0.2s' }}>
              <div className="icon-glow-ring" style={{ backgroundColor: 'rgba(0, 133, 63, 0.1)', marginBottom: '28px' }}>
                <i className="fas fa-laptop-code" style={{ fontSize: '28px', color: 'var(--color-accent)' }}></i>
              </div>
              <h3 style={{ fontSize: '23px', marginBottom: '18px', color: '#FFFFFF', fontWeight: '700' }}>Souveraineté Éco & Numérique</h3>
              <p style={{ color: 'var(--color-text-muted-light)', fontSize: '15px', lineHeight: '1.7' }}>
                Valoriser la production locale, soutenir l'insertion professionnelle des jeunes, encourager l'entrepreneuriat numérique et garantir la souveraineté de nos données nationales.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card reveal" style={{ animationDelay: '0.4s' }}>
              <div className="icon-glow-ring" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', marginBottom: '28px' }}>
                <i className="fas fa-users" style={{ fontSize: '28px', color: 'var(--color-gold)' }}></i>
              </div>
              <h3 style={{ fontSize: '23px', marginBottom: '18px', color: '#FFFFFF', fontWeight: '700' }}>Démocratie Participative</h3>
              <p style={{ color: 'var(--color-text-muted-light)', fontSize: '15px', lineHeight: '1.7' }}>
                Donner le pouvoir de codécision aux sections territoriales. Le programme du MJCS est co-construit, discuté et voté par les adhérents directement dans l'Agora.
              </p>
            </div>

          </div>

          <div style={{ textAlign: 'center' }} className="reveal">
            <button className="btn btn-primary" onClick={() => onNavigate('programme')}>
              <i className="fas fa-vote-yea"></i> Accéder au Programme & à l'Agora
            </button>
          </div>

        </div>
      </section>

      {/* Testimonials Section (Light) */}
      <section className="section-light" style={{ padding: '120px 24px' }}>
        <div className="container">
          
          <div className="section-header reveal">
            <span className="category-badge" style={{ backgroundColor: 'rgba(11, 27, 79, 0.06)', color: 'var(--color-primary)', marginBottom: '16px' }}>
              Témoignages
            </span>
            <h2 style={{ color: 'var(--color-primary)', fontWeight: '800' }}>Ils s'engagent pour le Sénégal</h2>
            <p>Découvrez pourquoi des milliers de jeunes rejoignent le mouvement MJCS dans tout le pays.</p>
          </div>

          <div className="grid-2">
            
            <div className="light-card reveal" style={{ display: 'flex', gap: '24px', flexDirection: 'column', justifyContent: 'space-between', padding: '44px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ display: 'flex', gap: '4px', color: 'var(--color-gold)', fontSize: '14px', marginBottom: '4px' }}>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-dark)', fontSize: '16px', lineHeight: '1.7', fontWeight: '500', flexGrow: 1 }}>
                "Au MJCS, j'ai trouvé un espace pour débattre activement de l'avenir de l'éducation. On ne fait pas seulement de la politique, on s'instruit mutuellement et on agit concrètement pour nos écoles locales."
              </p>
              <div className="divider-glow" style={{ margin: '16px 0', background: 'linear-gradient(90deg, #E2E8F0, transparent)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-dark)', fontWeight: '800', fontSize: '15px', fontFamily: 'var(--font-title)' }}>
                  FD
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '16px' }}>Fatou Diop</h4>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted-dark)', fontWeight: '500' }}>Étudiante en droit, 22 ans (Ngoundiane, Thiès)</span>
                </div>
              </div>
            </div>

            <div className="light-card reveal" style={{ display: 'flex', gap: '24px', flexDirection: 'column', justifyContent: 'space-between', padding: '44px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)', animationDelay: '0.2s' }}>
              <div style={{ display: 'flex', gap: '4px', color: 'var(--color-gold)', fontSize: '14px', marginBottom: '4px' }}>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-dark)', fontSize: '16px', lineHeight: '1.7', fontWeight: '500', flexGrow: 1 }}>
                "La souveraineté économique n'est pas qu'un slogan, c'est une urgence nationale. Grâce au MJCS, nous mettons en valeur les circuits courts agricoles et l'entrepreneuriat local pour créer de vrais emplois durables dans les régions."
              </p>
              <div className="divider-glow" style={{ margin: '16px 0', background: 'linear-gradient(90deg, #E2E8F0, transparent)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: '800', fontSize: '15px', fontFamily: 'var(--font-title)' }}>
                  MD
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '16px' }}>Moussa Diallo</h4>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted-dark)', fontWeight: '500' }}>Promoteur agricole, 31 ans (Casamance)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA (Dark Gradient) */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #030714 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
        {/* Subtle decorative mesh background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.02, background: 'radial-gradient(var(--color-secondary) 1px, transparent 0), radial-gradient(var(--color-secondary) 1px, transparent 0)', backgroundSize: '24px 24px', backgroundPosition: '0 0, 12px 12px' }}></div>
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          
          <h2 className="reveal" style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', color: '#FFFFFF', marginBottom: '24px', fontFamily: 'var(--font-title)', fontWeight: '900' }}>
            Prêt à bâtir l'avenir du pays ?
          </h2>
          <p className="reveal" style={{ fontSize: '18px', color: 'var(--color-text-muted-light)', maxWidth: '650px', margin: '0 auto 48px', lineHeight: '1.7' }}>
            Chaque voix compte, chaque action transforme. Rejoignez-nous dès maintenant ou soutenez nos caravanes citoyennes dans les 14 régions du Sénégal.
          </p>
          
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={onOpenJoinModal}>
              Devenir Membre <i className="fas fa-plus" style={{ marginLeft: '6px' }}></i>
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('don')}>
              Soutenir par un Don <i className="fas fa-hand-holding-heart" style={{ marginLeft: '6px' }}></i>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
