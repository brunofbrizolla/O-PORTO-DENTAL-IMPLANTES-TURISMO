import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            slug: 'implantes-dentarios-porto-guia-completo',
            title: 'Implantes Dentários no Porto: O Guia Completo para 2024',
            excerpt: 'Procura implantes dentários no Porto? Este guia detalhado explica preços, o procedimento passo-a-passo, e como escolher a melhor clínica para recuperar o seu sorriso.',
            date: '10 Jan 2024',
            author: 'Porto Implantes',
            readTime: '8 min',
            image: '/assets/uploads/doctor_implant_hero_new.png',
            category: 'Implantologia'
        },
        {
            id: 2,
            slug: 'mitos-verdades-branqueamento-dentario',
            title: 'Mitos e Verdades sobre o Branqueamento Dentário Profissional',
            excerpt: 'O branqueamento estraga o esmalte? Descubra a verdade sobre o branqueamento dentário seguro e eficaz x mesinhas caseiras que podem danificar os seus dentes.',
            date: '05 Jan 2024',
            author: 'Porto Implantes',
            readTime: '6 min',
            image: '/assets/uploads/branqueamento_hero_v2.png',
            category: 'Estética'
        },
        {
            id: 3,
            slug: 'turismo-dentario-porto',
            title: 'Turismo Dentário no Porto: Tratamentos de Luxo a Preços Acessíveis',
            excerpt: 'Descubra por que pacientes de todo o mundo escolhem o Porto para realizar implantes e facetas. Qualidade de classe mundial, segurança e uma cidade incrível para visitar.',
            date: '28 Dez 2023',
            author: 'Porto Implantes',
            readTime: '7 min',
            image: '/assets/logo_kv_final.png',
            category: 'Turismo'
        },
        {
            id: 4,
            slug: 'invisalign-vs-aparelho-fixo',
            title: 'Invisalign ou Aparelho Fixo: Qual é a Melhor Opção para Si?',
            excerpt: 'Alinhadores invisíveis ou brackets metálicos? Comparámos custos, tempo de tratamento e conforto para o ajudar a decidir o melhor caminho para o seu sorriso perfeito.',
            date: '15 Fev 2024',
            author: 'Porto Implantes',
            readTime: '10 min',
            image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&q=80',
            category: 'Alinhadores'
        },
        {
            id: 5,
            slug: 'durabilidade-facetas-dentarias',
            title: 'Quanto Tempo Duram as Facetas Dentárias? Guia de Manutenção',
            excerpt: 'As facetas de cerâmica podem durar décadas. Saiba como cuidar do seu novo sorriso, o que evitar comer e como garantir que as suas facetas permanecem impecáveis.',
            date: '20 Fev 2024',
            author: 'Porto Implantes',
            readTime: '7 min',
            image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80',
            category: 'Estética'
        },
        {
            id: 6,
            slug: 'sinais-alerta-periodontite',
            title: '7 Sinais de Periodontite que Não Deve Ignorar',
            excerpt: 'Gengivas a sangrar não são normais. Aprenda a identificar os sintomas precoces da doença gengival e como a prevenção pode salvar os seus dentes (e a sua saúde cardíaca).',
            date: '25 Fev 2024',
            author: 'Porto Implantes',
            readTime: '6 min',
            image: '/assets/uploads/prevencao_hero_new.jpg',
            category: 'Prevenção'
        },
        {
            id: 7,
            slug: 'medo-dentista-sedacao-consciente',
            title: 'Medo de Ir ao Dentista? A Sedação Consciente Pode Ser a Solução',
            excerpt: 'A odontofobia afeta muitos pacientes. Descubra como a sedação consciente permite realizar tratamentos complexos como implantes sem dor ou ansiedade.',
            date: '02 Mar 2024',
            author: 'Porto Implantes',
            readTime: '8 min',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80',
            category: 'Bem-estar'
        },
        {
            id: 8,
            slug: 'all-on-4-manutencao-limpeza',
            title: 'Como Limpar e Cuidar da Sua Prótese All-on-4',
            excerpt: 'Já tem os seus dentes fixos? Parabéns! Agora saiba exatamente como higienizar a sua prótese All-on-4 para evitar inflamações e garantir que dura a vida toda.',
            date: '10 Mar 2024',
            author: 'Porto Implantes',
            readTime: '9 min',
            image: '/assets/uploads/doctor_implant_hero_new.png',
            category: 'Implantologia'
        },
        {
            id: 9,
            slug: 'sorriso-digital-dsd',
            title: 'Digital Smile Design: Veja o Seu Sorriso Antes de Começar',
            excerpt: 'Não gosta de surpresas? Com o DSD, planeamos o seu sorriso digitalmente. Veja o "antes e depois" no ecrã antes de tocarmos num único dente.',
            date: '15 Mar 2024',
            author: 'Porto Implantes',
            readTime: '6 min',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
            category: 'Tecnologia'
        }
    ];

    return (
        <div className="pt-24 bg-gray-50 min-h-screen">
            <Helmet>
                <title>Blog de Saúde Oral | Porto Implantes</title>
                <meta name="description" content="Artigos sobre implantes dentários, estética e saúde oral no Porto. Mantenha-se informado com os nossos especialistas." />
                <meta name="keywords" content="blog dentista porto, implantes dentários blog, saúde oral porto, dicas dentista" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">O Nosso Blog</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">Notícias & Artigos</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Informação especializada para o ajudar a tomar as melhores decisões sobre a sua saúde oral.
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
                                        Ler Mais <ArrowRight className="w-4 h-4 ml-1" />
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
