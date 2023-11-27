import { twJoin } from 'tailwind-merge';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  mode?: 'primary' | 'secondary';
}

export function ExternalLink({ href, children, mode = "primary" }: ExternalLinkProps) {
  const modeClasses = {
    primary: 'text-purple-500 hover:text-purple-600',
    secondary: 'text-green-400 hover:text-green-500',
  };

  return (
    <a className={twJoin(modeClasses[mode])} href={href} target='_blank'>
      {children}
    </a>
  );
}
