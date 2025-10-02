export declare namespace Storage {
  export interface StorageMethods {
    get: (key: string) => string | null;
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
  }

  export interface Storage {
    local: StorageMethods;
    session: StorageMethods;
  }
}
