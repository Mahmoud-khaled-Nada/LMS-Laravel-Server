import "./bootstrap"; // Import global styles and scripts

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "../css/tailwind.output.css";
import "./i18n";
import { SidebarProvider } from "./utils/context/SidebarContext";
import { Suspense } from "react";
import { Windmill } from "@windmill/react-ui";
import ThemedSuspense from "./components/ThemedSuspense";

// import { PrimeReactProvider } from "primereact/api";
// // import 'primereact/resources/themes/saga-blue/theme.css';  // theme
// import "primereact/resources/themes/arya-blue/theme.css"; // Dark theme
// import "primereact/resources/primereact.min.css"; // core css
// import "primeicons/primeicons.css";


// Set the application name
const appName = import.meta.env.VITE_APP_NAME || "LMS System";
const pages = import.meta.glob("./pages/**/*.tsx");

// Create the Inertia app
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, pages),
    setup({ el, App, props }) {
        const root = createRoot(el as HTMLMapElement);
        root.render(
            <>
                <SidebarProvider>
                        <Windmill usePreferences>
                                <App {...props} />
                        </Windmill>
                </SidebarProvider>
                <ToastContainer theme="dark" />
            </>
        );
    },
});
