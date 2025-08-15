import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 5 most popular FAQ questions for homepage
const POPULAR_FAQS = [
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
];

const FaqSection = ({ isHomePage = false, maxQuestions = 5 }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqsToShow = isHomePage ? POPULAR_FAQS.slice(0, maxQuestions) : POPULAR_FAQS;
  
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-global-2 via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-global-5/8 via-global-7/8 to-transparent rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-global-7/12 via-global-5/8 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-global-7 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-global-5 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-global-5/10 to-global-7/10 rounded-full mb-4">
            <svg className="w-5 h-5 text-global-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-global-6">Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quattrocento font-bold text-global-6 mb-4 leading-tight">
            {isHomePage ? (
              <>
                Vos Questions les Plus <span className="text-global-5">Fréquentes</span>
              </>
            ) : (
              "Toutes Vos Questions"
            )}
          </h2>
          <p className="text-base sm:text-lg text-global-4 max-w-3xl mx-auto leading-relaxed">
            {isHomePage 
              ? "Trouvez rapidement les réponses aux questions les plus courantes sur l'immigration et les voyages. Notre expertise à votre service."
              : "Une réponse complète à toutes vos interrogations sur nos services d'immigration et de voyage."
            }
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-5">
            {faqsToShow.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-global-5/10 hover:shadow-lg hover:border-global-5/20 transition-all duration-300 overflow-hidden group"
              >
                <button
                  className="w-full flex justify-between items-center px-5 sm:px-7 py-5 sm:py-6 text-left focus:outline-none"
                  onClick={() => toggle(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base sm:text-lg font-semibold text-global-6 group-hover:text-global-5 transition-colors duration-300 pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === idx 
                        ? 'bg-gradient-to-r from-global-5 to-global-6 rotate-180 shadow-md' 
                        : 'bg-global-5/10 group-hover:bg-global-5/20 group-hover:scale-110'
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === idx ? 'text-white' : 'text-global-5'
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
                
                {openIndex === idx && (
                  <div className="px-5 sm:px-7 pb-5 sm:pb-6 animate-fadeIn">
                    <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl p-5 border-l-4 border-global-5 shadow-inner">
                      <p className="text-global-2 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {isHomePage && (
            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/faq"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-global-5 to-global-6 text-white font-semibold rounded-xl hover:from-global-6 hover:to-global-5 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <span className="text-base sm:text-lg">Voir toutes les questions</span>
                <svg
                  className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300"
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
              </Link>
              <p className="text-sm text-global-4 mt-4">
                Plus de 20 questions détaillées vous attendent
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
