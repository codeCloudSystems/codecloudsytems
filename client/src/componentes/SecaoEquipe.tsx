import { Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BlurText from "./BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};


const membros = [
  {
    nome: "Lucas Santos",
    cargo: "CEO & Fundador",
    bio: "Técnico em Informática, Analista e Desenvolvedor de Sistemas e Engenheiro de Software. Responsável pela visão estratégica e pela arquitetura das soluções.",
    iniciais: "LS",
  },
  {
    nome: "José Gabriel",
    cargo: "CTO",
    bio: "Técnico em Informática e Desenvolvedor Full Stack. Atua na liderança técnica e integração de novas tecnologias no ecossistema da empresa.",
    iniciais: "JG",
  },
  {
    nome: "Henrique Alves",
    cargo: "Frontend Developer",
    bio: "Especialista em interfaces modernas com React e Next.js, focado em experiência do usuário e performance visual.",
    iniciais: "HA",
  },
  {
    nome: "Amanda Alves",
    cargo: "UX Designer",
    bio: "UX/UI Designer com foco em design centrado no usuário, prototipagem e usabilidade para aplicações web e mobile.",
    iniciais: "AA",
  },
];

export default function SecaoEquipe() {
  return (
    <section id="equipe" className="py-20 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <BlurText
              text="Nossa Equipe"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais altamente qualificados e apaixonados por tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {membros.map((membro, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 group text-center"
              data-testid={`card-membro-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary/50 group-hover:border-primary transition-colors">
                    <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
                      {membro.iniciais}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    {membro.nome}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {membro.cargo}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {membro.bio}
                  </p>
                  <div className="flex gap-3">
                    <button
                      className="w-9 h-9 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center hover-elevate transition-colors"
                      data-testid={`button-linkedin-${index}`}
                      onClick={() => console.log("LinkedIn clicado")}
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </button>
                    <button
                      className="w-9 h-9 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center hover-elevate transition-colors"
                      data-testid={`button-github-${index}`}
                      onClick={() => console.log("GitHub clicado")}
                    >
                      <Github className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
