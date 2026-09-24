'use client';
import { useMemo, useState } from 'react';
import SearchForm from '../molecules/SearchForm';
import HeritageGrid from './HeritageGrid';

/** ORGANISM: Search + Grid composed together. Filters by name, town or category. */
export default function HeritageExplorer({ sites }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? sites.filter((s) => [s.name, s.municipality, s.category].join(' ').toLowerCase().includes(q)) : sites;
  }, [query, sites]);
  return (
    <>
      <SearchForm value={query} onChange={setQuery} resultCount={results.length} />
      <HeritageGrid sites={results} />
    </>
  );
}
