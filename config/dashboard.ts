import { UserRole } from "@prisma/client";
import { SidebarNavItem } from "@/types/components";

export const sidebarLinks: SidebarNavItem[] = [
    {
        title: "MENU",
        items: [
            { 
                href: "/dashboard", 
                icon: "dashboard", 
                title: "Dashboard" 
            },
            {
                href: "/dashboard/studio",
                icon: "studio",
                title: "Studio",
                // authorizeOnly: UserRole.ADMIN,
            },
            {
                href: "/dashboard/gallery",
                icon: "gallery",
                title: "Galeria",
            }
        ],
    },
    {
        title: "OPTIONS",
        items: [
            { 
                href: "/", 
                icon: "home", 
                title: "Home" 
            },
            {
                href: "/dashboard/billing",
                icon: "billing",
                title: "Pagamento",
            },
            { 
                href: "/dashboard/settings", 
                icon: "settings", 
                title: "Configurações" 
            },
        ],
    },
];