'use client';
import { useState } from 'react';
import SearchForm from '@/components/molecules/SearchForm';

export default function SearchFormDemo() {
  const [q, setQ] = useState('');
  return <SearchForm value={q} onChange={setQ} resultCount={0} />;
}
