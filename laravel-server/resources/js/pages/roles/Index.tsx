import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import { useTranslation } from "react-i18next";
import RoleTable from "./Table";

function RoleIndex() {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Toolbar routeCreate="role/create" currentPage={t("roles")} />
            <RoleTable />
        </MainLayout>
    );
}

export default RoleIndex;
