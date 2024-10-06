import CodeMirror, { Extension, ViewUpdate } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { abyss } from "@uiw/codemirror-themes-all";
import React from "react";

export interface EditorTypes {
  selectedTheme: Extension;
}

export function Editor({ selectedTheme }: EditorTypes) {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: string, viewUpdate: ViewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="600px"
      theme={selectedTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
