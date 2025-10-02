import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useContact = () => {
  const initialData: Types.IQuery.ContactResponse = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.ContactResponse>({
    queryKey: ['contact'],
    queryFn: async () => {
      const { data } = await Api.Contect();
      return Mappers.Contect(data);
    },
    initialData
  });

  return { ...args, data };
};

export default useContact;
