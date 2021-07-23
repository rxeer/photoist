import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import FormField from './FormField';
import SuccessMessage from './SuccessMessage';

interface IProps {
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => Promise<void>;
  isSubmitted: boolean;
}

const SubmitForm: React.FC<IProps> = ({ onSubmit, isSubmitted = false }) => {
  const form = useForm();
  const { handleSubmit } = form;

  return (
    <>
      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fields">
              <FormField name="name" placeholder="Name" />
              <FormField name="email" placeholder="Email" type="email" />
              <FormField name="message" placeholder="Message" rows={4} />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send" className="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default SubmitForm;
