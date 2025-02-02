"use client";
import React, { useState } from 'react';
import { Share2, BookmarkPlus, ArrowRight, Eye, Calendar, User } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample featured post
  const featuredPost = {
    title: "The Future of Web Development",
    excerpt: "Exploring revolutionary technologies shaping the digital landscape of tomorrow",
    author: "Sarah Anderson",
    readTime: "6 min",
    category: "Innovation"
  };

  // Sample posts data
  const posts = [
    {
      id: 1,
      title: "AI-Driven Design Systems",
      excerpt: "How artificial intelligence is revolutionizing the way we create digital experiences...",
      author: "John Doe",
      readTime: "5 min",
      category: "Technology",
      date: "2024-11-25",
      views: "2.4k"
    },
    {
      id: 2,
      title: "The Evolution of Web3",
      excerpt: "Exploring the next generation of decentralized applications and their impact...",
      author: "Emma Wilson",
      readTime: "7 min",
      category: "Innovation",
      date: "2024-11-24",
      views: "3.1k"
    },
    {
      id: 3,
      title: "Future of UI Design",
      excerpt: "Discovering new paradigms in user interface design and interaction patterns...",
      author: "Alex Chen",
      readTime: "4 min",
      category: "Design",
      date: "2024-11-23",
      views: "1.8k"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Grid Background with Gradient */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-gradient-xy"></div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-500/30 rounded-full blur-[10rem] animate-spotlight"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute -top-40 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-40 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] animate-pulse delay-700"></div>

            {/* Hero Content */}
            <div className="relative backdrop-blur-sm bg-background/50 rounded-2xl p-8 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient-x">
                Next-Gen Blog Experience
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover groundbreaking insights at the intersection of technology and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">
                Explore Articles
              </button>
              <button className="px-8 py-4 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Featured Post Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.02] transition-all duration-300">
              <div className="p-6">
                <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-500">
                {featuredPost.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {featuredPost.readTime} read
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold">{featuredPost.title}</h3>
            <p className="text-muted-foreground">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="text-sm">{featuredPost.author}</span>
              </div>
              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400">
                Read More <ArrowRight size={18} />
              </button>
            </div>
                </div>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Categories */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {["All", "Technology", "Design", "Innovation", "AI"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-6 py-2 rounded-full backdrop-blur-xl border border-white/10 transition-all duration-300 ${selectedCategory === category.toLowerCase()
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'hover:bg-white/5'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-500">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Eye size={14} /> {post.views}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-muted-foreground hover:text-purple-500">
                          <BookmarkPlus size={18} />
                        </button>
                        <button className="text-muted-foreground hover:text-purple-500">
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;