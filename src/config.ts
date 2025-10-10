type Config = {
  api: {
    accessTokenKey: string;
    refreshTokenKey: string;
  };

  language: {
    key: string;
    initial: 'uz' | 'ru';
    list: string[];
  };
  list: {
    perPage: number;
  };

  support: {
    email: string;
    phone: string;
  };
};

const config: Config = {
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
    phone: '+998 71 200 03 21'
  }
};

// type Keys = keyof typeof config.services;
// export type ServiceType = (typeof config.services)[Keys];

export default config;
