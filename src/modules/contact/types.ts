export declare namespace IApi {
  export type Response = IQuery.ContactResponse;

  export namespace Single {
    export type Response = IQuery.Contact;
  }
}

export declare namespace IEntity {
  export interface Contact {
    uz: {
      id: number;
      phoneNumber: string;
      email: string;
      longitude: string;
      latitude: string;
      telegram: string;
      instagram: string;
      facebook: string;
    };
    ru: {
      id: number;
      phoneNumber: string;
      email: string;
      longitude: string;
      latitude: string;
      telegram: string;
      instagram: string;
      facebook: string;
    };
  }

  export type UserContact = {
    name: string;
    phone: string;
  };
}

export declare namespace IQuery {
  export type ContactResponse = IEntity.Contact[];
  export type Contact = IEntity.Contact;
}

export declare namespace IForm {
  export type Send = {
    name: string;
    phone: string;
  };
}
