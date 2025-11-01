import { Code, Smartphone, Cloud, Settings, Database, Zap, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BlurText from './BlurText/BlurText';

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const servicos = [
  {
    icone: Code,
    titulo: 'Desenvolvimento Web',
    descricao:
      'Criação de websites, sistemas e plataformas web modernas, responsivas e de alta performance, com foco em experiência do usuário e escalabilidade.',
  },
  {
    icone: Smartphone,
    titulo: 'Desenvolvimento Mobile',
    descricao:
      'Aplicativos nativos e híbridos para Android e iOS, com integração total ao backend e interfaces fluidas e intuitivas.',
  },
  {
    icone: Database,
    titulo: 'Integração de APIs',
    descricao:
      'Desenvolvimento e integração de APIs REST e GraphQL, conectando sistemas internos e externos de forma segura e eficiente.',
  },
  {
    icone: Zap,
    titulo: 'Automação',
    descricao:
      'Automação de processos empresariais, implantação de pipelines CI/CD e rotinas inteligentes para ganho de produtividade.',
  },
  {
    icone: Settings,
    titulo: 'CRM e ERP',
    descricao:
      'Desenvolvimento e personalização de sistemas CRM e ERP sob medida, integrando setores e centralizando operações da empresa.',
  },
  {
    icone: Cpu,
    titulo: 'Automação IoT',
    descricao:
      'Integração entre hardware e software com dispositivos inteligentes, sensores e controladores para soluções em IoT e Indústria 4.0.',
  },
];


export default function SecaoServicos() {
  return (
    <section id="servicos" className="relative py-20 sm:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <BlurText
              text="Nossos Serviços"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de tecnologia para impulsionar o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              data-testid={`card-servico-${servico.titulo.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <servico.icone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{servico.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {servico.descricao}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
