export declare namespace IApi {
  export type Response = IQuery.ServicesList;
}

export declare namespace IEntity {
  export interface Services {
    id: number;
    title: string;
    description: string;
  }
}

export declare namespace IQuery {
  export type ServicesList = IEntity.Services[];
}
