import Hero from '../sections/Hero.jsx';
import Sobre from '../sections/Sobre.jsx';
import Destaques from '../sections/Destaques.jsx';
import Freios from '../sections/Freios.jsx';
import ChamadaFinal from '../sections/ChamadaFinal.jsx';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Destaques />
      <Freios />
      <ChamadaFinal />
    </main>
  );
}
