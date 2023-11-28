import { LinkProps } from 'next/link';

export type LogoLinkProps = Omit<LinkProps, 'href'> & Partial<Pick<LinkProps, 'href'>>
