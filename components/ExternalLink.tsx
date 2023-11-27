import { twJoin } from 'tailwind-merge';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  mode?: 'primary' | 'secondary';
}

export function ExternalLink({ href, children, mode = 'primary' }: ExternalLinkProps) {
  const modeClasses = {
    primary: 'bg-white text-neutral-900',
    secondary: 'bg-transparent text-white',
  };

  return (
    <a
      className={twJoin(
        modeClasses[mode],
        'group flex gap-2 rounded-sm py-2 border border-white items-center justify-center w-32 transition-all hover:bg-purple-500 hover:border-purple-500 hover:text-white'
      )}
      href={href}
      target='_blank'
      rel='noreferer'>
      {children}
    </a>
  );
}
