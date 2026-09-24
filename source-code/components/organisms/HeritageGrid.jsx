import HeritageCard from '../molecules/HeritageCard';
import { Text } from '../atoms/Typography';
import styles from './HeritageGrid.module.css';

/** ORGANISM: Heritage Grid. Pure presentational: pass any array of sites. */
export default function HeritageGrid({ sites }) {
  if (!sites.length) return <Text muted>No heritage sites match your search.</Text>;
  return (
    <ul className={styles.grid}>
      {sites.map((site) => (
        <li key={site.slug}><HeritageCard site={site} /></li>
      ))}
    </ul>
  );
}
