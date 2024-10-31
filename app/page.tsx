import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import NavbarMobile from "@/components/landing/NavbarMobile";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<NavbarMobile />
			<Navbar scroll />
			<main className="flex-1">
				<Hero />
			</main>
			<FAQ/>
			<Footer />
		</div>
	);
}
