import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm, type UseFormReturn } from 'react-hook-form';

import { keepOptions } from '@/helpers';

import * as yup from 'yup';
import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import { message } from '@/interface/components/Message';
import { get } from 'radash';
import { type AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';

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

const Send: React.FC<IProps> = ({ children, onError, onSettled, onSuccess, className }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const mutation = useMutation<Types.IEntity.UserContact, any, FormValues, unknown>({
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

    onError: err => {
      const data = err?.response?.data;
      const raw = data?.phone_number || data?.message || data?.detail;

      let msg = '';
      if (Array.isArray(raw)) msg = raw.join(', ');
      else if (typeof raw === 'object' && raw !== null) msg = JSON.stringify(raw);
      else msg = raw ?? '';

      if (msg.trim()) message.error(t('send_phone_error'));
      else message.error('Nomaʼlum xato yuz berdi.');

      onError?.(err);
    },

    onSettled
  });

  const validationSchema: yup.ObjectSchema<Types.IForm.Send> = yup.object({
    name: yup.string().required('Ism kiritish maydoni majburiy'),
    phone: yup
      .string()
      .required('Telefon raqam kiritish maydoni majburiy')
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
    let phone = values.phone.trim();

    if (/^[0-9]{7,9}$/.test(phone)) phone = `+998${phone}`;
    if (/^998/.test(phone)) phone = `+${phone}`;

    const fixedValues = { ...values, phone };
    mutation.mutate(fixedValues, {
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

export default Send;
