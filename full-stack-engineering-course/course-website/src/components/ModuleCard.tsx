'use client';

import Link from 'next/link';
import { Module } from '../types';
import { BookOpen, Clock, Award } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  isCompleted?: boolean;
}

export default function ModuleCard({ module, isCompleted = false }: ModuleCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
            {module.phase}
          </span>
          {isCompleted && (
            <span className="text-xs flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
              <Award className="w-3.5 h-3.5" /> Completed
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {module.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
          {module.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {module.estimatedHours} hrs
        </span>
        <Link
          href={`/modules/${module.id}`}
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          <BookOpen className="w-3.5 h-3.5" /> Start Module &rarr;
        </Link>
      </div>
    </div>
  );
}
