import { Label } from '@windmill/react-ui';
import InputField from '../ui/input/InputField';
import { router, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import { SpinnerButton } from '../ui/buttons/SpinnerButton';
import { AdminParams } from '@/types';
import SingleSelect from '../ui/input/SingleSelect';
import FormContainer from '../ui/forms/FormContainer';

function AdminFormCreate() {
  const { t } = useTranslation();
  const { roles } = usePage().props as any;
  const { data, setData, post, processing, errors, reset } = useForm<AdminParams>();

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/admins/store', {
      onSuccess: () => {
        router.get('/admins');
        toast.success('Admin created successfully');
      },
      onError: () => toast.error('Error creating admin'),
      onFinish: () => reset('name', 'email', 'password', 'role'),
    });
  };

  return (
    <FormContainer title={t('create')} submit={submit}>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <Label className="mt-4">
          <span>{t('name')}</span>
          <InputField
            name="name"
            value={data.name}
            isFocused={true}
            isError={errors.name}
            onChange={(e) => setData('name', e.target.value)}
          />
        </Label>
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
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <Label className="mt-4">
          <span>{t('roles')}</span>
          <SingleSelect
            options={roles}
            placeholder="Select an option..."
            onChange={(value) => setData('role', value)}
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
      </div>
      <div className="flex justify-end items-center m-6 gap-3 ">
        <SpinnerButton isLoading={processing} disabled={!data.name || processing} route="/admins" />
      </div>
    </FormContainer>
  );
}

export default AdminFormCreate;
