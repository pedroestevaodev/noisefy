import { UserRole } from "@prisma/client";
import { SidebarNavItem } from "@/types/components";

export const sidebarLinks: SidebarNavItem[] = [
    {
        title: "MENU",
        items: [
            {
                href: "/admin",
                icon: "laptop",
                title: "Admin Panel",
                authorizeOnly: UserRole.ADMIN,
            },
            { href: "/dashboard", icon: "dashboard", title: "Inicio" },
            {
                href: "/dashboard/billing",
                icon: "billing",
                title: "Plano",
                authorizeOnly: UserRole.USER,
            },
            {
                href: "/admin/orders",
                icon: "package",
                title: "Orders",
                badge: 2,
                authorizeOnly: UserRole.ADMIN,
            },
            {
                href: "#/dashboard/posts",
                icon: "post",
                title: "Post de usuários",
                authorizeOnly: UserRole.USER,
                disabled: true,
            },
        ],
    },
    {
        title: "OPTIONS",
        items: [
            { href: "/dashboard/settings", icon: "settings", title: "Configurações" },
            { href: "/", icon: "home", title: "Página Inicial" },
            { href: "/docs", icon: "bookOpen", title: "Documentação" },
            {
                href: "#",
                icon: "messages",
                title: "Suporte",
                authorizeOnly: UserRole.USER,
                disabled: true,
            },
        ],
    },
];