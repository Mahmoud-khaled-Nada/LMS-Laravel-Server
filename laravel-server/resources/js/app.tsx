import "./bootstrap"; // Import global styles and scripts

import { createRoot } from "react-dom/client"; // Import React DOM client
import { createInertiaApp } from "@inertiajs/react"; // Import Inertia React integration
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"; // Resolve Inertia page components
import { ToastContainer } from "react-toastify"; // Import Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import "animate.css";
import '../css/tailwind.output.css'
import "./i18n";
import { SidebarProvider } from "./utils/context/SidebarContext";
import { Suspense } from "react";
import { Windmill } from "@windmill/react-ui";
import ThemedSuspense from "./components/ThemedSuspense";
// Set the application name
const appName = import.meta.env.VITE_APP_NAME || "LMS System";

// Create the Inertia app
createInertiaApp({
    title: (title) => `${title} - ${appName}`, // Set the document title
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob("./pages/**/*.tsx")
        ), // Resolve page components dynamically
    setup({ el, App, props }) {
        // Create the root element
        const root = createRoot(el);

        // Render the application
        root.render(
            <>
                <SidebarProvider>
                    <Suspense fallback={<ThemedSuspense />}>
                        <Windmill usePreferences>
                            <App {...props} />
                        </Windmill>
                    </Suspense>
                </SidebarProvider>
                <ToastContainer theme="dark" />
            </>
        );
    },
});
