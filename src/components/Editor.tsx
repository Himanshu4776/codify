import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import React from "react";
import { getTheme, THEME_OPTIONS } from "../utils/theme-utils";
import { getDefaultCodeValue, SUPPORTED_LANGUAGES } from "../utils/lang-utils";
import { getLanguageExtension } from "../utils/lang-utils";
import { ChevronDown } from 'lucide-react';

export interface EditorProps {
  lang: "javascript" | "cpp" | "java" | "python";
  setNewLang: (lang: "javascript" | "cpp" | "java" | "python") => void;
}

export function Editor({ lang, setNewLang }: EditorProps) {
  const [value, setValue] = React.useState(getDefaultCodeValue(lang));
  const [theme, setTheme] = React.useState<string>("Github Light");

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Code Editor</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              value={lang}
              onChange={(e) => setNewLang(e.target.value as "javascript" | "cpp" | "java" | "python")}
              className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      </header>
      <main className="flex-1 p-4 overflow-hidden">
        <div className="h-full border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <CodeMirror
            value={getDefaultCodeValue(lang)}
            height="100%"
            theme={getTheme(theme)}
            extensions={[getLanguageExtension(lang)]}
            className="h-full"
          />
        </div>
      </main>
      <footer className="p-4 bg-white dark:bg-gray-800 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current language: {lang.charAt(0).toUpperCase() + lang.slice(1)} | Theme: {theme}
        </p>
      </footer>
    </div>
  );
}