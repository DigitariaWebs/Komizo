/**
 * News Service for fetching trending U.S. and Canadian news
 * Integrates with NewsAPI.org for real-time news updates
 */

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || 'demo-key';
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';

/**
 * Fetch trending news from U.S. and Canada
 */
export const fetchTrendingNews = async (country = 'us', category = 'general', pageSize = 10) => {
  try {
    const response = await fetch(
      `${NEWS_API_BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform API response to match our existing news format
    return data.articles.map((article, index) => ({
      id: `api-${country}-${index}-${Date.now()}`,
      image: article.urlToImage || '/images/img_image_6.png', // Fallback to default image
      date: new Date(article.publishedAt).toISOString().split('T')[0],
      publisher: article.source.name,
      title: article.title,
      content: article.description || article.content || 'Content not available.',
      url: article.url,
      category: category,
      country: country
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

/**
 * Fetch news from both US and Canada
 */
export const fetchUSAndCanadaNews = async () => {
	try {
		console.log('Attempting to fetch US and Canada news...');
		
		// For now, return fallback data since we don't have a real API key
		if (NEWS_API_KEY === 'demo-key') {
			console.log('Using demo key, returning fallback data');
			return getFallbackNews();
		}
		
		const [usNews, canadaNews] = await Promise.all([
			fetchTrendingNews('us', 'general', 5),
			fetchTrendingNews('ca', 'general', 5)
		]);
		
		// Combine and sort by date (newest first)
		const allNews = [...usNews, ...canadaNews].sort((a, b) => 
			new Date(b.date) - new Date(a.date)
		);
		
		return allNews;
	} catch (error) {
		console.error('Error fetching US and Canada news:', error);
		return getFallbackNews();
	}
};/**
 * Search news by keywords (useful for immigration/travel related news)
 */
export const searchNews = async (query, language = 'en', sortBy = 'publishedAt') => {
  try {
    const response = await fetch(
      `${NEWS_API_BASE_URL}/everything?q=${encodeURIComponent(query)}&language=${language}&sortBy=${sortBy}&pageSize=20&apiKey=${NEWS_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform and filter relevant results
    return data.articles
      .filter(article => article.title && article.description)
      .map((article, index) => ({
        id: `search-${index}-${Date.now()}`,
        image: article.urlToImage || '/images/img_image_6.png',
        date: new Date(article.publishedAt).toISOString().split('T')[0],
        publisher: article.source.name,
        title: article.title,
        content: article.description || article.content || 'Content not available.',
        url: article.url,
        category: 'search',
        keywords: query
      }));
  } catch (error) {
    console.error('Error searching news:', error);
    return [];
  }
};

/**
 * Get immigration and travel related news specifically
 */
export const fetchImmigrationNews = async () => {
	try {
		console.log('Attempting to fetch immigration news...');
		
		// For now, return fallback data since we don't have a real API key
		if (NEWS_API_KEY === 'demo-key') {
			console.log('Using demo key, returning fallback immigration data');
			return getFallbackNews();
		}
		
		const queries = [
			'Canada immigration',
			'US visa immigration',
			'travel Canada US',
			'immigration policy updates'
		];
		
		const newsPromises = queries.map(query => searchNews(query));
		const results = await Promise.all(newsPromises);
		
		// Flatten results and remove duplicates
		const allNews = results.flat();
		const uniqueNews = allNews.filter((news, index, self) => 
			index === self.findIndex(n => n.title === news.title)
		);
		
		// Sort by date and limit to 15 most recent
		return uniqueNews
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.slice(0, 15);
	} catch (error) {
		console.error('Error fetching immigration news:', error);
		return getFallbackNews();
	}
};/**
 * Fallback static news data (in case API fails)
 */
export const getFallbackNews = () => [
  {
    id: 'fallback-1',
    image: '/images/img_image_6.png',
    date: new Date().toISOString().split('T')[0],
    publisher: 'Immigration Canada',
    title: "Canada Updates Immigration Policies for 2025",
    content: "The Canadian government has announced new streamlined processes for skilled workers and international students. These changes aim to address labor shortages while maintaining high standards for immigration applications.",
    category: 'immigration',
    country: 'ca'
  },
  {
    id: 'fallback-2',
    image: '/images/img_image_6.png',
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Yesterday
    publisher: 'US Immigration News',
    title: "New US Visa Categories Announced for Tech Workers",
    content: "The United States introduces new visa categories specifically designed for technology professionals, including AI specialists and cybersecurity experts. Applications open in Q2 2025.",
    category: 'immigration',
    country: 'us'
  },
  {
    id: 'fallback-3',
    image: '/images/img_image_6.png',
    date: new Date(Date.now() - 172800000).toISOString().split('T')[0], // 2 days ago
    publisher: 'Travel Weekly',
    title: "Border Crossing Updates Between US and Canada",
    content: "New digital systems are being implemented at major border crossings to reduce wait times and improve security. Travelers are advised to prepare digital documentation in advance.",
    category: 'travel',
    country: 'both'
  }
];
