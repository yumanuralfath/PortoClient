import { Helmet } from 'react-helmet';

const APP_NAME = 'Portofolio-vite-yumanuralfath';
const keywords = [
  'Yuma',
  'Yumana',
  'Yuma Nur Alfath',
  'yuma kimia',
  'yuma unand',
  'yuma web developer',
  'yuma porto',
  'yumanuralfath',
  'yuma',
];

const Meta = () => {
  return (
    <Helmet>
      <title>Yuma Nur Alfath</title>
      <meta name="description" content="Portofolio Yuma Nur Alfath" />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/assets/favicon.svg" />
    </Helmet>
  );
};

export default Meta;
