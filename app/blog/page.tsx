"use client";

import React, { useState } from "react";
import { Share2, BookmarkPlus, ArrowRight, Eye, Calendar, User, X } from "lucide-react";

interface Post {
  id?: number;
  title: string;
  excerpt: string;
  author: string;
  readTime?: string;
  category: string;
  date?: string;
  views?: string;
  content: string;
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample featured post
  const featuredPost = {
    title: "The Future of Business Innovation",
    excerpt: "Exploring revolutionary strategies and technologies shaping the future of business.",
    author: "Sarah Anderson",
    readTime: "6 min",
    category: "Innovation",
    content: `
      <p>In today's rapidly evolving business landscape, staying ahead of the curve is more important than ever. Businesses that embrace innovation and leverage cutting-edge technologies are the ones that thrive. In this blog, we'll explore the key trends and strategies that are shaping the future of business innovation.</p>
      <h2>1. Artificial Intelligence and Automation</h2>
      <p>AI and automation are transforming industries by streamlining processes, reducing costs, and improving efficiency. From chatbots to predictive analytics, businesses are leveraging AI to gain a competitive edge.</p>
      <h2>2. Sustainability and Green Technologies</h2>
      <p>As consumers become more environmentally conscious, businesses are adopting sustainable practices and green technologies. This not only helps the planet but also enhances brand reputation and customer loyalty.</p>
      <h2>3. Remote Work and Digital Transformation</h2>
      <p>The shift to remote work has accelerated digital transformation. Companies are investing in cloud technologies, collaboration tools, and cybersecurity to support a distributed workforce.</p>
    `,
  };

  // Sample posts data
  const posts = [
    {
      id: 1,
      title: "AI-Driven Business Strategies",
      excerpt: "How artificial intelligence is revolutionizing business decision-making...",
      author: "John Doe",
      readTime: "5 min",
      category: "Technology",
      date: "2024-11-25",
      views: "2.4k",
      content: `
        <p>Artificial Intelligence (AI) is no longer just a buzzword; it's a game-changer for businesses. In this blog, we'll explore how AI-driven strategies are transforming industries and enabling smarter decision-making.</p>
        <h2>1. Predictive Analytics</h2>
        <p>AI-powered predictive analytics helps businesses forecast trends, customer behavior, and market changes with remarkable accuracy.</p>
        <h2>2. Process Automation</h2>
        <p>From customer service to supply chain management, AI is automating repetitive tasks, freeing up human resources for more strategic work.</p>
        <h2>3. Personalized Customer Experiences</h2>
        <p>AI enables businesses to deliver personalized experiences at scale, enhancing customer satisfaction and loyalty.</p>
      `,
    },
    {
      id: 2,
      title: "The Evolution of Digital Marketing",
      excerpt: "Exploring the next generation of marketing strategies and their impact...",
      author: "Emma Wilson",
      readTime: "7 min",
      category: "Innovation",
      date: "2024-11-24",
      views: "3.1k",
      content: `
        <p>Digital marketing is constantly evolving, and businesses must adapt to stay relevant. In this blog, we'll dive into the latest trends and strategies in digital marketing.</p>
        <h2>1. Content Marketing</h2>
        <p>High-quality content remains king. Businesses are investing in blogs, videos, and social media to engage their audience.</p>
        <h2>2. Data-Driven Marketing</h2>
        <p>Leveraging data analytics allows businesses to target the right audience with the right message at the right time.</p>
        <h2>3. Influencer Partnerships</h2>
        <p>Collaborating with influencers helps brands reach new audiences and build trust with consumers.</p>
      `,
    },
    {
      id: 3,
      title: "Future of Leadership in Business",
      excerpt: "Discovering new paradigms in leadership and management...",
      author: "Alex Chen",
      readTime: "4 min",
      category: "Leadership",
      date: "2024-11-23",
      views: "1.8k",
      content: `
        <p>Leadership is evolving in response to changing workplace dynamics. In this blog, we'll explore the future of leadership and what it means for businesses.</p>
        <h2>1. Emotional Intelligence</h2>
        <p>Leaders with high emotional intelligence can build stronger teams and foster a positive work culture.</p>
        <h2>2. Adaptive Leadership</h2>
        <p>In a fast-changing world, leaders must be adaptable and open to new ideas and approaches.</p>
        <h2>3. Remote Leadership</h2>
        <p>Managing remote teams requires new skills and tools to ensure productivity and collaboration.</p>
      `,
    },
  ];

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

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
                      Insights for Business Growth
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      Discover groundbreaking insights and strategies to drive your business forward.
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
                          <button
                            onClick={() => openModal(featuredPost)}
                            className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                          >
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
              {["All", "Technology", "Innovation", "Leadership", "AI"].map((category) => (
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
                  className="backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(post)}
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

      {/* Blog Details Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-purple-500"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>{selectedPost.views}</span>
                </div>
              </div>
              <div
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;