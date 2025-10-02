const config = {
  api: {
    accessTokenKey: 'accessToken',
    refreshTokenKey: 'refereshToken'
  },

  language: {
    key: 'language',
    initial: 'ru',
    list: ['ru', 'uz']
  },
  list: {
    perPage: 30
  },

  support: {
    email: 'info.juba@.uz',
    phone: '+998 92 143 22 20'
  }
};

// type Keys = keyof typeof config.services;
// export type ServiceType = (typeof config.services)[Keys];

export default config;
