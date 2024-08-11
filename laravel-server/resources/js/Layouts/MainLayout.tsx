import { Suspense, useEffect } from "react";
import Header from "./@components/Header";
import Sidebar from "./@components/Sidebar";
import { ChildrenParam } from "@/types";
import { usePage } from "@inertiajs/react";
import { useSidebarContext } from "@/utils/context/useSidebarContext";
import ThemedSuspense from "@/components/ThemedSuspense";

export function MainLayout({ children }: ChildrenParam) {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();
    const { url: location } = usePage();

    useEffect(() => {
        closeSidebar();
    }, [location]);

    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
                isSidebarOpen && "overflow-hidden"
            }`}
        >
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
                <Header />
                <main className="h-full overflow-y-auto">
                    <div className="container grid px-6 mx-auto">
                    <Suspense fallback={<ThemedSuspense />}>
                        {children}
                        </Suspense>
                    </div>
                </main>
            </div>
        </div>
    );
}
