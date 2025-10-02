export declare namespace IApi {
  export type Response = IQuery.ResultList;
}

export declare namespace IEntity {
  export interface Result {
    id: number;
    title: string;
    result: number;
  }
}

export declare namespace IQuery {
  export type ResultList = IEntity.Result[];
}
