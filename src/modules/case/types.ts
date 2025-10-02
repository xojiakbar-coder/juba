export declare namespace IApi {
  export type Response = IQuery.CaseList;
}

export declare namespace IEntity {
  export interface Hashtags {
    id: number;
    title: string;
  }

  export interface Case {
    id: number;
    title: string;
    photo: string;
    service: string;
    url: string | null;
    hashtags: Hashtags[];
  }
}

export declare namespace IQuery {
  export type CaseList = IEntity.Case[];
}
