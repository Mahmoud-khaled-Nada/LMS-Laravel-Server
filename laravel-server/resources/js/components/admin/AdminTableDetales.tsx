import { useTranslation } from 'react-i18next';
import { MdEdit } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { TableBody, TableContainer, Table, TableHeader, TableCell, TableRow, Badge, Button } from '@windmill/react-ui';
import AcceptModal from '../ui/modals/AcceptModal';
import { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';

interface AdminTableDetailsProps {
  admins: any[];
}

export const AdminTableDetales: React.FC<AdminTableDetailsProps> = ({ admins }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminId, setAdminId] = useState<number | null>(null);

  const { post, processing, errors } = useForm();

  const deleteAdmin = () => {
    if (!adminId) return;

    post(`/admins/delete/${adminId}`, {
      onSuccess: (res) => {
        console.log(res);
        toast.success(t('Admin deleted successfully'));
        setIsModalOpen(false);
      },
      onError: () => toast.error(t('Error deleting admin')),
      onFinish: () => setIsModalOpen(false),
    });
  };

  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>{t('name')}</TableCell>
            <TableCell>{t('email')}</TableCell>
            <TableCell>{t('roles')}</TableCell>
            <TableCell>{t('created_at')}</TableCell>
            <TableCell>{t('actions')}</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {admins.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                <Badge>{row.name}</Badge>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.created_at}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Button onClick={() => router.get(`/admins/edit/${row.id}`)} layout="link">
                    <MdEdit className="w-5 h-5" />
                  </Button>
                  <Button
                    layout="link"
                    onClick={() => {
                      setIsModalOpen(true);
                      setAdminId(row.id);
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
        title={t('Delete Admin')}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        acceptAction={deleteAdmin}
        isLoading={processing}
        disabled={!adminId}
      >
        {t('Are you sure you want to delete this admin?')}
      </AcceptModal>
    </TableContainer>
  );
};
