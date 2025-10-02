export declare namespace IApi {
  export type Response = IQuery.ClientsList;
}

export declare namespace IEntity {
  export interface Client {
    id: number;
    photo: string;
    photo_type: string;
  }
}

export declare namespace IQuery {
  export type ClientsList = IEntity.Client[];
}
