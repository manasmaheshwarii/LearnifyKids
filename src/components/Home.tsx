import React from "react";
import { Hero } from "./Hero";
import { CategoryCard } from "./CategoryCard";
import { CourseCard } from "./CourseCard";
import { Footer } from "./Footer";
import { categories } from "../data/categories";
import { courses } from "../data/courses";
import { Star, Users, BookOpen, Award } from "lucide-react";

interface HomeProps {
  onCategoryClick: (categoryId: string) => void;
  onCourseClick: (courseId: string) => void;
  onGetStarted: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onCategoryClick,
  onCourseClick,
  onGetStarted,
}) => {
  const featuredCourses = courses.slice(0, 3);

  const handleBrowseCourses = () => {
    onGetStarted(); // This will navigate to courses page
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <Hero onGetStarted={onGetStarted} onBrowseCourses={handleBrowseCourses} />

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight pb-2">
              Explore Learning Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium transition-colors duration-300">
              From Chores to Challenges — Master Life in 9 Fun Ways!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => onCategoryClick(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 tracking-tight leading-tight pb-2">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium transition-colors duration-300">
              Start your learning journey with these popular courses loved by
              thousands of kids!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => onCourseClick(course.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Kids Love Learnify
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We've designed every aspect of our platform to make learning fun,
              engaging, and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
              <p className="opacity-90">
                Earn points, badges, and level up as you learn!
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interactive Content
              </h3>
              <p className="opacity-90">
                Videos, quizzes, and games keep kids engaged
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Age-Appropriate</h3>
              <p className="opacity-90">
                Content designed specifically for kids 7-15
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificates</h3>
              <p className="opacity-90">
                Celebrate achievements with official certificates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-300">
            Ready to Start Your Learning Adventure?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            Join thousands of kids who are already mastering essential life
            skills with Learnify
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
