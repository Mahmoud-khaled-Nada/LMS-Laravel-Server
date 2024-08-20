import { HelperText } from '@windmill/react-ui';
import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';

export default forwardRef(function TextInput(
  {
    type = 'text',
    className = '',
    isFocused = false,
    isError,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
    isError?: any;
  },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <>
      <input
        {...props}
        type={type}
        ref={localRef}
        className={`py-3 px-4 block w-full border-neutral-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ${className}`}
        autoComplete="off"
      />
      {isError && <HelperText valid={false}>Provide a valid {type === 'email' ? 'email' : 'input'}</HelperText>}
    </>
  );
});
