"use client";

import { motion } from "framer-motion";
import { Users, Building2, Shield, Network } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Fonctionnement() {
  return (
    <div className="container-app py-20 md:py-32 relative">
      <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen -z-10 pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] max-w-2xl bg-primary/5 rounded-[100%] blur-[80px] -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-6 shadow-sm">
          Structure
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm">Organisation</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed text-balance">
          Une structure pyramidale inversée où le pouvoir de décision part de la base (les Cellules) pour remonter vers les instances nationales.
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="glass p-10 rounded-3xl hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">1. Les Cellules Locales</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Le cœur battant du MJCS. Chaque quartier ou village possède sa cellule (ex: Cellule de Ngoundiane Centre). Elles identifient les problèmes locaux, proposent des solutions et élisent leurs délégués.
          </p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="glass p-10 rounded-3xl hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Network className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">2. Les Dahiras Politiques</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Espaces de formation et d'échange d'idées. Les Dahiras coordonnent les cellules d'une même commune. Ils assurent la formation civique, économique et politique des militants.
          </p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="glass p-10 rounded-3xl hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">3. Bureau National (BN)</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            L'organe exécutif central. Il valide la stratégie globale, coordonne les actions à l'échelle du pays et prépare les élections. Son siège historique reste symboliquement à Ngoundiane.
          </p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="glass p-10 rounded-3xl hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">4. Le Conseil des Sages</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Organe consultatif garant des valeurs éthiques (Jom, Sutura) du mouvement. Composé de membres reconnus pour leur probité. Il valide les déclarations de patrimoine des membres du Bureau National.
          </p>
        </motion.div>
      </motion.div>

      <div className="mt-20 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparence Absolue</h2>
          <p className="text-muted-foreground mb-6">
            L'innovation majeure du MJCS : tout membre élu à un poste stratégique a l'obligation statutaire de déposer et publier une déclaration de son patrimoine. Notre financement repose sur les cotisations, le bénévolat et les dons de la Diaspora.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full">
            Éthique et Reddition des comptes
          </div>
        </div>
      </div>
    </div>
  );
}
