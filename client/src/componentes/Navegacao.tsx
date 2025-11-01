import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { SiWhatsapp } from "react-icons/si";

const linkNavegacao = [
  { nome: "Início", href: "#inicio" },
  { nome: "Sobre", href: "#sobre" },
  { nome: "Tecnologias", href: "#tecnologias" },
  { nome: "Mercados", href: "#mercados" },
  { nome: "Serviços", href: "#servicos" },
  { nome: "Projetos", href: "#projetos" },
  { nome: "Equipe", href: "#equipe" },
  { nome: "Contato", href: "#contato" },
];

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

  const rolarParaSecao = (href: string) => {
    const elemento = document.querySelector(href);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
      setMenuAberto(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => rolarParaSecao("#inicio")}
              className="
                text-3xl 
                font-extrabold 
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r from-white via-gray-400 via-blue-400 to-blue-900
                hover:scale-105 
                transition-transform 
                relative
              "
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.4), 0 0 8px rgba(0,0,255,0.2)'
              }}
              data-testid="link-logo"
            >
              CCS
            </button>
          </div>


          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {linkNavegacao.map((link) => (
                <button
                  key={link.nome}
                  onClick={() => rolarParaSecao(link.href)}
                  className="text-primary hover:text-primary/90 transition-colors text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  data-testid={`link-${link.nome.toLowerCase()}`}
                >
                  {link.nome}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:gap-2">
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BD5A] border-[#20BD5A]"
              data-testid="button-whatsapp-header"
            >
              <a
                href="https://wa.me/5586980953210?text=Olá!%20Gostaria%20de%20mais%20informações"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuAberto(!menuAberto)}
              data-testid="button-menu-mobile"
            >
              {menuAberto ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {menuAberto && (
        <div className="md:hidden border-t border-border bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {linkNavegacao.map((link) => (
              <button
                key={link.nome}
                onClick={() => rolarParaSecao(link.href)}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left hover-elevate"
                data-testid={`link-mobile-${link.nome.toLowerCase()}`}
              >
                {link.nome}
              </button>
            ))}
            <div className="pt-2">
              <Button
                asChild
                variant="default"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] border-[#20BD5A]"
                data-testid="button-whatsapp-mobile"
              >
                <a
                  href="https://wa.me/5586980953210?text=Olá!%20Gostaria%20de%20mais%20informações"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
