import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title: string;
    description: string;
    type?: 'website' | 'article';
    name?: string;
}

export default function SEO({ title, description, type = 'website', name = 'Porto Implantes' }: SEOProps) {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <html lang={currentLang} />
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:locale" content={currentLang === 'pt' ? 'pt_PT' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
