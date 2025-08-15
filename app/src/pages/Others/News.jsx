import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/ui/HeroSection';
import Footer from '../../components/common/Footer';
import { fetchUSAndCanadaNews, fetchImmigrationNews, getFallbackNews } from '../../services/newsService';

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
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [newsSource, setNewsSource] = useState('trending'); // 'trending' or 'immigration'

	// Load news data on component mount
	useEffect(() => {
		const loadNews = async () => {
			setLoading(true);
			try {
				console.log('Loading news with source:', newsSource);
				let newsData = [];
				
				if (newsSource === 'trending') {
					// Try to fetch real trending news from US and Canada
					newsData = await fetchUSAndCanadaNews();
				} else {
					// Fetch immigration-specific news
					newsData = await fetchImmigrationNews();
				}
				
				console.log('Fetched news data:', newsData);
				
				// If no data from API, use fallback data
				if (newsData.length === 0) {
					console.log('Using fallback news data');
					newsData = getFallbackNews();
				}
				
				setNews(newsData);
			} catch (error) {
				console.error('Error loading news:', error);
				// Use fallback data if there's an error
				setNews(getFallbackNews());
			} finally {
				setLoading(false);
			}
		};

		loadNews();
	}, [newsSource]);

	const selectedNews = news.find((n) => n.id === selectedNewsId);
	const relatedNews = news.filter((n) => n.id !== selectedNewsId).slice(0, 3);

	const totalPages = Math.ceil(news.length / PAGE_SIZE);
	const paginatedNews = news.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

	return (
		<div className="w-full min-h-screen flex flex-col bg-global-2">
			<HeroSection
				customTitle="Conseil : Restez à jour avec les dernières actualités"
				customDescription="Découvrez les dernières nouvelles, conseils et inspirations sur l'immigration et les voyages au Canada, aux USA et ailleurs."
			/>

			{/* News Detail Section */}
			{selectedNews && (
				<div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-6 sm:py-10 flex flex-col md:flex-row gap-6 sm:gap-8">
					{/* News Detail */}
					<section className="w-full md:w-2/3 bg-white rounded p-4 sm:p-6">
						{/* Back option */}
						<button
							className="mb-3 sm:mb-4 text-blue-600 font-barlow font-semibold text-xs sm:text-sm hover:underline flex items-center gap-2"
							onClick={() => setSelectedNewsId(null)}
						>
							<svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
							Retour aux conseils
						</button>
						<div className="mb-1 sm:mb-2 text-xs text-global-4">
							{selectedNews.date} • {selectedNews.publisher}
						</div>
						<h2 className="text-lg sm:text-2xl font-bold text-global-6 mb-2 sm:mb-4">
							{selectedNews.title}
						</h2>
						<p className="text-sm sm:text-base text-global-2">
							{selectedNews.content}
						</p>
						{/* Top popular travel destination section */}
						<div className="mt-6 sm:mt-10">
							<h3 className="text-base sm:text-xl font-bold text-global-6 mb-4 sm:mb-8">
								Top popular travel destination
							</h3>
							{/* Images row */}
							<div className="flex flex-row gap-2 sm:gap-6 mb-4 sm:mb-6">
								<img
									src="/images/img_image_6.png"
									alt="Canada"
									className="w-1/3 h-20 sm:h-32 object-cover rounded"
								/>
								<img
									src="/images/img_image_6.png"
									alt="USA"
									className="w-1/3 h-20 sm:h-32 object-cover rounded"
								/>
								<img
									src="/images/img_image_6.png"
									alt="France"
									className="w-1/3 h-20 sm:h-32 object-cover rounded"
								/>
							</div>
							{/* Titles and descriptions under each other */}
							<div className="flex flex-col gap-2 sm:gap-4 mb-4 sm:mb-6">
								<div>
									<h4 className="text-base sm:text-lg font-semibold text-global-6 mb-1">Canada</h4>
									<p className="text-xs sm:text-sm text-global-2">
										Explorez les vastes paysages du Canada, sa diversité culturelle et ses opportunités uniques pour les voyageurs et immigrants.
									</p>
								</div>
								<div>
									<h4 className="text-base sm:text-lg font-semibold text-global-6 mb-1">États-Unis</h4>
									<p className="text-xs sm:text-sm text-global-2">
										Découvrez le rêve américain, des grandes villes dynamiques aux parcs nationaux emblématiques et une multitude de possibilités.
									</p>
								</div>
								<div>
									<h4 className="text-base sm:text-lg font-semibold text-global-6 mb-1">France</h4>
									<p className="text-xs sm:text-sm text-global-2">
										Profitez de la richesse historique, de la gastronomie et de l’art de vivre à la française dans l’une des destinations les plus prisées.
									</p>
								</div>
							</div>
							{/* Keywords */}
							<div className="mb-2 sm:mb-4">
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-[10px] sm:text-xs font-semibold mr-1 sm:mr-2 px-2 sm:px-3 py-1 rounded-full">immigration</span>
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-[10px] sm:text-xs font-semibold mr-1 sm:mr-2 px-2 sm:px-3 py-1 rounded-full">voyage</span>
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-[10px] sm:text-xs font-semibold mr-1 sm:mr-2 px-2 sm:px-3 py-1 rounded-full">Canada</span>
								<span className="inline-block bg-white text-[#6C757D] border border-[#6C757D] text-[10px] sm:text-xs font-semibold mr-1 sm:mr-2 px-2 sm:px-3 py-1 rounded-full">USA</span>
							</div>
							<hr className="my-2 sm:my-4" />
							{/* Publisher row */}
							<div className="flex flex-col sm:flex-row items-center w-full justify-between gap-4">
								<div className="flex items-center gap-2 sm:gap-3">
									<img
										src="/images/img_akar_icons_linkedin_box_fill.svg"
										alt={selectedNews.publisher}
										className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gray-200"
									/>
									<div className='flex flex-col'>
                                        <span className='text-sm sm:text-base font-medium'>
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
					<aside className="w-full md:w-1/3 mb-6 md:mb-0">
						<h3 className="text-base sm:text-lg font-bold text-global-6 mb-2 sm:mb-4">
							Des articles pareils
						</h3>
						<div className="flex flex-col gap-2 sm:gap-4">
							{relatedNews.map((news) => (
								<div
									key={news.id}
									className="flex gap-2 sm:gap-3 cursor-pointer bg-white rounded hover:bg-global-1/10 transition"
									onClick={() => setSelectedNewsId(news.id)}
								>
									<img
										src={news.image}
										alt={news.title}
										className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-l"
									/>
									<div className="flex flex-col justify-center">
										<span className="text-xs text-global-4">
											{news.date} • {news.publisher}
										</span>
										<span className="text-xs sm:text-sm font-semibold text-global-6">
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
				<div className="flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
					{/* News Source Toggle */}
					<div className="flex gap-4 mb-6">
						<button
							onClick={() => setNewsSource('trending')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
								newsSource === 'trending'
									? 'bg-[#4974A0] text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
						>
							Actualités Tendances US/Canada
						</button>
						<button
							onClick={() => setNewsSource('immigration')}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
								newsSource === 'immigration'
									? 'bg-[#4974A0] text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
						>
							Immigration & Voyage
						</button>
					</div>

					{/* Yellow Section Title */}
					<p className="text-xs sm:text-[12px] md:text-[18px] font-quattrocento font-bold text-global-7 mb-1 sm:mb-2">
						Nos Conseils
					</p>
					<h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-global-6">
						Restez à jour avec les dernières actualités sur le Canada, les USA et
						plus encore
					</h2>

					{/* Loading State */}
					{loading ? (
						<div className="flex justify-center items-center py-12">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4974A0]"></div>
							<span className="ml-3 text-gray-600">Chargement des dernières actualités...</span>
						</div>
					) : (
						<>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
						{paginatedNews.map((news) => (
							<div
								key={news.id}
								className="bg-white   hover:shadow-lg transition cursor-pointer flex flex-col"
								onClick={() => setSelectedNewsId(news.id)}
							>
								<img
									src={news.image}
									alt={news.title}
									className="w-full h-32 sm:h-44 object-cover"
									onError={(e) => {
										e.target.src = '/images/img_image_6.png'; // Fallback image
									}}
								/>
								<div
									className="p-3 sm:p-4 flex flex-col flex-1 border-2 border-[#4974A0] border-t-0  min-h-[180px] sm:min-h-[260px]"
									style={{ borderTop: 'none' }}
								>
									<span className="text-xs text-black font-barlow mb-2 sm:mb-3">
										{news.date} • {news.publisher}
									</span>
									<h3 className="text-base sm:text-2xl font-semibold text-black font-barlow mb-2 sm:mb-3">
										{news.title}
									</h3>
									<p className="text-xs sm:text-sm flex-1 text-black font-barlow mb-0">
										{getShortContent(news.content)}
									</p>
									<div className="flex justify-between items-center mt-2">
										<span className="text-[#4974A0] block font-barlow text-xs sm:text-sm font-bold cursor-pointer">
											Lire la suite
										</span>
										{news.url && (
											<a
												href={news.url}
												target="_blank"
												rel="noopener noreferrer"
												onClick={(e) => e.stopPropagation()}
												className="text-[#4974A0] text-xs underline hover:opacity-80"
											>
												Source externe
											</a>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Pagination */}
					<div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
						<span className="text-[#4974A0] font-barlow cursor-pointer text-xs sm:text-sm">Premier</span>
						<span className="text-[#4974A0] font-barlow cursor-pointer text-xs sm:text-sm">{'<'}</span>
						<span className="text-black font-barlow font-bold px-2 text-xs sm:text-sm">1</span>
						<span className="text-[#4974A0] font-barlow cursor-pointer px-2 text-xs sm:text-sm">2</span>
						<span className="text-[#4974A0] font-barlow cursor-pointer px-2 text-xs sm:text-sm">3</span>
						<span className="text-[#4974A0] font-barlow cursor-pointer text-xs sm:text-sm">{'>'}</span>
						<span className="text-[#4974A0] font-barlow cursor-pointer text-xs sm:text-sm">Dernier</span>
					</div>
					</>
					)}
				</div>
			)}

			<Footer />
		</div>
	);
};

export default News;

