import RoleFormCreate from "@/components/role/RoleFormCreate";
import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

function RoleCreate() {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Toolbar currentPage={t("admins")} />
            <RoleFormCreate />
        </MainLayout>
    );
}

export default RoleCreate;
