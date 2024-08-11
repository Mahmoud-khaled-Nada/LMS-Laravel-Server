import { RoutesType } from "@/types";
import { TiHomeOutline } from "react-icons/ti";
import { SiPowerpages } from "react-icons/si";
export const routes: RoutesType = [
    {
        path: "/dashboard",
        icon: <TiHomeOutline />,
        name: "Dashboard",
    },
    {
        path: "/app/forms",
        icon: <TiHomeOutline />,
        name: "Forms",
    },
    {
        path: "/app/cards",
        icon: <TiHomeOutline />,
        name: "Cards",
    },
    {
        path: "/app/charts",
        icon: <TiHomeOutline />,
        name: "Charts",
    },
    {
        path: "/app/buttons",
        icon: <TiHomeOutline />,
        name: "Buttons",
    },
    {
        path: "/app/modals",
        icon: <TiHomeOutline />,
        name: "Modals",
    },
    {
        path: "/app/tables",
        icon: "TablesIcon",
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
