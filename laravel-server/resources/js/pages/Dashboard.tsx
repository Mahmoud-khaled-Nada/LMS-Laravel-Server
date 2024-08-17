import { MainLayout } from '@/Layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import { IoIosPeople, IoMdCart } from 'react-icons/io';
import { IoChatboxEllipses } from 'react-icons/io5';
import { CiMoneyBill } from 'react-icons/ci';
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button,
} from '@windmill/react-ui';

import response from './tableData';
import { SetStateAction, useEffect, useState } from 'react';
import InfoCard from '@/components/ui/card/InfoCard';
import RoundIcon from '@/components/ui/icons/RoundIcon';
import { MdEdit } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import Toolbar from '@/components/ui/toolbar/Toolbar';

function Dashboard() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p: SetStateAction<number>) {
    setPage(p);
  }
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage) as any);
  }, [page]);

  return (
    <MainLayout>
      <Toolbar routeCreate="auth/login" currentPage={t('dashboard')} />

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title={t('dashboard')} value="6389">
          <RoundIcon
            icon={IoIosPeople}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon={CiMoneyBill}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon={IoMdCart}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon={IoChatboxEllipses}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <MdEdit className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <BiTrash className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </MainLayout>
  );
}

export default Dashboard;
