export declare namespace IEntity {
  export interface SliderContent {
    id: number;
    title: string;
    photo: string;
    description: string;
    short_description?: string;
  }

  export interface Slider {
    uz: SliderContent;
    ru: SliderContent;
  }
}

export declare namespace IApi {
  export interface Response {
    uz: IEntity.SliderContent;
    ru: IEntity.SliderContent;
  }
}

export declare namespace IQuery {
  export type Slider = IEntity.Slider;
}
