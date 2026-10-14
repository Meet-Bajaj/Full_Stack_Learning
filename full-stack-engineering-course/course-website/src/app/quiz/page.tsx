'use client';

import { useState, useEffect } from 'react';
import { modules } from '../../data/modules';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  topic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Interview';
}

const QUESTION_BANK: Question[] = [
  {
    id: 1,
    topic: '03-javascript',
    difficulty: 'Beginner',
    question: 'Which of the following describes the difference between `==` and `===` in JavaScript?',
    options: [
      '== performs type coercion before comparison; === compares both value and type without coercion',
      '=== compares memory references while == compares primitive values',
      '== is faster than === because it skips strict validation checks',
      'There is no difference in modern ES2024 engines'
    ],
    correct: 0,
    explanation: 'The abstract equality operator (==) converts operands to a common type via Type Coercion before comparison, while strict equality (===) evaluates to false immediately if the types differ.'
  },
  {
    id: 2,
    topic: '03-javascript',
    difficulty: 'Intermediate',
    question: 'In the V8 event loop, when are microtasks (like resolved Promise callbacks) processed?',
    options: [
      'After the next `setInterval` tick completes',
      'Immediately after the current synchronous script execution and before the next macrotask',
      'In a background OS thread managed by the Libuv threadpool',
      'Only when the browser window triggers a repaint'
    ],
    correct: 1,
    explanation: 'The microtask queue is drained immediately when the call stack empties, after every individual callback and prior to yielding to the next macrotask (such as setTimeout/I/O).'
  },
  {
    id: 3,
    topic: '04-typescript',
    difficulty: 'Intermediate',
    question: 'What is the key functional difference between `interface` and `type` alias in TypeScript?',
    options: [
      'Interfaces can declare union types, whereas type aliases cannot',
      'Interfaces support declaration merging (open-ended augmentations), whereas type aliases cannot be reopened',
      'Type aliases are retained in the compiled JavaScript runtime bundle',
      'Interfaces cannot define generic type parameters'
    ],
    correct: 1,
    explanation: 'Declaration merging allows multiple interface declarations with the same name to automatically combine their members. Type aliases cannot be reopened once declared.'
  },
  {
    id: 4,
    topic: '10-react',
    difficulty: 'Intermediate',
    question: 'Why should you NOT call React hooks conditionally inside an `if` block?',
    options: [
      'It violates the JavaScript lexical scoping rules',
      'React relies on the exact chronological order of Hook calls across renders to associate internal state fiber cells',
      'Conditional hooks cause memory leaks in server-side rendering',
      'Hooks require static global variables to store state'
    ],
    correct: 1,
    explanation: 'React maintains hook states in an internal linked list. If the order or number of hooks changes conditionally between renders, state pointers point to incorrect hook entries.'
  },
  {
    id: 5,
    topic: '11-nextjs',
    difficulty: 'Advanced',
    question: 'In Next.js 14 App Router, what happens to client-side bundle size when using React Server Components (RSC)?',
    options: [
      'It increases because all server libraries are bundled as fallback scripts',
      'It remains unchanged because hydration requires all dependencies on the client',
      'Server Component dependencies are never shipped to the browser, significantly reducing client JavaScript bundle size',
      'Next.js compiles server components to WebAssembly'
    ],
    correct: 2,
    explanation: 'RSCs render purely on the server into a specialized JSON-like stream. Their heavy npm dependencies (e.g., markdown parsers, database drivers) are not included in the client bundle.'
  },
  {
    id: 6,
    topic: '20-postgresql',
    difficulty: 'Advanced',
    question: 'Which index type is best suited for querying arbitrary keys and nested values inside a PostgreSQL JSONB column using the `@>` containment operator?',
    options: [
      'Standard B-Tree Index',
      'GIN (Generalized Inverted Index)',
      'Hash Index',
      'BRIN (Block Range Index)'
    ],
    correct: 1,
    explanation: 'A GIN index creates an inverted index mapping each individual sub-element or key inside JSONB documents, allowing high-speed lookup with the `@>` containment operator.'
  },
  {
    id: 7,
    topic: '22-redis',
    difficulty: 'Intermediate',
    question: 'Which Redis command provides an atomic "Set if Not Exists" operation with an expiration TTL, commonly used for distributed locks?',
    options: [
      'SETNX key value followed by EXPIRE key seconds',
      'SET key value NX EX seconds',
      'HSET key field value TTL seconds',
      'MSETNX key value EX seconds'
    ],
    correct: 1,
    explanation: '`SET key value NX EX seconds` performs atomic conditional creation and TTL assignment in a single operation, eliminating the race condition vulnerability of separate SETNX and EXPIRE commands.'
  },
  {
    id: 8,
    topic: '24-docker',
    difficulty: 'Intermediate',
    question: 'Why should the `COPY package*.json ./` directive precede `COPY . .` in a Node.js Dockerfile?',
    options: [
      'Because npm requires package.json to be located in the root directory',
      'To leverage Docker build layer caching, avoiding redundant `npm install` runs when only application code changes',
      'To prevent source code files from overwriting package dependencies',
      'Because Docker builds fail if all files are copied in a single layer'
    ],
    correct: 1,
    explanation: 'Docker caches layers sequentially. If source files change but package.json does not, Docker reuses the cached node_modules layer, accelerating subsequent build times.'
  },
  {
    id: 9,
    topic: '27-security',
    difficulty: 'Advanced',
    question: 'How does setting the cookie attribute `SameSite=Strict` protect against Cross-Site Request Forgery (CSRF)?',
    options: [
      'It encrypts the cookie using AES-256 in the browser',
      'It instructs the browser to never attach the cookie on cross-site requests, including third-party links or form submissions',
      'It prevents JavaScript from accessing the cookie via document.cookie',
      'It forces the cookie to only be transmitted over HTTPS connections'
    ],
    correct: 1,
    explanation: '`SameSite=Strict` ensures cookies are withheld on all cross-origin requests. (Note that `HttpOnly` prevents JavaScript access, while `Secure` enforces HTTPS).'
  },
  {
    id: 10,
    topic: '29-system-design',
    difficulty: 'Interview',
    question: 'Under the CAP Theorem, how must a distributed database system respond during an active network partition if it guarantees strong Consistency (CP)?',
    options: [
      'It must accept writes on all partitions and reconcile conflicts asynchronously',
      'It must refuse writes or return an error on non-quorum partitions rather than return stale data',
      'It switches to eventual consistency mode automatically',
      'It terminates all active database connections immediately'
    ],
    correct: 1,
    explanation: 'A CP system prioritizes strict consistency across nodes. If partitions cannot synchronize due to a network break, the system rejects operations on isolated nodes to prevent split-brain inconsistencies.'
  }
];

