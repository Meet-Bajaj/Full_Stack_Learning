'use client';

import { useState } from 'react';
import Link from 'next/link';
import { modules } from '../../data/modules';
import SearchBar from '../../components/SearchBar';
import { BookOpen, Layers } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = query.trim()
    ? modules.filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.description.toLowerCase().includes(query.toLowerCase()) ||
          m.phase.toLowerCase().includes(query.toLowerCase()) ||
          m.id.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Curriculum Search</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Instantly search across all 56 course modules, technologies, architecture patterns, and learning topics.
        </p>
      </div>

      <SearchBar query={query} onChange={setQuery} placeholder="Type a concept, technology (e.g., Redis, JWT, Docker, WebSockets)..." />

      {query.trim() === '' ? (
        <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <Layers className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" />
          <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-base">Enter a search keyword</h3>
          <p className="text-sm text-slate-400">Discover modules, lessons, and cheat sheets.</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">No results found for &ldquo;{query}&rdquo;.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Found {results.length} matching module{results.length > 1 ? 's' : ''}
          </p>
          <div className="space-y-3">
            {results.map((m) => (
              <Link
                key={m.id}
                href={`/modules/${m.id}`}
                className="block bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                    {m.phase}
                  </span>
                  <span className="text-xs text-slate-400">{m.estimatedHours} Hours</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center justify-between">
                  <span>{m.name}</span>
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{m.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
