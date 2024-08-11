import { FormEventHandler, ReactNode } from "react";

type Props = {
    title: string;
    submit: FormEventHandler<HTMLFormElement>;
    children: ReactNode;
};

export const FormContainer = ({ children, title, submit }: Props) => {
    return (
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <form onSubmit={submit}>{children}</form>
        </div>
    );
};
