import { Heading, Text } from '@/components/atoms/Typography';

/** Documentation wrapper: 1) Visual Preview 2) Usage Context 3) Responsive Logic 4) Code Reference */
export default function ComponentDoc({ name, level, usage, responsive, code, children }) {
  const id = name.toLowerCase().replace(/\s+/g, '-');
  return (
    <section id={id} aria-labelledby={`${id}-h`} style={{ marginBottom: '3rem' }}>
      <Text small muted>{level}</Text>
      <Heading level={3} id={`${id}-h`}>{name}</Heading>
      <Heading level={4}>1. Visual Preview</Heading>
      <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', padding: '1rem', marginBottom: '1rem' }}>{children}</div>
      <Heading level={4}>2. Usage Context</Heading>
      <Text>{usage}</Text>
      <Heading level={4}>3. Responsive Logic</Heading>
      <ul>{responsive.map((r) => <li key={r}>{r}</li>)}</ul>
      <Heading level={4}>4. Code Reference</Heading>
      <pre tabIndex={0} style={{ background: '#10262a', color: '#e8f4f4', padding: '1rem', borderRadius: 'var(--radius)', overflowX: 'auto', fontSize: '.85rem' }}><code>{code}</code></pre>
    </section>
  );
}
