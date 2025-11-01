import { Code2, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BlurText from './BlurText/BlurText';


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const caracteristicas = [
  {
    icone: Code2,
    titulo: 'Desenvolvimento de Excelência',
    descricao: 'Utilizamos as mais modernas tecnologias e melhores práticas de desenvolvimento para criar soluções robustas e escaláveis.',
  },
  {
    icone: Rocket,
    titulo: 'Inovação Constante',
    descricao: 'Estamos sempre atualizados com as últimas tendências tecnológicas para oferecer soluções inovadoras e competitivas.',
  },
  {
    icone: Users,
    titulo: 'Foco no Cliente',
    descricao: 'Trabalhamos em parceria com nossos clientes, entendendo suas necessidades e entregando resultados que superam expectativas.',
  },
];

export default function SecaoSobre() {
  return (
    <section id="sobre" className="relative py-20 sm:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/25 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
        <div className="flex justify-center">
            <BlurText
              text="Sobre Nós"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A <span className="text-primary font-semibold">Code Cloud Systems</span> transforma ideias em{' '}
            <span className="font-semibold">soluções digitais</span> personalizadas e inovadoras. Especializados em{' '}
            <span className="font-semibold">desenvolvimento web, mobile e cloud</span>, criamos aplicações responsivas e escaláveis,
            focando em usabilidade, desempenho e design moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caracteristicas.map((item, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-500 hover:scale-105 hover:shadow-2xl" 
              data-testid={`card-caracteristica-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.descricao}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 sm:p-12 border border-card-border">
          <p className="text-lg text-card-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Oferecemos consultoria em TI, integração de APIs, automação e desenvolvimento de soluções cloud,
            adaptando nossos serviços às necessidades dos clientes para garantir decisões informadas e crescimento estratégico.
            Combinamos <span className="text-primary font-semibold">expertise técnica</span> e{' '}
            <span className="text-primary font-semibold">visão estratégica</span> para alavancar o sucesso dos nossos clientes no ambiente digital.
          </p>
        </div>
      </div>
    </section>
  );
}
