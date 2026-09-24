'use client';
import { useId } from 'react';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import styles from './SearchForm.module.css';

/** MOLECULE: Search Form (label + input + Button). Controlled by the parent via value/onChange. */
export default function SearchForm({ value, onChange, resultCount }) {
  const id = useId();
  return (
    <form role="search" className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor={id} className={styles.label}>Search heritage sites</label>
      <div className={styles.row}>
        <div className={styles.field}>
          <Icon name="search" />
          <input id={id} type="search" value={value} placeholder="Try “beach” or “Bolinao”"
            onChange={(e) => onChange(e.target.value)} className={styles.input} />
        </div>
        <Button type="submit">Search</Button>
      </div>
      <p className="sr-only" role="status" aria-live="polite">{resultCount} sites found</p>
    </form>
  );
}
