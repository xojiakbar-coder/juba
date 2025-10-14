export declare namespace IContext {
  export type Lang = 'uz' | 'ru';

  export interface Value {
    lang: Lang;
    setLang: (lang: Lang | 'ru') => void;
  }
}
