import React, { useEffect } from "react";
import "./styles.css";
import { Editor } from "./components/Editor";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { langTypeAtom } from "./hooks/constants";
import { getDefaultCodeValue } from "./utils/lang-utils";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ConsoleOutput } from "./components/ConsoleOutput";

function App() {
  const [selectedLang, setLang] = useAtom(langTypeAtom);

  const [value, setValue] = React.useState(getDefaultCodeValue(selectedLang));
  const [theme, setTheme] = React.useState<string>("Github Light");

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Header language={selectedLang} theme={theme} setTheme={setTheme} setNewLang={setLang} />
      <Editor lang={selectedLang} theme={theme} setCodeValue={setValue} code={value} />
      <ConsoleOutput output={""} />
      <Footer lang={selectedLang} theme={theme} />
    </div>
  );
}
export default App;
