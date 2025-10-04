import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServicePricingById = (service_id: number) => {
  const initData: Types.IEntity.ServicePricingById[] = [];
  const { data = initData, ...args } = useQuery<Types.IEntity.ServicePricingById[]>({
    queryKey: ['service-pricing-by-id', service_id],
    queryFn: async () => {
      const { data } = await Api.ServicePricingById(service_id);
      return Mappers.ServicePricingById(data);
    }
  });
  return { ...args, data };
};
export default useServicePricingById;
