'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavItem from '../molecules/NavItem';
import Icon from '../atoms/Icon';
import styles from './HeaderNav.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/design-system/', label: 'Design System' },
];

/** ORGANISM: Header Navigation. Collapsible menu on mobile, inline links from 48em. */
export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand}>Pangasinan Heritage</Link>
        <button type="button" className={styles.toggle} aria-expanded={open} aria-controls="main-nav"
          onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="main-nav" aria-label="Main" className={`${styles.nav} ${open ? styles.open : ''}`}>
          <ul>
            {links.map((l) => <li key={l.href} onClick={() => setOpen(false)}><NavItem href={l.href}>{l.label}</NavItem></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
