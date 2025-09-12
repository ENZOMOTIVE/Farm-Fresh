"use client"

import i18n from "@/i18n" // adjust the import path if needed

export default function LanguageToggler() {
  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
      <button
        onClick={() => handleChange("en")}
        className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white hover:text-green-600 transition-all duration-200 hover:shadow-sm"
      >
        EN
      </button>
      <button
        onClick={() => handleChange("fr")}
        className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white hover:text-green-600 transition-all duration-200 hover:shadow-sm"
      >
        FR
      </button>
      <button
        onClick={() => handleChange("zh")}
        className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-white hover:text-green-600 transition-all duration-200 hover:shadow-sm"
      >
        中文
      </button>
    </div>
  )
}
