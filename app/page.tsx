import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import NavbarMobile from "@/components/landing/NavbarMobile";
import Valores from "@/components/landing/Valores";
import FAQ from "@/components/landing/FAQ";
import ProcessImgsRed from "@/components/landing/ProcessImgsRed";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col" >
			<NavbarMobile />
			<Navbar scroll />
			<main className="flex-1">
				<Hero />
				<ProcessImgsRed />
				<Valores />
			</main>
			<FAQ/>
			<Footer />
		</div>
	);
}
