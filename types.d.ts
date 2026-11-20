export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
    company: {
        name: string;
    };
}
export interface DashboardUser {
    id: number;
    fullName: string;
    email: string;
    city: string;
}
//# sourceMappingURL=types.d.ts.map