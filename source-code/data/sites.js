// To use your own photo: put it in public/images/ and change the `image` value (e.g. '/images/hundred-islands.jpg').
// Content is decoupled from UI: edit this file (or swap for a CMS/API) without touching components.
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

const rawSites = [
  { slug: 'hundred-islands', image: '/images/island.jpg', name: 'Hundred Islands National Park', municipality: 'Alaminos', category: 'Islands',
    summary: 'A cluster of small islands in Lingayen Gulf, popular for island hopping, snorkeling and kayaking.',
    details: 'Best explored by boat from the Lucap Wharf. Visit early in the day for calmer waters and fewer crowds.' },
  { slug: 'bolinao-lighthouse', image: '/images/cape.jpg', name: 'Cape Bolinao Lighthouse', municipality: 'Bolinao', category: 'Landmark',
    summary: 'A historic lighthouse overlooking the West Philippine Sea on the tip of the Bolinao peninsula.',
    details: 'Pair your visit with nearby coastal viewpoints. Sunset offers the best light for photography.' },
  { slug: 'balungao-hot-spring', image: '/images/hot.jpg', name: 'Balungao Hot Spring', municipality: 'Balungao', category: 'Springs',
    summary: 'Natural hot spring pools in the foothills, known as a relaxing inland getaway.',
    details: 'Bring a change of clothes and water. Cooler months are the most comfortable time to visit.' },
  { slug: 'patar-beach', image: '/images/patar.jpg', name: 'Patar Beach', municipality: 'Bolinao', category: 'Beach',
    summary: 'A long white-sand beach with clear water, ideal for swimming and family outings.',
    details: 'Facilities are available nearby. Weekdays are quieter than weekends and holidays.' },
  { slug: 'manleluag-spring', image: '/images/man.jpg', name: 'Manleluag Spring National Park', municipality: 'Mangatarem', category: 'Springs',
    summary: 'A forested spring park with cool, clear water in a peaceful natural setting.',
    details: 'Wear non-slip footwear. The park is well suited to a relaxed half-day visit.' },
  { slug: 'tondol-beach', image: '/images/tondol.webp', name: 'Tondol White Sand Beach', municipality: 'Anda', category: 'Beach',
    summary: 'A pale-sand beach with shallow, calm water on the Anda peninsula.',
    details: 'Bring sun protection and plan for limited shade during midday.' },
];

// Prefix every image path with the GitHub Pages basePath (e.g. /pangasinanheritage)
export const sites = rawSites.map((s) => ({ ...s, image: `${base}${s.image}` }));
export const getSite = (slug) => sites.find((s) => s.slug === slug);