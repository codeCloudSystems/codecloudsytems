import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [tema, setTema] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const temaArmazenado = localStorage.getItem('tema') as 'light' | 'dark' | null;
    if (temaArmazenado) {
      setTema(temaArmazenado);
      document.documentElement.classList.toggle('dark', temaArmazenado === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const alternarTema = () => {
    const novoTema = tema === 'dark' ? 'light' : 'dark';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
    document.documentElement.classList.toggle('dark', novoTema === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={alternarTema}
      data-testid="button-theme-toggle"
      className="relative"
    >
      <Sun className="text-primary hover:text-primary/90 transition-colors h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="text-primary hover:text-primary/90 transition-colors absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}
