import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceKeys = (service_id: number) => {
  const initialData: Types.IEntity.ServiceKeys[] = [];
  const { data = initialData, ...args } = useQuery<Types.IEntity.ServiceKeys[]>({
    queryKey: ['service-keys', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceKeys(service_id);
      return Mappers.ServiceKeys(data);
    },
    initialData
  });
  return { ...args, data };
};
export default useServiceKeys;
