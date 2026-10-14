'use client';

import { useState } from 'react';
import { modules } from '../../data/modules';
import ModuleCard from '../../components/ModuleCard';
import SearchBar from '../../components/SearchBar';

export default function ModulesPage() {
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const phases = ['All', ...Array.from(new Set(modules.map((m) => m.phase)))];

  const filtered = modules.filter((m) => {
    const matchesPhase = selectedPhase === 'All' || m.phase === selectedPhase;
    const matchesQuery =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPhase && matchesQuery;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Curriculum Modules</h1>
        <p className="text-slate-600 dark:text-slate-300">
          56 sequential modules designed to build production full-stack engineering expertise from first principles.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <div className="max-w-md w-full">
          <SearchBar query={searchQuery} onChange={setSearchQuery} placeholder="Filter modules..." />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedPhase === phase
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              {phase.replace('Phase ', 'P')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">No modules match your current filter criteria.</p>
        </div>
      )}
    </div>
  );
}
