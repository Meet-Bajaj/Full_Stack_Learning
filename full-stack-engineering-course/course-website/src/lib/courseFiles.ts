import fs from 'fs';
import path from 'path';

// Root directory of the full-stack engineering course
export const COURSE_ROOT = path.resolve(process.cwd(), '..');

export interface ModuleDocItem {
  name: string;
  relativePath: string;
  category: 'Overview' | 'Lesson' | 'Practice' | 'Reference' | 'Exam';
}

/**
 * Returns list of all markdown documents belonging to a module.
 */
export function getModuleDocs(moduleId: string): ModuleDocItem[] {
  const modulePath = path.join(COURSE_ROOT, moduleId);
  if (!fs.existsSync(modulePath)) {
    return [];
  }

  const docs: ModuleDocItem[] = [];

  // 1. README
  if (fs.existsSync(path.join(modulePath, 'README.md'))) {
    docs.push({
      name: 'Overview & Objectives (README)',
      relativePath: `${moduleId}/README.md`,
      category: 'Overview',
    });
  }

  // 2. Lessons
  const lessonsDir = path.join(modulePath, 'lessons');
  if (fs.existsSync(lessonsDir)) {
    const files = fs
      .readdirSync(lessonsDir)
      .filter((f) => f.endsWith('.md'))
      .sort();

    files.forEach((f) => {
      // Create clean readable title
      const cleanTitle = f
        .replace(/^\d+-/, '')
        .replace(/\.md$/, '')
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

      docs.push({
        name: cleanTitle,
        relativePath: `${moduleId}/lessons/${f}`,
        category: 'Lesson',
      });
    });
  }

  // 3. Exercises
  if (fs.existsSync(path.join(modulePath, 'exercises', 'exercises.md'))) {
    docs.push({
      name: 'Practical Exercises',
      relativePath: `${moduleId}/exercises/exercises.md`,
      category: 'Practice',
    });
  } else if (fs.existsSync(path.join(modulePath, 'exercises', 'index.md'))) {
    docs.push({
      name: 'Practical Exercises',
      relativePath: `${moduleId}/exercises/index.md`,
      category: 'Practice',
    });
  }

  // 4. MCQs
  if (fs.existsSync(path.join(modulePath, 'mcqs', 'mcqs.md'))) {
    docs.push({
      name: 'MCQ Bank',
      relativePath: `${moduleId}/mcqs/mcqs.md`,
      category: 'Practice',
    });
  }

  // 5. Projects
  if (fs.existsSync(path.join(modulePath, 'projects', 'projects.md'))) {
    docs.push({
      name: 'Module Projects',
      relativePath: `${moduleId}/projects/projects.md`,
      category: 'Practice',
    });
  }

  // 6. Cheat Sheet
  if (fs.existsSync(path.join(modulePath, 'cheatsheet.md'))) {
    docs.push({
      name: 'Cheat Sheet',
      relativePath: `${moduleId}/cheatsheet.md`,
      category: 'Reference',
    });
  }

  // 7. Interview Q&A
  if (fs.existsSync(path.join(modulePath, 'interview.md'))) {
    docs.push({
      name: 'Interview Questions',
      relativePath: `${moduleId}/interview.md`,
      category: 'Reference',
    });
  }

  // 8. Assessment
  if (fs.existsSync(path.join(modulePath, 'assessment.md'))) {
    docs.push({
      name: 'Module Assessment',
      relativePath: `${moduleId}/assessment.md`,
      category: 'Exam',
    });
  }

  // 9. Progress
  if (fs.existsSync(path.join(modulePath, 'progress.md'))) {
    docs.push({
      name: 'Progress Checklist',
      relativePath: `${moduleId}/progress.md`,
      category: 'Reference',
    });
  }

  return docs;
}

/**
 * Safely reads a markdown file relative to course root.
 */
export function readCourseFile(relativePath: string): { content: string; title: string } | null {
  // Prevent directory traversal attacks
  const safePath = path.normalize(relativePath).replace(/^(\.\.(\/|\\|$))+/, '');
  const fullPath = path.join(COURSE_ROOT, safePath);

  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    return null;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  
  // Extract first H1 as title if present
  const h1Match = content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : path.basename(safePath, '.md');

  return {
    content,
    title,
  };
}
