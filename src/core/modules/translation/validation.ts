import * as yup from 'yup';

export const TranslationValidation = yup.object().shape({
  uz: yup.string().required(),
  ru: yup.string().required()
});
