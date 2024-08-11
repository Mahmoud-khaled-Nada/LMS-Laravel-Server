import { RoutesType } from "@/types";
import { TiHomeOutline } from "react-icons/ti";
import { SiPowerpages } from "react-icons/si";
import { RiAdminLine } from "react-icons/ri";
import { FaUnlockKeyhole } from "react-icons/fa6";

// import { useTranslation } from "react-i18next";
// const { t } = useTranslation();
export const routes: RoutesType = [
    {
        path: "/",
        icon: <TiHomeOutline className="w-6 h-4" />,
        name: "Dashboard",
    },
    {
        path: "/admins",
        icon: <RiAdminLine className="w-6 h-4" />,
        name: "Admins",
    },
    {
        path: "/roles",
        icon: <FaUnlockKeyhole className="w-6 h-4" />,
        name: "roles",
    },
    {
        path: "/app/charts",
        icon: <TiHomeOutline className="w-6 h-4" />,
        name: "Charts",
    },
    {
        path: "/app/buttons",
        icon: <TiHomeOutline className="w-6 h-4" />,
        name: "Buttons",
    },
    {
        path: "/app/modals",
        icon: <TiHomeOutline className="w-6 h-4" />,
        name: "Modals",
    },
    {
        path: "/app/tables",
        icon: <TiHomeOutline className="w-6 h-4" />,
        name: "Tables",
    },
    {
        icon: <SiPowerpages />,
        name: "Pages",
        routes: [
            {
                path: "/auth/login",
                name: "Login",
            },
            {
                path: "/auth/register",
                name: "Create account",
            },
            {
                path: "/auth/forgot-password",
                name: "Forgot password",
            },
            {
                path: "/app/404",
                name: "404",
            },
        ],
    },
];
