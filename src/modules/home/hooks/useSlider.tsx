import { useQuery } from '@tanstack/react-query';
import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useSlider = () => {
  const initialData: Types.IEntity.Slider = {
    uz: { id: 0, title: '', photo: '', description: '', short_description: '' },
    ru: { id: 0, title: '', photo: '', description: '', short_description: '' }
  };

  const { data = initialData, ...args } = useQuery<Types.IEntity.Slider>({
    queryKey: ['slider'],
    queryFn: async () => {
      const { data } = await Api.Slider();
      return Mappers.Slider(data);
    },
    initialData
  });

  return { slider: data, ...args };
};

export default useSlider;
