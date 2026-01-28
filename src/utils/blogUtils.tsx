export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  image?: string;
  content: string;
}

// Parser manuale del frontmatter
const parseFrontmatter = (markdown: string) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];

  const data: Record<string, any> = {};
  
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    // Rimuovi virgolette
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    // Parse array (tags)
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map(item => item.trim().replace(/["']/g, ''));
    }

    data[key] = value;
  });

  return { data, content };
};

// Importa tutti i file MD dalla cartella blog
const blogFiles = import.meta.glob('../content/blog/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

export const getAllPosts = (): BlogPost[] => {
  const posts = Object.entries(blogFiles).map(([filepath, content]) => {
    const { data, content: markdown } = parseFrontmatter(content as string);
    const slug = filepath.split('/').pop()?.replace('.md', '') || '';

    return {
      slug,
      title: data.title || 'Senza titolo',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'Riccardo Venturini',
      tags: data.tags || [],
      image: data.image,
      content: markdown,
    };
  });

  // Ordina per data (più recente prima)
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find(post => post.slug === slug);
};