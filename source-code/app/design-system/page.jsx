import ComponentDoc from './ComponentDoc';
import Button from '@/components/atoms/Button';
import { Heading, Text } from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import HeritageImage from '@/components/atoms/HeritageImage';
import HeritageCard from '@/components/molecules/HeritageCard';
import SearchFormDemo from './SearchFormDemo';
import NavItem from '@/components/molecules/NavItem';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import HeaderNav from '@/components/organisms/HeaderNav';
import { sites } from '@/data/sites';

export const metadata = { title: 'Atomic Design System' };

const tokens = [
  ['--color-primary', '#0b5d63'], ['--color-primary-dark', '#083f43'], ['--color-accent', '#9a3f00'],
  ['--color-text', '#17292b'], ['--color-muted', '#4a5f62'], ['--color-bg', '#f4f7f7'], ['--color-focus', '#ffbf47'],
];

export default function DesignSystem() {
  return (
    <div className="container">
      <Heading level={1}>Atomic Design System</Heading>
      <Text muted>Component library for the Pangasinan Heritage Digital Showcase, organised by Brad Frost’s Atomic Design: atoms → molecules → organisms.</Text>

      <Heading level={2}>Atoms</Heading>

      <ComponentDoc name="Button" level="Atom"
        usage="Use for primary actions (Search, Browse) and secondary navigation calls to action. Renders a link when href is passed, otherwise a native button."
        responsive={['Mobile (<40em): full width, easy thumb target (min 44px).', 'Tablet/Desktop (≥40em): shrinks to content width.', 'Variants: primary, secondary, ghost.']}
        code={`import Button from '@/components/atoms/Button';\n\n<Button>Search</Button>\n<Button variant="secondary" href="/">Back</Button>`}>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
          <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button>
        </div>
      </ComponentDoc>

      <ComponentDoc name="Typography" level="Atom"
        usage="Use Heading for every title (choose level for document structure, size for looks) and Text for body copy."
        responsive={['Uses clamp() fluid sizes so text scales smoothly between mobile and desktop with no breakpoints.', 'Body text stays at 1rem for readability.']}
        code={`import { Heading, Text } from '@/components/atoms/Typography';\n\n<Heading level={2} size="h3">Title</Heading>\n<Text muted>Supporting copy</Text>`}>
        <Heading level={2}>Heading level 2</Heading><Text>Body text example.</Text><Text muted small>Muted small caption.</Text>
      </ComponentDoc>

      <ComponentDoc name="Color Tokens" level="Atom"
        usage="Never hard-code colours in components; use CSS variables from styles/tokens.css. Every text/background pair meets WCAG 2.1 AA contrast."
        responsive={['Tokens are viewport-independent and shared across all breakpoints.', 'Spacing tokens (--space-*) keep rhythm consistent at every size.']}
        code={`/* styles/tokens.css */\n:root { --color-primary: #0b5d63; }\n\n.myThing { color: var(--color-primary); }`}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(8rem,1fr))', gap: '.75rem' }}>
          {tokens.map(([n, v]) => (
            <div key={n}><div style={{ background: v, height: 48, borderRadius: 8, border: '1px solid var(--color-border)' }} />
              <Text small as="div">{n}<br />{v}</Text></div>
          ))}
        </div>
      </ComponentDoc>

      <ComponentDoc name="Icon" level="Atom"
        usage="Inline SVG icons (no icon font download). Decorative by default; pass label when the icon alone conveys meaning."
        responsive={['Sized via the size prop (default 20px).', 'Inherits currentColor so it follows text colour in any context.']}
        code={`import Icon from '@/components/atoms/Icon';\n\n<Icon name="pin" />\n<Icon name="search" size={24} label="Search" />`}>
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-primary)' }}>
          {['pin', 'search', 'menu', 'close', 'arrow'].map((n) => <Icon key={n} name={n} size={28} />)}
        </div>
      </ComponentDoc>

      <ComponentDoc name="Image" level="Atom"
        usage="Use for every photo/illustration. alt is required. Uses fixed width/height to reserve space and avoid layout shift."
        responsive={['width:100%, height:auto: scales to its container.', 'sizes hint lets the browser choose the smallest suitable asset (100vw mobile, 50vw tablet, 33vw desktop).', 'Lazy-loaded unless priority is set (use priority for above-the-fold images).']}
        code={`import HeritageImage from '@/components/atoms/HeritageImage';\n\n<HeritageImage src="/images/patar-beach.svg" alt="Patar Beach" />`}>
        <div style={{ maxWidth: 360 }}><HeritageImage src="/images/patar-beach.svg" alt="Illustration of Patar Beach" /></div>
      </ComponentDoc>

      <Heading level={2}>Molecules</Heading>

      <ComponentDoc name="Heritage Card" level="Molecule"
        usage="Used exclusively for displaying tourist-site previews in a responsive heritage-site grid."
        responsive={['Uses a CSS container query, so it adapts to the space it is placed in, not the screen.', 'Container < 36rem: image stacked above text.', 'Container ≥ 36rem: image left (2fr), text right (3fr).', 'Whole card is one link target, so it is easy to tap on mobile.']}
        code={`import HeritageCard from '@/components/molecules/HeritageCard';\n\n<HeritageCard site={site} headingLevel={3} />`}>
        <div style={{ maxWidth: 320 }}><HeritageCard site={sites[0]} /></div>
      </ComponentDoc>

      <ComponentDoc name="Search Form" level="Molecule"
        usage="Use above listing pages to filter sites by name, town or category. Announces the result count to screen readers."
        responsive={['Mobile: input and button stacked full width.', 'Tablet/Desktop (≥40em): input and button in one row.']}
        code={`'use client';\nconst [q, setQ] = useState('');\n<SearchForm value={q} onChange={setQ} resultCount={results.length} />`}>
        <SearchFormDemo />
      </ComponentDoc>

      <ComponentDoc name="Navigation Item" level="Molecule"
        usage="A single link inside the main navigation. Sets aria-current=&quot;page&quot; on the active route."
        responsive={['Minimum 44px touch height on every screen size.', 'Stacks vertically in the mobile menu; sits inline in the desktop bar.']}
        code={`import NavItem from '@/components/molecules/NavItem';\n\n<NavItem href="/">Home</NavItem>`}>
        <NavItem href="/">Home</NavItem>
      </ComponentDoc>

      <Heading level={2}>Organisms</Heading>

      <ComponentDoc name="Heritage Grid" level="Organism"
        usage="Displays a collection of Heritage Cards on the home page or any listing page. Pass any array of sites."
        responsive={['Uses repeat(auto-fill, minmax(18rem, 1fr)), no media queries needed.', 'Mobile: 1 column. Tablet: 2 columns. Desktop: 3 columns.', 'Shows a friendly message when the list is empty.']}
        code={`import HeritageGrid from '@/components/organisms/HeritageGrid';\nimport { sites } from '@/data/sites';\n\n<HeritageGrid sites={sites} />`}>
        <HeritageGrid sites={sites.slice(0, 3)} />
      </ComponentDoc>

      <ComponentDoc name="Header Navigation" level="Organism"
        usage="Site-wide header placed once in app/layout.jsx. Includes brand link and main navigation."
        responsive={['Mobile (<48em): links hidden behind a menu button (aria-expanded/aria-controls).', 'Desktop (≥48em): menu button hidden and links shown inline.', 'Sticky at top so navigation is always reachable.']}
        code={`// app/layout.jsx\nimport HeaderNav from '@/components/organisms/HeaderNav';\n\n<HeaderNav />`}>
        <div style={{ position: 'relative', overflow: 'hidden' }}><HeaderNav /></div>
      </ComponentDoc>
    </div>
  );
}
