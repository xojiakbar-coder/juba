export declare namespace IApi {
  export type Response = IQuery.ResultList;
}

export declare namespace IEntity {
  export interface ResultItem {
    id: number;
    title: string;
    result: number;
  }

  export interface Result {
    uz: ResultItem;
    ru: ResultItem;
  }
}

export declare namespace IQuery {
  export type ResultList = IEntity.Result[];
}
