import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm, type UseFormReturn } from 'react-hook-form';

import { keepOptions } from '@/helpers';
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';
import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

interface FormValues extends Types.IForm.Send {}

interface IChildren extends UseFormReturn<FormValues> {
  isLoading?: boolean;
}

interface IProps {
  children: (props: IChildren) => React.ReactNode;
  className?: string;
  onError?: (error: string) => void;
  onSettled?: () => void;
  onSuccess?: (value: Types.IEntity.UserContact) => void;
}

const Create: React.FC<IProps> = ({ children, onError, onSettled, onSuccess, className }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation<Types.IEntity.UserContact, string, FormValues, any>({
    mutationFn: async (values: FormValues) => {
      const { data } = await Api.UserContact({ values });
      return Mappers.UserContact(data);
    },
    onSuccess: (data: Types.IEntity.UserContact) => {
      onSuccess && onSuccess(data);

      queryClient.invalidateQueries({
        predicate: query => query.queryKey[0] === 'user-contact' && query.queryKey[1] === 'form'
      });
    },
    onError,
    onSettled
  });

  const validationSchema: yup.ObjectSchema<Types.IForm.Send> = yup.object({
    name: yup.string().required('Majburiy maydon'),
    phone: yup
      .string()
      .required('Majburiy maydon')
      .matches(/^\+?[0-9]{7,15}$/, 'Telefon raqami noto‘g‘ri formatda')
  });

  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      phone: ''
    },
    resolver: yupResolver<FormValues, any, FormValues>(validationSchema)
  });

  const onSubmit = form.handleSubmit(values => {
    mutation.mutate(values, {
      onSettled: () => form.reset({ ...form.getValues() }, { ...keepOptions })
    });
  });

  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={onSubmit}>
        {children({ ...form, isLoading: mutation.isPending })}
      </form>
    </FormProvider>
  );
};

export default Create;
