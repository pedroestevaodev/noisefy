import { SidebarNavItem } from "@/types/components";
import { Metadata } from "next";

export const siteConfig: Metadata = {
	title: {
		default: "Noisefy",
		template: `%s - Noisefy`,
	},
	description: "Descrição do Noisefy",
	icons: {
		icon: "/favicon.ico",
	},
};

export const socialLinks = {
	github: "#"
};

export const navItems: SidebarNavItem[] = [
	{
		title: "Home",
		items: [
			{ title: "About", href: "#" },
			{ title: "Services", href: "#" },
			{ title: "Contact", href: "#" },
		],
	},
];

export const footerLinks: SidebarNavItem[] = [
	{
		title: "Company",
		items: [
			{ title: "About", href: "#" },
			{ title: "Enterprise", href: "#" },
			{ title: "Terms", href: "/terms" },
			{ title: "Privacy", href: "/privacy" },
		],
	},
	{
		title: "Product",
		items: [
			{ title: "Security", href: "#" },
			{ title: "Customization", href: "#" },
			{ title: "Customers", href: "#" },
			{ title: "Changelog", href: "#" },
		],
	},
	{
		title: "Docs",
		items: [
			{ title: "Introduction", href: "#" },
			{ title: "Installation", href: "#" },
			{ title: "Components", href: "#" },
			{ title: "Code Blocks", href: "#" },
		],
	},
];