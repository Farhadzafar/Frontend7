'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Supported languages
export type Language = 'en' | 'ar' | 'ps';

// Translation object (you can import this from a separate file)
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'hero.title1': 'The light of religion shines through scholars',
    'hero.description': 'Fatwas issued by scholars are divine lights based on Quran, Sunnah, and principles.',
    // ...add all English keys here
  },
  ar: {
    'nav.home': 'الصفحة الرئيسية',
    'hero.title1': 'نور الدين يسطع من خلال العلماء',
    'hero.description': 'الفتاوى الصادرة عن العلماء هي أنوار إلهية تستند إلى القرآن والسنة والأصول.',
    // ...add all Arabic keys here
  },
  ps: {
    'nav.home': 'کور',
    'hero.title1': 'د دین رڼا د عالمانو په وینا روښانه کېږي',
    'hero.description': 'فتاوې چې د عالمانو لخوا صادرې کېږي الهي رڼاوې دي چې د قرآن، سنت او اصولو په بنسټ هر موضوع پوښي.',
    // ...copy full Pashto list from previous response
  }
};

// Create context
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
  
    const t = (key: string): string => {
      return translations[language][key] || key;
    };
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        <div dir={language === 'ps' || language === 'ar' ? 'rtl' : 'ltr'}>
          {children}
        </div>
      </LanguageContext.Provider>
    );
  }
  

// Hook to use context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}