'use client';
import { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-primary-600 font-family">
        JAPAN DRIVING TEST!
      </h1>

      {/* React Drill #1 */}
      <button
        onClick={() => setShowContent((prev) => !prev)}
        className="m-3 p-3 bg-white"
      >
        TOGGLE
      </button>
      {showContent && (
        <div>
          <button
            onClick={() => setCounter((prev) => prev - 1)}
            className="m-3 p-3 bg-white"
          >
            -
          </button>
          <span>{counter}</span>
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="m-3 p-3 bg-white"
          >
            +
          </button>
          {counter !== 0 ? (
            <button onClick={reset} className="m-3 p-3 bg-white">
              RESET
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
