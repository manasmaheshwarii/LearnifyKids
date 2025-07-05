import React from "react";
import { Play, Star, Users, BookOpen } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
  onBrowseCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetStarted,
  onBrowseCourses,
}) => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Get Ready for Life
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent leading-tight pb-2">
                  The Fun Way!
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                Master essential skills like financial literacy, public
                speaking, and digital safety through fun videos, quizzes, and
                games designed just for kids!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Play className="w-6 h-6" />
                <span>Start Learning</span>
              </button>
              <button
                onClick={onBrowseCourses}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-6 h-6" />
                <span>Browse Courses</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">9+</div>
                <div className="text-purple-200">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10+</div>
                <div className="text-purple-200">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-purple-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kids learning"
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 p-4 rounded-full shadow-lg animate-bounce">
                <Star className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 p-4 rounded-full shadow-lg animate-pulse">
                <Users className="w-8 h-8" />
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-3/4 left-1/2 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
