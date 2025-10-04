import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceWorks = (service_id: number) => {
  const initialData: Types.IEntity.ServiceWorks[] = [];
  const { data = initialData, ...args } = useQuery<Types.IEntity.ServiceWorks[]>({
    queryKey: ['service-works', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceWorks(service_id);
      return Mappers.ServiceWorks(data);
    },
    initialData
  });
  return { ...args, data };
};
export default useServiceWorks;
