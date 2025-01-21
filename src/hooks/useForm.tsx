import {useEffect, useState} from 'react';

interface UseFormProps<T> {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>;
}

const useForm = <T,>({initialValue, validate}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValue);
  const [error, setError] = useState<Record<keyof T, string>>();

  useEffect(() => {
    setError(validate(values));
  }, [values, validate]);

  const handleChangeValues = (name: keyof T, text: string) => {
    setValues(prev => ({
      ...prev,
      [name]: text,
    }));
  };

  const getTextInputProps = (name: keyof T) => ({
    value: values[name],
    onChangeText: (text: string) => handleChangeValues(name, text),
  });

  return {values, getTextInputProps, error};
};

export default useForm;
