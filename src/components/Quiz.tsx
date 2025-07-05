import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { ArrowLeft, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        setTimeout(() => {
          const finalScore = selectedAnswer === questions[currentQuestion].correctAnswer ? score + 1 : score;
          onComplete(finalScore);
        }, 3000);
      }
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const finalScore = selectedAnswer === questions[currentQuestion].correctAnswer ? score + 1 : score;
    const percentage = Math.round((finalScore / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            {percentage >= 70 ? (
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            ) : (
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-12 h-12 text-yellow-500" />
              </div>
            )}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {percentage >= 70 ? 'Great Job!' : 'Good Try!'}
            </h2>
            <p className="text-gray-600">
              You scored {finalScore} out of {questions.length} questions
            </p>
          </div>
          
          <div className="mb-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">{percentage}%</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <p>+{finalScore * 10} points earned!</p>
            <p>Keep learning to unlock more achievements!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-white text-center">
            <div className="text-lg font-semibold">Question {currentQuestion + 1} of {questions.length}</div>
            <div className="text-sm opacity-80">Quiz in Progress</div>
          </div>
          <div className="w-12 h-12"></div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {currentQ.question}
          </h2>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    selectedAnswer === index
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-2 mx-auto ${
              selectedAnswer !== null
                ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg transform hover:scale-105'
                : 'bg-white bg-opacity-50 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};