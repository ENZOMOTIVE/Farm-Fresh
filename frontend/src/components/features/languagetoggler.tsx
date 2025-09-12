import i18n from "@/i18n"; // adjust the import path if needed

export default function LanguageToggler() {
  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={() => handleChange("en")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        EN
      </button>
      <button
        onClick={() => handleChange("fr")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        FR
      </button>
      <button
        onClick={() => handleChange("zh")}
        className="px-3 py-1 border rounded hover:bg-gray-100"
      >
        中文
      </button>
    </div>
  );
}
