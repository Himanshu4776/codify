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
import { useJudge0 } from "./hooks/useJudge0";

function App() {
    const [selectedLang, setLang] = useAtom(langTypeAtom);
    const [selectedPath, setSelectedPath] = useState<"web" | "classical" | null>(
      null
    );

    const [value, setValue] = React.useState(getDefaultCodeValue(selectedLang));
    const [theme, setTheme] = React.useState<string>("Github Dark");
    const [output, setOutput] = useState<string>('');
    const [inputValue, setInputValue] = React.useState('');
    const { postSubmission, getOutput } = useJudge0();

    const handleRunCode = async (code: string, language: "javascript" | "cpp" | "java" | "python") => {
      try {
        const languageIds = {
          javascript: 63,
          python: 71,
          cpp: 54,
          java: 62
        };
      
        const token = await postSubmission(languageIds[language], btoa(code), inputValue === '' ? btoa('') : inputValue);
        const result = await getOutput(token);
      
        // Decode the base64 output and set it to console
        const decodedOutput = atob(result.stdout || '');
        setOutput(decodedOutput || 'No output');
      
      } catch (error) {
        setOutput('Error executing code');
        console.error('Error:', error);
      }
    };

    console.log("code: ", value);
    

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
          code={value}
          setCodeValue={setValue}
          onRunCode={handleRunCode}
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
