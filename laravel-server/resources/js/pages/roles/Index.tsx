import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import { useTranslation } from "react-i18next";
import { RoleTableDetales } from "@/components/role/RoleTableDetales";
import { usePage } from "@inertiajs/react";

function RoleIndex() {
    const { t } = useTranslation();
    const { roles } = usePage().props;
    console.log(roles)
    return (
        <MainLayout>
            <Toolbar routeCreate="role/create" currentPage={t("roles")} />
            <RoleTableDetales roles={roles} />
        </MainLayout>
    );
}

export default RoleIndex;
