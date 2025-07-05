import React from 'react';
import { mockUser } from '../data/mockUser';
import { courses } from '../data/courses';
import { Trophy, Star, BookOpen, Clock, TrendingUp, Award, Target, Zap } from 'lucide-react';

interface DashboardProps {
  onCourseClick: (courseId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onCourseClick }) => {
  const enrolledCourses = courses.filter(course => mockUser.enrolledCourses.includes(course.id));
  const completedCourses = courses.filter(course => mockUser.completedCourses.includes(course.id));

  // Add mock progress to enrolled courses
  const coursesWithProgress = enrolledCourses.map(course => ({
    ...course,
    progress: mockUser.completedCourses.includes(course.id) ? 100 : 
             course.id === 'digital-detective' ? 60 : 25
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 leading-tight pb-2">
            Welcome back, {mockUser.name}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">Continue your learning journey and unlock new achievements</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">{mockUser.level}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Current Level</div>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 transition-colors duration-300">{mockUser.points}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Total Points</div>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full transition-colors duration-300">
                <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400 transition-colors duration-300" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 border-green-500 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">{completedCourses.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Completed Courses</div>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full transition-colors duration-300">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400 transition-colors duration-300" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">{mockUser.badges.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">Badges Earned</div>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full transition-colors duration-300">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors duration-300">
                <BookOpen className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
                Continue Learning
              </h2>
              <div className="space-y-4">
                {coursesWithProgress.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => onCourseClick(course.id)}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105"
                  >
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">{course.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">{course.description.substring(0, 60)}...</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 transition-colors duration-300">{course.progress}%</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors duration-300">
                <Trophy className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400 transition-colors duration-300" />
                Recent Achievements
              </h2>
              <div className="space-y-4">
                {mockUser.badges.slice(0, 3).map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800 transition-colors duration-300">
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md transition-colors duration-300">
                      <Trophy className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">{badge.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{badge.description}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 transition-colors duration-300">
                        Earned on {badge.earnedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Streak */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🔥 7</div>
                <div className="text-xl font-semibold mb-1">Day Streak</div>
                <div className="text-sm opacity-80">Keep it up!</div>
              </div>
              <div className="mt-6 bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-sm font-semibold mb-2">This Week</div>
                <div className="flex justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                    <div
                      key={day}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        index < 5 ? 'bg-white text-purple-600' : 'bg-white bg-opacity-30'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Level Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center transition-colors duration-300">
                <Target className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
                Next Level Progress
              </h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">Level {mockUser.level + 1}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">550 points needed</div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 transition-colors duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">2450 / 3000</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Current Points</div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center transition-colors duration-300">
                <Zap className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400 transition-colors duration-300" />
                Recommended for You
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                  <div className="font-semibold text-blue-800 dark:text-blue-300 text-sm transition-colors duration-300">Creativity & Expression</div>
                  <div className="text-blue-600 dark:text-blue-400 text-xs transition-colors duration-300">Based on your interests</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 transition-colors duration-300">
                  <div className="font-semibold text-green-800 dark:text-green-300 text-sm transition-colors duration-300">Environmental Awareness</div>
                  <div className="text-green-600 dark:text-green-400 text-xs transition-colors duration-300">Complete your learning journey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};