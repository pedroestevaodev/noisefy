import React from "react";
import ComentariosGrid from "./depoimentos";


const comentariosData = [
	{
		nome: "Douglas",
		fotoPerfil: "/imgs/genericProfilePic1.jpg",
		recomendacao: "A plataforma é super intuitiva e fácil de usar. Consegui editar e melhorar minhas fotos de forma muito rápida. Foi uma experiência gratificante ver o resultado final.",
	},
	{
		nome: "Karoline",
		fotoPerfil: "/imgs/genericProfilePic2.jpg",
		recomendacao: "Simplesmente sensacional! O fluxo de trabalho no site é impecável, tornando o tratamento de imagens algo muito mais ágil e acessível.",
	},
	{
		nome: "Ana Claudia",
		fotoPerfil: "/imgs/genericProfilePic3.jpg",
		recomendacao: "Fiquei impressionado com a variedade de ferramentas disponíveis! O site oferece tudo o que eu precisava para ajustar detalhes nas minhas fotos.",
	},
	{
		nome: "Dani Olmo",
		fotoPerfil: "/imgs/genericProfilePic4.jpg",
		recomendacao: "Amei a experiência! Consegui fazer edições detalhadas em minhas imagens sem nenhuma dificuldade. A interface é amigável, e o resultado final foi tão profissional que parece ter sido feito por um designer!",
	},
	{
		nome: "Luiza",
		fotoPerfil: "/imgs/genericProfilePic5.jpg",
		recomendacao: "A plataforma transformou minha maneira de editar imagens! A interface é limpa e as ferramentas são incrivelmente eficazes.",
	},
	{
		nome: "Pedro",
		fotoPerfil: "/imgs/genericProfilePic6.jpg",
		recomendacao: "Nunca pensei que seria tão fácil melhorar minhas fotos. Tudo funciona perfeitamente e os resultados são profissionais!",
	},
	{
		nome: "Laura",
		fotoPerfil: "/imgs/genericProfilePic7.jpg",
		recomendacao: "O software tem tudo que eu precisava: rapidez, precisão e facilidade de uso. Recomendo de olhos fechados.",
	},
	{
		nome: "Claudio",
		fotoPerfil: "/imgs/genericProfilePic8.jpg",
		recomendacao: "A funcionalidade de ajustes automáticos é fantástica. Economizei horas de trabalho com um único clique!",
	},

];

const JunteseANos = () => {
	return (
		<section className="pt-8 container" id="lp-juntese-a-nos">
			<h3 className="text-3xl font-bold text-left text-noisefy-800 border-l-8 border-noisefy-800 pl-4 ml-4 uppercase">
				Junte -se aos mais de 50.000 usuários
			</h3>
			<p className="text-lg pt-5 text-foreground-700 text-left ml-4">
				Clientes satisfeitos ao redor do mundo estão utilizando Noisefy para transformar suas imagens com rapidez e precisão.
			</p>
			<div className="p-4 mt-3">
				<ComentariosGrid comentarios={comentariosData} />
			</div>
		</section>
	);
};

export { JunteseANos };
