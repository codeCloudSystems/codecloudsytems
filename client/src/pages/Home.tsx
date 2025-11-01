import Navegacao from '@/componentes/Navegacao';
import SecaoHero from '@/componentes/SecaoHero';
import SecaoSobre from '@/componentes/SecaoSobre';
import SecaoLinguagens from '@/componentes/SecaoLinguagens';
import SecaoMercados from '@/componentes/SecaoMercados';
import SecaoServicos from '@/componentes/SecaoServicos';
import SecaoProjetos from '@/componentes/SecaoProjetos';
import SecaoEquipe from '@/componentes/SecaoEquipe';
import SecaoContato from '@/componentes/SecaoContato';
import Rodape from '@/componentes/Rodape';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navegacao />
      <SecaoHero />
      <SecaoSobre />
      <SecaoLinguagens />
      <SecaoMercados />
      <SecaoServicos />
      {/* <SecaoProjetos /> */}
      <SecaoEquipe />
      <SecaoContato />
      <Rodape />
    </div>
  );
}
