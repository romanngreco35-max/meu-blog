import Head from 'next/head';

export default function SEO({ title, description, url, image, datePublished }) {
  const jsonLd = {
    "@context": "quebra-códigooculto.com",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished || new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "" // deixar vazio se não quiser exibir nome
    }
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
