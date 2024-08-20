import { CourseTableDetales } from '@/components/courses/CourseTableDetales';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { MainLayout } from '@/Layouts/MainLayout';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function CourseIndex() {
  const { t } = useTranslation();
  const { Courses } = usePage<any>().props;
  return (
    <MainLayout>
      <Toolbar routeCreate="courses/create" currentPage={t('Courses')} />
      {/* <CourseTableDetales Courses={Courses} /> */}
    </MainLayout>
  );
}

export default CourseIndex;
