import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useCase = () => {
  const initialData: Types.IQuery.CaseList = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.CaseList>({
    queryKey: ['case'],
    queryFn: async () => {
      const { data } = await Api.Case();
      return Mappers.CaseList(data);
    },
    initialData
  });

  return { ...args, data };
};

export default useCase;
