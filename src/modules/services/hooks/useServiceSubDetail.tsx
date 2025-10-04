import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useServiceSubDetail = (service_id: number) => {
  const { data, ...args } = useQuery<Types.IEntity.ServiceSubDetail>({
    queryKey: ['service-sub-detail', service_id],
    queryFn: async () => {
      const { data } = await Api.ServiceSubDetail(service_id);
      return Mappers.ServiceSubDetail(data);
    }
  });
  return { ...args, data };
};
export default useServiceSubDetail;
