export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    description: "Latest trends in tech and development",
    slug: "technology"
  },
  {
    id: "2", 
    name: "Design",
    description: "UI/UX design insights and inspiration",
    slug: "design"
  },
  {
    id: "3",
    name: "Business",
    description: "Startup and business strategy content",
    slug: "business"
  },
  {
    id: "4",
    name: "Lifestyle",
    description: "Work-life balance and productivity tips", 
    slug: "lifestyle"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to new frameworks.",
    content: `
# The Future of Web Development: Trends to Watch in 2024

Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging to meet the ever-changing demands of users and businesses. As we move through 2024, several key trends are reshaping how we build and interact with web applications.

## AI-Powered Development Tools

Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. These tools not only increase productivity but also help identify potential issues early in the development cycle.

## Progressive Web Apps (PWAs) Maturity

PWAs have reached a new level of sophistication, offering near-native app experiences directly from the browser. With improved offline capabilities and better performance, PWAs are becoming the go-to solution for businesses looking to reach users across all platforms.

## Serverless Architecture Adoption

The serverless paradigm continues to gain traction, allowing developers to focus on code rather than infrastructure management. This approach offers better scalability, reduced costs, and faster time-to-market for many applications.

> "The future of web development lies in the seamless integration of AI, improved user experiences, and sustainable coding practices."

## What This Means for Developers

These trends represent more than just technological advancement—they signal a shift toward more intelligent, efficient, and user-centric development practices. Developers who adapt to these changes will be better positioned to create applications that meet tomorrow's challenges.
    `,
    author: {
      name: "Sarah Chen",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies. Passionate about clean code and innovative solutions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-01-15",
    readingTime: 8,
    category: "Technology",
    tags: ["Web Development", "AI", "PWA", "Serverless"],
    featured: true,
    image: "/src/assets/post-tech.jpg",
    slug: "future-web-development-2024"
  },
  {
    id: "2", 
    title: "Designing for Accessibility: A Complete Guide",
    excerpt: "Learn how to create inclusive designs that work for everyone. This comprehensive guide covers WCAG guidelines, testing tools, and practical implementation strategies.",
    content: `
# Designing for Accessibility: A Complete Guide

Accessibility in design isn't just about compliance—it's about creating inclusive experiences that work for everyone, regardless of their abilities or circumstances. This guide will walk you through the essential principles and practical steps to make your designs truly accessible.

## Understanding WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible digital content. The four main principles are:

- **Perceivable**: Information must be presentable in ways users can perceive
- **Operable**: Interface components must be operable by all users
- **Understandable**: Information and UI operation must be understandable
- **Robust**: Content must be robust enough for various assistive technologies

## Color and Contrast

Color contrast is one of the most important aspects of accessible design. Ensure that:

- Text has a contrast ratio of at least 4.5:1 against its background
- Large text (18pt+) has a contrast ratio of at least 3:1
- Color is not the only way to convey information

## Testing Your Designs

Regular testing with real users and assistive technologies is crucial. Use tools like:

- Screen readers (NVDA, JAWS, VoiceOver)
- Color contrast analyzers
- Keyboard navigation testing
- Automated accessibility scanners

> "Good design is accessible design. When we design for accessibility, we create better experiences for everyone."

## Implementation Best Practices

Start with semantic HTML, use proper heading structures, provide alternative text for images, and ensure keyboard navigation works smoothly throughout your interface.
    `,
    author: {
      name: "Marcus Rodriguez",
      bio: "UX Designer and accessibility advocate with a focus on inclusive design practices. Speaker at various design conferences.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-01-12",
    readingTime: 12,
    category: "Design",
    tags: ["Accessibility", "UX Design", "WCAG", "Inclusive Design"],
    featured: true,
    image: "/src/assets/post-design.jpg",
    slug: "designing-for-accessibility-complete-guide"
  },
  {
    id: "3",
    title: "Building a Sustainable Startup: Lessons from the Trenches",
    excerpt: "Real insights from entrepreneurs who built successful, sustainable businesses. Learn about the challenges, strategies, and mindset needed for long-term success.",
    content: `
# Building a Sustainable Startup: Lessons from the Trenches

Starting a business is challenging, but building one that stands the test of time requires a different approach altogether. After interviewing dozens of successful entrepreneurs and analyzing market data, several key patterns emerge for creating sustainable startups.

## Focus on Problem-Solution Fit First

Before rushing to build features, spend time understanding the real problem you're solving. Many startups fail because they build solutions for problems that don't exist or aren't painful enough for customers to pay for.

## Build for Unit Economics

Every business model should have clear unit economics from day one. Understand:

- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Gross margins
- Payback periods

## The Power of Iteration

Successful startups rarely get it right the first time. They iterate quickly, learn from failures, and pivot when necessary. The key is to fail fast and cheap, not slow and expensive.

## Team and Culture

Your team is your most valuable asset. Build a culture that:

- Encourages open communication
- Rewards learning from failures
- Focuses on customer value
- Maintains work-life balance

> "Sustainability isn't just about the environment—it's about building a business that can thrive for decades, not just quarters."

## Long-term Thinking

While growth is important, sustainable growth trumps explosive but unsustainable growth every time. Focus on building strong foundations that can support your business as it scales.
    `,
    author: {
      name: "Emily Thompson", 
      bio: "Serial entrepreneur and startup advisor. Founded three successful companies and now helps other entrepreneurs build sustainable businesses.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-01-10",
    readingTime: 10,
    category: "Business",
    tags: ["Startups", "Entrepreneurship", "Business Strategy", "Sustainability"],
    featured: true,
    image: "/src/assets/post-startup.jpg",
    slug: "building-sustainable-startup-lessons"
  },
  {
    id: "4",
    title: "Mastering Remote Work: Productivity Tips for Distributed Teams",
    excerpt: "Essential strategies for staying productive while working remotely. From communication tools to workspace setup, learn how to thrive in a distributed work environment.",
    content: `
# Mastering Remote Work: Productivity Tips for Distributed Teams

Remote work has transformed from a rare perk to a standard practice for many organizations. However, succeeding in a remote environment requires intentional strategies and the right tools. Here's how to master the art of remote work.

## Creating Your Ideal Workspace

Your environment significantly impacts your productivity. Consider:

- **Lighting**: Natural light improves mood and energy
- **Ergonomics**: Invest in a good chair and proper desk setup
- **Noise**: Use noise-canceling headphones or find a quiet space
- **Organization**: Keep your workspace clean and organized

## Communication Best Practices

Effective communication is the backbone of successful remote teams:

- **Over-communicate**: Share updates regularly with your team
- **Use video calls**: Face-to-face interaction builds stronger relationships
- **Establish boundaries**: Set clear expectations for availability
- **Document everything**: Keep important decisions and processes documented

## Time Management Techniques

Without the structure of an office, time management becomes crucial:

1. **Time blocking**: Schedule specific times for different types of work
2. **The Pomodoro Technique**: Work in focused 25-minute intervals
3. **Batch similar tasks**: Group similar activities together
4. **Set boundaries**: Create clear start and end times for your workday

## Staying Connected with Your Team

Remote work can be isolating. Combat this by:

- Participating in virtual coffee breaks
- Joining team video calls even when not required
- Sharing personal updates during team meetings
- Setting up informal communication channels

> "Remote work isn't about working from home—it's about working with intention, regardless of location."

## Tools and Technology

Invest in the right tools to support your remote work:

- **Communication**: Slack, Microsoft Teams, Discord
- **Project Management**: Asana, Trello, Notion
- **Video Conferencing**: Zoom, Google Meet, Loom
- **File Sharing**: Google Drive, Dropbox, OneDrive

## Maintaining Work-Life Balance

One of the biggest challenges of remote work is maintaining boundaries between work and personal life. Create physical and temporal separation between work and home life to prevent burnout.
    `,
    author: {
      name: "David Park",
      bio: "Remote work consultant and productivity expert. Helps teams transition to distributed work models and optimize their remote workflows.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-01-08",
    readingTime: 7,
    category: "Lifestyle",
    tags: ["Remote Work", "Productivity", "Work-Life Balance", "Team Communication"],
    featured: false,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    slug: "mastering-remote-work-productivity-tips"
  },
  {
    id: "5",
    title: "The Art of Code Reviews: Best Practices for Better Software",
    excerpt: "Code reviews are more than bug hunting—they're opportunities for knowledge sharing and team building. Learn how to conduct effective reviews that improve code quality.",
    content: `
# The Art of Code Reviews: Best Practices for Better Software

Code reviews are one of the most valuable practices in software development, yet they're often done poorly or skipped entirely. When done right, code reviews improve code quality, share knowledge, and strengthen team collaboration.

## Why Code Reviews Matter

Code reviews serve multiple purposes beyond just catching bugs:

- **Knowledge Sharing**: Team members learn from each other's approaches
- **Quality Assurance**: Catch issues before they reach production
- **Consistency**: Maintain coding standards across the team
- **Mentorship**: Senior developers can guide junior team members

## Setting Up Effective Review Processes

Establish clear guidelines for your team:

- **Size Limits**: Keep pull requests small (under 400 lines when possible)
- **Timeframe**: Aim to review code within 24 hours
- **Checklist**: Create a standard checklist for reviewers
- **Tools**: Use proper tools that support inline comments and discussions

## What to Look For

Focus on these key areas during reviews:

1. **Functionality**: Does the code do what it's supposed to do?
2. **Readability**: Is the code easy to understand?
3. **Performance**: Are there any obvious performance issues?
4. **Security**: Does the code introduce security vulnerabilities?
5. **Testing**: Are there adequate tests for the new code?

## Giving Constructive Feedback

The way you provide feedback matters:

- **Be specific**: Point out exact issues rather than general complaints
- **Suggest solutions**: Don't just identify problems—offer alternatives
- **Stay positive**: Focus on the code, not the person
- **Ask questions**: "Why did you choose this approach?" instead of "This is wrong"

> "Great code reviews are conversations, not judgments. They're opportunities to learn and grow together as a team."

## Receiving Feedback Gracefully

As the code author:

- **Stay open-minded**: Consider all feedback seriously
- **Ask for clarification**: If you don't understand a comment, ask
- **Don't take it personally**: Remember, it's about the code, not you
- **Learn from feedback**: Use reviews as learning opportunities

## Common Pitfalls to Avoid

- **Nitpicking style issues**: Use automated tools for formatting
- **Reviewing too much at once**: Large PRs are hard to review effectively
- **Ignoring the bigger picture**: Sometimes code works but doesn't fit the architecture
- **Being too slow**: Delayed reviews block progress and frustrate developers

## Tools and Automation

Leverage tools to make reviews more effective:

- **Linters**: Catch style and simple logic issues automatically
- **Static Analysis**: Find potential bugs and security issues
- **CI/CD**: Ensure tests pass before human review
- **Review Tools**: GitHub, GitLab, Bitbucket all offer good review interfaces

Code reviews are an investment in your team's future. They might slow down individual development slightly, but they significantly improve overall team velocity and code quality over time.
    `,
    author: {
      name: "Sarah Chen",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies. Passionate about clean code and innovative solutions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face"
    },
    publishedAt: "2024-01-05",
    readingTime: 9,
    category: "Technology",
    tags: ["Code Reviews", "Software Development", "Team Collaboration", "Best Practices"],
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    slug: "art-of-code-reviews-best-practices"
  }
];