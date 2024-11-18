import { ChevronDown, X } from "lucide-react";
import { THEME_OPTIONS } from "../utils/theme-utils";
import { SUPPORTED_LANGUAGES } from "../utils/lang-utils";

export interface HeaderProps {
  language: "javascript" | "cpp" | "java" | "python";
  setNewLang: (lang: "javascript" | "cpp" | "java" | "python") => void;
  theme: string;
  setTheme: (val: string) => void;
  selectedPath: "web" | "classical" | null;
  setSelectedPath: (path: "web" | "classical" | null) => void;
}

export function Header({
  language,
  theme,
  setTheme,
  setNewLang,
  selectedPath,
  setSelectedPath,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Code Editor
      </h1>
      {selectedPath === "classical" && (
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedPath(null)}
            className="p-2 rounded-full flex justify-center items-center text-red-700 bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Clear selection"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="relative">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              aria-label="Select theme"
            >
              {THEME_OPTIONS.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          <div className="relative">
            <select
              value={language}
              onChange={(e) =>
                setNewLang(
                  e.target.value as "javascript" | "cpp" | "java" | "python"
                )
              }
              className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              aria-label="Select language"
            >
              {Object.keys(SUPPORTED_LANGUAGES).map((languageName) => (
                <option key={languageName} value={languageName}>
                  {languageName}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      )}
      {selectedPath === "web" && (
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedPath(null)}
            className="p-2 rounded-full flex justify-center items-center text-red-700 bg-red-700 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Clear selection"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="relative">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              aria-label="Select theme"
            >
              {THEME_OPTIONS.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
