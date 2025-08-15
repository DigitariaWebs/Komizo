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
				className="absolute left-0 top-0 w-[300px] opacity-10 pointer-events-none z-0"
				style={{ minWidth: 180, maxWidth: 340 }}
			/>
			<img
				src="/images/img_ellipse_5.svg"
				alt=""
				className="absolute right-0 top-20 w-[180px] opacity-20 pointer-events-none z-0"
			/>
			<img
				src="/images/img_ellipse_7.svg"
				alt=""
				className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[320px] opacity-15 pointer-events-none z-0"
			/>
			<img
				src="/images/img_ellipse_6_orange_300.svg"
				alt=""
				className="absolute left-0 bottom-0 w-[220px] opacity-20 pointer-events-none z-0"
			/>

			{/* Header Section */}
			<div className="w-full px-2 sm:px-4 py-8 relative z-10 bg-gradient-to-br from-global-2 via-global-2 to-gray-50">
				<div className="max-w-6xl mx-auto text-center">
					<div className="mb-8 sm:mb-12">
						<p className="text-sm sm:text-base font-quattrocento font-bold text-global-5 mb-2">
							Centre d'Aide
						</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4">
							Questions Fréquentes
						</h1>
						<p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto">
							Découvrez les réponses complètes à toutes vos questions sur nos services d'immigration,
							de voyage et d'accompagnement. Notre équipe d'experts est là pour vous guider.
						</p>
					</div>
				</div>
			</div>

			{/* Main FAQ Section */}
			<div className="flex-1 w-full px-2 sm:px-4 py-8 sm:py-12 relative z-10 flex flex-col lg:flex-row gap-8">
				{/* Left: Questions */}
				<div className="w-full lg:w-3/5 flex flex-col justify-start">
					<div className="space-y-3 sm:space-y-4">
						{paginatedFaqs.map((faq, idx) => {
							const realIdx = (page - 1) * PAGE_SIZE + idx;
							return (
								<div
									key={realIdx}
									className="bg-white rounded-xl shadow-sm border border-global-5/10 hover:shadow-md transition-all duration-300 overflow-hidden"
								>
									<button
										className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none group"
										onClick={() => toggle(realIdx)}
										aria-expanded={openIndex === realIdx}
									>
										<span className="text-base sm:text-lg font-semibold text-global-6 group-hover:text-global-5 transition-colors duration-200 pr-4">
											{faq.question}
										</span>
										<div className="flex-shrink-0">
											<div className={`w-8 h-8 rounded-full bg-global-5/10 flex items-center justify-center transition-all duration-300 ${openIndex === realIdx ? 'bg-global-5 rotate-180' : 'group-hover:bg-global-5/20'
												}`}>
												<svg
													className={`w-4 h-4 transition-colors duration-200 ${openIndex === realIdx ? 'text-white' : 'text-global-5'
														}`}
													fill="none"
													stroke="currentColor"
													strokeWidth={2.5}
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</div>
										</div>
									</button>

									{openIndex === realIdx && (
										<div className="px-4 sm:px-6 pb-4 sm:pb-5">
											<div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border-l-4 border-global-5">
												<p className="text-global-2 text-sm sm:text-base leading-relaxed">
													{faq.answer}
												</p>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>

					{/* Enhanced Pagination */}
					<div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 bg-white rounded-xl p-4 shadow-sm border border-global-5/10">
						<button
							className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${page === 1
									? 'text-gray-400 cursor-not-allowed'
									: 'text-global-6 hover:bg-global-5/10 hover:text-global-5'
							}`}
							onClick={() => goToPage(1)}
							disabled={page === 1}
						>
							Premier
						</button>
						<button
							className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${page === 1
									? 'text-gray-400 cursor-not-allowed'
									: 'text-global-6 hover:bg-global-5/10 hover:text-global-5'
							}`}
							onClick={prevPage}
							disabled={page === 1}
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
						</button>

						<div className="flex gap-1">
							{Array.from({ length: totalPages }, (_, i) => (
								<button
									key={i}
									className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${page === i + 1
											? 'bg-gradient-to-r from-global-5 to-global-6 text-white shadow-md'
											: 'text-global-6 hover:bg-global-5/10 hover:text-global-5'
										}`}
									onClick={() => goToPage(i + 1)}
								>
									{i + 1}
								</button>
							))}
						</div>

						<button
							className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${page === totalPages
									? 'text-gray-400 cursor-not-allowed'
									: 'text-global-6 hover:bg-global-5/10 hover:text-global-5'
							}`}
							onClick={nextPage}
							disabled={page === totalPages}
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</button>
						<button
							className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${page === totalPages
									? 'text-gray-400 cursor-not-allowed'
									: 'text-global-6 hover:bg-global-5/10 hover:text-global-5'
							}`}
							onClick={() => goToPage(totalPages)}
							disabled={page === totalPages}
						>
							Dernier
						</button>
					</div>
				</div>

				{/* Right: Overlapped Images with enhanced design */}
				<div className="hidden lg:flex w-2/5 items-center justify-center relative">
					<div className="w-full max-w-md relative">
						{/* Background decoration */}
						<div className="absolute -inset-4 bg-gradient-to-br from-global-5/5 to-global-6/5 rounded-2xl"></div>
						<div className="relative">
							<OverlappedImages images={overlappedImages} />
						</div>
					</div>
				</div>
			</div>

			{/* Contact CTA Section */}
			<div className="w-full py-12 sm:py-16 px-2 sm:px-4 bg-gradient-to-r from-global-5 to-global-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<h3 className="text-2xl sm:text-3xl font-quattrocento font-bold text-white mb-4">
						Vous ne trouvez pas la réponse à votre question ?
					</h3>
					<p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
						Notre équipe d'experts est disponible pour vous accompagner personnellement dans votre projet d'immigration ou de voyage.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<a
							href="/contact"
							className="inline-flex items-center px-8 py-3 bg-white text-global-6 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
						>
							<span>Nous contacter</span>
							<svg
								className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</a>
						<div className="flex items-center text-white/80">
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<span className="text-sm">Réponse rapide garantie</span>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Faq;
