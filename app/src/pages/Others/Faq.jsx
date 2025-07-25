import React, { useState } from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';
import OverlappedImages from '../../components/ui/OverlappedImages';

// 20 most frequent questions and answers
const FAQS = [
	{
		question: "Comment puis-je commencer une demande d'immigration ?",
		answer: "Vous pouvez commencer en consultant les exigences du pays choisi sur notre site, puis suivre les étapes indiquées pour soumettre votre dossier.",
	},
	{
		question: "Quels documents sont nécessaires pour voyager au Canada ?",
		answer: "Les documents courants incluent un passeport valide, un visa ou une AVE, une preuve de fonds et parfois une lettre d'invitation.",
	},
	{
		question: "Comment obtenir un visa pour les États-Unis ?",
		answer: "Vous devez remplir le formulaire DS-160, payer les frais de visa, puis prendre rendez-vous à l'ambassade ou au consulat américain.",
	},
	{
		question: "Quels sont les délais de traitement pour une demande de visa ?",
		answer: "Les délais varient selon le pays et le type de visa, mais ils sont généralement compris entre 2 semaines et plusieurs mois.",
	},
	{
		question: "Puis-je travailler pendant mes études à l'étranger ?",
		answer: "Oui, de nombreux pays autorisent les étudiants à travailler un nombre limité d'heures par semaine pendant leurs études.",
	},
	{
		question: "Comment trouver un logement à l'étranger ?",
		answer: "Nous recommandons d'utiliser des plateformes spécialisées, de contacter les universités ou de consulter nos guides logement.",
	},
	{
		question: "Quelles assurances sont obligatoires pour voyager ?",
		answer: "Une assurance santé et rapatriement est souvent exigée. Vérifiez les exigences du pays de destination.",
	},
	{
		question: "Comment prouver mes ressources financières ?",
		answer: "Vous pouvez fournir des relevés bancaires, des attestations de bourse ou des lettres de soutien financier.",
	},
	{
		question: "Puis-je emmener ma famille avec moi ?",
		answer: "Oui, certains visas permettent d'inclure les membres de la famille. Consultez les conditions spécifiques du pays.",
	},
	{
		question: "Comment améliorer mes chances d'obtenir un visa ?",
		answer: "Préparez un dossier complet, soyez honnête lors de l'entretien et démontrez vos liens avec votre pays d'origine.",
	},
	{
		question: "Quelles sont les démarches pour obtenir la résidence permanente ?",
		answer: "Elles varient selon le pays, mais impliquent souvent un séjour préalable, un emploi stable et une intégration réussie.",
	},
	{
		question: "Comment valider mon diplôme à l'étranger ?",
		answer: "Vous devrez faire reconnaître vos diplômes via des organismes d'équivalence ou des procédures d'évaluation locale.",
	},
	{
		question: "Quels sont les frais à prévoir pour immigrer ?",
		answer: "Les frais incluent le visa, le billet d'avion, l'assurance, le logement et parfois des frais administratifs supplémentaires.",
	},
	{
		question: "Puis-je obtenir une bourse pour étudier à l'étranger ?",
		answer: "Oui, de nombreuses bourses existent. Consultez notre section bourses ou les sites officiels des universités.",
	},
	{
		question: "Comment apprendre la langue du pays d'accueil ?",
		answer: "Des cours en ligne, des applications mobiles et des programmes d'intégration sont disponibles pour vous aider.",
	},
	{
		question: "Que faire en cas de refus de visa ?",
		answer: "Analysez les motifs du refus, corrigez votre dossier si possible et envisagez de faire appel ou de déposer une nouvelle demande.",
	},
	{
		question: "Quels sont les risques d'immigrer sans visa ?",
		answer: "Vous risquez l'expulsion, l'interdiction de territoire et des difficultés à régulariser votre situation par la suite.",
	},
	{
		question: "Comment trouver un emploi à l'étranger ?",
		answer: "Utilisez les plateformes d'emploi, les réseaux professionnels et consultez nos conseils pour optimiser votre candidature.",
	},
	{
		question: "Dois-je faire traduire mes documents ?",
		answer: "Oui, la plupart des pays exigent des traductions officielles de vos documents en anglais ou dans la langue locale.",
	},
	{
		question: "Comment préparer mon départ ?",
		answer: "Préparez vos documents, trouvez un logement temporaire, informez-vous sur la culture locale et souscrivez une assurance.",
	},
];

