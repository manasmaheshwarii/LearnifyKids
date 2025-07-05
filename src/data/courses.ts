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
        videoUrl: "https://www.youtube.com/watch?v=GZ7y-yFdX9M",
        duration: "8 minutes",
        description:
          "Discover what money is and why it's important in our daily lives",
      },
      {
        id: "saving-vs-spending",
        title: "Saving vs. Spending",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=qDTr2JcKqUE",
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
        videoUrl: "https://www.youtube.com/watch?v=MZqkMhyzPwU",
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
          "Congratulations! Download your certificate for completing this course!",
        downloadUrl: "/certificates/money-magic-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=sVKQn2fLQsk",
        duration: "15 minutes",
        description: "Learn step-by-step how to create your first budget",
      },
      {
        id: "needs-vs-wants",
        title: "Needs vs Wants",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=Tx-ijYemR3s",
        duration: "12 minutes",
        description:
          "Understanding the difference between things you need and things you want",
      },
      {
        id: "certificate",
        title: "Budget Master Certificate",
        type: "certificate",
        description:
          "You're now a budgeting expert! Download your certificate.",
        downloadUrl: "/certificates/budgeting-basics-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=Rkb-QmuA9Vw",
        duration: "10 minutes",
        description: "Learn how to project your voice and speak clearly",
      },
      {
        id: "body-language",
        title: "Body Language Basics",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=ZZZ7k8cMA-4",
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
        description:
          "You're now a confident speaker! Download your certificate.",
        downloadUrl: "/certificates/confidence-builder-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=lcFnur6cqOA",
        duration: "18 minutes",
        description:
          "Learn how to tell compelling stories in your presentations",
      },
      {
        id: "overcoming-nerves",
        title: "Overcoming Speaking Nerves",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=Unzc731iCUY",
        duration: "15 minutes",
        description: "Techniques to manage nerves and speak with confidence",
      },
      {
        id: "certificate",
        title: "Presentation Master Certificate",
        type: "certificate",
        description:
          "You're now a presentation master! Download your certificate.",
        downloadUrl: "/certificates/presentation-pro-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=xdSTA9MXbhI",
        duration: "15 minutes",
        description: "Learn the fundamental rules of staying safe online",
      },
      {
        id: "cyberbullying-prevention",
        title: "Preventing Cyberbullying",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=u9PuG6_mCRY",
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
        description:
          "You're now a certified digital detective! Download your certificate.",
        downloadUrl: "/certificates/digital-detective-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=Zbgc-3OWmkc",
        duration: "14 minutes",
        description: "Learn how your online actions create a digital footprint",
      },
      {
        id: "responsible-sharing",
        title: "Responsible Sharing",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=tYb3cGxd650",
        duration: "16 minutes",
        description:
          "Guidelines for sharing content responsibly on social media",
      },
      {
        id: "certificate",
        title: "Digital Citizen Certificate",
        type: "certificate",
        description:
          "You're now a responsible digital citizen! Download your certificate.",
        downloadUrl: "/certificates/social-media-smart-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=R652nwUcJRA",
        duration: "12 minutes",
        description: "Learn to recognize and name different emotions",
      },
      {
        id: "managing-anger",
        title: "Managing Anger",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=WuvBhbPOTqE",
        duration: "15 minutes",
        description: "Healthy ways to deal with anger and frustration",
      },
      {
        id: "certificate",
        title: "Emotion Expert Certificate",
        type: "certificate",
        description: "You're now an emotion expert! Download your certificate.",
        downloadUrl: "/certificates/emotion-explorer-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=fC9daNtN2QY",
        duration: "16 minutes",
        description: "Learn different strategies for solving problems",
      },
      {
        id: "creative-solutions",
        title: "Creative Problem Solving",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=OllJuN2gi8Y",
        duration: "18 minutes",
        description: "Think outside the box to find creative solutions",
      },
      {
        id: "certificate",
        title: "Problem Solver Certificate",
        type: "certificate",
        description:
          "You're now a master problem solver! Download your certificate.",
        downloadUrl: "/certificates/problem-solver-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=sOkFCdisOlg",
        duration: "14 minutes",
        description:
          "Learn how to plan your day and manage your time effectively",
      },
      {
        id: "organization-tips",
        title: "Organization Tips",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=x1R7-3Kj9U8",
        duration: "12 minutes",
        description:
          "Keep your space and tasks organized for better productivity",
      },
      {
        id: "certificate",
        title: "Time Master Certificate",
        type: "certificate",
        description:
          "You're now a time management expert! Download your certificate.",
        downloadUrl: "/certificates/time-master-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=J3KqVkFNi8s",
        duration: "20 minutes",
        description: "How to identify and evaluate business opportunities",
      },
      {
        id: "basic-marketing",
        title: "Basic Marketing",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=Ek_IjjnaIKg",
        duration: "18 minutes",
        description: "Learn the fundamentals of marketing your business",
      },
      {
        id: "certificate",
        title: "Young Entrepreneur Certificate",
        type: "certificate",
        description:
          "You're ready to start your entrepreneurial journey! Download your certificate.",
        downloadUrl: "/certificates/young-entrepreneur-certificate.pdf",
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
        videoUrl: "https://www.youtube.com/watch?v=pWPYjMjOWfg",
        duration: "16 minutes",
        description: "Learn what makes a great leader",
      },
      {
        id: "team-building",
        title: "Team Building and Communication",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=HAnw168huqA",
        duration: "20 minutes",
        description: "How to build strong teams and communicate effectively",
      },
      {
        id: "certificate",
        title: "Leadership Champion Certificate",
        type: "certificate",
        description:
          "You're now a certified leader! Download your certificate.",
        downloadUrl: "/certificates/leadership-champion-certificate.pdf",
      },
    ],
  },

  // BASIC TECHNOLOGY & CODING
  {
    id: "coding-adventure",
    title: "Coding Adventure – Introduction to Programming",
    description:
      "Start your coding journey with fun, interactive lessons using Scratch and simple logic games!",
    category: "technology-coding",
    ageRange: "9-13",
    difficulty: "Beginner",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-purple-500 to-indigo-600",
    modules: [
      {
        id: "what-is-coding",
        title: "What is Coding?",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=QvyTEx1wyOY",
        duration: "10 minutes",
        description:
          "Discover the basics of computer programming and why it's important.",
      },
      {
        id: "scratch-basics",
        title: "Getting Started with Scratch",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=VIpmkeqJhmk",
        duration: "12 minutes",
        description: "Learn how to create your first project in Scratch.",
      },
      {
        id: "coding-quiz",
        title: "Coding Quiz",
        type: "quiz",
        description: "Test your knowledge of basic coding concepts.",
        quizQuestions: [
          {
            id: "q1",
            question: "What is a programming language?",
            options: [
              "A spoken language",
              "A way to talk to computers",
              "A type of food",
              "A kind of music",
            ],
            correctAnswer: 1,
            explanation:
              "Programming languages are used to give instructions to computers.",
          },
        ],
      },
      {
        id: "certificate",
        title: "Coding Explorer Certificate",
        type: "certificate",
        description:
          "Congratulations! Download your certificate for completing the Coding Adventure course!",
        downloadUrl: "/certificates/coding-adventure-certificate.pdf",
      },
    ],
  },

  // CRITICAL THINKING & PROBLEM SOLVING
  {
    id: "logic-lab",
    title: "Logic Lab – Puzzles and Riddles",
    description:
      "Sharpen your mind with fun logic puzzles, brain teasers, and ethical dilemmas!",
    category: "critical-thinking",
    ageRange: "10-15",
    difficulty: "Intermediate",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-orange-500 to-red-600",
    modules: [
      {
        id: "puzzle-challenge",
        title: "Puzzle Challenge",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=7yDmGnA8Hw0",
        duration: "12 minutes",
        description:
          "Solve classic logic puzzles and learn problem-solving strategies.",
      },
      {
        id: "ethical-dilemmas",
        title: "What Would You Do?",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=bE6lF4Wl2nA",
        duration: "10 minutes",
        description: "Explore ethical dilemmas and discuss possible solutions.",
      },
      {
        id: "logic-quiz",
        title: "Logic Quiz",
        type: "quiz",
        description: "Test your critical thinking skills.",
        quizQuestions: [
          {
            id: "q1",
            question: "What is the first step in solving a problem?",
            options: [
              "Guess the answer",
              "Understand the problem",
              "Ask a friend",
              "Ignore it",
            ],
            correctAnswer: 1,
            explanation:
              "Understanding the problem is the first step to solving it.",
          },
        ],
      },
      {
        id: "certificate",
        title: "Logic Lab Certificate",
        type: "certificate",
        description:
          "You're now a logic puzzle master! Download your certificate.",
        downloadUrl: "/certificates/logic-lab-certificate.pdf",
      },
    ],
  },

  // LIFE SKILLS
  {
    id: "life-skills-101",
    title: "Life Skills 101 – Everyday Essentials",
    description:
      "Learn practical skills like first aid, basic cooking, and organization to become more independent!",
    category: "life-skills",
    ageRange: "9-14",
    difficulty: "Beginner",
    duration: "2 hours",
    thumbnail:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-yellow-500 to-orange-600",
    modules: [
      {
        id: "first-aid-basics",
        title: "First Aid Basics",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=bQCP7waTRWU",
        duration: "10 minutes",
        description: "Learn how to handle minor injuries and emergencies.",
      },
      {
        id: "cooking-fun",
        title: "Simple Cooking Skills",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=1U6vA5GqHq8",
        duration: "12 minutes",
        description: "Discover easy recipes and kitchen safety tips.",
      },
      {
        id: "organization-tips",
        title: "Staying Organized",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=x1R7-3Kj9U8",
        duration: "8 minutes",
        description: "Tips for keeping your room and schoolwork organized.",
      },
      {
        id: "life-skills-quiz",
        title: "Life Skills Quiz",
        type: "quiz",
        description: "Test your knowledge of essential life skills.",
        quizQuestions: [
          {
            id: "q1",
            question: "What should you do if you get a small cut?",
            options: [
              "Ignore it",
              "Wash it and use a bandage",
              "Run around",
              "Eat candy",
            ],
            correctAnswer: 1,
            explanation: "Always clean a cut and cover it with a bandage.",
          },
        ],
      },
      {
        id: "certificate",
        title: "Life Skills Certificate",
        type: "certificate",
        description:
          "You're now a life skills expert! Download your certificate.",
        downloadUrl: "/certificates/life-skills-101-certificate.pdf",
      },
    ],
  },

  // ENVIRONMENTAL AWARENESS
  {
    id: "eco-heroes",
    title: "Eco Heroes – Caring for Our Planet",
    description:
      "Discover how you can help the environment through recycling, saving energy, and making eco-friendly choices.",
    category: "environmental-awareness",
    ageRange: "8-13",
    difficulty: "Beginner",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-green-400 to-teal-600",
    modules: [
      {
        id: "why-care",
        title: "Why Should We Care?",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=B-nEYsyRlYo",
        duration: "10 minutes",
        description: "Learn why protecting the environment is important.",
      },
      {
        id: "recycling-basics",
        title: "Recycling Basics",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=Rzxr9FeZf1g",
        duration: "8 minutes",
        description: "How to recycle at home and school.",
      },
      {
        id: "eco-quiz",
        title: "Eco Quiz",
        type: "quiz",
        description: "Test your knowledge about the environment.",
        quizQuestions: [
          {
            id: "q1",
            question: "Which of these can be recycled?",
            options: [
              "Plastic bottles",
              "Banana peels",
              "Old shoes",
              "All of the above",
            ],
            correctAnswer: 0,
            explanation:
              "Plastic bottles are commonly recycled; banana peels are composted.",
          },
        ],
      },
      {
        id: "certificate",
        title: "Eco Hero Certificate",
        type: "certificate",
        description: "You're now an Eco Hero! Download your certificate.",
        downloadUrl: "/certificates/eco-heroes-certificate.pdf",
      },
    ],
  },

  // CREATIVITY & EXPRESSION
  {
    id: "creative-kids",
    title: "Creative Kids – Art, Music, and More",
    description:
      "Express yourself through drawing, music, and crafts in this fun, hands-on course!",
    category: "creativity",
    ageRange: "7-12",
    difficulty: "Beginner",
    duration: "1.5 hours",
    thumbnail:
      "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-gradient-to-r from-pink-400 to-purple-500",
    modules: [
      {
        id: "drawing-basics",
        title: "Drawing Basics",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=2VbP5d6p6rA",
        duration: "10 minutes",
        description: "Learn how to draw simple shapes and characters.",
      },
      {
        id: "music-fun",
        title: "Making Music",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
        duration: "8 minutes",
        description: "Explore rhythm and melody with easy music activities.",
      },
      {
        id: "crafts",
        title: "Crafts and Creations",
        type: "video",
        videoUrl: "https://www.youtube.com/watch?v=lCNGg8fK0qA",
        duration: "12 minutes",
        description: "Create fun crafts using everyday materials.",
      },
      {
        id: "creativity-quiz",
        title: "Creativity Quiz",
        type: "quiz",
        description: "Test your creative knowledge.",
        quizQuestions: [
          {
            id: "q1",
            question: "What do you need to start drawing?",
            options: ["A pencil and paper", "A computer", "A car", "A phone"],
            correctAnswer: 0,
            explanation: "You just need a pencil and paper to start drawing!",
          },
        ],
      },
      {
        id: "certificate",
        title: "Creative Kids Certificate",
        type: "certificate",
        description:
          "You're now a creative superstar! Download your certificate.",
        downloadUrl: "/certificates/creative-kids-certificate.pdf",
      },
    ],
  },
];
