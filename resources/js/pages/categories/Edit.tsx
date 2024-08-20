import CategoryFormEdit from '@/components/categories/CategoryFormEdit';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { MainLayout } from '@/Layouts/MainLayout';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function CategoryEdit() {
  const { t } = useTranslation();
  const { errors, category } = usePage().props;
  return (
    <MainLayout>
      <Toolbar currentPage={t('categories')} />
      <AlertError errors={errors} />
      <CategoryFormEdit categoryData={category} />
    </MainLayout>
  );
}

export default CategoryEdit;
