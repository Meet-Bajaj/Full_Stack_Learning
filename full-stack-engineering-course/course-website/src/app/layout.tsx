import './globals.css';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';

export const metadata = {
  title: 'Full-Stack Engineering Course',
  description: 'Interactive local learning platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
              <Link href="/" className="text-xl font-bold">Full-Stack Course</Link>
              <nav className="flex items-center gap-4">
                <Link href="/modules" className="hover:underline">Modules</Link>
                <Link href="/quiz" className="hover:underline">Quizzes</Link>
                <Link href="/progress" className="hover:underline">Progress</Link>
                <ThemeToggle />
              </nav>
            </header>
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
