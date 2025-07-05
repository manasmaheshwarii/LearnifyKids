import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'money-magic',
    title: 'Money Magic – Financial Literacy for Kids',
    description: 'Learn the basics of money, saving, and smart spending through fun videos and games!',
    category: 'financial-literacy',
    ageRange: '8-12',
    difficulty: 'Beginner',
    duration: '2 hours',
    thumbnail: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-gradient-to-r from-green-500 to-emerald-600',
    modules: [
      {
        id: 'what-is-money',
        title: 'What is Money?',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '8 minutes',
        description: 'Discover what money is and why it\'s important in our daily lives'
      },
      {
        id: 'saving-vs-spending',
        title: 'Saving vs. Spending',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '10 minutes',
        description: 'Learn the difference between saving and spending wisely'
      },
      {
        id: 'savings-quiz',
        title: 'Savings Quiz',
        type: 'quiz',
        description: 'Test your knowledge about saving money',
        quizQuestions: [
          {
            id: 'q1',
            question: 'What should you do with your allowance?',
            options: ['Spend it all immediately', 'Save some and spend some', 'Hide it under your bed', 'Give it all away'],
            correctAnswer: 1,
            explanation: 'It\'s best to save some money for the future and spend some on things you need or enjoy!'
          },
          {
            id: 'q2',
            question: 'What is a piggy bank for?',
            options: ['Feeding pigs', 'Storing toys', 'Saving money', 'Playing games'],
            correctAnswer: 2,
            explanation: 'A piggy bank is a great way to save your coins and bills for later!'
          }
        ]
      },
      {
        id: 'how-banks-work',
        title: 'How Banks Work',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '12 minutes',
        description: 'Understanding how banks help us save and protect our money'
      },
      {
        id: 'budget-game',
        title: 'Budget Game',
        type: 'game',
        description: 'Play a fun game to practice making a budget with your allowance'
      },
      {
        id: 'certificate',
        title: 'Certificate of Completion',
        type: 'certificate',
        description: 'Congratulations! You\'ve completed the Money Magic course!'
      }
    ]
  },
  {
    id: 'confidence-builder',
    title: 'Confidence Builder - Public Speaking Basics',
    description: 'Build confidence and learn to speak in front of others with fun exercises!',
    category: 'public-speaking',
    ageRange: '9-14',
    difficulty: 'Beginner',
    duration: '1.5 hours',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-gradient-to-r from-pink-500 to-purple-600',
    modules: [
      {
        id: 'finding-your-voice',
        title: 'Finding Your Voice',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '10 minutes',
        description: 'Learn how to project your voice and speak clearly'
      },
      {
        id: 'body-language',
        title: 'Body Language Basics',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '12 minutes',
        description: 'Understanding how your body language affects communication'
      },
      {
        id: 'speaking-quiz',
        title: 'Speaking Skills Quiz',
        type: 'quiz',
        description: 'Test your knowledge about public speaking',
        quizQuestions: [
          {
            id: 'q1',
            question: 'What should you do with your hands when speaking?',
            options: ['Hide them behind your back', 'Use them to gesture naturally', 'Put them in your pockets', 'Cross your arms'],
            correctAnswer: 1,
            explanation: 'Using your hands to gesture naturally helps you communicate better and appear more confident!'
          }
        ]
      },
      {
        id: 'certificate',
        title: 'Speaking Champion Certificate',
        type: 'certificate',
        description: 'You\'re now a confident speaker!'
      }
    ]
  },
  {
    id: 'digital-detective',
    title: 'Digital Detective - Online Safety',
    description: 'Learn how to stay safe online and be a responsible digital citizen!',
    category: 'digital-etiquette',
    ageRange: '10-15',
    difficulty: 'Intermediate',
    duration: '2.5 hours',
    thumbnail: 'https://images.pexels.com/photos/5474036/pexels-photo-5474036.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-gradient-to-r from-blue-400 to-purple-500',
    modules: [
      {
        id: 'online-safety-basics',
        title: 'Online Safety Basics',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '15 minutes',
        description: 'Learn the fundamental rules of staying safe online'
      },
      {
        id: 'cyberbullying-prevention',
        title: 'Preventing Cyberbullying',
        type: 'video',
        videoUrl: 'dQw4w9WgXcQ',
        duration: '18 minutes',
        description: 'How to recognize and respond to cyberbullying'
      },
      {
        id: 'digital-safety-quiz',
        title: 'Digital Safety Quiz',
        type: 'quiz',
        description: 'Test your online safety knowledge',
        quizQuestions: [
          {
            id: 'q1',
            question: 'What should you do if someone online asks for your address?',
            options: ['Tell them immediately', 'Ask your parents first', 'Never give personal information', 'Give them a fake address'],
            correctAnswer: 2,
            explanation: 'Never give personal information like your address to strangers online!'
          }
        ]
      },
      {
        id: 'certificate',
        title: 'Digital Detective Certificate',
        type: 'certificate',
        description: 'You\'re now a certified digital detective!'
      }
    ]
  }
];