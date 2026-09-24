import { Heading, Text } from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import HeritageExplorer from '@/components/organisms/HeritageExplorer';
import { sites } from '@/data/sites';

export default function Home() {
  return (
    <>
      <section className="hero" style={{ marginTop: 'calc(var(--space-8) * -1)' }}>
        <div className="container">
          <Heading level={1}>Discover Pangasinan</Heading>
          <Text>From the Hundred Islands to Bolinao’s lighthouse and Balungao’s hot spring, explore the province’s most iconic heritage sites.</Text>
          <Button variant="secondary" href="#sites">Browse sites</Button>
        </div>
      </section>
      <section id="sites" className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <Heading level={2}>Heritage sites</Heading>
        <HeritageExplorer sites={sites} />
      </section>
    </>
  );
}
