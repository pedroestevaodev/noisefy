'use client';

import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const FuncDoSoftware = () => {
	return (
		<section className="space-y-6 py-12 sm:py-20" id="lp-func-do-software">
			<MaxWidthWrapper className="relative flex flex-col gap-14 max-w-[1440px] mx-auto">
				<h3 className="text-3xl font-bold text-left text-noisefy-800 border-l-8 border-noisefy-800 pl-4 ml-4 uppercase">
					Funções do Software
				</h3>
				<div className="flex flex-col gap-16">
					<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
						<div className="flex flex-col gap-10">
							<Card className="bg-noisefy-500 text-white rounded-[10px] max-w-[700px]">
								<CardHeader className="text-xl font-bold">Image Color Converter</CardHeader>
								<CardContent>
									Nossa ferramenta converte imagens entre diferentes espaços de cor como RGB, CMYK e tons de cinza. Ideal para otimização de imagens em campanhas de marketing ou design técnico.
								</CardContent>
							</Card>
							<Card className="bg-noisefy-500 text-white rounded-[10px] max-w-[700px]">
								<CardHeader className="text-xl font-bold">Pré-Processamento</CardHeader>
								<CardContent>
									Dê o primeiro passo para resultados incríveis! Nosso sistema analisa e corrige automaticamente sua imagem, ajustando cores, brilho, contraste e removendo ruídos antes de iniciar o tratamento avançado. Ideal para fotos antigas ou imagens de baixa qualidade. Com o pré-processamento, suas fotos recebem uma base sólida para um upscaling perfeito e recuperação detalhada.
								</CardContent>
							</Card>
						</div>
						<div className="">
							<Image
								src={`/imgs/upload.gif`}
								className=""
								width={611}
								height={611}
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
						<div className="">
							<Image
								src={`/imgs/editing.gif`}
								className=""
								width={611}
								height={611}
								alt=""
							/>
						</div>
						<div className="flex flex-col gap-10">
							<Card className="bg-noisefy-500 text-white rounded-[10px] max-w-[700px]">
								<CardHeader className="text-xl font-bold">Limiar</CardHeader>
								<CardContent>
									Facilite a segmentação das imagens isolando objetos e regiões específicas com técnicas de limiarização. Isso é crucial para identificar áreas de interesse em imagens complexas.
								</CardContent>
							</Card>
							<Card className="bg-noisefy-500 text-white rounded-[10px] max-w-[700px]">
								<CardHeader className="text-xl font-bold">Histograma</CardHeader>
								<CardContent>
									Visualize a distribuição de intensidade dos pixels nas suas imagens, ajustando o contraste e a exposição de maneira eficiente. Essencial para ajustes de qualidade em fotografias e designs.
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export { FuncDoSoftware };