const portfolio = {
  profilePhotoUrl: '/profile.svg',
  name: 'Your Name',
  role: 'Backend Engineer',
  headline: 'I build reliable backends that scale.',
  summary:
    'APIs, databases, queues, and cloud infrastructure — designed for performance, observability, and maintainability.',
  email: 'you@example.com',
  linkedinUrl: 'https://www.linkedin.com/in/your-handle/',
  linkedinLabel: 'linkedin.com/in/your-handle',
  projects: [
    {
      name: 'QueueFlow',
      description:
        'A job processing system with retries, DLQ handling, and metrics. Built for predictable throughput and safe deployments.',
      tech: ['Node.js', 'Redis', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/your-handle/queueflow',
      liveUrl: 'https://queueflow.example.com',
    },
    {
      name: 'AuditTrail API',
      description:
        'An immutable audit logging service with role-based access and tamper-evident hashing, optimized for fast queries.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenTelemetry'],
      githubUrl: 'https://github.com/your-handle/audittrail-api',
      liveUrl: 'https://audittrail.example.com',
    },
    {
      name: 'SearchEdge',
      description:
        'A lightweight search service with synonyms, faceting, and incremental indexing — designed for low-latency reads.',
      tech: ['Go', 'Elasticsearch', 'Kubernetes'],
      githubUrl: 'https://github.com/your-handle/searchedge',
      liveUrl: 'https://searchedge.example.com',
    },
  ],
  upcomingIdeas: [
    {
      title: 'Latency & error budget dashboard',
      detail: 'SLOs, burn rates, alert tuning, and weekly reliability reports.',
    },
    {
      title: 'Self-hosted CI templates',
      detail: 'Reusable pipelines for lint/test/build/release with caching.',
    },
    {
      title: 'Event-driven analytics',
      detail: 'Streaming ingestion + warehouse modeling for product insights.',
    },
  ],
}

export default portfolio
