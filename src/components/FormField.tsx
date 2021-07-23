import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IProps {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

const FormField: React.FC<IProps> = ({
  name,
  rows = 4,
  type = 'text',
  placeholder,
  required = true,
  multiline = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="field half">
      {multiline ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          placeholder={placeholder}
          {...register('message', { required })}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...register(name, { required })}
        />
      )}

      {errors[name] && required && (
        <span className="field-error">This field is required</span>
      )}
    </div>
  );
};

export default FormField;
