import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useTeam = () => {
  const initialData: Types.IQuery.Team = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.Team>({
    queryKey: ['team'],
    queryFn: async () => {
      const { data } = await Api.Team();
      return Mappers.Team(data);
    },
    initialData
  });

  return { ...args, data };
};

export default useTeam;
