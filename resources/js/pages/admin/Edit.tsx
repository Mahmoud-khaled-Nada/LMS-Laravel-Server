import AdminFormEdit from "@/components/admin/AdminFormEdit";
import { AlertError } from "@/components/ui/errors/AlertError";
import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

function AdminEdit() {
    const { t } = useTranslation();
    const { errors, admin } = usePage().props;
    return (
        <MainLayout>
            <Toolbar currentPage={t("admins")} />
            <AlertError errors={errors} />
            <AdminFormEdit adminData={admin} />
        </MainLayout>
    );
}

export default AdminEdit;
