import Link from 'next/link';
import { notFound } from 'next/navigation';
import { readCourseFile } from '../../lib/courseFiles';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { ArrowLeft, FileText, Download } from 'lucide-react';

interface ReaderPageProps {
  searchParams: {
    file?: string;
  };
}

export default function ReaderPage({ searchParams }: ReaderPageProps) {
  const filePath = searchParams.file || 'README.md';
  const fileData = readCourseFile(filePath);

  if (!fileData) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
          <FileText className="w-3.5 h-3.5 text-blue-500" />
          <span>{filePath}</span>
        </div>
      </div>

      {/* Document Viewport */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
        <MarkdownRenderer content={fileData.content} />
      </div>
    </div>
  );
}
