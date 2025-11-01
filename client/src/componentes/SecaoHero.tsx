import { Suspense, lazy } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/Copia_de_Black_Global_Tech_Internet_Company_Logo_1761976847935.png';
import { SiWhatsapp } from 'react-icons/si';
import TextType from './TextTypeProps/TextTypeProps';

const RedeNeuralCanvas = lazy(() => import('./RedeNeuralCanvas'));

export default function SecaoHero() {
  const rolarParaSecao = (href: string) => {
    const elemento = document.querySelector(href);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <RedeNeuralCanvas />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="-mt-20 max-w-4xl mx-auto text-center">
          <div className="flex justify-center animate-float">
            <img 
              src={logoImage} 
              alt="Code Cloud Systems Logo" 
              className="w-auto" 
              style={{ width: '500px', height: 'auto' }}
            />
          </div>
          <h1 className="-mt-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
            Transformando Ideias em
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <TextType
              text={[
                "Projetos Inovadores",
                "Experiências Digitais",
                "Soluções Inteligentes",
                "Tecnologia de Alto Nível"
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient"
            />
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desenvolvemos soluções tecnológicas inovadoras e personalizadas para impulsionar o seu negócio no ambiente digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#20BD5A] border-[#20BD5A]"
              data-testid="button-hero-whatsapp"
            >
              <a href="https://wa.me/5586980953210?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2 h-6 w-6" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => rolarParaSecao('#sobre')}
              className="text-lg px-8 py-6 h-auto backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="button-hero-saiba-mais"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        <button
          onClick={() => rolarParaSecao('#sobre')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-indicador"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
}
