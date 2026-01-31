import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPostBySlug } from "../utils/blogUtils";
import "highlight.js/styles/github-dark.css";

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link 
          to="/blog" 
          className="text-primary hover:underline mb-8 inline-block"
        >
          ← Back to blog
        </Link>
        
        {post.image && (
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        
        <div className="flex gap-2 mb-4">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="text-xs px-3 py-1 bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex justify-between text-muted-foreground mb-8 pb-8 border-b">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString('it-IT')}</span>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};