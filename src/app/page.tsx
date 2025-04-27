import { TeamShowcase } from '@/components/team-showcase';
import { ContactForm } from '@/components/contact-form';
import AboutPage from './about/page';
import Formationvd from '@/components/formation-vd';

export default function Home() {
  return (
    <div className="grid gap-8">
      <section id="team" className="container mx-auto py-12 animate-on-scroll">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-teal-700">Formations</h2>
        <div className="text-3xl font-bold mb-6 text-center text-gray-600">
          Découvrez la formation et le consulting professionnel
        </div>
        <TeamShowcase />
      </section>

      <section id="alignment-about" className="container mx-auto py-12 animate-on-scroll">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-teal-700">À propos</h2>
        <AboutPage />
      </section>

      <section id="alignment-video" className="container mx-auto py-12 animate-on-scroll">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-teal-700">Formation Vidéo</h2>
        <Formationvd />
      </section>

      <section id="contact" className="container mx-auto py-12 animate-on-scroll">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contactez-nous</h2>
        <ContactForm />
      </section>
    </div>
  );
}
