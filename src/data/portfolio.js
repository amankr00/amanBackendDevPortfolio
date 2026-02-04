const portfolio = {
  profilePhotoUrl: '/profile.svg',
  name: 'Aman Kumar',
  role: 'Backend Developer',
  headline: "Hi, I'm Aman Kumar — a Backend Developer building practical, production-ready systems.",
  summary:
    'Based in Patna, Bihar. I work with Node.js/Express, MongoDB, Flutter, and Cloudflare — and I’ve built an e-commerce backend, a Flutter-based company website, and an LLM chatbot using Ollama + Cloudflare Tunnel.',
  email: 'Er.Amankumar25@outlook.com',
  linkedinUrl: 'https://www.linkedin.com/in/amankumar49/',
  linkedinLabel: 'amankumar49',
  projects: [
    {
      name: 'E-Commerce Backend',
      description:
        'Built a backend server using Express.js with Mongoose ODM supporting full CRUD operations. Implemented session-based authentication, integrated SendGrid email services, used Pug for server-side rendering, and followed MVC architecture.',
      tech: ['Node.js', 'Express.js', 'Mongoose', 'SendGrid', 'Pug', 'MySQL', 'MVC'],
      githubUrl: 'https://github.com/amankr00/NodeJS-Sprint',
      liveUrl: 'https://github.com/amankr00/NodeJS-Sprint',
    },
    {
      name: 'Brick Breaker (Flutter)',
      description:
        'Implemented core game mechanics using Flutter widgets with RawKeyboardListener handling real-time player input.',
      tech: ['Flutter', 'RawKeyboardListener', 'Git', 'VS Code'],
      githubUrl: 'https://github.com/amankr00/Brick-Breaker-Flutter',
      liveUrl: 'https://github.com/amankr00/Brick-Breaker-Flutter',
    },
    {
      name: 'Malware Detection (ML)',
      description:
        'Obfuscated 500 malware APKs and 800 benign APKs, performed static analysis, generated a structured dataset, and trained multiple ML models (Logistic Regression, SVM, AdaBoost, Random Forest, Naive Bayes).',
      tech: ['Obfuscapk', 'Androguard', 'Excel', 'Jupyter Notebook', 'VS Code'],
      githubUrl: 'https://github.com/amankr00',
      liveUrl: 'https://github.com/amankr00',
    },
  ],
  upcomingIdeas: [
    {
      title: 'Deploy the e-commerce backend',
      detail: 'Ship a public demo with CI/CD and production-grade env configs.',
    },
    {
      title: 'LLM chatbot improvements',
      detail: 'Add better prompt routing, rate limits, and chat history storage.',
    },
    {
      title: 'Malware detection pipeline',
      detail: 'Automate dataset generation and model evaluation reporting.',
    },
  ],
}

export default portfolio
