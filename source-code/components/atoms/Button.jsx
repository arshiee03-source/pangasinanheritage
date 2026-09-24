import Link from 'next/link';
import styles from './Button.module.css';

/** ATOM: Button. Renders <a> (via next/link) when `href` is given, otherwise <button>. */
export default function Button({ variant = 'primary', href, children, className = '', ...props }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={cls} {...props}>{children}</Link>;
  return <button type="button" className={cls} {...props}>{children}</button>;
}
