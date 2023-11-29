const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    'en',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  // NOTE: See also https://docs.strapi.io/dev-docs/admin-panel-customization
  translations: {
    ru: {
      "Auth.form.email.label": "Email",
      Users: "Юзеры",
      // City: "CITY (FRENCH)",
      // Customize the label of the Content Manager table.
      Id: "Юзер ID",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
