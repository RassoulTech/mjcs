import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container-app py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary/20 shadow-sm bg-white">
                <Image 
                  src="/logo.jpg" 
                  alt="Logo MJCS" 
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-blue-600 uppercase">
                MJCS
              </h3>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Mouvement Jeunesse Consciente du Sénégal. Un mouvement politique dédié à la souveraineté économique et au développement de nos communes, enraciné à Ngoundiane.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/histoire" className="hover:text-primary transition-colors">Histoire</Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-primary transition-colors">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/fonctionnement" className="hover:text-primary transition-colors">Organisation</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Nous rejoindre</h4>
            <p className="text-sm text-muted-foreground">
              Ngoundiane dafa jóg ! Rejoignez-nous pour bâtir le Sénégal de demain.
            </p>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/rejoindre">Devenir membre</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mouvement Jeunesse Consciente du Sénégal (MJCS). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
