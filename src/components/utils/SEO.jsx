import { Helmet } from 'react-helmet';

export function SEO({ title, image, description, keywords }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={image}
        />
      </Helmet>
    </>
  );
}
