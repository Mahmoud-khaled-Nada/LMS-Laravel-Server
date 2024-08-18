import { FormEventHandler, ReactNode } from 'react';

type Props = {
  title: string;
  submit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  hasUplod?: string
};

export const FormContainerWithUpload = ({ children, title, submit,hasUplod }: Props) => {
  return (
    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <form onSubmit={submit} encType="multipart/form-data">{children}</form>
    </div>
  );
};


