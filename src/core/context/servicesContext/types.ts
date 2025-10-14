export declare namespace IContext {
  export interface Service {
    id: number;
    title: string;
    description: string;
  }

  export interface Value {
    service: Service | undefined;
    setService: (service: Service | undefined) => void;
  }
}
