import React, { useState } from "react";

interface GameModuleProps {
  title: string;
  description?: string;
  onComplete: () => void;
  onBack: () => void;
}

export const GameModule: React.FC<GameModuleProps> = ({
  title,
  description,
  onComplete,
  onBack,
}) => {
  const [loading, setLoading] = useState(false);

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-8">
      <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-white mb-8">
        {description || "Game coming soon!"}
      </p>
      <button
        onClick={handleComplete}
        disabled={loading}
        className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-green-100 transition flex items-center"
      >
        {loading && <span className="loader mr-2"></span>}
        {loading ? "Marking..." : "Mark Game as Complete"}
      </button>
      <button onClick={onBack} className="mt-4 text-white underline">
        Back to Course
      </button>
      <style>{`
        .loader {
          border: 3px solid #34d399;
          border-top: 3px solid #fff;
          border-radius: 50%;
          width: 1.25rem;
          height: 1.25rem;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
};
