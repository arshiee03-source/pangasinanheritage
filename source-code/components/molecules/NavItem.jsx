'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavItem.module.css';

/** MOLECULE: Navigation Item (link + active state). Sets aria-current for screen readers. */
export default function NavItem({ href, children }) {
  const pathname = usePathname();
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
  return (
    <Link href={href} className={`${styles.item} ${active ? styles.active : ''}`} aria-current={active ? 'page' : undefined}>
      {children}
    </Link>
  );
}
