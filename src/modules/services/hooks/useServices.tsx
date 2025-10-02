import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServices = () => {
  const initialData: Types.IQuery.ServicesList = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.ServicesList>({
    queryKey: ['services'],
    queryFn: async () => {
      const { data } = await Api.Services();
      return Mappers.Services(data);
    },
    initialData
  });

  return { ...args, services: data };
};

export default useServices;
