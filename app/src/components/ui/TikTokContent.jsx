import React, { useState } from 'react';

// FAQ Teasers for TikTok (5-10s clips)
const faqTeasers = [
  {
    id: 1,
    question: "Combien coûte un visa Canada ?",
    shortAnswer: "Entre 150$ et 1500$ selon le type",
    duration: "8s",
    views: "12.3K",
    likes: "892",
    thumbnail: "/images/img_image_5.png"
  },
  {
    id: 2,
    question: "Délai pour visa US ?",
    shortAnswer: "2-6 mois en moyenne",
    duration: "6s",
    views: "8.7K",
    likes: "654",
    thumbnail: "/images/img_image_6.png"
  },
  {
    id: 3,
    question: "Documents obligatoires ?",
    shortAnswer: "Passeport + preuve de fonds + lettre",
    duration: "10s",
    views: "15.1K",
    likes: "1.2K",
    thumbnail: "/images/img_image_49.png"
  },
  {
    id: 4,
    question: "Peut-on travailler en tant qu'étudiant ?",
    shortAnswer: "Oui, 20h/semaine pendant les études",
    duration: "7s",
    views: "9.8K",
    likes: "743",
    thumbnail: "/images/img_image_24.png"
  },
  {
    id: 5,
    question: "Assurance voyage obligatoire ?",
    shortAnswer: "Fortement recommandée, parfois exigée",
    duration: "9s",
    views: "6.4K",
    likes: "521",
    thumbnail: "/images/img_image_17.png"
  }
];

// Trending Topics for Blog/Conseil (15s videos)
const trendingTopics = [
  {
    id: 1,
    title: "Nouveau programme PEQ Québec 2025",
    category: "Conseil",
    description: "Les dernières modifications du Programme de l'Expérience Québécoise",
    duration: "15s",
    views: "25.6K",
    likes: "1.8K",
    comments: "234",
    shares: "156",
    thumbnail: "/images/img_image_28.png",
    trending: true
  },
  {
    id: 2,
    title: "Visa H1-B : Nouvelles règles 2025",
    category: "Blog",
    description: "Comment les changements affectent les professionnels tech",
    duration: "14s",
    views: "18.2K",
    likes: "1.3K",
    comments: "198",
    shares: "89",
    thumbnail: "/images/img_image_60.png",
    trending: true
  },
  {
    id: 3,
    title: "Top 5 pays pour étudier en 2025",
    category: "Conseil",
    description: "Destinations les plus abordables et qualitatives",
    duration: "15s",
    views: "32.1K",
    likes: "2.4K",
    comments: "456",
    shares: "298",
    thumbnail: "/images/img_image_15.png",
    trending: false
  },
  {
    id: 4,
    title: "Brexit : Impact sur les visas UK",
    category: "Blog",
    description: "Ce qui change pour les étudiants internationaux",
    duration: "13s",
    views: "14.7K",
    likes: "987",
    comments: "123",
    shares: "67",
    thumbnail: "/images/img_image_10.png",
    trending: false
  }
];

const TikTokContent = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-global-2 relative overflow-hidden">
      {/* TikTok-style background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-400/20 to-purple-600/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Contenu TikTok</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4 leading-tight">
            Contenu <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Viral</span>
          </h2>
          <p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto leading-relaxed">
            FAQ rapides et sujets tendances pour sensibiliser et informer notre audience sur les réseaux sociaux.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-global-5/10">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'faq'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              FAQ Teasers (5-10s)
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'trending'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Trending Topics (15s)
            </button>
          </div>
        </div>

        {/* FAQ Teasers */}
        {activeTab === 'faq' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {faqTeasers.map((teaser) => (
              <div
                key={teaser.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedVideo(teaser)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={teaser.thumbnail}
                    alt={teaser.question}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-pink-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5.14v14l11-7-11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {teaser.duration}
                  </div>
                  
                  {/* Question & Answer */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold mb-1 line-clamp-2">
                      {teaser.question}
                    </p>
                    <p className="text-xs opacity-90 line-clamp-2">
                      {teaser.shortAnswer}
                    </p>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="p-3">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {teaser.views}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {teaser.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trending Topics */}
        {activeTab === 'trending' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendingTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedVideo(topic)}
              >
                <div className="flex">
                  {/* Video Thumbnail */}
                  <div className="relative w-1/3 aspect-[9/16] overflow-hidden">
                    <img
                      src={topic.thumbnail}
                      alt={topic.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5.14v14l11-7-11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                      {topic.duration}
                    </div>
                    
                    {/* Trending Badge */}
                    {topic.trending && (
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        🔥 TREND
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        topic.category === 'Conseil' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {topic.category}
                      </span>
                      {topic.trending && (
                        <span className="ml-2 text-xs text-orange-600 font-medium">
                          Tendance
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-quattrocento font-bold text-global-6 mb-2 group-hover:text-global-5 transition-colors duration-300">
                      {topic.title}
                    </h3>
                    
                    <p className="text-global-4 text-sm mb-4 leading-relaxed">
                      {topic.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {topic.views}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          {topic.likes}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {topic.comments}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                          {topic.shares}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-pink-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-quattrocento font-bold text-global-6 mb-4">
              Suivez-nous sur TikTok
            </h3>
            <p className="text-global-4 mb-6">
              Ne manquez aucun conseil d'immigration et restez informé des dernières tendances.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                @KomiziImmigration
              </button>
              <button className="px-6 py-3 bg-white/80 border border-pink-200 text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300">
                Voir Tout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokContent;
