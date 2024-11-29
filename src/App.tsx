import React, { useEffect, useState } from "react";
import "./styles.css";
import { Editor } from "./components/Editor";
import { useAtom } from "jotai";
import { langTypeAtom } from "./hooks/constants";
import { getDefaultCodeValue } from "./utils/lang-utils";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ConsoleOutput } from "./components/ConsoleOutput";
import LandingPage from "./components/LandingPage";
import WebDevEditor from "./web-editor/WebDevEditor";
import { ConsoleInput } from "./components/ConsoleInput";

function App() {
  const [selectedLang, setLang] = useAtom(langTypeAtom);
  const [selectedPath, setSelectedPath] = useState<"web" | "classical" | null>(
    null
  );

  const [value, setValue] = React.useState(getDefaultCodeValue(selectedLang));
  const [theme, setTheme] = React.useState<string>("Github Dark");
  const outputValue = `lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  const [output, setOutput] = React.useState(outputValue);
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    setSelectedPath(null);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Header
        language={selectedLang}
        theme={theme}
        setTheme={setTheme}
        setNewLang={setLang}
        selectedPath={selectedPath}
        setSelectedPath={setSelectedPath}
      />
      {selectedPath == null ? (
        <LandingPage setSelectedPath={setSelectedPath} />
      ) : selectedPath === 'web' ? (
        <WebDevEditor
          theme={theme}
        />
      ) : (
        <>
          <Editor
            lang={selectedLang}
            theme={theme}
            setCodeValue={setValue}
            code={value}
          />
          <div className="flex">
            <ConsoleOutput output={output} setOutput={setOutput} />
            <ConsoleInput setInput={setInputValue} />
          </div>
        </>
      )}
      <Footer lang={selectedLang} theme={theme} selectedPath={selectedPath} />
    </div>
  );
}
export default App;
