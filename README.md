🚀 AI Newsletter SaaS Platform

An AI-powered newsletter platform that automatically generates high-quality newsletters using AI. Users can subscribe, manage their preferences, and receive curated AI-generated content based on selected topics.

This project simulates a real-world SaaS product with authentication, subscription plans, protected features, and AI-powered automation.

✨ Features

🔐 Authentication & User Accounts
Secure login/signup using Clerk Auth

🧠 AI Newsletter Generation
Uses OpenAI API to generate newsletters based on selected topics or prompts

📰 Newsletter Dashboard
Users can:

Create newsletters

View previously generated newsletters

Manage their content

💳 Pricing & Subscription System
Different plans with feature access control (Free vs Pro)

🗂️ Database Integration
All users, subscriptions, and newsletters stored using MongoDB + Prisma ORM

✅ Form Validation
Robust input validation using Zod to prevent invalid or broken requests

⚡ Modern UI
Built with Next.js App Router for fast performance and clean architecture

🛠️ Tech Stack

Frontend

Next.js 14+ (App Router)

React

Tailwind CSS

Backend

Next.js Server Actions / API Routes

Prisma ORM

Database

MongoDB

Authentication

Clerk

AI Integration

OpenAI API (for generating newsletters)

Validation

Zod

⚙️ How It Works (High Level)

User signs up / logs in using Clerk

User selects a topic or enters a prompt

The app sends the request to the backend

Backend calls OpenAI API to generate newsletter content

Generated newsletter is saved in MongoDB via Prisma

User can view it later in their dashboard

Feature access depends on the user’s subscription plan


Vercel-live-link: https://news-letter-nextjs-website-qqos.vercel.app












