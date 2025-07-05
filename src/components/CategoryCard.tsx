import React from 'react';
import { Category } from '../types';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<any>;

  // Map category IDs to relevant images
  const getCategoryImage = (categoryId: string) => {
    const imageMap = {
      'public-speaking': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'financial-literacy': 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      'emotional-intelligence': 'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg?auto=compress&cs=tinysrgb&w=800',
      'technology-coding': 'https://images.pexels.com/photos/5474036/pexels-photo-5474036.jpeg?auto=compress&cs=tinysrgb&w=800',
      'critical-thinking': 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      'life-skills': 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
      'environmental-awareness': 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      'creativity': 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
      'digital-etiquette': 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    return imageMap[categoryId as keyof typeof imageMap] || imageMap['public-speaking'];
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Header with image background */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={getCategoryImage(category.id)}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
              <IconComponent className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
              {category.courseCount} courses
            </span>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{category.name}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">{category.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-bold transition-colors duration-300"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">+{category.courseCount - 3} more</span>
          </div>
          
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform group-hover:scale-105">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};