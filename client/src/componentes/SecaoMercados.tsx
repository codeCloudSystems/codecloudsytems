import { ShoppingCart, DollarSign, Heart, GraduationCap, Truck, Cloud, Shield, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BlurText from './BlurText/BlurText';

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const mercados = [
  {
    icone: ShoppingCart,
    titulo: 'E-commerce',
    descricao: 'Plataformas de vendas online completas, com integração de pagamentos, gestão de estoque e experiência de compra otimizada.',
  },
  {
    icone: DollarSign,
    titulo: 'Fintech',
    descricao: 'Soluções financeiras inovadoras, incluindo sistemas de pagamento, gestão financeira e aplicações bancárias seguras.',
  },
  {
    icone: Heart,
    titulo: 'Saúde',
    descricao: 'Sistemas de gestão hospitalar, telemedicina, prontuários eletrônicos e aplicativos de saúde e bem-estar.',
  },
  {
    icone: GraduationCap,
    titulo: 'Educação',
    descricao: 'Plataformas de ensino EAD, gestão escolar, conteúdo interativo e ferramentas de aprendizado personalizadas.',
  },
  {
    icone: Truck,
    titulo: 'Logística',
    descricao: 'Sistemas de rastreamento, gestão de frotas, otimização de rotas e controle de entregas em tempo real.',
  },
  {
    icone: Cloud,
    titulo: 'SaaS',
    descricao: 'Desenvolvimento de software como serviço escalável, multi-tenant e com arquitetura cloud-native moderna.',
  },
  {
    icone: Shield,
    titulo: 'Segurança',
    descricao: 'Soluções de cibersegurança, proteção de dados, compliance e auditoria de sistemas empresariais.',
  },
  {
    icone: Smartphone,
    titulo: 'Mobile Apps',
    descricao: 'Aplicativos nativos e híbridos para iOS e Android, com foco em performance e experiência do usuário.',
  },
];

export default function SecaoMercados() {
  return (
    <section id="mercados" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <BlurText
              text="Mercados de Atuação"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendemos diversos segmentos com soluções personalizadas e inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mercados.map((mercado, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 group border-l-4 border-l-primary/50 hover:border-l-primary"
              data-testid={`card-mercado-${mercado.titulo.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <mercado.icone className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{mercado.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {mercado.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
