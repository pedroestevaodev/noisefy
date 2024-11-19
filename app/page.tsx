import { Hero } from "@/components/landing/sections/Hero";
import { Valores } from "@/components/landing/sections/Valores";
import { FAQ } from "@/components/landing/sections/FAQ";
import { ProcessImgsRed } from "@/components/landing/sections/ProcessImgsRed";
import { FuncDoSoftware } from "@/components/landing/sections/FuncDoSoftware";
import { HowAre } from "@/components/landing/sections/HowAre";
import { JunteseANos } from "@/components/landing/sections/JunteseANos";
import { ImgBeforeAfter } from "@/components/landing/sections/ImgBeforeAfter";
import { NavbarMobile } from "@/components/landing/NavbarMobile";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
	return (
		<div className="flex dark:bg-noisefy-950 min-h-screen flex-col">
			<NavbarMobile />
			<Navbar scroll />

			<main className="flex-1">
				<Hero />
				<ImgBeforeAfter />
				<ProcessImgsRed />
				<FuncDoSoftware />
				<Valores />
				<JunteseANos />
				<HowAre />
				<FAQ />
			</main>

			<Footer />
		</div>
	);
}
