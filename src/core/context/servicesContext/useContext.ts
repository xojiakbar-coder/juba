import { useContext } from 'react';
import ServiceContext from './context';
import * as Types from './types';

const useServiceContext = (): Types.IContext.Value => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error('useServiceContext must be used within a <ServiceProvider>');
  }

  return context;
};

export default useServiceContext;
