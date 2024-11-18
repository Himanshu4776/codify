import { useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { Maximize2, Minimize2 } from 'lucide-react'
import { getTheme } from '../utils/theme-utils';
import { linter, lintGutter, Diagnostic } from "@codemirror/lint";
import { createLinter } from '../utils/lang-utils';

interface EditorProps {
  language: string;
  displayName: string;
  value: string;
  onChange: (value: string) => void;
  theme: string;
}

function DevEditor({ language, displayName, value, onChange, theme }: EditorProps) {
  const [open, setOpen] = useState(true);

  function handleChange(value: string) {
    onChange(value)
  }

  return (
    <div className={`flex-grow flex-basis-0 flex flex-col p-2 bg-gray-800 ${open ? '' : 'flex-grow-0'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          { open ? <Minimize2 /> : <Maximize2 />}
        </button>
      </div>
      <CodeMirror
        onChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        theme={getTheme(theme)}
        lang={language}
        height="400px"
        width="100%"
        autoCorrect='on'
        extensions={[lintGutter(), createLinter(language)]}
      />
    </div>
  )
}

export default DevEditor;