const overlappedImages = [
	{ src: '/images/img_image_5.png', alt: 'FAQ Illustration 1' },
	{ src: '/images/img_image_6.png', alt: 'FAQ Illustration 2' },
	{ src: '/images/img_image_49.png', alt: 'FAQ Illustration 3' },
];


const PAGE_SIZE = 5;

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const [page, setPage] = useState(1);

	const totalPages = Math.ceil(FAQS.length / PAGE_SIZE);
	const paginatedFaqs = FAQS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

	const goToPage = (p) => setPage(p);
	const prevPage = () => setPage((p) => Math.max(1, p - 1));
	const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));

	return (
		<div className="w-full min-h-screen flex flex-col bg-global-2 relative overflow-hidden">
			<HeroSection />
			{/* Decorative SVGs */}
			<img
				src="/images/map.svg"
				alt=""
				className="absolute left-0 top-0 w-[300px] opacity-20 pointer-events-none z-0"
				style={{ minWidth: 180, maxWidth: 340 }}
			/>
			<img
				src="/images/img_ellipse_5.svg"
				alt=""
				className="absolute right-0 top-20 w-[180px] opacity-30 pointer-events-none z-0"
			/>
			<img
				src="/images/img_ellipse_7.svg"
				alt=""
				className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[320px] opacity-20 pointer-events-none z-0"
			/>
			<img
				src="/images/img_ellipse_6_orange_300.svg"
				alt=""
				className="absolute left-0 bottom-0 w-[220px] opacity-30 pointer-events-none z-0"
			/>
			{/* Main FAQ Section */}
			<div className="flex-1 w-full px-0 py-12 relative z-10 flex flex-col lg:flex-row gap-0">
				{/* Left: Questions */}
				<div className="w-full lg:w-3/5 flex flex-col justify-start px-4">
					<h2 className="text-3xl font-bold mb-4 text-global-6 text-left">
						Questions fréquentes
					</h2>
					<p className="text-base text-global-4 mb-8 text-left">
						Vous avez une question ? Consultez notre FAQ pour trouver rapidement une
						réponse.
					</p>
					<div className="flex flex-col gap-4">
						{paginatedFaqs.map((faq, idx) => {
							const realIdx = (page - 1) * PAGE_SIZE + idx;
							return (
								<div
									key={realIdx}
									className="bg-white rounded-lg shadow transition border border-[#4974A0]/20"
								>
									<button
										className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
										onClick={() => toggle(realIdx)}
										aria-expanded={openIndex === realIdx}
									>
										<span className="text-lg font-semibold text-global-6">
											{faq.question}
										</span>
										<svg
											className={`w-5 h-5 text-global-4 transform transition-transform duration-200 ${
												openIndex === realIdx ? 'rotate-180' : ''
											}`}
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
									{openIndex === realIdx && (
										<div className="px-6 pb-4 text-global-2 text-base">
											{faq.answer}
										</div>
									)}
								</div>
							);
						})}
					</div>
					{/* Pagination */}
					<div className="flex flex-row items-center justify-start gap-3 mt-10">
						<button
							className={`text-[#4974A0] font-barlow cursor-pointer px-2 py-1 rounded ${
								page === 1 ? 'opacity-50 pointer-events-none' : ''
							}`}
							onClick={() => goToPage(1)}
						>
							Premier
						</button>
						<button
							className={`text-[#4974A0] font-barlow cursor-pointer px-2 py-1 rounded ${
								page === 1 ? 'opacity-50 pointer-events-none' : ''
							}`}
							onClick={prevPage}
						>
							{'<'}
						</button>
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								className={`font-barlow px-2 py-1 rounded ${
									page === i + 1
										? 'bg-[#4974A0] text-white font-bold'
										: 'text-[#4974A0] hover:bg-[#4974A0]/10'
								}`}
								onClick={() => goToPage(i + 1)}
							>
								{i + 1}
							</button>
						))}
						<button
							className={`text-[#4974A0] font-barlow cursor-pointer px-2 py-1 rounded ${
								page === totalPages ? 'opacity-50 pointer-events-none' : ''
							}`}
							onClick={nextPage}
						>
							{'>'}
						</button>
						<button
							className={`text-[#4974A0] font-barlow cursor-pointer px-2 py-1 rounded ${
								page === totalPages ? 'opacity-50 pointer-events-none' : ''
							}`}
							onClick={() => goToPage(totalPages)}
						>
							Dernier
						</button>
					</div>
				</div>
				{/* Right: Overlapped Images */}
				<div className="hidden lg:flex w-2/5 items-center justify-center relative">
					<div className="w-full max-w-md">
						<OverlappedImages
							images={overlappedImages}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Faq;
