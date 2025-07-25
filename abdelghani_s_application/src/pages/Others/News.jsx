import React, { useState } from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';

const NEWS = [
	{
		id: 1,
		image: '/images/news_canada_1.jpg',
		date: '2024-06-01',
		publisher: 'Radio Canada',
		title: "Le Canada facilite l'immigration pour les étudiants étrangers",
		content:
			"Le gouvernement canadien a annoncé de nouvelles mesures pour simplifier le processus d'immigration des étudiants internationaux. Ces changements visent à attirer davantage de talents et à renforcer la diversité culturelle du pays. Les étudiants bénéficieront désormais de délais de traitement plus courts et de nouvelles opportunités de résidence permanente après leurs études. Cette initiative s'inscrit dans la volonté du Canada de rester une destination privilégiée pour l'éducation supérieure.",
	},
	{
		id: 2,
		image: '/images/news_usa_1.jpg',
		date: '2024-05-28',
		publisher: 'Le Monde',
		title: 'Les États-Unis assouplissent les règles de visa pour les travailleurs qualifiés',
		content:
			"Les autorités américaines ont annoncé un assouplissement des règles de visa pour les travailleurs qualifiés dans les secteurs technologiques et médicaux. Cette mesure vise à répondre à la pénurie de main-d'œuvre et à soutenir la croissance économique. Les candidats bénéficieront de procédures accélérées et de quotas élargis pour certains métiers en forte demande.",
	},
	{
		id: 3,
		image: '/images/news_canada_2.jpg',
		date: '2024-05-25',
		publisher: 'La Presse',
		title: 'Nouvelles opportunités pour les francophones au Canada',
		content:
			"Le Canada lance un nouveau programme destiné à encourager l'immigration francophone en dehors du Québec. Ce programme offre des avantages spécifiques, notamment un accompagnement personnalisé et des aides à l'installation pour les nouveaux arrivants francophones.",
	},
	{
		id: 4,
		image: '/images/news_usa_2.jpg',
		date: '2024-05-20',
		publisher: 'France 24',
		title: 'Étudier aux USA : les universités américaines rouvrent leurs portes',
		content:
			"Après deux ans de restrictions liées à la pandémie, les universités américaines accueillent à nouveau les étudiants internationaux. Les procédures de visa sont simplifiées et de nouveaux programmes de bourses sont proposés pour attirer les talents du monde entier.",
	},
	{
		id: 5,
		image: '/images/news_canada_3.jpg',
		date: '2024-05-15',
		publisher: 'CBC News',
		title: 'Le Québec augmente ses quotas d\'immigration pour 2024',
		content:
			"Le gouvernement du Québec a décidé d'augmenter le nombre de nouveaux arrivants pour l'année 2024. Cette décision vise à répondre aux besoins du marché du travail et à soutenir la croissance démographique de la province.",
	},
	{
		id: 6,
		image: '/images/news_usa_3.jpg',
		date: '2024-05-10',
		publisher: 'New York Times',
		title: 'Les USA lancent un portail d\'information pour les nouveaux immigrants',
		content:
			"Un nouveau portail en ligne a été lancé pour aider les immigrants à s'installer aux États-Unis. Il propose des guides pratiques, des informations sur les démarches administratives et des conseils pour réussir son intégration.",
	},
];

function getShortContent(content, wordCount = 14) {
	const words = content.split(' ');
	return (
		words.slice(0, wordCount).join(' ') +
		(words.length > wordCount ? '...' : '')
	);
}

const PAGE_SIZE = 6;

