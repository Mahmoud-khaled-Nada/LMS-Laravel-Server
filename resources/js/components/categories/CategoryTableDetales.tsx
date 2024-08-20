import { useTranslation } from 'react-i18next';
import { MdEdit } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { TableBody, TableContainer, Table, TableHeader, TableCell, TableRow, Badge, Button } from '@windmill/react-ui';
import AcceptModal from '../ui/modals/AcceptModal';
import { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

interface CategoryProps {
  categories: any[];
}

export const CategoryTableDetales: React.FC<CategoryProps> = ({ categories }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const { post, processing, errors } = useForm();

  const deleteCategory = () => {
    if (!categoryId) return;

    post(`/categories/delete/${categoryId}`, {
      onSuccess: ({ props }) => {
        toast.success(t('Category deleted successfully'));
        setIsModalOpen(false);
      },
      onError: () => toast.error(t('Error deleting Category')),
      onFinish: () => setIsModalOpen(false),
    });
  };

  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>{t('name')}</TableCell>
            <TableCell>{t('actions')}</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {categories.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                <Badge>{row.name}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Button onClick={() => router.get(`/categories/edit/${row.id}`)} layout="link">
                    <MdEdit className="w-5 h-5" />
                  </Button>
                  <Button
                    layout="link"
                    onClick={() => {
                      setIsModalOpen(true);
                      setCategoryId(row.id);
                    }}
                  >
                    <BiTrash className="w-5 h-5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AcceptModal
        title={t('Delete Category')}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        acceptAction={deleteCategory}
        isLoading={processing}
        disabled={!categoryId}
      >
        {t('Are you sure you want to delete this category?')}
      </AcceptModal>
    </TableContainer>
  );
};
