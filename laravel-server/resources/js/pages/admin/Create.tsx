import AdminFormCreate from "@/components/admin/AdminFormCreate";
import Toolbar from "@/components/ui/toolbar/Toolbar";
import { MainLayout } from "@/Layouts/MainLayout";
import React from "react";
import { useTranslation } from "react-i18next";

function AdminCreate() {
  const { t } = useTranslation();
    return (
        <MainLayout>
            <Toolbar currentPage={t("admins")} />
            <AdminFormCreate />
        </MainLayout>
    );
}

export default AdminCreate;
