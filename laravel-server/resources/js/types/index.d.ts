export interface User {
    user: User;
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    permissions?: string[];
    roles?: Role[];
    created_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
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
    role_id: string;
};

export type CategoryParams = {
    category: string;
}