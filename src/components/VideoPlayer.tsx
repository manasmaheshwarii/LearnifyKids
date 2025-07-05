// import React, { useState } from "react";
// import {
//   ArrowLeft,
//   Play,
//   Pause,
//   Volume2,
//   Maximize,
//   CheckCircle,
// } from "lucide-react";

// interface VideoPlayerProps {
//   videoUrl: string;
//   title: string;
//   onComplete: () => void;
//   onBack: () => void;
// }

// export const VideoPlayer: React.FC<VideoPlayerProps> = ({
//   videoUrl,
//   title,
//   onComplete,
//   onBack,
// }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [isCompleted, setIsCompleted] = useState(false);

//   // YouTube embed URL
//   const embedUrl = `https://www.youtube.com/embed/${videoUrl}?enablejsapi=1&autoplay=0&controls=1&rel=0`;

//   const handleMarkComplete = () => {
//     setIsCompleted(true);
//     setTimeout(() => {
//       onComplete();
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <button
//             onClick={onBack}
//             className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-colors"
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </button>
//           <div className="text-white text-center flex-1 mx-4">
//             <h1 className="text-xl font-bold">{title}</h1>
//             <p className="text-sm opacity-80">Learning Module</p>
//           </div>
//           <div className="w-12 h-12"></div>
//         </div>
//       </div>

//       {/* Video Container */}
//       <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
//         <div className="w-full max-w-6xl">
//           <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
//             {/* Video Player */}
//             <div className="relative aspect-video">
//               <iframe
//                 src={embedUrl}
//                 title={title}
//                 className="w-full h-full rounded-2xl"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>

//             {/* Controls Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="text-white">
//                     <h3 className="font-semibold text-lg">{title}</h3>
//                     <p className="text-sm opacity-80">Educational Content</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   {!isCompleted ? (
//                     <button
//                       onClick={handleMarkComplete}
//                       className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
//                     >
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Mark Complete</span>
//                     </button>
//                   ) : (
//                     <div className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2">
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Completed!</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Learning Tips */}
//           <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               💡 Learning Tips
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <div className="font-semibold text-blue-800 mb-2">
//                   📝 Take Notes
//                 </div>
//                 <div className="text-blue-700">
//                   Write down key points as you watch
//                 </div>
//               </div>
//               <div className="bg-green-50 p-4 rounded-lg">
//                 <div className="font-semibold text-green-800 mb-2">
//                   🔄 Rewatch
//                 </div>
//                 <div className="text-green-700">
//                   Don't hesitate to replay important parts
//                 </div>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-lg">
//                 <div className="font-semibold text-purple-800 mb-2">
//                   🎯 Practice
//                 </div>
//                 <div className="text-purple-700">
//                   Apply what you learn in real situations
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// -------------------------------------perplexity updated code-----------------

import React, { useState } from "react";
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  Maximize,
  CheckCircle,
} from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onComplete: () => void;
  onBack: () => void;
}

// Utility function to normalize YouTube URLs
function getEmbedUrl(videoUrl: string): string {
  if (videoUrl.includes("youtube.com/embed/")) return videoUrl;
  if (videoUrl.includes("youtube.com/watch")) {
    try {
      const url = new URL(videoUrl);
      const id = url.searchParams.get("v");
      if (id)
        return `https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=0&controls=1&rel=0`;
    } catch {
      // fallback if URL parsing fails
    }
  }
  if (/^[\w-]{11}$/.test(videoUrl)) {
    return `https://www.youtube.com/embed/${videoUrl}?enablejsapi=1&autoplay=0&controls=1&rel=0`;
  }
  // fallback: return as is
  return videoUrl;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  onComplete,
  onBack,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Use the utility function for the embed URL
  const embedUrl = getEmbedUrl(videoUrl);

  const handleMarkComplete = () => {
    setIsCompleted(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-white text-center flex-1 mx-4">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm opacity-80">Learning Module</p>
          </div>
          <div className="w-12 h-12"></div>
        </div>
      </div>

      {/* Video Container */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-6xl">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Player */}
            <div className="relative aspect-video">
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full rounded-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm opacity-80">Educational Content</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {!isCompleted ? (
                    <button
                      onClick={handleMarkComplete}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Mark Complete</span>
                    </button>
                  ) : (
                    <div className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Completed!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Tips */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              💡 Learning Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-800 mb-2">
                  📝 Take Notes
                </div>
                <div className="text-blue-700">
                  Write down key points as you watch
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-semibold text-green-800 mb-2">
                  🔄 Rewatch
                </div>
                <div className="text-green-700">
                  Don't hesitate to replay important parts
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-semibold text-purple-800 mb-2">
                  🎯 Practice
                </div>
                <div className="text-purple-700">
                  Apply what you learn in real situations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
