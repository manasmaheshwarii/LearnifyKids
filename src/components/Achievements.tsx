import React from 'react';
import { mockUser } from '../data/mockUser';
import { Trophy, Lock, Star, Award, Target, Zap } from 'lucide-react';

export const Achievements: React.FC = () => {
  const allAchievements = [
    ...mockUser.badges,
    {
      id: '4',
      name: 'Speed Learner',
      description: 'Complete 3 courses in one week',
      icon: 'Zap',
      color: 'text-yellow-500',
      earnedAt: null,
      isLocked: true
    },
    {
      id: '5',
      name: 'Quiz Master',
      description: 'Get 100% on 5 different quizzes',
      icon: 'Target',
      color: 'text-red-500',
      earnedAt: null,
      isLocked: true
    },
    {
      id: '6',
      name: 'Streak Champion',
      description: 'Maintain a 30-day learning streak',
      icon: 'Star',
      color: 'text-purple-500',
      earnedAt: null,
      isLocked: true
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      DollarSign: Trophy,
      MessageCircle: Award,
      Shield: Trophy,
      Zap: Zap,
      Target: Target,
      Star: Star
    };
    return icons[iconName as keyof typeof icons] || Trophy;
  };

  const earnedBadges = allAchievements.filter(badge => !badge.isLocked);
  const lockedBadges = allAchievements.filter(badge => badge.isLocked);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">Your Achievements 🏆</h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Celebrate your learning milestones and see what's next!</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">{earnedBadges.length}</div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Badges Earned</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">{mockUser.points}</div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Total Points</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">{mockUser.level}</div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Current Level</div>
          </div>
        </div>

        {/* Earned Badges */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-300">Earned Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earnedBadges.map((badge) => {
              const IconComponent = getIcon(badge.icon);
              return (
                <div key={badge.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all duration-200">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 ${badge.color}`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">{badge.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{badge.description}</p>
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300">
                      Earned {badge.earnedAt?.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Locked Badges */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-300">Upcoming Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedBadges.map((badge) => {
              const IconComponent = getIcon(badge.icon);
              return (
                <div key={badge.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 opacity-70 relative overflow-hidden transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <Lock className="w-8 h-8 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">{badge.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{badge.description}</p>
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300">
                      Not Yet Earned
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full -mr-10 -mt-10 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-300">Achievement Progress</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">Speed Learner</span>
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">1/3 courses</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 transition-colors duration-300">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{ width: '33%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">Quiz Master</span>
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">2/5 perfect scores</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 transition-colors duration-300">
                <div className="bg-gradient-to-r from-red-400 to-pink-500 h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">Streak Champion</span>
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">7/30 days</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 transition-colors duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};