"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeartHandshake, Phone } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Rejoindre() {
  return (
    <div className="container-app py-20 md:py-32 relative">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen -z-10 pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="max-w-3xl mx-auto text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] max-w-2xl bg-primary/5 rounded-[100%] blur-[80px] -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-6 shadow-sm">
          Engagement
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Rejoindre le <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm">Mouvement</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-balance">
          Ngoundiane dafa jóg ! Que vous souhaitiez devenir militant actif dans votre commune ou simplement soutenir notre vision, votre place est ici.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="glass p-10 md:p-12 rounded-3xl border-primary/20 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
        >
          <h2 className="text-3xl font-bold mb-8">Formulaire d'Adhésion</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Prénom</label>
                <Input placeholder="Votre prénom" className="h-12 bg-background/50 border-primary/20 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom</label>
                <Input placeholder="Votre nom" className="h-12 bg-background/50 border-primary/20 focus:border-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Téléphone (WhatsApp de préférence)</label>
              <Input type="tel" placeholder="+221 77 123 45 67" className="h-12 bg-background/50 border-primary/20 focus:border-primary" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Commune de résidence (ex: Ngoundiane)</label>
              <Input placeholder="Votre commune" className="h-12 bg-background/50 border-primary/20 focus:border-primary" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Comment souhaitez-vous participer ?</label>
              <Textarea 
                placeholder="Ex: Je veux rejoindre la cellule de mon quartier, ou je peux aider pour le Set-Setal (nettoyage)..." 
                className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary resize-none"
              />
            </div>
            
            <Button className="w-full h-14 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
              Jappoo ngir ëllëg (Envoyer)
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4 font-medium">
              Sutura : Vos informations resteront strictement confidentielles.
            </p>
          </form>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass p-10 rounded-3xl hover:bg-primary/5 transition-all duration-500 border-primary/20">
            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <HeartHandshake className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Pourquoi adhérer ?</h3>
            <ul className="space-y-4 text-muted-foreground text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                Participer aux décisions de votre commune (choix des candidats locaux).
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                Intégrer un Dahira Politique pour vous former.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                Faire partie d'un réseau de solidarité active (agriculture, emplois, entraide).
              </li>
            </ul>
          </div>

          <div className="glass p-10 rounded-3xl hover:bg-primary/5 transition-all duration-500 border-primary/20">
            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Phone className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Contact Direct</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Pour toute question sur l'implantation d'une cellule dans votre zone, contactez notre secrétariat national à Ngoundiane :
            </p>
            <p className="font-mono text-xl font-bold text-primary mb-2">+221 77 000 00 00</p>
            <p className="font-mono text-xl font-bold text-primary">contact@mjcs-senegal.org</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
