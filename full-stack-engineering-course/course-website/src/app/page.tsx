import Link from 'next/link';
import { modules } from '../data/modules';
import { 
  Rocket, 
  Map, 
  HelpCircle, 
  FileCode, 
  Compass, 
  CheckCircle, 
  Server, 
  Layers, 
  ShieldCheck, 
  Terminal,
  Cpu
} from 'lucide-react';

export default function Home() {
  const quickLinks = [
    { title: 'Orientation & Onboarding', desc: 'Environment setup, VS Code, developer mindset.', href: `/modules/00-orientation`, icon: Compass, color: 'text-sky-500' },
    { title: 'Interactive Quiz Engine', desc: '5,000+ scenario MCQs with deep architectural rationales.', href: '/quiz', icon: HelpCircle, color: 'text-purple-500' },
    { title: 'Technical Cheat Sheets', desc: '18 high-yield syntax guides and command references.', href: '/cheatsheets', icon: FileCode, color: 'text-amber-500' },
    { title: 'Interactive Search', desc: 'Search across all 56 modules and topics instantly.', href: '/search', icon: Map, color: 'text-emerald-500' },
  ];

  const highlights = [
    { icon: Terminal, label: '56 Comprehensive Modules' },
    { icon: Cpu, label: 'Computer Science to Staff Arch' },
    { icon: Server, label: 'NestJS, PostgreSQL & Redis' },
    { icon: Layers, label: 'Docker, CI/CD, Nginx & VPS' },
    { icon: ShieldCheck, label: 'OWASP Security & Testing' },
    { icon: Rocket, label: 'Portfolio Capstone Systems' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-blue-100">
            Self-Study Engineering Platform v1.0
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Production Full-Stack Engineering Course
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            From absolute beginner to Staff Software Engineer. Focus on understanding <strong className="text-white">WHY things work</strong>, not just memorizing syntax.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/modules/00-orientation"
              className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition shadow-lg text-sm inline-flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" /> Start Orientation
            </Link>
            <Link
              href="/modules"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md transition text-sm"
            >
              Browse All 56 Modules &rarr;
            </Link>
          </div>
        </div>

        {/* Background Decorative Rings */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center text-center gap-2 shadow-sm"
            >
              <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Quick Launch Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Learning Portals</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition shadow-sm flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 ${item.color} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Course Roadmap Snapshot */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">8-Phase Mastery Roadmap</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Strictly sequenced prerequisite dependencies.</p>
          </div>
          <Link
            href="/progress"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Open Interactive Tracker &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 border border-blue-100 dark:border-blue-900/50 font-medium">
            1. Foundations (00-06)
          </div>
          <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-950/30 text-pink-900 dark:text-pink-200 border border-pink-100 dark:border-pink-900/50 font-medium">
            2. Web & Frontend (07-11)
          </div>
          <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 border border-purple-100 dark:border-purple-900/50 font-medium">
            3. Backend & APIs (12-17)
          </div>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-amber-100 dark:border-amber-900/50 font-medium">
            4. Databases & Data (18-23)
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-900/50 font-medium">
            5. DevOps & Deploy (24-25, 35-43)
          </div>
          <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-100 dark:border-rose-900/50 font-medium">
            6. Quality & Security (26-28)
          </div>
          <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-900/50 font-medium">
            7. Architecture & Scale (29-34, 44-51)
          </div>
          <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 text-yellow-900 dark:text-yellow-200 border border-yellow-100 dark:border-yellow-900/50 font-medium">
            8. Professional Ready (52-55)
          </div>
        </div>
      </div>
    </div>
  );
}
