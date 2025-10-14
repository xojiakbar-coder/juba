import { createContext } from 'react';
import * as Types from './types';

const ServiceContext = createContext<Types.IContext.Value>({
  service: undefined,
  setService: () => {}
});

export default ServiceContext;
