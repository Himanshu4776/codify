"use client";

import { Globe, Code, ArrowRight, X } from "lucide-react";

export interface LandingPageProps {
  setSelectedPath: (path: "web" | "classical" | null) => void;
}

export default function LandingPage({ setSelectedPath }: LandingPageProps) {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-8">
          Choose Your Coding Path
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-8 justify-center">
          <button
            onClick={() => setSelectedPath("web")}
            className="group bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center p-6 h-full w-full sm:w-80"
          >
            <Globe className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Create dynamic websites and web applications using HTML, CSS, and
              JavaScript.
            </p>
            <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </button>
          <button
            onClick={() => setSelectedPath("classical")}
            className="group bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col items-center p-6 h-full w-full sm:w-80"
          >
            <Code className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Classical Coding
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Dive into languages like Java, JavaScript, Python, and C++ for
              software development.
            </p>
            <span className="inline-flex items-center text-green-600 dark:text-green-400 group-hover:text-green-500">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
