import React from 'react';
import { Plus, X } from 'lucide-react';

export interface ConsoleOutputProps {
  output: string[] | string;
}

export function ConsoleOutput({ output }: ConsoleOutputProps){
  function handleFullScreenConsole() {
    const consoleElement = document.querySelector('.console-output');
    if (consoleElement) {
      consoleElement.classList.toggle('fullscreen');
    }
  }

  function handleMinimizeConsole() {
    const consoleElement = document.querySelector('.console-output');
    if (consoleElement) {
      consoleElement.classList.remove('fullscreen');
    }
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm w-full mx-auto my-4">
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
        <span className="text-gray-400 text-xs">Console Output</span>
      </div>
      
      <div className="bg-black rounded p-4 overflow-auto max-h-96">
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
