import { Label } from '@windmill/react-ui';
import { FormContainer } from '../ui/forms/FormContainer';
import InputField from '../ui/input/InputField';
import { router, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import { SpinnerButton } from '../ui/buttons/SpinnerButton';
import { CategoryParams } from '@/types';

function CategoryFormCreate() {
  const { t } = useTranslation();
  const { data, setData, post, processing, errors, reset } = useForm<CategoryParams>();

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/categories/store', {
      onSuccess: ({ props }) => {
        toast.success('Category created successfully');
        router.get('/categories');
      },
      onError: (err) => {
        console.log(err);
        toast.error('Error creating category');
      },
      onFinish: () => reset('category'),
    });
  };

  return (
    <FormContainer title={t('create')} submit={submit}>
      <div className="flex flex-col items-center">
        <Label className="w-full max-w-[50%]">
          <span>{t('category')}</span>
          <InputField
            name="category"
            value={data.category}
            isFocused={true}
            isError={errors.category}
            onChange={(e) => setData('category', e.target.value)}
          />
        </Label>
        {/* Buttons */}
        <div className="flex justify-center items-center m-6 gap-3 w-full max-w-[50%]">
          <SpinnerButton isLoading={processing} disabled={!data.category || processing} route="/categories" />
        </div>
      </div>
    </FormContainer>
  );
}

export default CategoryFormCreate;
