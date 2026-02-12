import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const { t } = useTranslation();
    const posts = blogPosts;

    return (
        <div className="pt-24 bg-gray-50 min-h-screen">
            <Helmet>
                <title>{t('blogMetaTitle')}</title>
                <meta name="description" content={t('blogMetaDesc')} />
                <meta name="keywords" content={t('blogMetaKeywords')} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center mb-8">
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">{t('blogSubtitle')}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">{t('blogTitle')}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {t('blogDescription')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</div>
                                    <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</div>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-serif leading-tight group-hover:text-accent transition-colors">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                            <User className="w-4 h-4 text-gray-500" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="text-accent font-bold hover:text-primary transition-colors flex items-center">
                                        {t('readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
