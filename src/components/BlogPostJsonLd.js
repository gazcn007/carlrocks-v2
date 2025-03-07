import React from 'react';
import Head from '@docusaurus/Head';

export default function BlogPostJsonLd({
  title,
  description,
  date,
  author,
  url,
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: date,
    url: url,
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
} 