export interface LoginCredentialsFormData {
    email: string;
    password: string;
};

export interface CategoryFormData {
    slug?: string;
    name: string;
    label: string;
    icon: string;
    oldIcon: string;
    iconFile: FileList | null;
};

export interface ProfileFormData {
    name: string;
    email: string;
    image: string;
    oldImage: string | null;
    imageFile: FileList | null;
};

export interface ProjectFormData {
    slug?: string;
    title: string;
    description: string;
    image: string;
    oldImage: string;
    imageFile: FileList | null;
    languages: string[];
    frameworks: string[];
    platforms: string[];
    links: {
        url: string;
        type: 'github' | 'deploy';
    }[];
};

export type UserType = "user" | "admin"

export type UserStatus = 'active' | 'inactive';

export interface UserFormData {
    name: string;
    email: string;
    role: UserType;
    status: UserStatus;
    image: string;
    oldImage: string | null;
    imageFile: FileList | null;
};