import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { getTheme } from "../utils/theme-utils";
import { getDefaultCodeValue } from "../utils/lang-utils";
import { getLanguageExtension } from "../utils/lang-utils";

export interface EditorProps {
  lang: "javascript" | "cpp" | "java" | "python";
  theme: string;
  setCodeValue: (val: string) => void;
  code: string;
}

export function Editor({ lang, theme, setCodeValue, code }: EditorProps) {
  return (
      <main className="flex-1 p-4 overflow-hidden">
        <div className="h-full border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <CodeMirror
            value={code !== "" ? code : getDefaultCodeValue(lang)}
            height="100%"
            theme={getTheme(theme)}
            extensions={[getLanguageExtension(lang)]}
            className="h-full"
            onChange={(value) => setCodeValue(value)}
          />
        </div>
      </main>
  );
}