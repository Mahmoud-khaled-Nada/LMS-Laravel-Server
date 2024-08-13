import { AdminTableDetales } from "@/components/admin/AdminTableDetales";
import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

function AdminIndex() {
    const { t } = useTranslation();
    const { admins } = usePage<any>().props;
    return (
        <MainLayout>
            <Toolbar routeCreate="admins/create" currentPage={t("admins")} />
            <AdminTableDetales admins={admins} />
        </MainLayout>
    );
}

export default AdminIndex;
