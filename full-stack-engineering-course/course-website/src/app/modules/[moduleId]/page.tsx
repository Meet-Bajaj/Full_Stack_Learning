import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getModuleById, getAllModules } from '../../../lib/modules';
import { getModuleDocs, readCourseFile } from '../../../lib/courseFiles';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import { 
  ArrowLeft, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function generateStaticParams() {
  const modules = getAllModules();
  return modules.map((m) => ({ moduleId: m.id }));
}

interface ModulePageProps {
  params: {
    moduleId: string;
  };
  searchParams: {
    file?: string;
  };
}

export default function ModulePage({ params, searchParams }: ModulePageProps) {
  const moduleItem = getModuleById(params.moduleId);

  if (!moduleItem) {
    notFound();
  }

  // Get all documents available for this module
  const docs = getModuleDocs(params.moduleId);

  // Determine active document
  const defaultFile = `${params.moduleId}/README.md`;
  const activeFilePath = searchParams.file || defaultFile;

  // Read the active markdown document
  const docData = readCourseFile(activeFilePath) || {
    content: `# Document Not Found\n\nCould not locate \`${activeFilePath}\`.`,
    title: 'Not Found',
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Lesson':
        return FileText;
      case 'Practice':
        return HelpCircle;
      case 'Exam':
        return Award;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Back link & Module Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/modules"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Modules
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={`/quiz?module=${moduleItem.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition"
          >
            <Sparkles className="w-3.5 h-3.5" /> Launch Module Quiz
          </Link>
        </div>
      </div>

      {/* Main Two-Column Reading Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lesson & Material Navigator */}
        <aside className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-6 max-h-[85vh] overflow-y-auto space-y-6">
          <div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
              {moduleItem.phase}
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2 leading-snug">
              {moduleItem.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
              {docs.length} learning artifacts available
            </p>
          </div>

          <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
            {['Overview', 'Lesson', 'Practice', 'Reference', 'Exam'].map((category) => {
              const categoryDocs = docs.filter((d) => d.category === category);
              if (categoryDocs.length === 0) return null;

              return (
                <div key={category} className="space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">
                    {category === 'Lesson' ? 'Lessons & Theory' : category}
                  </div>
                  <ul className="space-y-1">
                    {categoryDocs.map((doc) => {
                      const isActive = activeFilePath === doc.relativePath;
                      const Icon = getCategoryIcon(doc.category);
                      return (
                        <li key={doc.relativePath}>
                          <Link
                            href={`/modules/${moduleItem.id}?file=${encodeURIComponent(doc.relativePath)}`}
                            className={`flex items-center justify-between p-2 rounded-lg transition ${
                              isActive
                                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                            }`}
                          >
                            <span className="flex items-center gap-2 truncate">
                              <Icon className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{doc.name}</span>
                            </span>
                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'opacity-100' : 'opacity-40'}`} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Markdown Content Document Viewer */}
        <main className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[85vh]">
          {/* Active File Header info */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400 font-mono">
            <span>Reading: {activeFilePath.split('/').pop()}</span>
            <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded text-slate-600 dark:text-slate-300">
              Markdown Direct View
            </span>
          </div>

          {/* Render Markdown Content */}
          <MarkdownRenderer content={docData.content} />
        </main>
      </div>
    </div>
  );
}
