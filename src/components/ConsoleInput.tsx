import React from 'react';
import { Plus, X } from 'lucide-react';

export interface ConsoleOutputProps {
  setInput: (val: string) => void;
}

export function ConsoleInput({ setInput }: ConsoleOutputProps){
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  function handleFullScreenConsole() {
    setIsFullScreen(true);
  }

  function handleMinimizeConsole() {
    setIsFullScreen(false);
  }

  function handleClearConsole() {
    setInput('');
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
        <span className="text-gray-400 text-xs">Input Console</span>
      </div>
      
      <div className="bg-black rounded p-4 flex-1 overflow-y-auto">
        <textarea onChange={(e) => setInput(e.target.value)} name="input-console" id="input-console" className='w-full h-full bg-inherit text-green-500 border-none border-b-gray-950 focus:border-none focus:border-b-gray-950 outline-none'>
          type input here..
        </textarea>
      </div>
    </div>
  );
};