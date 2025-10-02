import { useQuery } from '@tanstack/react-query';
import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useAbout = () => {
  const initialData: Types.IQuery.AboutResponse = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.AboutResponse>({
    queryKey: ['about'],
    queryFn: async () => {
      const { data } = await Api.About();
      return Mappers.About(data);
    },
    initialData
  });

  return { ...args, data };
};

export default useAbout;
