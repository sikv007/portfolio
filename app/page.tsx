import { Background } from '@/components/Background';
import { ExternalLink } from '@/components/ExternalLink';
import { Logo } from '@/components/Logo';

export default function Home() {
  return (
    <main className='bg-neutral-900 w-screen h-screen overflow-hidden'>
      <Logo />
      <Background />
      <section>
        <ExternalLink href='https://github.com/sikv007'>GitHub</ExternalLink>
        <ExternalLink href='https://www.linkedin.com/in/sigurd-illguth-kvamme-3ab08b225/'>LinkedIn</ExternalLink>
      </section>
    </main>
  );
}
