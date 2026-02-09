import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
