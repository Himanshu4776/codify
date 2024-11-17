import React from 'react';
import { Plus, X } from 'lucide-react';

export interface ConsoleOutputProps {
  output: string[] | string;
  setOutput: (val: string) => void;
}

export function ConsoleOutput({ output, setOutput }: ConsoleOutputProps){
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  function handleFullScreenConsole() {
    setIsFullScreen(true);
  }

  function handleMinimizeConsole() {
    setIsFullScreen(false);
  }

  function handleClearConsole() {
    setOutput('');
  }

  return (
    <div className={`bg-gray-900 rounded-lg px-4 scroll-m-4 font-mono text-sm w-full ${isFullScreen ? 'h-full' : 'h-[125px]'} flex flex-col mx-auto`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500">
          <button onClick={handleMinimizeConsole} className='flex items-center justify-center'>
          <X size={12} />
          </button>
          </div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500">
            <button onClick={handleFullScreenConsole} className='flex items-center justify-center'>
            <Plus size={12} />
            </button>
          </div>
        </div>
        <span>
          <button onClick={handleClearConsole} className='text-gray-400 text-xs bg-red-600 rounded-sm p-1'>clear console</button>
        </span>
        <span className="text-gray-400 text-xs">Console Output</span>
      </div>
      
      <div className="bg-black rounded p-4 flex-1 overflow-y-auto">
        {Array.isArray(output) ? (
          output.map((line, index) => (
            <div key={index} className="text-green-400">
              <span className="text-gray-500 mr-2">{'>'}</span>
              {line}
            </div>
          ))
        ) : (
          <div className="text-green-400">
            <span className="text-gray-500 mr-2">{'>'}</span>
            {output}
          </div>
        )}
      </div>
    </div>
  );
};