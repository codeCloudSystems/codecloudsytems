import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// todo: remove mock functionality
const projetos = [
  {
    titulo: 'Plataforma E-commerce Premium',
    descricao: 'Marketplace completo com gestão de produtos, pagamentos integrados e painel administrativo.',
    tecnologias: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    categoria: 'Web',
  },
  {
    titulo: 'App Fintech Mobile',
    descricao: 'Aplicativo bancário com transferências, investimentos e cartão virtual.',
    tecnologias: ['React Native', 'Firebase', 'Stripe'],
    categoria: 'Mobile',
  },
  {
    titulo: 'Sistema de Gestão Hospitalar',
    descricao: 'Plataforma completa para gestão de pacientes, agendamentos e prontuários eletrônicos.',
    tecnologias: ['Vue.js', 'Python', 'MongoDB'],
    categoria: 'Web',
  },
  {
    titulo: 'API de Dados Financeiros',
    descricao: 'API RESTful para consulta e análise de dados do mercado financeiro em tempo real.',
    tecnologias: ['Node.js', 'GraphQL', 'Redis'],
    categoria: 'API',
  },
  {
    titulo: 'Plataforma EAD',
    descricao: 'Sistema de ensino à distância com vídeo-aulas, exercícios e gamificação.',
    tecnologias: ['Next.js', 'TypeScript', 'PostgreSQL'],
    categoria: 'Web',
  },
  {
    titulo: 'App de Logística',
    descricao: 'Rastreamento de entregas em tempo real com otimização de rotas.',
    tecnologias: ['Flutter', 'Firebase', 'Google Maps'],
    categoria: 'Mobile',
  },
];

const categorias = ['Todos', 'Web', 'Mobile', 'API'];

export default function SecaoProjetos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const projetosFiltrados = categoriaAtiva === 'Todos'
    ? projetos
    : projetos.filter(p => p.categoria === categoriaAtiva);

  return (
    <section id="projetos" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos Realizados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvemos com excelência e inovação
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={categoriaAtiva === categoria ? 'default' : 'outline'}
              onClick={() => setCategoriaAtiva(categoria)}
              data-testid={`button-categoria-${categoria.toLowerCase()}`}
            >
              {categoria}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetosFiltrados.map((projeto, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 group"
              data-testid={`card-projeto-${index}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {projeto.titulo}
                  </CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-base">
                  {projeto.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
