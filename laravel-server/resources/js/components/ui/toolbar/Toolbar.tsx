import { Button } from "@windmill/react-ui";
import Breadcrumb from "./Breadcrumb";
import { useTranslation } from "react-i18next";
import { Link } from "@inertiajs/react";

type Props = {
    currentPage: string;
    routeCreate?: string;
};

function Toolbar({ currentPage, routeCreate }: Props) {
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-between p-4 mt-8 mb-8 text-sm font-semibold text-purple-100 dark:bg-gray-700 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
            <div className="flex items-center">
                <Breadcrumb currentPage={currentPage} />
            </div>
            <span>
                {routeCreate && (
                    <Link href={routeCreate}>
                        <Button>{t("create")}</Button>
                    </Link>
                )}
            </span>
        </div>
    );
}

export default Toolbar;
