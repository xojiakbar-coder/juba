export declare namespace IApi {
  export type Response = IQuery.Team;
}

export declare namespace IEntity {
  export interface SingleEmploye {
    uz: {
      id: number;
      photo: string;
      username: string;
      job_title: string;
      photo_type: string;
      background_image: string;
    };
    ru: {
      id: number;
      photo: string;
      username: string;
      job_title: string;
      photo_type: string;
      background_image: string;
    };
  }
}

export declare namespace IQuery {
  export type Team = IEntity.SingleEmploye[];
}
