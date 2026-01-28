import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/blogUtils";

export const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-12">Blog</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group border rounded-lg p-6 hover:shadow-lg transition-all"
            >
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <div className="flex gap-2 mb-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 bg-primary/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString('it-IT')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};