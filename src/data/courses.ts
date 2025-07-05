import { Course } from "../types";

export const courses: Course[] = [
  // FINANCIAL LITERACY COURSES
  {
    id: "money-magic",
    title: "Money Magic – Financial Literacy for Kids",
    description:
      "Learn the basics of money, saving, and smart spending through fun videos and games!",
    category: "financial-literacy",
    ageRange: "8-12",
    difficulty: "Beginner",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    modules: [
      {
        id: "what-is-money",
        title: "What is Money?",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=GZ7y-yFdX9M", // Kids learn what is money
        duration: "8 minutes",
        description:
          "Discover what money is and why it's important in our daily lives",
      },
      {
        id: "saving-vs-spending",
        title: "Saving vs. Spending",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=OITuKu3ky5o", // Teaching kids about saving money
        duration: "10 minutes",
        description: "Learn the difference between saving and spending wisely",
      },
      {
        id: "savings-quiz",
        title: "Savings Quiz",
        type: "quiz",
        description: "Test your knowledge about saving money",
        quizQuestions: [
          {
            id: "q1",
            question: "What should you do with your allowance?",
            options: [
              "Spend it all immediately",
              "Save some and spend some",
              "Hide it under your bed",
              "Give it all away",
            ],
            correctAnswer: 1,
            explanation:
              "It's best to save some money for the future and spend some on things you need or enjoy!",
          },
          {
            id: "q2",
            question: "What is a piggy bank for?",
            options: [
              "Feeding pigs",
              "Storing toys",
              "Saving money",
              "Playing games",
            ],
            correctAnswer: 2,
            explanation:
              "A piggy bank is a great way to save your coins and bills for later!",
          },
        ],
      },
      {
        id: "how-banks-work",
        title: "How Banks Work",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=dVRGqkxwYQc", // How banks work for kids
        duration: "12 minutes",
        description:
          "Understanding how banks help us save and protect our money",
      },
      {
        id: "budget-game",
        title: "Budget Game",
        type: "game",
        description:
          "Play a fun game to practice making a budget with your allowance",
      },
      {
        id: "certificate",
        title: "Certificate of Completion",
        type: "certificate",
        description:
          "Congratulations! You've completed the Money Magic course!",
      },
    ],
  },
  {
    id: "budgeting-basics",
    title: "Budgeting Basics for Young Minds",
    description:
      "Master the art of budgeting with simple, fun techniques designed for kids!",
    category: "financial-literacy",
    ageRange: "10-14",
    difficulty: "Intermediate",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-green-400 to-blue-500",
    modules: [
      {
        id: "budget-planning",
        title: "How to Make a Budget",
        type: "video",
        videoUrl: "sVKQn2fLQsk", // Kids budgeting tutorial
        duration: "15 minutes",
        description: "Learn step-by-step how to create your first budget",
      },
      {
        id: "needs-vs-wants",
        title: "Needs vs Wants",
        type: "video",
        videoUrl: "Tx-ijYemR3s", // Needs vs wants for kids
        duration: "12 minutes",
        description:
          "Understanding the difference between things you need and things you want",
      },
      {
        id: "certificate",
        title: "Budget Master Certificate",
        type: "certificate",
        description: "You're now a budgeting expert!",
      },
    ],
  },

  // PUBLIC SPEAKING COURSES
  {
    id: "confidence-builder",
    title: "Confidence Builder - Public Speaking Basics",
    description:
      "Build confidence and learn to speak in front of others with fun exercises!",
    category: "public-speaking",
    ageRange: "9-14",
    difficulty: "Beginner",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-pink-500 to-purple-600",
    modules: [
      {
        id: "finding-your-voice",
        title: "Finding Your Voice",
        type: "video",
        videoUrl:
          "https://www.youtube.com/watch?v=Rkb-QmuA9Vw&list=PLSnPZxJoBf9OZl_nuB6pcxSX5e2qOd-20&index=11", // Public speaking for kids
        duration: "10 minutes",
        description: "Learn how to project your voice and speak clearly",
      },
      {
        id: "body-language",
        title: "Body Language Basics",
        type: "video",
        videoUrl: "ZZZ7k8cMA-4", // Body language for kids
        duration: "12 minutes",
        description:
          "Understanding how your body language affects communication",
      },
      {
        id: "speaking-quiz",
        title: "Speaking Skills Quiz",
        type: "quiz",
        description: "Test your knowledge about public speaking",
        quizQuestions: [
          {
            id: "q1",
            question: "What should you do with your hands when speaking?",
            options: [
              "Hide them behind your back",
              "Use them to gesture naturally",
              "Put them in your pockets",
              "Cross your arms",
            ],
            correctAnswer: 1,
            explanation:
              "Using your hands to gesture naturally helps you communicate better and appear more confident!",
          },
        ],
      },
      {
        id: "certificate",
        title: "Speaking Champion Certificate",
        type: "certificate",
        description: "You're now a confident speaker!",
      },
    ],
  },
  {
    id: "presentation-pro",
    title: "Presentation Pro - Advanced Speaking Skills",
    description:
      "Take your speaking skills to the next level with advanced presentation techniques!",
    category: "public-speaking",
    ageRange: "12-16",
    difficulty: "Advanced",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-purple-500 to-red-500",
    modules: [
      {
        id: "storytelling-techniques",
        title: "Storytelling Techniques",
        type: "video",
        videoUrl: "lcFnur6cqOA", // Storytelling for presentations
        duration: "18 minutes",
        description:
          "Learn how to tell compelling stories in your presentations",
      },
      {
        id: "overcoming-nerves",
        title: "Overcoming Speaking Nerves",
        type: "video",
        videoUrl: "Unzc731iCUY", // Overcoming public speaking anxiety
        duration: "15 minutes",
        description: "Techniques to manage nerves and speak with confidence",
      },
      {
        id: "certificate",
        title: "Presentation Master Certificate",
        type: "certificate",
        description: "You're now a presentation master!",
      },
    ],
  },

  // DIGITAL ETIQUETTE COURSES
  {
    id: "digital-detective",
    title: "Digital Detective - Online Safety",
    description:
      "Learn how to stay safe online and be a responsible digital citizen!",
    category: "digital-etiquette",
    ageRange: "10-15",
    difficulty: "Intermediate",
    duration: "2.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/5474036/pexels-photo-5474036.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-blue-400 to-purple-500",
    modules: [
      {
        id: "online-safety-basics",
        title: "Online Safety Basics",
        type: "video",
        videoUrl: "xdSTA9MXbhI", // Internet safety for kids
        duration: "15 minutes",
        description: "Learn the fundamental rules of staying safe online",
      },
      {
        id: "cyberbullying-prevention",
        title: "Preventing Cyberbullying",
        type: "video",
        videoUrl: "u9PuG6_mCRY", // Cyberbullying prevention
        duration: "18 minutes",
        description: "How to recognize and respond to cyberbullying",
      },
      {
        id: "digital-safety-quiz",
        title: "Digital Safety Quiz",
        type: "quiz",
        description: "Test your online safety knowledge",
        quizQuestions: [
          {
            id: "q1",
            question:
              "What should you do if someone online asks for your address?",
            options: [
              "Tell them immediately",
              "Ask your parents first",
              "Never give personal information",
              "Give them a fake address",
            ],
            correctAnswer: 2,
            explanation:
              "Never give personal information like your address to strangers online!",
          },
        ],
      },
      {
        id: "certificate",
        title: "Digital Detective Certificate",
        type: "certificate",
        description: "You're now a certified digital detective!",
      },
    ],
  },
  {
    id: "social-media-smart",
    title: "Social Media Smart - Digital Citizenship",
    description:
      "Learn responsible social media use and digital citizenship skills!",
    category: "digital-etiquette",
    ageRange: "12-17",
    difficulty: "Intermediate",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-cyan-400 to-blue-500",
    modules: [
      {
        id: "digital-footprint",
        title: "Understanding Your Digital Footprint",
        type: "video",
        videoUrl: "Zbgc-3OWmkc", // Digital footprint for kids
        duration: "14 minutes",
        description: "Learn how your online actions create a digital footprint",
      },
      {
        id: "responsible-sharing",
        title: "Responsible Sharing",
        type: "video",
        videoUrl: "tYb3cGxd650", // Responsible social media use
        duration: "16 minutes",
        description:
          "Guidelines for sharing content responsibly on social media",
      },
      {
        id: "certificate",
        title: "Digital Citizen Certificate",
        type: "certificate",
        description: "You're now a responsible digital citizen!",
      },
    ],
  },

  // EMOTIONAL INTELLIGENCE COURSES
  {
    id: "emotion-explorer",
    title: "Emotion Explorer - Understanding Feelings",
    description:
      "Explore emotions and learn healthy ways to express and manage your feelings!",
    category: "emotional-intelligence",
    ageRange: "7-12",
    difficulty: "Beginner",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/8923970/pexels-photo-8923970.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-orange-400 to-pink-500",
    modules: [
      {
        id: "identifying-emotions",
        title: "Identifying Emotions",
        type: "video",
        videoUrl: "R652nwUcJRA", // Understanding emotions for kids
        duration: "12 minutes",
        description: "Learn to recognize and name different emotions",
      },
      {
        id: "managing-anger",
        title: "Managing Anger",
        type: "video",
        videoUrl: "WuvBhbPOTqE", // Anger management for kids
        duration: "15 minutes",
        description: "Healthy ways to deal with anger and frustration",
      },
      {
        id: "certificate",
        title: "Emotion Expert Certificate",
        type: "certificate",
        description: "You're now an emotion expert!",
      },
    ],
  },

  // PROBLEM SOLVING COURSES
  {
    id: "problem-solver",
    title: "Problem Solver - Critical Thinking Skills",
    description:
      "Develop critical thinking and problem-solving skills for everyday challenges!",
    category: "problem-solving",
    ageRange: "9-14",
    difficulty: "Intermediate",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/8923875/pexels-photo-8923875.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-indigo-400 to-purple-500",
    modules: [
      {
        id: "thinking-strategies",
        title: "Thinking Strategies",
        type: "video",
        videoUrl: "fC9daNtN2QY", // Critical thinking for kids
        duration: "16 minutes",
        description: "Learn different strategies for solving problems",
      },
      {
        id: "creative-solutions",
        title: "Creative Problem Solving",
        type: "video",
        videoUrl: "OllJuN2gi8Y", // Creative problem solving
        duration: "18 minutes",
        description: "Think outside the box to find creative solutions",
      },
      {
        id: "certificate",
        title: "Problem Solver Certificate",
        type: "certificate",
        description: "You're now a master problem solver!",
      },
    ],
  },

  // TIME MANAGEMENT COURSES
  {
    id: "time-master",
    title: "Time Master - Organization Skills",
    description:
      "Learn time management and organization skills to be more productive!",
    category: "time-management",
    ageRange: "10-16",
    difficulty: "Intermediate",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-teal-400 to-green-500",
    modules: [
      {
        id: "planning-ahead",
        title: "Planning and Scheduling",
        type: "video",
        videoUrl: "sOkFCdisOlg", // Time management for students
        duration: "14 minutes",
        description:
          "Learn how to plan your day and manage your time effectively",
      },
      {
        id: "organization-tips",
        title: "Organization Tips",
        type: "video",
        videoUrl: "x1R7-3Kj9U8", // Organization skills for kids
        duration: "12 minutes",
        description:
          "Keep your space and tasks organized for better productivity",
      },
      {
        id: "certificate",
        title: "Time Master Certificate",
        type: "certificate",
        description: "You're now a time management expert!",
      },
    ],
  },

  // ENTREPRENEURSHIP COURSES
  {
    id: "young-entrepreneur",
    title: "Young Entrepreneur - Business Basics",
    description:
      "Learn the basics of entrepreneurship and how to start your own business!",
    category: "entrepreneurship",
    ageRange: "12-17",
    difficulty: "Advanced",
    duration: "3 hours",
    thumbnail:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-red-400 to-orange-500",
    modules: [
      {
        id: "business-ideas",
        title: "Finding Business Ideas",
        type: "video",
        videoUrl: "J3KqVkFNi8s", // Business ideas for kids
        duration: "20 minutes",
        description: "How to identify and evaluate business opportunities",
      },
      {
        id: "basic-marketing",
        title: "Basic Marketing",
        type: "video",
        videoUrl: "Ek_IjjnaIKg", // Marketing basics for kids
        duration: "18 minutes",
        description: "Learn the fundamentals of marketing your business",
      },
      {
        id: "certificate",
        title: "Young Entrepreneur Certificate",
        type: "certificate",
        description: "You're ready to start your entrepreneurial journey!",
      },
    ],
  },

  // LEADERSHIP COURSES
  {
    id: "leadership-champion",
    title: "Leadership Champion - Leading Others",
    description:
      "Develop leadership skills and learn how to inspire and guide others!",
    category: "leadership",
    ageRange: "11-16",
    difficulty: "Advanced",
    duration: "2.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    modules: [
      {
        id: "leadership-qualities",
        title: "Qualities of Great Leaders",
        type: "video",
        videoUrl: "pWPYjMjOWfg", // Leadership for kids
        duration: "16 minutes",
        description: "Learn what makes a great leader",
      },
      {
        id: "team-building",
        title: "Team Building and Communication",
        type: "video",
        videoUrl: "HAnw168huqA", // Team building for young people
        duration: "20 minutes",
        description: "How to build strong teams and communicate effectively",
      },
      {
        id: "certificate",
        title: "Leadership Champion Certificate",
        type: "certificate",
        description: "You're now a certified leader!",
      },
    ],
  },
];
