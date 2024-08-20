import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AcceptModal from "../ui/modals/AcceptModal";
import { router, useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Badge,
    Pagination,
    Button,
} from "@windmill/react-ui";
import { AdminPageProps, User } from "@/types";
import { formatDate } from "@/utils/helper";

const AdminTableDetails: React.FC<AdminPageProps> = ({ admins }) => {
    const { t } = useTranslation();
    const { post, processing } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adminId, setAdminId] = useState<number | null>(null);

    const { data: adminData, current_page, per_page, total } = admins;

    // Pagination setup
    const resultsPerPage = per_page || 10;

    // Handle page change
    const onPageChange = (page: number) => {
        router.get(`/admins`, { page }, { preserveState: true });
    };

    // Handle delete admin
    const deleteAdmin = () => {
        if (adminId === null) return;

        post(`/admins/delete/${adminId}`, {
            onSuccess: () => {
                toast.success(t("Admin deleted successfully"));
                setIsModalOpen(false);
            },
            onError: () => toast.error(t("Error deleting admin")),
            onFinish: () => setIsModalOpen(false),
        });
    };

    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <tr>
                        <TableCell>{t("name")}</TableCell>
                        <TableCell>{t("email")}</TableCell>
                        <TableCell>{t("roles")}</TableCell>
                        <TableCell>{t("created at")}</TableCell>
                        <TableCell>{t("actions")}</TableCell>
                    </tr>
                </TableHeader>
                <TableBody>
                    {adminData.map((row: User) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Badge>{row.name}</Badge>
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{formatDate(row.created_at)}</TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-4">
                                    <Button
                                        onClick={() => router.get(`/admins/edit/${row.id}`)}
                                        layout="link"
                                    >
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
            <TableFooter>
                <Pagination
                    totalResults={total}
                    resultsPerPage={resultsPerPage}
                    label="Table navigation"
                    onChange={onPageChange}
                />
            </TableFooter>
            <AcceptModal
                title={t("Delete Admin")}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                acceptAction={deleteAdmin}
                isLoading={processing}
                disabled={processing || adminId === null}
            >
                {t("Are you sure you want to delete this admin?")}
            </AcceptModal>
        </TableContainer>
    );
};

export default AdminTableDetails;