const News = () => {
	const [selectedNewsId, setSelectedNewsId] = useState(null);
	const [page, setPage] = useState(1);

	const selectedNews = NEWS.find((n) => n.id === selectedNewsId);
	const relatedNews = NEWS.filter((n) => n.id !== selectedNewsId).slice(0, 3);

	const totalPages = Math.ceil(NEWS.length / PAGE_SIZE);
	const paginatedNews = NEWS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	return (
		<div className="w-full min-h-screen flex flex-col bg-global-2">
			<HeroSection
				customTitle="Restez à jour avec les dernières actualités"
				customDescription="Découvrez les dernières nouvelles, conseils et inspirations sur l'immigration et les voyages au Canada, aux USA et ailleurs."
			/>

			{/* News Detail Section */}
			{selectedNews && (
				<div className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
					{/* News Detail */}
					<section className="w-full md:w-2/3 bg-white rounded p-6">
						{/* Back option */}
						<button
							className="mb-4 text-blue-600 font-barlow font-semibold text-sm hover:underline flex items-center gap-2"
							onClick={() => setSelectedNewsId(null)}
						>
							<svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
							Retour à la liste des actualités
						</button>
						<div className="mb-2 text-xs text-global-4">
							{selectedNews.date} • {selectedNews.publisher}
						</div>
						<h2 className="text-2xl font-bold text-global-6 mb-4">
							{selectedNews.title}
						</h2>
						<p className="text-base text-global-2">
							{selectedNews.content}
						</p>

						{/* Top popular travel destination section */}
						<div className="mt-10">
							<h3 className="text-xl font-bold text-global-6 mb-8">
								Top popular travel destination
							</h3>
							{/* Images row */}
							<div className="flex flex-row gap-6 mb-6">
								<img
									src="/images/news_canada_1.jpg"
									alt="Canada"
									className="w-1/3 h-32 object-cover rounded"
								/>
								<img
									src="/images/news_usa_1.jpg"
									alt="USA"
									className="w-1/3 h-32 object-cover rounded"
								/>
								<img
									src="/images/news_canada_2.jpg"
									alt="France"
									className="w-1/3 h-32 object-cover rounded"
								/>
							</div>
							{/* Titles and descriptions under each other */}
							<div className="flex flex-col gap-4 mb-6">
								<div>
									<h4 className="text-lg font-semibold text-global-6 mb-1">Canada</h4>
									<p className="text-sm text-global-2">
										Explorez les vastes paysages du Canada, sa diversité culturelle et ses opportunités uniques pour les voyageurs et immigrants.
									</p>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-global-6 mb-1">États-Unis</h4>
									<p className="text-sm text-global-2">
										Découvrez le rêve américain, des grandes villes dynamiques aux parcs nationaux emblématiques et une multitude de possibilités.
									</p>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-global-6 mb-1">France</h4>
									<p className="text-sm text-global-2">
										Profitez de la richesse historique, de la gastronomie et de l’art de vivre à la française dans l’une des destinations les plus prisées.
									</p>
								</div>
							</div>
							{/* Keywords */}
							<div className="mb-4">
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-xs font-semibold mr-2 px-3 py-1 rounded-full">immigration</span>
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-xs font-semibold mr-2 px-3 py-1 rounded-full">voyage</span>
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-xs font-semibold mr-2 px-3 py-1 rounded-full">Canada</span>
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-xs font-semibold mr-2 px-3 py-1 rounded-full">USA</span>
							</div>
							<hr className="my-4" />
							{/* Publisher row */}
							<div className="flex items-center w-full justify-between">
								<div className="flex items-center gap-3">
									<img
										src="/images/img_akar_icons_linkedin_box_fill.svg"
										alt={selectedNews.publisher}
										className="w-12 h-12 rounded-full bg-gray-200"
									/>
									<div className='flex flex-col'>
                                        <span className='text-base font-medium'>
										Par {selectedNews.publisher}
									    </span>
                                        <span className='text-xs text-global-4'>
                                          Chercheur & Guide
                                        </span>
                                    </div>
								</div>
								<div className="flex items-center gap-2">
									<a href="#" aria-label="LinkedIn">
										<img src="/images/img_akar_icons_linkedin_box_fill.svg" alt="LinkedIn" className="w-4 h-4" style={{ filter: 'invert(32%) sepia(18%) saturate(1396%) hue-rotate(176deg) brightness(93%) contrast(90%)' }} />
									</a>
									<a href="#" aria-label="Facebook">
										<img src="/images/img_vector.svg" alt="Facebook" className="w-4 h-4" style={{ filter: 'invert(32%) sepia(18%) saturate(1396%) hue-rotate(176deg) brightness(93%) contrast(90%)' }} />
									</a>
									<a href="#" aria-label="Twitter">
										<img src="/images/img_akar_icons_twitter_fill.svg" alt="Twitter" className="w-4 h-4" style={{ filter: 'invert(32%) sepia(18%) saturate(1396%) hue-rotate(176deg) brightness(93%) contrast(90%)' }} />
									</a>
									<a href="#" aria-label="Instagram">
										<img src="/images/img_ant_design_instagram_filled.svg" alt="Instagram" className="w-4 h-4" style={{ filter: 'invert(32%) sepia(18%) saturate(1396%) hue-rotate(176deg) brightness(93%) contrast(90%)' }} />
									</a>
								</div>
							</div>
						</div>
					</section>
					{/* Related Articles - now on the right, no shadow/card */}
					<aside className="w-full md:w-1/3 mb-8 md:mb-0">
						<h3 className="text-lg font-bold text-global-6 mb-4">
							Des articles pareils
						</h3>
						<div className="flex flex-col gap-4">
							{relatedNews.map((news) => (
								<div
									key={news.id}
									className="flex gap-3 cursor-pointer bg-white rounded hover:bg-global-1/10 transition" // removed shadow
									onClick={() => setSelectedNewsId(news.id)}
								>
									<img
										src={news.image}
										alt={news.title}
										className="w-16 h-16 object-cover rounded-l"
									/>
									<div className="flex flex-col justify-center">
										<span className="text-xs text-global-4">
											{news.date} • {news.publisher}
										</span>
										<span className="text-sm font-semibold text-global-6">
											{news.title}
										</span>
									</div>
								</div>
							))}
						</div>
					</aside>
				</div>
			)}

			{/* News Cards Grid */}
			{!selectedNews && (
				<div className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
					{/* Yellow Section Title */}
					<p className="text-[12px] sm:text-[18px] font-quattrocento font-bold text-global-7 mb-2">
						Notre News
					</p>
					<h2 className="text-2xl font-bold mb-8 text-global-6">
						Restez à jour avec les dernières actualités sur le Canada, les USA et
						plus encore
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{paginatedNews.map((news) => (
							<div
								key={news.id}
								className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col"
								onClick={() => setSelectedNewsId(news.id)}
							>
								<img
									src={news.image}
									alt={news.title}
									className="w-full h-44 object-cover rounded-t-lg"
								/>
								<div
									className="p-4 flex flex-col flex-1 border-2 border-[#4974A0] border-t-0 rounded-b-lg min-h-[260px]"
									style={{ borderTop: 'none' }}
								>
									<span className="text-xs text-black font-barlow mb-3">
										{news.date} • {news.publisher}
									</span>
									<h3 className="text-2xl font-semibold text-black font-barlow mb-3">
										{news.title}
									</h3>
									<p className="text-sm flex-1 text-black font-barlow mb-0">
										{getShortContent(news.content)}
									</p>
									<span className="text-[#4974A0] block font-barlow text-sm font-bold mt-0 cursor-pointer">
										Lire la suite
									</span>
								</div>
							</div>
						))}
					</div>
					{/* Pagination */}
        <div className="flex flex-row items-center justify-center gap-3 mt-12">
          <span className="text-[#4974A0] font-barlow cursor-pointer">Premier</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer">{'<'}</span>
          <span className="text-black font-barlow font-bold px-2">1</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer px-2">2</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer px-2">3</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer">{'>'}</span>
          <span className="text-[#4974A0] font-barlow cursor-pointer">Dernier</span>
        </div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default News;
