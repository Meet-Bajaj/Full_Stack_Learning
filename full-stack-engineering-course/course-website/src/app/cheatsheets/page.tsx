'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../../components/SearchBar';
import { FileCode, Download, ExternalLink } from 'lucide-react';

interface CheatSheetItem {
  id: string;
  title: string;
  category: string;
  description: string;
  file: string;
}

const cheatsheets: CheatSheetItem[] = [
  { id: 'javascript', title: 'JavaScript (ES2024)', category: 'Languages', description: 'Closures, Event Loop, Promises, Array methods, Destructuring', file: 'javascript-cheatsheet.md' },
  { id: 'typescript', title: 'TypeScript 5.x', category: 'Languages', description: 'Generics, Utility Types, Narrowing, Discriminated Unions', file: 'typescript-cheatsheet.md' },
  { id: 'react', title: 'React 18 & Hooks', category: 'Frontend', description: 'useEffect, useMemo, custom hooks, TanStack Query, rendering rules', file: 'react-cheatsheet.md' },
  { id: 'nextjs', title: 'Next.js 14 App Router', category: 'Frontend', description: 'Server Components, Server Actions, Caching, Middleware, Routing', file: 'nextjs-cheatsheet.md' },
  { id: 'nodejs', title: 'Node.js Runtime', category: 'Backend', description: 'Streams, Buffers, Child Processes, Event Loop phases, fs module', file: 'nodejs-cheatsheet.md' },
  { id: 'express', title: 'Express.js Framework', category: 'Backend', description: 'Middleware pipeline, Error handling, Routing, CORS, Security headers', file: 'express-cheatsheet.md' },
  { id: 'nestjs', title: 'NestJS Framework', category: 'Backend', description: 'Decorators, Providers, Dependency Injection, Pipes, Guards, Filters', file: 'nestjs-cheatsheet.md' },
  { id: 'sql', title: 'SQL & Relational DBs', category: 'Databases', description: 'JOINs, CTEs, Window functions, Aggregations, Transactions', file: 'sql-cheatsheet.md' },
  { id: 'postgresql', title: 'PostgreSQL Advanced', category: 'Databases', description: 'JSONB operators, GIN indexes, Full-Text Search, MVCC locks', file: 'postgresql-cheatsheet.md' },
  { id: 'prisma', title: 'Prisma ORM', category: 'Databases', description: 'Schema syntax, Relations, Interactive Transactions, Filtering', file: 'prisma-cheatsheet.md' },
  { id: 'redis', title: 'Redis In-Memory', category: 'Databases', description: 'Commands, Hashes, Sorted Sets, Pub/Sub, Distributed Locks, TTL', file: 'redis-cheatsheet.md' },
  { id: 'docker', title: 'Docker & Compose', category: 'DevOps', description: 'Dockerfile directives, multi-stage builds, networking, volumes', file: 'docker-cheatsheet.md' },
  { id: 'git', title: 'Git & Version Control', category: 'DevOps', description: 'Interactive rebase, Cherry-pick, Stashing, Reflog, Merge conflicts', file: 'git-cheatsheet.md' },
  { id: 'linux', title: 'Linux Administration', category: 'DevOps', description: 'Permissions, Systemd services, Grep/Sed/Awk, SSH keys, Firewall', file: 'linux-cheatsheet.md' },
  { id: 'nginx', title: 'Nginx Reverse Proxy', category: 'DevOps', description: 'Server blocks, SSL/TLS, Upstreams, Load balancing, Compression', file: 'nginx-cheatsheet.md' },
  { id: 'http', title: 'HTTP & Network Protocols', category: 'Web', description: 'Status codes, Headers, Methods, DNS resolution, TLS handshake', file: 'http-cheatsheet.md' },
  { id: 'security', title: 'Web Security & OWASP', category: 'Security', description: 'XSS, CSRF, CSP headers, Parameterized queries, Rate limiting', file: 'security-cheatsheet.md' },
  { id: 'system-design', title: 'System Design Patterns', category: 'Architecture', description: 'CAP theorem, Sharding, Read Replicas, Caching topologies, Sagas', file: 'system-design-cheatsheet.md' }
];

export default function CheatsheetsPage() {
  const [query, setQuery] = useState('');

  const filtered = cheatsheets.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Technical Cheat Sheets</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Dense, production-oriented syntax guides and reference tables across every technology in the curriculum.
        </p>
      </div>

      <div className="max-w-md">
        <SearchBar query={query} onChange={setQuery} placeholder="Search cheat sheets by topic..." />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:border-blue-500 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {item.category}
                </span>
                <FileCode className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono text-[11px] truncate max-w-[180px]">{item.file}</span>
              <Link
                href={`/reader?file=${encodeURIComponent('cheat-sheets/' + item.file)}`}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
              >
                Read in Browser &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
