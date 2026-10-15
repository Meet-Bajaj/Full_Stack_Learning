'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { modules } from '../data/modules';
import { 
  Home, 
  BookOpen, 
  HelpCircle, 
  BarChart2, 
  FileCode, 
  Search,
  CheckCircle2
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const phases = Array.from(new Set(modules.map((m) => m.phase)));

  const mainNav = [
    { label: 'Overview', href: '/', icon: Home },
    { label: 'All Modules', href: '/modules', icon: BookOpen },
    { label: 'Quiz Engine', href: '/quiz', icon: HelpCircle },
    { label: 'Progress Tracker', href: '/progress', icon: BarChart2 },
    { label: 'Cheat Sheets', href: '/cheatsheets', icon: FileCode },
    { label: 'Search', href: '/search', icon: Search },
  ];

  return (
    <aside className="w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-screen sticky top-0 overflow-y-auto no-scrollbar flex flex-col justify-between hidden md:flex shrink-0">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
            FS
          </div>
          <div>
            <div className="font-extrabold text-slate-900 dark:text-white leading-tight">Full-Stack</div>
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Engineering Course</div>
          </div>
        </div>

        {/* Primary App Navigation */}
        <nav className="space-y-1 mb-6">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Master Course Guides Direct Reading Links */}
        <div className="space-y-1 mb-8 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Master Guides
          </div>
          {[
            { label: 'Course Map & Graph', file: 'COURSE_MAP.md' },
            { label: 'Learning Path & Order', file: 'LEARNING_PATH.md' },
            { label: 'Troubleshooting Guide', file: 'TROUBLESHOOTING.md' },
            { label: 'Technical Glossary', file: 'GLOSSARY.md' },
            { label: 'Curriculum Audit', file: 'CURRICULUM_AUDIT.md' },
          ].map((guide) => (
            <Link
              key={guide.file}
              href={`/reader?file=${encodeURIComponent(guide.file)}`}
              className="flex items-center justify-between px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition"
            >
              <span>{guide.label}</span>
              <span className="text-[10px] font-mono text-slate-400">.md</span>
            </Link>
          ))}
        </div>

        {/* Phase-grouped Module Tree */}
        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
            Curriculum Modules (56)
          </div>
          {phases.map((phase) => (
            <div key={phase} className="space-y-1.5">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-2 truncate">
                {phase}
              </h4>
              <ul className="space-y-0.5">
                {modules
                  .filter((m) => m.phase === phase)
                  .map((m) => {
                    const isCurrent = pathname === `/modules/${m.id}`;
                    return (
                      <li key={m.id}>
                        <Link
                          href={`/modules/${m.id}`}
                          className={`block px-3 py-1.5 text-xs rounded-md truncate transition ${
                            isCurrent
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                          }`}
                          title={m.name}
                        >
                          {m.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-[11px] text-slate-400 text-center">
        Full-Stack Engineering v1.0.0
      </div>
    </aside>
  );
}
