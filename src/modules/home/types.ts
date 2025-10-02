export declare namespace IApi {
  // API dan keladigan javob — Slider massiv
  export type Response = IQuery.SliderResponse;

  export namespace Single {
    // agar faqat bitta obyekt uchun kerak bo‘lsa
    export type Response = IQuery.Slider;
  }
}

export declare namespace IEntity {
  export interface Slider {
    id: number;
    title: string;
    photo: string;
    description: string;
  }
}

export declare namespace IQuery {
  // API dan keladigan javob — massiv
  export type SliderResponse = IEntity.Slider[];

  // Mapper va UI ishlatadigan bitta element
  export type Slider = IEntity.Slider;
}
