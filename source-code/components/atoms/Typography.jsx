import styles from './Typography.module.css';

/** ATOM: Heading. `level` sets the semantic tag (h1-h4), `size` sets the visual size independently. */
export function Heading({ level = 2, size, children, className = '', ...props }) {
  const Tag = `h${level}`;
  return <Tag className={`${styles.heading} ${styles[size || `h${level}`]} ${className}`} {...props}>{children}</Tag>;
}

/** ATOM: Text. */
export function Text({ as: Tag = 'p', muted = false, small = false, children, className = '', ...props }) {
  return <Tag className={`${muted ? styles.muted : ''} ${small ? styles.small : ''} ${className}`} {...props}>{children}</Tag>;
}
