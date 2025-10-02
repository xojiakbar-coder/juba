export declare namespace IApi {
  export type Response = IQuery.AboutResponse;
}

export declare namespace IEntity {
  export interface About {
    id: number;
    photo: string;
    description: string;
  }
}

export declare namespace IQuery {
  // API dan keladigan javob — massiv
  export type AboutResponse = IEntity.About[];

  // Mapper va UI ishlatadigan bitta element
  export type Slider = IEntity.About;
}
