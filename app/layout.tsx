import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import clsx from "clsx";
import Providers from "@/components/Providers";
import { siteMetadata, siteViewport } from "@/config/site";
import { ChildrenProps } from "@/types/nextjs";
import { fontMontserrat } from "@/config/fonts";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

const RootLayout = ({
	children,
}: ChildrenProps) => {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={clsx(
					"min-h-screen bg-background antialiased",
					fontMontserrat.className
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