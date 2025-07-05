import React, { useState } from 'react';
import { Course, Module } from '../types';
import { ArrowLeft, Play, Clock, Users, Star, CheckCircle, Lock, BookOpen, Trophy } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onStartModule: (moduleId: string) => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onStartModule }) => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const getModuleIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-5 h-5" />;
      case 'quiz': return <BookOpen className="w-5 h-5" />;
      case 'game': return <Trophy className="w-5 h-5" />;
      case 'certificate': return <Star className="w-5 h-5" />;
      default: return <Play className="w-5 h-5" />;
    }
  };

  const getModuleColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400';
      case 'quiz': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400';
      case 'game': return 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400';
      case 'certificate': return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 py-4">
            <button
              onClick={onBack}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">{course.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{course.modules.length} modules</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-colors duration-300">
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
                  <p className="text-lg opacity-90">{course.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2 transition-colors duration-300" />
                    <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">{course.duration}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2 transition-colors duration-300" />
                    <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">{course.ageRange}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Age Range</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2 transition-colors duration-300" />
                    <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">{course.difficulty}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Level</div>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2 transition-colors duration-300" />
                    <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">Certificate</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Included</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl transition-colors duration-300">
                  <h3 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300 transition-colors duration-300">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Master essential life skills not taught in school</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Build confidence through interactive exercises</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Apply knowledge with fun quizzes and games</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Earn a certificate of completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 transition-colors duration-300">Course Modules</h3>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div
                    key={module.id}
                    className={`border-2 rounded-xl p-4 transition-all duration-200 ${
                      activeModule === module.id
                        ? 'border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full transition-colors duration-300 ${getModuleColor(module.type)}`}>
                          {getModuleIcon(module.type)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">{module.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{module.description}</p>
                          {module.duration && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 transition-colors duration-300">{module.duration}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {module.isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : index === 0 ? (
                          <button
                            onClick={() => onStartModule(module.id)}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                          >
                            Start
                          </button>
                        ) : (
                          <Lock className="w-6 h-6 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">Free</div>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Full access to all content</p>
              </div>
              <button
                onClick={() => onStartModule(course.modules[0].id)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Learning</span>
              </button>
            </div>

            {/* Progress Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200 transition-colors duration-300">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <span>Overall Progress</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-300">5</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Remaining</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200 transition-colors duration-300">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg transition-colors duration-300">
                  <div className="p-2 bg-yellow-200 dark:bg-yellow-800 rounded-full transition-colors duration-300">
                    <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300">First Steps</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">Complete your first module</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-50 transition-colors duration-300">
                  <div className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full transition-colors duration-300">
                    <Trophy className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800 dark:text-gray-200 transition-colors duration-300">Course Master</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">Complete all modules</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};