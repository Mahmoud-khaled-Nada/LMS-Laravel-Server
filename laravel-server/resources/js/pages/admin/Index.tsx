import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import { useTranslation } from "react-i18next";
import AdminTable from "./Table";

function AdminIndex() {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Toolbar routeCreate="admin/create" currentPage={t("admins")} />
            <AdminTable />
        </MainLayout>
    );
}

export default AdminIndex;
