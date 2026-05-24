"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sprout, Building, Scale } from "lucide-react";
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-background">
        <div className="container-app relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUpVariant}
            className="inline-flex items-center rounded-full border border-primary/30 px-4 py-1.5 text-sm font-semibold transition-colors bg-primary/10 text-primary hover:bg-primary/20 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Mouvement Jeunesse Consciente du Sénégal (MJCS)
          </motion.div>
          
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={fadeUpVariant}
            className="text-display text-5xl md:text-7xl lg:text-8xl mb-8 max-w-5xl text-balance tracking-tight leading-tight"
          >
            Sunu gox, sunu naatange. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-sm">L'avenir</span> prend racine à Ngoundiane.
          </motion.h1>
          
          <motion.p 
            initial="hidden" 
            animate="visible" 
            variants={fadeUpVariant}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl text-balance font-light"
          >
            <strong className="text-foreground font-semibold">Conscience – Engagement – Souveraineté.</strong><br/>
            Un mouvement fondé sur la souveraineté économique, le développement local et l'équité territoriale. Rejoignez la jeunesse consciente pour bâtir le Sénégal de demain.
          </motion.p>
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-semibold shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105">
              <Link href="/rejoindre">
                Rejoindre le MJCS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg border-primary/30 hover:bg-primary/10 transition-all duration-300">
              <Link href="/vision">Découvrir notre vision</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Background Premium Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-float" style={{ animationDelay: "2s", animationDuration: "8s" }}></div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-muted/30 relative">
        <div className="container-app">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Nos Piliers Fondamentaux</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              L'action de notre mouvement repose sur des valeurs fortes (Jom, Sutura) qui guident chacune de nos décisions et propositions politiques.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUpVariant} className="group glass p-10 rounded-3xl flex flex-col items-start hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 hover:border-primary/50">
              <div className="p-4 bg-primary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Souveraineté Alimentaire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Création de coopératives et bassins de rétention. Refus de l'accaparement des terres. Nos ressources agricoles doivent nourrir et enrichir nos communes.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="group glass p-10 rounded-3xl flex flex-col items-start hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 hover:border-primary/50">
              <div className="p-4 bg-primary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Building className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Équité Territoriale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Le développement du Sénégal ne se fera pas qu'à Dakar. Transfert des ressources de l'État vers les collectivités locales et les communes rurales comme Ngoundiane.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="group glass p-10 rounded-3xl flex flex-col items-start hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] border-primary/20 hover:border-primary/50">
              <div className="p-4 bg-primary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Scale className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparence & Justice</h3>
              <p className="text-muted-foreground leading-relaxed">
                Audit public annuel des budgets communaux, publication du patrimoine des dirigeants du MJCS, et justice implacable contre la corruption.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Gradient for Premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0"></div>
        
        <div className="container-app relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance max-w-4xl mx-auto tracking-tight text-white shadow-black drop-shadow-lg">
              Ngoundiane dafa jóg, Sénégal dina dem !
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
              Chaque voix compte. Chaque action fait la différence. Rejoignez des milliers de jeunes conscients pour construire notre avenir.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 rounded-full h-16 px-12 text-xl font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
              <Link href="/rejoindre">Je rejoins le MJCS</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
