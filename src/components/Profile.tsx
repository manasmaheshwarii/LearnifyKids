import React, { useState } from "react";
import { mockUser } from "../data/mockUser";
import {
  User,
  Mail,
  Calendar,
  Trophy,
  Star,
  Edit,
  Camera,
  Award,
  BookOpen,
} from "lucide-react";

export const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 leading-tight pb-2">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Manage your account and track your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transition-colors duration-300">
              <div className="relative inline-block mb-4">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-24 h-24 rounded-full border-4 border-purple-200 dark:border-purple-600 mx-auto transition-colors duration-300"
                />
                <button className="absolute bottom-0 right-0 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
                {mockUser.name}
              </h2>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4 transition-colors duration-300">
                Level {mockUser.level} Learner
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg transition-colors duration-300">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                    {mockUser.points}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Points
                  </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg transition-colors duration-300">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 transition-colors duration-300">
                    {mockUser.badges.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Badges
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Edit className="w-4 h-4" />
                <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors duration-300">
                <User className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
                Personal Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      {name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      {email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Account Type
                  </label>
                  <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 capitalize transition-colors duration-300">
                    {mockUser.type}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Member Since
                  </label>
                  <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    January 2024
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex space-x-3">
                  <button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Learning Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors duration-300">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                Learning Statistics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center transition-colors duration-300">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                    {mockUser.enrolledCourses.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Enrolled Courses
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center transition-colors duration-300">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
                    {mockUser.completedCourses.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Completed Courses
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center transition-colors duration-300">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                    7
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    Day Streak
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Badges */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors duration-300">
                <Award className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400 transition-colors duration-300" />
                Recent Badges
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockUser.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 transition-colors duration-300"
                  >
                    <div className="p-2 bg-white dark:bg-gray-700 rounded-full transition-colors duration-300">
                      <Trophy className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                        {badge.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        {badge.description}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 transition-colors duration-300">
                        {badge.earnedAt.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
