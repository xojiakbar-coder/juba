import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useClients = () => {
  const initialData: Types.IQuery.ClientsList = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.ClientsList>({
    queryKey: ['clients'],
    queryFn: async () => {
      const { data } = await Api.Clients();
      return Mappers.Clients(data);
    },
    initialData
  });

  return { ...args, data };
};

export default useClients;
