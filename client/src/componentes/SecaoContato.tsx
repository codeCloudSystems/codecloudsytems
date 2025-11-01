import { Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import BlurText from "./BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};


export default function SecaoContato() {
  return (
    <section id="contato" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <BlurText
              text="Entre em Contato"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center"
            />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre o seu projeto e transformar suas ideias em
            realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      cod3cloudsyst3ms@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SiWhatsapp className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground">+55 86 9809-5321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      R. Biguaçu, 1021 - Jardim Ipê, Foz do Iguaçu - PR
                      <br />
                      CEP: 85869-532
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card rounded-lg p-8 border border-card-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Fale Conosco pelo WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SiWhatsapp className="h-12 w-12 text-[#25D366]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Atendimento Rápido e Direto
                  </h3>
                  <p className="text-muted-foreground">
                    Clique no botão abaixo para iniciar uma conversa conosco no
                    WhatsApp. Respondemos rapidamente e podemos discutir seu
                    projeto em tempo real!
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] border-[#20BD5A] text-white"
                  data-testid="button-whatsapp-contato"
                >
                  <a
                    href="https://wa.me/5586980953210?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="mr-2 h-6 w-6" />
                    Iniciar Conversa no WhatsApp
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  Ou ligue diretamente: +55 86 9809-5321
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
