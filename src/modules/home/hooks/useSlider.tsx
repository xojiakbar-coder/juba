import { useQuery } from '@tanstack/react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useSlider = () => {
  const initialData: Types.IQuery.SliderResponse = [];

  const { data = initialData, ...args } = useQuery<Types.IQuery.SliderResponse>({
    queryKey: ['slider'],
    queryFn: async () => {
      const { data } = await Api.Slider();
      return Mappers.Slider(data);
    },
    initialData,
    staleTime: 0
  });

  return { ...args, sliders: data };
};

export default useSlider;
