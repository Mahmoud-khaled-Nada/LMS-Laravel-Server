import AdminFormCreate from '@/components/admin/AdminFormCreate';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { MainLayout } from '@/Layouts/MainLayout';
import { usePage } from '@inertiajs/react';

import { useTranslation } from 'react-i18next';

function AdminCreate() {
  const { t } = useTranslation();
  const { props } = usePage();
  return (
    <MainLayout>
      <Toolbar currentPage={t('admins')} />
      <AlertError errors={props.errors} />
      <AdminFormCreate />
    </MainLayout>
  );
}

export default AdminCreate;
