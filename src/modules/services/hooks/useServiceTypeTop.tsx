import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceTypeTop = (service_id: number) => {
  const initialData: Types.IEntity.ServiceType[] = [];

  const { data = initialData, ...args } = useQuery<Types.IEntity.ServiceType[]>({
    queryKey: ['service-type-top', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceTypeTop(service_id);
      return Mappers.ServiceType(data);
    }
  });
  return { ...args, data };
};
export default useServiceTypeTop;
