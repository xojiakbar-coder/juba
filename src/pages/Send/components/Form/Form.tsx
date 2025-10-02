import * as Fields from '@/interface/containers/Fields';

const Form = () => {
  return (
    <>
      <Fields.Text name="name" placeholder="Ismingiz" required className="mb-6" />
      <Fields.Text required type="tel" name="phone" className="mb-6" placeholder="Telefon raqamingiz" />
    </>
  );
};

export default Form;
