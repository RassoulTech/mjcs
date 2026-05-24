"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, Flag } from "lucide-react";

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

export default function Histoire() {
  return (
    <div className="container-app py-20 md:py-32 relative">
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen -z-10 pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] max-w-2xl bg-primary/5 rounded-[100%] blur-[80px] -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center rounded-full border border-primary/30 px-3 py-1 text-sm font-medium text-primary bg-primary/10 mb-6 shadow-sm">
          Origines
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary/80">L'Appel de</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm">Ngoundiane</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed text-balance">
          Né d'une prise de conscience collective face aux inégalités territoriales, le MJCS puise ses racines dans l'histoire de résistance et de résilience du Sénégal.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-primary/20 pl-8 ml-4 md:ml-8 space-y-16"
        >
          {/* Item 1 */}
          <motion.div variants={fadeUpVariant} className="relative">
            <div className="absolute -left-[41px] top-0 h-10 w-10 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <div className="glass p-8 rounded-3xl hover:border-primary/40 transition-colors duration-500 hover:bg-primary/5">
              <span className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Héritage Historique</span>
              <h3 className="text-2xl font-bold mb-4">L'esprit de Lat Dior et du Cayor</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Notre engagement s'inspire du courage des résistants historiques du Sénégal. À l'image de Lat Dior qui refusait l'aliénation de ses terres, nous refusons l'aliénation de notre économie. Le refus de la fatalité est dans notre ADN.
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div variants={fadeUpVariant} className="relative">
            <div className="absolute -left-[41px] top-0 h-10 w-10 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div className="glass p-8 rounded-3xl hover:border-primary/40 transition-colors duration-500 hover:bg-primary/5">
              <span className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Janvier 2024</span>
              <h3 className="text-2xl font-bold mb-4">Le constat de Ngoundiane</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Des jeunes cadres, étudiants et agriculteurs de la commune de Ngoundiane (Thiès) se réunissent pour faire un constat amer : nos ressources locales profitent à d'autres, et notre jeunesse se sent abandonnée. C'est l'étincelle qui donne naissance au MJCS.
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div variants={fadeUpVariant} className="relative">
            <div className="absolute -left-[41px] top-0 h-10 w-10 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Flag className="h-4 w-4 text-primary" />
            </div>
            <div className="glass p-8 rounded-3xl hover:border-primary/40 transition-colors duration-500 hover:bg-primary/5">
              <span className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Aujourd'hui</span>
              <h3 className="text-2xl font-bold mb-4">Un Mouvement National</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ce qui a commencé à Ngoundiane trouve un écho dans tout le pays. Le MJCS se structure en Cellules Locales et en Dahiras Politiques pour porter un programme de souveraineté assumée à l'échelle nationale.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
