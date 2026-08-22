import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const pagesDirectory = path.join(process.cwd(), 'content/pages');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory);
}

export function getPageSlugs() {
  if (!fs.existsSync(pagesDirectory)) return [];
  return fs.readdirSync(pagesDirectory);
}

export function generateExcerpt(content: string, wordCount: number = 40): string {
  if (!content) return '';
  let text = content
    .replace(/^---[\s\S]*?---/g, '')
    .replace(/\{:\s*[^}]+\s*\}/g, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\\+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= wordCount) {
    return text;
  }
  return words.slice(0, wordCount).join(' ') + '...';
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    } else if (field === 'content') {
      items[field] = content;
    } else if (field === 'excerpt') {
      items[field] = data.excerpt || generateExcerpt(content, 40);
    } else if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post !== null)
    .sort((post1: any, post2: any) => {
      const date1 = post1.date || post1.slug.substring(0, 10);
      const date2 = post2.date || post2.slug.substring(0, 10);
      return date1 > date2 ? -1 : 1;
    });
  return posts;
}

export function getPageBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(pagesDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    } else if (field === 'content') {
      items[field] = content;
    } else if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function preprocessMarkdown(md: string): string {
  if (!md) return '';
  let processed = md;

  // 1. Replace lines that contain only \ or \\ with blank lines (paragraph breaks)
  processed = processed.replace(/^\s*\\{1,2}\s*$/gm, '\n');

  // 2. Replace trailing \ or \\ at the end of lines with <br />
  processed = processed.replace(/\\{1,2}\s*$/gm, '<br />');

  // 3. Convert Kramdown block attribute lists like {: .box-note}, {: .box-warning}, {: .box-error}, {: .box-success}
  processed = processed.replace(/\{:\s*\.box-([a-zA-Z0-9_-]+)\s*\}\s*\n+([\s\S]*?)(?=(?:\n\s*\n|\n\s*\{:\s*\.box-|\n\s*#{1,6}\s+|$))/g, (match, boxType, content) => {
    const cleanContent = content.trim();
    if (!cleanContent) return '';
    return `\n<div class="box-${boxType}">\n\n${cleanContent}\n\n</div>\n\n`;
  });

  // Catch any remaining {: .box-name} on single lines
  processed = processed.replace(/\{:\s*\.box-([a-zA-Z0-9_-]+)\s*\}\s*\n+([^\n]+)/g, '\n<div class="box-$1">\n\n$2\n\n</div>\n\n');

  // Remove any leftover inline/block attribute lists like {: .mx-auto.d-block :}, {: .center}, etc.
  processed = processed.replace(/\{:\s*[^}]+\s*\}/g, '');

  return processed;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const preprocessed = preprocessMarkdown(markdown);
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(preprocessed);
    
  return result.toString();
}
