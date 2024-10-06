import React from "react";
import "./styles.css";
import { Editor } from "./Editor";
import { useAtomValue, useSetAtom } from "jotai";
import { themeTypeAtom } from "./hooks/constants";

function App() {
  const selectedThemeType = useAtomValue(themeTypeAtom);
  const setTheme = useSetAtom(themeTypeAtom);
  return <Editor selectedTheme={selectedThemeType} />;
}
export default App;
