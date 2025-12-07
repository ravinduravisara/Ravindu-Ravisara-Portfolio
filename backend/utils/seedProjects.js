require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Project.deleteMany({});
    await Project.insertMany([
      {
        title: 'Portfolio Website',
        description: 'Personal portfolio built with React and Tailwind CSS',
        techStack: ['React', 'Vite', 'Tailwind'],
        githubUrl: 'https://github.com/username/portfolio',
        liveUrl: 'https://example.com',
        imageUrl: '',
        featured: true,
        order: 1,
      },
      {
        title: 'API Server',
        description: 'Express + MongoDB backend with REST endpoints',
        techStack: ['Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/username/api-server',
        liveUrl: '',
        imageUrl: '',
        featured: false,
        order: 2,
      },
    ]);
    console.log('Seeded projects');
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
