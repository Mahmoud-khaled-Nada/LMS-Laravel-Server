import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Label, Button } from '@windmill/react-ui';
import { Link, router, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import InputField from '../ui/input/InputField';
import { toast } from 'react-toastify';
import { Spinners } from '../ui/icons/Spinners';
import FormContainer from '../ui/forms/FormContainer';

type LoginParams = {
  email: string;
  password: string;
};
function LoginFrom() {
  const { t } = useTranslation();
  const { data, setData, post, processing, errors, reset } = useForm<LoginParams>();
  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/login', {
      onSuccess: (res) => {
        router.get('/');
      },
      onError: (err) => {
        console.log(err);
        toast.error('Error Login Failed');
      },
      onFinish: () => reset('email', 'password'),
    });
  };

  return (
    <FormContainer title={t('login')} submit={submit}>
      <Label className="mt-4">
        <span>{t('email')}</span>
        <InputField
          type="email"
          name="email"
          value={data.email}
          isFocused={true}
          isError={errors.email}
          onChange={(e) => setData('email', e.target.value)}
        />
      </Label>

      <Label className="mt-4">
        <span>{t('password')}</span>
        <InputField
          type="password"
          name="password"
          value={data.password}
          isFocused={true}
          isError={errors.password}
          onChange={(e) => setData('password', e.target.value)}
        />
      </Label>

      <Button
        type="submit"
        className="mt-4"
        block
        iconRight={processing ? Spinners : ''}
        disabled={!data.email || !data.password}
      >
        Log in
      </Button>

      <hr className="my-8" />

      <Button block layout="outline">
        <FaGithub className="w-4 h-4 mr-2" aria-hidden="true" />
        Github
      </Button>
      <Button className="mt-4" block layout="outline">
        <FaTwitter className="w-4 h-4 mr-2" aria-hidden="true" />
        Twitter
      </Button>

      <p className="mt-4">
        <Link
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          href="/auth/forgot-password"
        >
          Forgot your password?
        </Link>
      </p>
      <p className="mt-1">
        <Link
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          href="/auth/register"
        >
          Create account
        </Link>
      </p>
    </FormContainer>
  );
}

export default LoginFrom;
