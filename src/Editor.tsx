import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import React from "react";
import { getTheme, THEME_OPTIONS } from "./utils/theme-utils";
import {getDefaultCodeValue, SUPPORTED_LANGUAGES} from "./utils/lang-utils";
import { getLanguageExtension } from "./utils/lang-utils";

export interface EditorProps {
  lang: "javascript" | "cpp" | "java" | "python";
  setNewLang: (lang: "javascript" | "cpp" | "java" | "python") => void;
}

export function Editor({lang, setNewLang}: EditorProps) {
  const [value, setValue] = React.useState(getDefaultCodeValue(lang));
  const [theme, setTheme] = React.useState<string>("Github Light");

  return (
    <div>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      >
        {THEME_OPTIONS.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName}
          </option>
        ))}
      </select>

      <select
        value={lang}
        onChange={(e) => setNewLang(e.target.value as "javascript" | "cpp" | "java" | "python")}
        style={{ marginBottom: '10px', padding: '5px' }}
      >
        {Object.keys(SUPPORTED_LANGUAGES).map((languageName) => (
          <option key={languageName} value={languageName}>
            {languageName}
          </option>
        ))}
      </select>

      <CodeMirror
        value={getDefaultCodeValue(lang)}
        height="600px"
        theme={getTheme(theme)}
        extensions={[getLanguageExtension(lang)]}
      />
    </div>
  );
}