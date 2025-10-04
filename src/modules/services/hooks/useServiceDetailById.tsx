import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceDetailById = (service_id: number) => {
  const initialData: Types.IEntity.ServiceDetailById[] = [];
  const { data = initialData, ...args } = useQuery<Types.IEntity.ServiceDetailById[]>({
    queryKey: ['service-detail-by-id', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceDetailById(service_id);
      return Mappers.ServiceDetailById(data);
    }
  });
  return { ...args, data };
};
export default useServiceDetailById;
