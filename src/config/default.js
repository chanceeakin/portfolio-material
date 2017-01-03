module.exports = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.NODE_PORT || 3000,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Chance Eakin, Software Developer',
    titleTemplate: 'Chance Eakin',
    meta: [{
      name: 'Chance Eakin Portfolio',
      content: 'Fun stuff ahead',
    }],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://unpkg.com/react-md@1.0.0/dist/react-md.teal-pink.min.css' },
    ],
  },
};
