import React from "react";
import "./styles.css";
import { Editor } from "./components/Editor";
import { useAtomValue, useSetAtom } from "jotai";
import { langTypeAtom } from "./hooks/constants";

function App() {
  const selectedLang = useAtomValue(langTypeAtom);
  const setLang = useSetAtom(langTypeAtom);
  return <Editor lang={selectedLang} setNewLang={setLang} />;
}
export default App;
