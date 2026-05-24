"use client";

import { Target, Lightbulb, Sprout, Hammer, Users } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Vision() {
  return (
    <div className="container-app py-20 md:py-32 relative">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] max-w-2xl bg-primary/5 rounded-[100%] blur-[80px] -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-6 shadow-sm">
          Projet de Société
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm">Vision</span>
          <span className="text-foreground"> & </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary/80">Mission</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed text-balance">
          Notre projet politique s'articule autour du développement local et de l'équité pour construire un Sénégal prospère depuis nos communes.
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32"
      >
        <motion.div variants={fadeUpVariant} className="glass p-10 rounded-3xl flex flex-col md:flex-row gap-8 hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20">
          <div className="shrink-0 p-5 bg-primary/10 rounded-2xl h-fit shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Lightbulb className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Un Sénégal décentralisé, équitable et prospère, où un jeune né à Ngoundiane a exactement les mêmes opportunités de réussite, d'accès à l'eau, à la santé et au numérique qu'un jeune né à Dakar. Une société équilibrée, fidèle à ses traditions spirituelles et ouverte sur le progrès.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="glass p-10 rounded-3xl flex flex-col md:flex-row gap-8 hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20">
          <div className="shrink-0 p-5 bg-primary/10 rounded-2xl h-fit shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Target className="w-10 h-10 text-blue-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mobiliser la jeunesse autour d'actions concrètes de développement communautaire. Le MJCS est un outil de transformation sociale qui part de la base, valorise nos langues nationales et nos savoir-faire agricoles, et porte la voix des oubliés de la République au sommet de l'État.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen -z-10 pointer-events-none"></div>

        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-4xl font-bold mb-16 text-center tracking-tight"
        >
          3 Piliers Prioritaires (Parmi 10)
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row gap-12 items-center bg-card/80 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-primary/20 shadow-xl hover:border-primary/40 transition-colors duration-500">
            <div className="md:w-1/3 flex justify-center shrink-0">
              <Sprout className="w-40 h-40 text-primary opacity-90 drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Souveraineté Alimentaire et Agriculture</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                La dépendance aux pluies et le coût élevé des semences freinent nos paysans. Nous ferons de l'agriculture le moteur de notre souveraineté.
              </p>
              <ul className="list-disc list-inside text-base font-medium text-muted-foreground space-y-3">
                <li>Création de bassins de rétention d'eau communautaires (mini-forages solaires).</li>
                <li>Interdiction stricte de la vente de terres arables aux multinationales.</li>
                <li>Soutien massif à la modernisation de l'élevage.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row-reverse gap-12 items-center bg-card/80 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-primary/20 shadow-xl hover:border-primary/40 transition-colors duration-500">
            <div className="md:w-1/3 flex justify-center shrink-0">
              <Hammer className="w-40 h-40 text-primary opacity-90 drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Emploi des Jeunes et Entrepreneuriat</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Les jeunes migrent vers Dakar ou l'étranger faute d'opportunités économiques locales. Nous devons retenir nos talents par l'emploi local.
              </p>
              <ul className="list-disc list-inside text-base font-medium text-muted-foreground space-y-3">
                <li>Fonds de garantie intercommunal pour financer les GIE sans apport.</li>
                <li>Exigence légale de 40% de main d'œuvre locale pour toute entreprise s'installant dans une commune.</li>
                <li>Création d'Instituts Supérieurs Ruraux (ISR) adaptés aux bassins d'emplois.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
