import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useResult = () => {
  const initialData: Types.IQuery.ResultList = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.ResultList>({
    queryKey: ['Result'],
    queryFn: async () => {
      const { data } = await Api.Result();
      return Mappers.ResultList(data);
    },
    initialData
  });

  return { ...args, result: data };
};

export default useResult;
