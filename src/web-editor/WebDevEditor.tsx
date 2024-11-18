import React, { useEffect, useState } from "react";
import DevEditor from "./DevEditor";
import useLocalStorage from "../hooks/useLocalStorage";
import { htmlStarter, cssStarter } from "../hooks/constants";

export interface WebDevEditorProps {
  theme: string;
}

function WebDevEditor({ theme }: WebDevEditorProps) {
  const [html, setHtml] = useLocalStorage("html", htmlStarter);
  const [css, setCss] = useLocalStorage("css", cssStarter);
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div>
      <div className="flex h-1/2 bg-gray-900">
        <DevEditor 
          language="xml"
          theme={theme}
          value={html}
          onChange={setHtml}
          displayName="HTML"
        />
        <DevEditor 
          language="css"
          theme={theme}
          value={css}
          onChange={setCss}
          displayName="CSS"
        />
        <DevEditor 
          language="javascript"
          theme={theme}
          value={js}
          onChange={setJs}
          displayName="JS"
        />
      </div>
      <div className="h-1/2">
      <iframe
  srcDoc={srcDoc}
  title="output"
  sandbox="allow-scripts allow-modals allow-same-origin"
  width="100%"
  height="400px"
  className="static"
  loading="lazy"
  referrerPolicy="no-referrer"
/>
      </div>
    </div>
  );
}

export default WebDevEditor;