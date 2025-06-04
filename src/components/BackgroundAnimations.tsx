
import React, { useEffect, useState } from 'react';

const BackgroundAnimations = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const matrixChars = ['0', '1', '{', '}', '<', '>', '/', '\\', '[', ']', '(', ')', ';', ':', '=', '+', '-', '*'];
  const codeLines = [
    'const developer = new FullStackDeveloper();',
    'function createAwesomeApp() {',
    'return innovation.map(idea => code);',
    'if (problem.exists()) solve();',
    'while (learning) { grow(); }',
    'export default Excellence;'
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Matrix Rain Effect */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentAnimation === 0 ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-dev-primary font-mono text-sm opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="animate-matrix-rain">
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Code Scrolling Effect */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentAnimation === 1 ? 'opacity-100' : 'opacity-0'}`}>
        {codeLines.map((line, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-dev-secondary font-mono text-xs opacity-40"
            style={{
              top: `${15 + i * 15}%`,
              animationDelay: `${i * 2}s`
            }}
          >
            <div className="animate-code-scroll whitespace-nowrap">
              {line}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${currentAnimation === 2 ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-dev-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            <div className="animate-particle-float" />
          </div>
        ))}
        
        {/* Glowing orbs */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-dev-secondary rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div className="animate-pulse-glow" />
          </div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>
    </div>
  );
};

export default BackgroundAnimations;
