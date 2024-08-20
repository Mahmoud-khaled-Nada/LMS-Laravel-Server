import { Label } from '@windmill/react-ui';
import InputField from '../ui/input/InputField';
import { router, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import { SpinnerButton } from '../ui/buttons/SpinnerButton';
import { CategoryParams } from '@/types';
import FormContainer from '../ui/forms/FormContainer';

function CategoryFormEdit({ categoryData }: any) {
  const { t } = useTranslation();
  const { data, setData, put, processing, errors, reset } = useForm<CategoryParams>(categoryData);
  const submit: FormEventHandler = (e) => {
    if (!categoryData.id) return;
    e.preventDefault();
    put(`/categories/update/${categoryData.id}`, {
      onSuccess: () => {
        router.get('/categories');
        toast.success('Category updated successfully');
      },
      onError: () => toast.error('Error updating category'),
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

export default CategoryFormEdit;
