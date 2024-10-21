import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import clsx from "clsx";
import Providers from "@/components/Providers";
import { siteConfig } from "@/config/site";
import { ChildrenProps } from "@/types/nextjs";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/config/fonts";

export const metadata: Metadata = siteConfig;

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const RootLayout = ({
	children,
}: ChildrenProps) => {
	return (
		<html suppressHydrationWarning lang="pt-BR">
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
					fontUrban.variable,
					fontHeading.variable,
					fontGeist.variable,
				)}
			>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;