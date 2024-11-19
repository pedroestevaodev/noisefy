import { SidebarNavItem } from "@/types/components";
import { Metadata, Viewport } from "next";

export const siteMetadata: Metadata = {
	applicationName: "Noisefy",
    title: {
        default: "Noisefy",
        template: `$s - Noisefy`,
    },
    description: "Noisefy oferece soluções avançadas para tratamento e análise de imagens, como conversão de cores, pré-processamento, histogramas, restauração, recuperação, limiarização, e galeria integrada. Tudo isso de forma rápida e eficaz, utilizando as mais poderosas técnicas de processamento de imagens disponíveis atualmente no mercado.",
    authors: [
        {
			name: "Caio Caminitti",
			url: "https://www.linkedin.com/in/caio-moraes-a9961b291",
		},
		{
			name: "Sara Miranda",
			url: "https://www.linkedin.com/in/sara-miranda-santos-b0a8211ab",
		},
		{
			name: "Sérgio Caminitti",
			url: "https://www.linkedin.com/in/sergiocaminitti",
		},
		{
			name: "Pedro Estevão",
			url: "https://www.linkedin.com/in/pedro-estevao",
		},
    ],
    generator: "Next.js",
    keywords: ["Noisefy", "Noisefy 2024", "Noisefy 2024 - Todos os direitos reservados", "Noisefy - Tratamento de imagens", "Expandir imagens", "Limiarizar imagens", "Melhorar resolução das imagens", "Aumentar qualidade da foto", "Recuperar imagens antigas", "tratamento e análise de imagens", "conversão de cores", "pré-processamento", "histogramas", "restauração de imagens", "recuperação de imagens", "limiarização", "galeria integrada"],
    creator: "Equipe Noisefy",
	publisher: "Equipe Noisefy",
	robots: "index, follow",
	alternates: {
		canonical: "https://noisefy.vercel.app",
	},
	icons: {
		icon: "/favicon.ico",
	},
    openGraph: {
		title: "Noisefy",
		description: "Noisefy oferece soluções avançadas para tratamento e análise de imagens, como conversão de cores, pré-processamento, histogramas, restauração, recuperação, limiarização, e galeria integrada. Tudo isso de forma rápida e eficaz, utilizando as mais poderosas técnicas de processamento de imagens disponíveis atualmente no mercado.",
		type: "website",
		locale: "pt_BR",
		countryName: "Brasil",
		url: "https://noisefy.vercel.app",
		siteName: "Noisefy",
		images: [
			{
				url: "/imgs/logo.png",
				width: 1200,
				// height: 630,
				alt: "Logo da Noisefy",
			},
		],
	},
	twitter: {
		title: "Noisefy",
		description: "Noisefy oferece soluções avançadas para tratamento e análise de imagens, como conversão de cores, pré-processamento, histogramas, restauração, recuperação, limiarização, e galeria integrada. Tudo isso de forma rápida e eficaz, utilizando as mais poderosas técnicas de processamento de imagens disponíveis atualmente no mercado.",
		card: "summary_large_image",
		site: "@noisefy",
		creator: "@noisefy",
		images: [
			{
				url: "/imgs/logo.png",
				width: 1200,
				// height: 630,
				alt: "Logo da Noisefy",
			},
		],
	},
	appleWebApp: {
		title: "Noisefy",
		capable: true,
		statusBarStyle: "default",
		startupImage: [
			{
				url: "/imgs/logo.png",
			},
		],
	},
	category: "Edição de Imagens",
	classification: "Design Gráfico, Edição Criativa, IA Generativa, Tratamento de Imagens",
};

export const siteViewport: Viewport = {
	colorScheme: "light dark",
	initialScale: 1,
	maximumScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	userScalable: false,
	width: "device-width",
};

export const socialLinks = {
	github: "https://github.com/Pedro-Estevao/noisefy",
	perfis: {
		caio: "https://www.linkedin.com/in/caio-moraes-a9961b291",
		sara: "https://www.linkedin.com/in/sara-miranda-santos-b0a8211ab",
		sergio: "https://www.linkedin.com/in/sergiocaminitti",
		pedro: "https://www.linkedin.com/in/pedro-estevao",
	},
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
		title: "Contato",
		items: [
			{ title: "Instagram", href: "#", icon: "instagram" },
			{ title: "Facebook", href: "#", icon: "facebook" },
			{ title: "Suporte", href: "mailto:contatonoisefy@gmail.com", icon: "email" },
			{ title: "Telefone", href: "tel:+55016991784589", icon: "phone" },
		],
	},
	{
		title: "Produto",
		items: [
			{ title: "Introdução", href: "#" },
			{ title: "Funções", href: "#" },
			{ title: "Preços", href: "#" },
			{ title: "Dúvidas", href: "#" },
		],
	},
	{
		title: "Compania",
		items: [
			{ title: "Sobre", href: "#" },
			{ title: "Empresa", href: "#" },
			{ title: "Termos", href: "#" },
			{ title: "Privacy", href: "#" },
		],
	},
];