import React, { useState } from "react";

interface CertificateModuleProps {
  title: string;
  description?: string;
  downloadUrl?: string;
  onBack: () => void;
  onComplete: () => void;
}

export const CertificateModule: React.FC<CertificateModuleProps> = ({
  title,
  description,
  downloadUrl,
  onBack,
  onComplete,
}) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      onComplete();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 p-8">
      <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-white mb-8">
        {description || "Congratulations on completing the course!"}
      </p>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          onClick={handleDownload}
          className="bg-white text-yellow-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-100 transition flex items-center"
        >
          {loading && <span className="loader mr-2"></span>}
          {loading ? "Preparing..." : "Download Certificate"}
        </a>
      )}
      {completed && (
        <div className="mt-4 text-green-100 font-semibold flex items-center">
          <span className="mr-2">✔</span> Certificate marked as complete!
        </div>
      )}
      <button onClick={onBack} className="mt-4 text-white underline">
        Back to Course
      </button>
      <style>{`
        .loader {
          border: 3px solid #fbbf24;
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
