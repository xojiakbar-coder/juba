import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServicePricing = (service_id: number) => {
  const initData: Types.IEntity.ServicePricing[] = [];
  const { data, ...args } = useQuery<Types.IEntity.ServicePricing[]>({
    queryKey: ['service-pricing', service_id],
    queryFn: async () => {
      const { data } = await Api.ServicePricing(service_id);
      
      return Mappers.ServicePricing(data);
    }
  });

  return { ...args, data };
};

export default useServicePricing;
