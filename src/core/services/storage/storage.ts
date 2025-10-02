import * as Types from './types';

const createStorage = (storage: Storage): Types.Storage.StorageMethods => ({
  get: key => storage.getItem(key),
  set: (key, value) => storage.setItem(key, value),
  remove: key => storage.removeItem(key)
});


const storage: Types.Storage.Storage = {
  local: createStorage(localStorage),
  session: createStorage(sessionStorage)
};

export default storage;
