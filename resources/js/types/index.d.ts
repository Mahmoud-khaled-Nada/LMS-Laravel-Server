export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface Admin extends User {}

export type ChildrenParam = {
    children: React.ReactNode;
};

export interface Route {
    path?: string; // Optional, as it may not be present in nested routes
    icon?: ReactNode; // Optional, as it may not be present in nested routes
    name: string;
    routes?: Route[]; // Optional, for nested routes
}

// Define RoutesType as an array of Route
export type RoutesType = Route[];

export type AdminParams = {
    name: string;
    email: string;
    password: string;
    role: string;
};

export type CategoryParams = {
    category: string;
};

export type CourseParams = {
    category_id: string;
    name: string;
    price: string;
    hours: string;
    type: string;
    photo: File;
    video: File;
    requirements: string;
    description: string;
};

export type AdminPageProps = {
    admins: {
        data: User[];
        current_page: number;
        per_page: number;
        total: number;
    };
};
