import localFont from "next/font/local";
import { Inter as FontSans, Poppins, Urbanist } from "next/font/google";
import { Montserrat } from "next/font/google";

export const fontMontserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontUrban = Urbanist({
	subsets: ["latin"],
	variable: "--font-urban",
});

export const fontHeading = localFont({
	src: "../public/fonts/CalSans-SemiBold.woff2",
	variable: "--font-heading",
});

export const fontGeist = localFont({
	src: "../public/fonts/GeistVF.woff2",
	variable: "--font-geist",
});

export const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});