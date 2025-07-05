import { User } from "../types";

export const mockUser: User = {
  id: "1",
  name: "Aadhya Sharma",
  email: "example@gmail.com",
  avatar:
    "https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg?auto=compress&cs=tinysrgb&w=150",
  type: "kid",
  level: 5,
  points: 2450,
  badges: [
    {
      id: "1",
      name: "Money Master",
      description: "Completed Money Magic course",
      icon: "DollarSign",
      color: "text-green-500",
      earnedAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      name: "Confident Speaker",
      description: "Completed Public Speaking course",
      icon: "MessageCircle",
      color: "text-purple-500",
      earnedAt: new Date("2024-01-20"),
    },
    {
      id: "3",
      name: "Digital Detective",
      description: "Completed Online Safety course",
      icon: "Shield",
      color: "text-blue-500",
      earnedAt: new Date("2024-01-25"),
    },
  ],
  enrolledCourses: ["money-magic", "confidence-builder", "digital-detective"],
  completedCourses: ["money-magic", "confidence-builder"],
};
