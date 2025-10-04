import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceSolo = (service_id: number) => {
  const initialData: Types.IEntity.ServiceSolo[] = [];
  const { data = initialData, ...args } = useQuery<Types.IEntity.ServiceSolo[]>({
    queryKey: ['service-solo', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceSolo(service_id);
      return Mappers.ServiceSolo(data);
    }
  });
  return { ...args, data };
};
export default useServiceSolo;
