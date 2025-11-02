"use client";

export default function AppLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden font-mono text-purple-300 text-sm sm:text-base">
      {/* === Background Scanlines === */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_2px] pointer-events-none"></div>

      {/* === Centered Terminal Card === */}
      <div className="relative w-[90%] max-w-3xl bg-[#0a0014]/90 border border-purple-400/20 rounded-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] p-6 sm:p-10 animate-fade-in backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-3 text-purple-400/70 text-xs select-none">
            esakkipandi@dev:~$
          </span>
        </div>

        {/* Terminal Body */}
        <pre className="whitespace-pre-wrap leading-relaxed">
          <code>
            <span className="block opacity-0 animate-type-line1">
              $ Initializing <span className="text-purple-300">QA Environment</span>...
            </span>
            <span className="block opacity-0 animate-type-line2">
              ▶ Loading modules: [core, utils, api, ui]
            </span>
            <span className="block opacity-0 animate-type-line3">
              ✔ Environment setup <span className="text-purple-300">completed</span>.
            </span>
            <span className="block opacity-0 animate-type-line4">
              → Launching <span className="text-purple-300">Esakki Dev</span> workspace...
            </span>
            <span className="inline opacity-0 animate-show-cursor ml-1">█</span>
          </code>
        </pre>

        {/* Subtle Glow Border */}
        <div className="absolute inset-0 rounded-lg border border-purple-500/10 animate-pulse pointer-events-none"></div>
      </div>

      {/* Royal Purple Glow Behind Terminal */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl"></div>
    </div>
  );
}
