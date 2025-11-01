import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BotaoWhatsApp() {
  const abrirWhatsApp = () => {
    const numeroWhatsApp = '5511999999999';
    const mensagem = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Code Cloud Systems.');
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
  };

  return (
    <Button
      onClick={abrirWhatsApp}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] border-0 transition-all duration-300 hover:scale-110 animate-bounce"
      style={{ animationDuration: '2s' }}
      data-testid="button-whatsapp-flutuante"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
}
