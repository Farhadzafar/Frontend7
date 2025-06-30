'use client';

import React from 'react';
import { useLanguage } from '@/providers/lang-provider';

export default function TopBar() {
  const { language, setLanguage } = useLanguage();

  // Optional: Human-friendly names
  const langLabels: Record<typeof language, string> = {
    en: 'English',
    ar: 'العربية',
    ps: 'پښتو',
  };

  return (
    <div className="bg-gray-100 border-b text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Welcome Message */}
        <p className="font-medium">
          {language === 'en' && 'Welcome to the Afghan Scholars Platform'}
          {language === 'ps' && 'د افغان عالمانو پلیټفارم ته ښه راغلاست'}
          {language === 'ar' && 'مرحبًا بكم في منصة علماء أفغانستان'}
        </p>

        {/* Language Switch Buttons */}
        <div className="space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 rounded text-xs border ${
              language === 'en' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('ps')}
            className={`px-2 py-1 rounded text-xs border ${
              language === 'ps' ? 'bg-green-600 text-white' : 'hover:bg-green-100'
            }`}
          >
            پښتو
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`px-2 py-1 rounded text-xs border ${
              language === 'ar' ? 'bg-yellow-600 text-white' : 'hover:bg-yellow-100'
            }`}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}

