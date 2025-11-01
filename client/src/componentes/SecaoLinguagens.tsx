import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiNestjs,
  SiHibernate,
  SiCplusplus,
  SiFlask,
  SiFirebase,
  SiMongodb,
  SiArduino,
} from "react-icons/si";
import { Database, Code2, Server } from "lucide-react";
import BlurText from "./BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const tecnologias = [
  // 🧠 Linguagens
  { nome: "Java", icone: Code2, cor: "#007396" },
  { nome: "C++", icone: SiCplusplus, cor: "#00599C" },
  { nome: "Python", icone: SiPython, cor: "#3776AB" },
  { nome: "Node.js", icone: SiNodedotjs, cor: "#339933" },

  // ⚙️ Frameworks e runtimes
  { nome: "Quarkus", icone: Server, cor: "#4695EB" },
  { nome: "Arduino (C++)", icone: SiArduino, cor: "#00979D" },
  { nome: "Flask", icone: SiFlask, cor: "#000000" },
  { nome: "NestJS", icone: SiNestjs, cor: "#E0234E" },

  // 🗄️ Banco de dados e ORM
  { nome: "PostgreSQL", icone: SiPostgresql, cor: "#4169E1" },
  { nome: "MongoDB", icone: SiMongodb, cor: "#47A248" },
  { nome: "Firebase", icone: SiFirebase, cor: "#FFCA28" },
  { nome: "Prisma", icone: SiPrisma, cor: "#2D3748" },
  { nome: "Hibernate", icone: SiHibernate, cor: "#59666C" },

  // ☁️ Cloud e DevOps
  { nome: "Docker", icone: SiDocker, cor: "#2496ED" },
  { nome: "Kubernetes", icone: SiKubernetes, cor: "#326CE5" },
  { nome: "AWS", icone: SiAmazonwebservices, cor: "#FF9900" },
];

export default function SecaoLinguagens() {
  return (
    <section id="tecnologias" className="py-20 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <BlurText
              text="Linguagens & Tecnologias"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dominamos as tecnologias mais modernas e relevantes do mercado para
            criar soluções de alto desempenho
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {tecnologias.map((tech, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group"
              data-testid={`card-tecnologia-${tech.nome.toLowerCase()}`}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <tech.icone
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4 transition-transform group-hover:scale-110"
                  style={{ color: tech.cor }}
                />
                <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
                  {tech.nome}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            E muitas outras tecnologias conforme as necessidades do seu projeto
          </p>
        </div>
      </div>
    </section>
  );
}
