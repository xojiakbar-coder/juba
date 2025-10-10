export declare namespace IApi {
  export type Response = IQuery.AboutResponse;
}

export declare namespace IEntity {
  export interface About {
    uz: {
      id: number;
      photo: string;
      description: string;
    };
    ru: {
      id: number;
      photo: string;
      description: string;
    };
  }
}

export declare namespace IQuery {
  export type AboutResponse = IEntity.About[];
}
