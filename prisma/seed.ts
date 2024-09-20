const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Create Tags
  const array = await prisma.tag.create({
    data: { name: "Array" },
  });

  const string = await prisma.tag.create({
    data: { name: "String" },
  });

  const pointers = await prisma.tag.create({
    data: { name: "Pointers" },
  });

  const linkedList = await prisma.tag.create({
    data: { name: "Linked List" },
  });

  const tree = await prisma.tag.create({
    data: { name: "Tree" },
  });

  const graph = await prisma.tag.create({
    data: { name: "Graph" },
  });

  const dp = await prisma.tag.create({
    data: { name: "Dynamic Programming" },
  });

  const bfs = await prisma.tag.create({
    data: { name: "BFS" },
  });

  const dfs = await prisma.tag.create({
    data: { name: "DFS" },
  });

  const dijkstra = await prisma.tag.create({
    data: { name: "Dijkstra" },
  });

  const memoization = await prisma.tag.create({
    data: { name: "Memoization" },
  });

  const optimization = await prisma.tag.create({
    data: { name: "Optimization" },
  });

  const comparison = await prisma.tag.create({
    data: { name: "Comparison" },
  });

  const timeComplexity = await prisma.tag.create({
    data: { name: "Time Complexity" },
  });

  const memoryManagement = await prisma.tag.create({
    data: { name: "Memory Management" },
  });

  const sorting = await prisma.tag.create({
    data: { name: "Sorting" },
  });

  // Create Categories
  const dataStructures = await prisma.category.create({
    data: { name: "Data Structures" },
  });

  const algorithms = await prisma.category.create({
    data: { name: "Algorithms" },
  });

  const systemDesign = await prisma.category.create({
    data: { name: "System Design" },
  });

  const databases = await prisma.category.create({
    data: { name: "Databases" },
  });

  const operatingSystems = await prisma.category.create({
    data: { name: "Operating Systems" },
  });

  const networking = await prisma.category.create({
    data: { name: "Networking" },
  });

  const security = await prisma.category.create({
    data: { name: "Security" },
  });

  // Create Authors
  const author1 = await prisma.author.create({
    data: {
      name: "John Doe",
      bio: "Expert in dynamic programming and recursion.",
    },
  });

  const author2 = await prisma.author.create({
    data: {
      name: "Jane Smith",
      bio: "Experienced in graph theory and algorithms.",
    },
  });

  const author3 = await prisma.author.create({
    data: {
      name: "Alice Johnson",
      bio: "Specialist in system design and scalability.",
    },
  });

  const author4 = await prisma.author.create({
    data: {
      name: "Bob Williams",
      bio: "Professional in databases and SQL.",
    },
  });

  const author5 = await prisma.author.create({
    data: {
      name: "Charlie Brown",
      bio: "Guru in operating systems and virtualization.",
    },
  });

  const author6 = await prisma.author.create({
    data: {
      name: "Eve Davis",
      bio: "Master in networking and cloud computing.",
    },
  });

  // Create Topics
  const topic1 = await prisma.topic.create({
    data: {
      name: "Dynamic Programming",
      description: "Learn the essentials of Dynamic Programming",
      difficulty: "HARD",
      categories: {
        connect: [{ id: algorithms.id }, { id: dataStructures.id }],
      },
      tags: {
        connect: [
          { id: dp.id },
          { id: optimization.id },
          { id: memoization.id },
          { id: comparison.id },
          { id: timeComplexity.id },
        ],
      },
      authors: { connect: [{ id: author1.id }, { id: author5.id }] },
    },
  });

  const topic2 = await prisma.topic.create({
    data: {
      name: "Graph Traversal",
      description: "Master the art of graph traversal algorithms",
      difficulty: "MEDIUM",
      categories: {
        connect: [{ id: algorithms.id }],
      },
      tags: {
        connect: [
          { id: graph.id },
          { id: bfs.id },
          { id: dfs.id },
          { id: dijkstra.id },
        ],
      },
      authors: { connect: [{ id: author2.id }] },
    },
  });

  const topic3 = await prisma.topic.create({
    data: {
      name: "System Design",
      description: "Design scalable and reliable systems",
      difficulty: "MEDIUM",
      categories: {
        connect: [{ id: systemDesign.id }],
      },
      tags: {
        connect: [
          { id: string.id },
          { id: pointers.id },
          { id: linkedList.id },
          { id: tree.id },
          { id: memoryManagement.id },
          { id: timeComplexity.id },
        ],
      },
      authors: { connect: [{ id: author3.id }] },
    },
  });

  const topic4 = await prisma.topic.create({
    data: {
      name: "Databases",
      description: "Understand the fundamentals of databases",
      difficulty: "EASY",
      categories: {
        connect: [{ id: databases.id }],
      },
      tags: {
        connect: [{ id: sorting.id }],
      },
      authors: { connect: [{ id: author4.id }] },
    },
  });

  const topic5 = await prisma.topic.create({
    data: {
      name: "Operating Systems",
      description: "Explore the world of operating systems",
      difficulty: "MEDIUM",
      categories: {
        connect: [{ id: operatingSystems.id }],
      },
      tags: {
        connect: [{ id: memoryManagement.id }],
      },
      authors: { connect: [{ id: author5.id }] },
    },
  });

  const topic6 = await prisma.topic.create({
    data: {
      name: "Networking",
      description: "Learn the basics of computer networking",
      difficulty: "EASY",
      categories: {
        connect: [{ id: networking.id }],
      },
      tags: {
        connect: [{ id: memoryManagement.id }],
      },
      authors: { connect: [{ id: author6.id }] },
    },
  });

  const topic7 = await prisma.topic.create({
    data: {
      name: "Security",
      description: "Secure your systems and data",
      difficulty: "MEDIUM",
      categories: {
        connect: [{ id: security.id }],
      },
      tags: {
        connect: [{ id: memoryManagement.id }],
      },
      authors: { connect: [{ id: author1.id }] },
    },
  });

  // Create Chapters
  const chapter1 = await prisma.chapter.create({
    data: {
      name: "Introduction to DP",
      topic: { connect: { id: topic1.id } },
    },
  });

  const chapter2 = await prisma.chapter.create({
    data: {
      name: "Graph Traversal",
      topic: { connect: { id: topic2.id } },
    },
  });

  const chapter3 = await prisma.chapter.create({
    data: {
      name: "System Design Principles",
      topic: { connect: { id: topic3.id } },
    },
  });

  const chapter4 = await prisma.chapter.create({
    data: {
      name: "Database Fundamentals",
      topic: { connect: { id: topic4.id } },
    },
  });

  const chapter5 = await prisma.chapter.create({
    data: {
      name: "Operating System Basics",
      topic: { connect: { id: topic5.id } },
    },
  });

  const chapter6 = await prisma.chapter.create({
    data: {
      name: "Networking Essentials",
      topic: { connect: { id: topic6.id } },
    },
  });

  const chapter7 = await prisma.chapter.create({
    data: {
      name: "Security Best Practices",
      topic: { connect: { id: topic7.id } },
    },
  });

  const chapter8 = await prisma.chapter.create({
    data: {
      name: "Advanced DP Techniques",
      topic: { connect: { id: topic1.id } },
    },
  });

  const chapter9 = await prisma.chapter.create({
    data: {
      name: "Graph Algorithms",
      topic: { connect: { id: topic2.id } },
    },
  });

  // Create Problems
  const problem1 = await prisma.problem.create({
    data: {
      name: "Fibonacci Sequence with DP",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter1.id } },
      youtubeLink: "https://www.youtube.com/dp-fibonacci",
      leetcodeLink: "https://leetcode.com/fibonacci-dp",
      articleLink: "https://medium.com/dp-fibonacci",
      author: { connect: { id: author1.id } },
    },
  });

  const problem2 = await prisma.problem.create({
    data: {
      name: "Breadth-First Search (BFS)",
      difficulty: "EASY",
      chapter: { connect: { id: chapter2.id } },
      youtubeLink: "https://www.youtube.com/graph-bfs",
      leetcodeLink: "https://leetcode.com/bfs",
      articleLink: "https://medium.com/bfs",
      author: { connect: { id: author2.id } },
    },
  });

  const problem3 = await prisma.problem.create({
    data: {
      name: "System Design Interview Question",
      difficulty: "HARD",
      chapter: { connect: { id: chapter3.id } },
      youtubeLink: "https://www.youtube.com/system-design",
      leetcodeLink: "https://leetcode.com/system-design",
      articleLink: "https://medium.com/system-design",
      author: { connect: { id: author3.id } },
    },
  });

  const problem4 = await prisma.problem.create({
    data: {
      name: "SQL Query Challenge",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter4.id } },
      youtubeLink: "https://www.youtube.com/sql-query",
      leetcodeLink: "https://leetcode.com/sql-query",
      articleLink: "https://medium.com/sql-query",
      author: { connect: { id: author4.id } },
    },
  });

  const problem5 = await prisma.problem.create({
    data: {
      name: "Memory Management in OS",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter5.id } },
      youtubeLink: "https://www.youtube.com/memory-management",
      leetcodeLink: "https://leetcode.com/memory-management",
      articleLink: "https://medium.com/memory-management",
      author: { connect: { id: author5.id } },
    },
  });

  const problem6 = await prisma.problem.create({
    data: {
      name: "Networking Protocol Quiz",
      difficulty: "EASY",
      chapter: { connect: { id: chapter6.id } },
      youtubeLink: "https://www.youtube.com/networking-protocol",
      leetcodeLink: "https://leetcode.com/networking-protocol",
      articleLink: "https://medium.com/networking-protocol",
      author: { connect: { id: author6.id } },
    },
  });

  const problem7 = await prisma.problem.create({
    data: {
      name: "Security Vulnerability Challenge",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter7.id } },
      youtubeLink: "https://www.youtube.com/security-vulnerability",
      leetcodeLink: "https://leetcode.com/security-vulnerability",
      articleLink: "https://medium.com/security-vulnerability",
      author: { connect: { id: author1.id } },
    },
  });

  const problem8 = await prisma.problem.create({
    data: {
      name: "Advanced DP Problem",
      difficulty: "HARD",
      chapter: { connect: { id: chapter8.id } },
      youtubeLink: "https://www.youtube.com/advanced-dp",
      leetcodeLink: "https://leetcode.com/advanced-dp",
      articleLink: "https://medium.com/advanced-dp",
      author: { connect: { id: author5.id } },
    },
  });

  const problem9 = await prisma.problem.create({
    data: {
      name: "Graph Traversal Challenge",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter9.id } },
      youtubeLink: "https://www.youtube.com/graph-traversal",
      leetcodeLink: "https://leetcode.com/graph-traversal",
      articleLink: "https://medium.com/graph-traversal",
      author: { connect: { id: author2.id } },
    },
  });

  const problem10 = await prisma.problem.create({
    data: {
      name: "System Design Problem",
      difficulty: "HARD",
      chapter: { connect: { id: chapter3.id } },
      youtubeLink: "https://www.youtube.com/system-design",
      leetcodeLink: "https://leetcode.com/system-design",
      articleLink: "https://medium.com/system-design",
      author: { connect: { id: author3.id } },
    },
  });

  const problem11 = await prisma.problem.create({
    data: {
      name: "SQL Query Challenge",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter4.id } },
      youtubeLink: "https://www.youtube.com/sql-query",
      leetcodeLink: "https://leetcode.com/sql-query",
      articleLink: "https://medium.com/sql-query",
      author: { connect: { id: author4.id } },
    },
  });

  const problem12 = await prisma.problem.create({
    data: {
      name: "Memory Management in OS",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter5.id } },
      youtubeLink: "https://www.youtube.com/memory-management",
      leetcodeLink: "https://leetcode.com/memory-management",
      articleLink: "https://medium.com/memory-management",
      author: { connect: { id: author5.id } },
    },
  });

  const problem13 = await prisma.problem.create({
    data: {
      name: "Networking Protocol Quiz",
      difficulty: "EASY",
      chapter: { connect: { id: chapter6.id } },
      youtubeLink: "https://www.youtube.com/networking-protocol",
      leetcodeLink: "https://leetcode.com/networking-protocol",
      articleLink: "https://medium.com/networking-protocol",
      author: { connect: { id: author6.id } },
    },
  });

  const problem14 = await prisma.problem.create({
    data: {
      name: "Security Vulnerability Challenge",
      difficulty: "MEDIUM",
      chapter: { connect: { id: chapter7.id } },
      youtubeLink: "https://www.youtube.com/security-vulnerability",
      leetcodeLink: "https://leetcode.com/security-vulnerability",
      articleLink: "https://medium.com/security-vulnerability",
      author: { connect: { id: author1.id } },
    },
  });

  const problem15 = await prisma.problem.create({
    data: {
      name: "Advanced DP Problem",
      difficulty: "HARD",
      chapter: { connect: { id: chapter8.id } },
      youtubeLink: "https://www.youtube.com/advanced-dp",
      leetcodeLink: "https://leetcode.com/advanced-dp",
      articleLink: "https://medium.com/advanced-dp",
      author: { connect: { id: author5.id } },
    },
  });

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: "Student A",
      email: "studentA@example.com",
      role: "USER",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      role: "ADMIN",
    },
  });

  // Mark problems as completed
  await prisma.completedProblem.create({
    data: {
      user: { connect: { id: user1.id } },
      problem: { connect: { id: problem1.id } },
    },
  });

  await prisma.completedProblem.create({
    data: {
      user: { connect: { id: user2.id } },
      problem: { connect: { id: problem2.id } },
    },
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
