import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const linksMapa = [
  { nome: 'Início', href: '#inicio' },
  { nome: 'Sobre', href: '#sobre' },
  { nome: 'Tecnologias', href: '#tecnologias' },
  { nome: 'Mercados', href: '#mercados' },
  { nome: 'Serviços', href: '#servicos' },
  { nome: 'Projetos', href: '#projetos' },
  { nome: 'Equipe', href: '#equipe' },
  { nome: 'Contato', href: '#contato' },
];

const redesSociais = [
  { icone: Github, nome: 'GitHub', href: '#' },
  { icone: Linkedin, nome: 'LinkedIn', href: '#' },
  { icone: Twitter, nome: 'Twitter', href: '#' },
  { icone: Mail, nome: 'Email', href: '#' },
];

export default function Rodape() {
  const rolarParaSecao = (href: string) => {
    const elemento = document.querySelector(href);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Code Cloud Systems</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformando ideias em soluções digitais inovadoras. 
              Desenvolvemos tecnologia de ponta para impulsionar o seu negócio.
            </p>
            <div className="flex gap-3">
              {redesSociais.map((rede, index) => (
                <button
                  key={index}
                  onClick={() => console.log(`${rede.nome} clicado`)}
                  className="w-10 h-10 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center hover-elevate transition-colors"
                  data-testid={`button-social-${rede.nome.toLowerCase()}`}
                >
                  <rede.icone className="h-5 w-5 text-primary" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Mapa do Site</h4>
            <ul className="space-y-2">
              {linksMapa.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => rolarParaSecao(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.nome.toLowerCase()}`}
                  >
                    {link.nome}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {linksMapa.slice(4).map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => rolarParaSecao(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-quick-${link.nome.toLowerCase()}`}
                  >
                    {link.nome}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Code Cloud Systems. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => console.log('Política de Privacidade')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-privacidade"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => console.log('Termos de Uso')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-termos"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
