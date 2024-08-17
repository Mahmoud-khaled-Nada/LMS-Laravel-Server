import AdminFormEdit from '@/components/admin/AdminFormEdit';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { MainLayout } from '@/Layouts/MainLayout';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function AdminEdit() {
  const { t } = useTranslation();
  const { props } = usePage();
  console.log(props);
  return (
    <MainLayout>
      <Toolbar currentPage={t('admins')} />
      <AlertError errors={props.errors} />
      <AdminFormEdit adminData={props.admin} />
    </MainLayout>
  );
}

export default AdminEdit;
