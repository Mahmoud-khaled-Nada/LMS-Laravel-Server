import CourseFormEdit from '@/components/courses/CourseFormEdit';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { MainLayout } from '@/Layouts/MainLayout';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function CourseEdit() {
  const { t } = useTranslation();
  const { courses,errors  } = usePage().props;
  return (
    <MainLayout>
      <Toolbar currentPage={t('courses')} />
      <AlertError errors={errors} />
      {/* <CourseFormEdit CoursesData={courses} /> */}
    </MainLayout>
  );
}

export default CourseEdit;