export default function QuizPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startQuiz = () => {
    let pool = QUESTION_BANK;
    if (selectedTopic !== 'all') {
      pool = pool.filter((q) => q.topic === selectedTopic);
    }
    if (selectedDifficulty !== 'all') {
      pool = pool.filter((q) => q.difficulty === selectedDifficulty);
    }
    if (pool.length === 0) {
      pool = QUESTION_BANK; // Fallback to all if filter has no direct match
    }

    setActiveQuestions(pool);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
    setHasStarted(true);
  };

  const handleSelectOption = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === activeQuestions[currentIndex].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const currentQ = activeQuestions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Interactive Quiz Engine</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Reinforce mental models, verify syntax comprehension, and test real-world architectural thinking.
        </p>
      </div>

      {!hasStarted ? (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Select Curriculum Module
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
              >
                <option value="all">All Modules (Comprehensive Mix)</option>
                {modules.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Target Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
              >
                <option value="all">All Difficulty Levels</option>
                <option value="Beginner">Beginner Tier</option>
                <option value="Intermediate">Intermediate Tier</option>
                <option value="Advanced">Advanced Tier</option>
                <option value="Interview">Staff / Interview Tier</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Immediate feedback & architectural explanations included.
            </span>
            <button
              onClick={startQuiz}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-sm text-sm"
            >
              Start Quiz Session &rarr;
            </button>
          </div>
        </div>
      ) : isQuizCompleted ? (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Quiz Completed!</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Here is your performance breakdown:</p>
          </div>

          <div className="text-5xl font-black text-blue-600 dark:text-blue-400">
            {Math.round((score / activeQuestions.length) * 100)}%
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm">
            You scored <strong className="text-slate-900 dark:text-white">{score}</strong> out of{' '}
            <strong className="text-slate-900 dark:text-white">{activeQuestions.length}</strong> questions correct.
          </p>

          <button
            onClick={() => setHasStarted(false)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition text-sm shadow-sm"
          >
            <RotateCcw className="w-4 h-4" /> Start Another Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
            <span>
              Question {currentIndex + 1} of {activeQuestions.length}
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              {currentQ.difficulty}
            </span>
          </div>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              let optionStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50';

              if (isAnswerSubmitted) {
                if (idx === currentQ.correct) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                } else if (isSelected) {
                  optionStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                }
              } else if (isSelected) {
                optionStyle = 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border text-sm font-medium transition cursor-pointer flex items-center justify-between ${optionStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswerSubmitted && idx === currentQ.correct && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 ml-2" />
                  )}
                  {isAnswerSubmitted && isSelected && idx !== currentQ.correct && (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                  )}
                </div>
              );
            })}
          </div>

          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <strong className="block text-slate-900 dark:text-white text-xs font-semibold">
                Architecture Explanation:
              </strong>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <span className="text-xs text-slate-400">Score: {score}</span>
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition disabled:opacity-50 text-sm shadow-sm"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition text-sm shadow-sm"
              >
                <span>{currentIndex + 1 < activeQuestions.length ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
