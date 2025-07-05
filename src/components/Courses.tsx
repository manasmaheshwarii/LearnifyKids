import React, { useState } from "react";
import { courses } from "../data/courses";
import { categories } from "../data/categories";
import { CourseCard } from "./CourseCard";
import { Search, Filter } from "lucide-react";

interface CoursesProps {
  onCourseClick: (courseId: string) => void;
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  onBack?: () => void; // NEW
}

export const Courses: React.FC<CoursesProps> = ({
  onCourseClick,
  selectedCategory,
  onCategoryChange,
  onBack,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? course.category === selectedCategory
      : true;
    const matchesDifficulty =
      selectedDifficulty === "all" || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button (only if filtered by category) */}
        {selectedCategory && onBack && (
          <div className="mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-semibold px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </button>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name ||
                "Courses"
              : "All Courses"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.description
              : "Discover and learn essential life skills through our comprehensive course catalog"}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors duration-300" />
              <select
                value={selectedCategory || "all"}
                onChange={(e) => {
                  if (onCategoryChange)
                    onCategoryChange(
                      e.target.value === "all" ? undefined : e.target.value
                    );
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
          {selectedCategory && (
            <button
              className="ml-4 text-purple-600 dark:text-purple-400 underline"
              onClick={() => onCategoryChange && onCategoryChange(undefined)}
            >
              Show All Courses
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => onCourseClick(course.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4 transition-colors duration-300">
              🔍
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Try adjusting your search or filters to find more courses
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
