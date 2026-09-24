import { notFound } from 'next/navigation';
import HeritageImage from '@/components/atoms/HeritageImage';
import { Heading, Text } from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import { sites, getSite } from '@/data/sites';

export function generateStaticParams() { return sites.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) { const s = getSite(params.slug); return { title: s?.name }; }

export default function SitePage({ params }) {
  const site = getSite(params.slug);
  if (!site) notFound();
  return (
    <article className="container" style={{ maxWidth: '48rem' }}>
      <Text small muted>{site.municipality} · {site.category}</Text>
      <Heading level={1}>{site.name}</Heading>
      <HeritageImage src={site.image} alt={`Illustration of ${site.name}`} priority />
      <Text>{site.summary}</Text>
      <Text>{site.details}</Text>
      <Button variant="secondary" href="/">Back to all sites</Button>
    </article>
  );
}
