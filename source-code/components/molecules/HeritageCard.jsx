import Link from 'next/link';
import HeritageImage from '../atoms/HeritageImage';
import { Heading, Text } from '../atoms/Typography';
import Icon from '../atoms/Icon';
import styles from './HeritageCard.module.css';

/** MOLECULE: Heritage Card (Image + Heading + Text + Icon). Used only for tourist-site previews. */
export default function HeritageCard({ site, headingLevel = 3 }) {
  return (
    <div className={styles.wrap}>
      <article className={styles.card}>
        <HeritageImage src={site.image} alt={`Illustration of ${site.name}`} />
        <div className={styles.body}>
          <Text as="span" small muted className={styles.loc}><Icon name="pin" size={16} /> {site.municipality}</Text>
          <Heading level={headingLevel} size="h3">
            <Link href={`/sites/${site.slug}/`} className={styles.link}>{site.name}</Link>
          </Heading>
          <Text muted>{site.summary}</Text>
        </div>
      </article>
    </div>
  );
}
