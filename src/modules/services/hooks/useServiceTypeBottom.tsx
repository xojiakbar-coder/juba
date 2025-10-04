import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceTypeBottom = (service_id: number) => {
  const initialData: Types.IEntity.ServiceType[] = [];
  const { data = initialData, ...args } = useQuery<Types.IEntity.ServiceType[]>({
    queryKey: ['service-type-bottom', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceTypeBottom(service_id);
      return Mappers.ServiceType(data);
    }
  });
  return { ...args, data };
};
export default useServiceTypeBottom;
