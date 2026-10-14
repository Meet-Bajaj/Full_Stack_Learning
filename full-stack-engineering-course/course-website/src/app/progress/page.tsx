'use client';

import { useState, useEffect } from 'react';
import { modules } from '../../data/modules';
import ProgressBar from '../../components/ProgressBar';
import { CheckCircle2, Circle, Trophy, Award, TrendingUp, AlertCircle, BookCheck } from 'lucide-react';

export default function ProgressPage() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('fs_course_completed_modules');
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch {
      // Ignore local storage error
    }
    setIsLoaded(true);
  }, []);

  const toggleModule = (id: string) => {
    let next: string[];
    if (completedModules.includes(id)) {
      next = completedModules.filter((m) => m !== id);
    } else {
      next = [...completedModules, id];
    }
    setCompletedModules(next);
    try {
      localStorage.setItem('fs_course_completed_modules', JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const percentage = Math.round((completedModules.length / modules.length) * 100);
  const phases = Array.from(new Set(modules.map((m) => m.phase)));

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Learning Progress & Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Track module completions, milestone assessments, and curriculum mastery across all 8 phases.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Completion</span>
            <Trophy className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{percentage}%</div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {completedModules.length} of {modules.length} modules cleared
          </p>
          <div className="mt-3">
            <ProgressBar progress={percentage} />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Estimated Hours</span>
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">
            {completedModules.reduce((acc, id) => {
              const m = modules.find((mod) => mod.id === id);
              return acc + (m ? m.estimatedHours : 0);
            }, 0)}{' '}
            <span className="text-sm font-normal text-slate-400">/ 1,200h</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Paced for Staff-level readiness</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">MCQs Attempted</span>
            <Award className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">5,000+</div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Scenario & interview banks available</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Capstones</span>
            <BookCheck className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">3 + 1</div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Production multi-tier architectures</p>
        </div>
      </div>

      {/* Phase Checklists */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Curriculum Roadmap Checklists</h2>

        <div className="space-y-6">
          {phases.map((phase) => {
            const phaseModules = modules.filter((m) => m.phase === phase);
            const phaseCompleted = phaseModules.filter((m) => completedModules.includes(m.id)).length;
            const phasePercent = Math.round((phaseCompleted / phaseModules.length) * 100);

            return (
              <div
                key={phase}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{phase}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {phaseCompleted} of {phaseModules.length} modules completed
                    </p>
                  </div>
                  <div className="w-full sm:w-48">
                    <ProgressBar progress={phasePercent} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {phaseModules.map((m) => {
                    const checked = completedModules.includes(m.id);
                    return (
                      <div
                        key={m.id}
                        onClick={() => toggleModule(m.id)}
                        className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition flex items-center gap-2.5 ${
                          checked
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:border-blue-400 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {checked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                        )}
                        <span className="truncate">{m.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
