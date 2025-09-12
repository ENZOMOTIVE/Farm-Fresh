"use client"

import { useState } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import i18n from "@/utils/i18n" // adjust the import path if needed

const languages = [
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
 
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("zh")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0]
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md bg-white"
      >
        <Globe className="w-4 h-4 text-slate-500" />
        <span className="font-medium">{getCurrentLanguage().name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-20 animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100 mb-1">
              Select Language
            </div>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 group ${
                  currentLang === language.code
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-slate-700 hover:translate-x-1"
                }`}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-150">{language.flag}</span>
                <span className="flex-1 text-left font-medium">{language.name}</span>
                {currentLang === language.code && <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
