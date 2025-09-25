# CareerQuest: AI Career & Education Advisor

Welcome to CareerQuest, your one-stop AI-powered platform designed to help students and parents navigate the complexities of career and education planning. Our mission is to provide personalized, data-driven insights to empower users to make informed decisions about their future.

## ✨ Key Features

CareerQuest offers a suite of tools to guide users through every step of their career journey:

- **AI Career Suggestions:** Fill in your test results, interests, and strengths, and our AI will generate personalized career and education suggestions tailored just for you.
- **Interactive Career Test:** A comprehensive 20-question quiz that assesses your interests, personality, situational aptitude, and skills to generate a detailed career profile.
- **Dynamic Results Page:** Based on your test results, you'll receive a personalized profile with recommended careers, key strengths, and an explanation of why the profile fits you.
- **AI Consultant Chatbot:** An interactive chatbot powered by generative AI, allowing students to ask career-related questions and receive instant, supportive guidance.
- **Interactive Roadmap Explorer:** Visualize potential career paths with an interactive flowchart. Explore educational and professional journeys after 10th and 12th grade.
- **Timeline Tracker:** A visual timeline to help students stay on top of important academic and career milestones, complete with detailed information on college applications, including available seats, fees, and courses.
- **Career Arena:** A side-by-side comparison tool to evaluate different careers based on key attributes like salary, growth potential, work-life balance, and stability.
- **Alumni Stories:** Get inspired by the success stories of alumni, showcasing their career paths and offering real-world insights.
- **Study Hub:** A central library of academic and skill-based e-books and resources to support learning.
- **Parent Dashboard:** A dedicated dashboard for parents to view an overview of their child's career profile, including aptitude scores, strengths, and AI-recommended career paths.

## 🚀 Tech Stack

This project is built with a modern, robust, and scalable technology stack:

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)
- **Animations:** [Tailwind CSS Animate](https://tailwindcss.com/docs/animation)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 🏁 Project Tour & Getting Started

Welcome to the CareerQuest codebase! This guide will walk you through the main features and where to find their corresponding files.

### 1. The Homepage (`src/app/page.tsx`)

This is the main entry point of the application. It provides a brief introduction to CareerQuest and includes quick links to the most important features.

- **UI:** `src/app/page.tsx`
- **Data:** Placeholder images are managed in `src/lib/placeholder-images.ts`.

### 2. The Career Test (`src/app/career-test/`)

This is the core interactive feature for students. It's a 20-question quiz that leads to a personalized career profile.

- **Test Page:** `src/app/career-test/page.tsx` contains the logic for displaying questions and collecting answers.
- **Questions:** The test questions are stored in `src/lib/career-test-questions.ts`.
- **Results Page:** `src/app/career-test/results/[profile]/page.tsx` is a dynamic page that displays the career profile based on the user's results.
- **Results Data:** The mock data for the different career profiles is located in `src/lib/career-test-results-data.ts`.

### 3. AI-Powered Features (`src/ai/flows/`)

CareerQuest uses Genkit for its generative AI capabilities. The core AI logic is defined in "flows".

- **AI Consultant Chatbot:** `src/ai/flows/ai-consultant-chatbot.ts` defines the AI prompt and logic for the chatbot. The UI for this feature is in `src/app/ai-consultant/page.tsx`.
- **AI Career Suggestions:** `src/ai/flows/ai-career-suggestion.ts` contains the logic for generating personalized career advice. The front-end form and results display are in `src/app/career-suggestion/page.tsx`.

### 4. Exploring Career Paths

- **Interactive Roadmaps:** `src/app/roadmaps/page.tsx` allows users to explore educational and career paths in a nested, collapsible flowchart. The data for these roadmaps is in `src/lib/roadmap-data.ts`.
- **Career Arena:** `src/app/career-arena/page.tsx` provides a side-by-side comparison of different careers, complete with progress bars to visualize attributes like salary and work-life balance.
- **Timeline Tracker:** `src/app/timeline-tracker/page.tsx` displays a vertical timeline of key milestones, including detailed mock data for college applications.

### 5. Resources and Inspiration

- **Alumni Stories:** `src/app/alumni/page.tsx` showcases inspiring stories from alumni with a cool hover effect to reveal their journey.
- **Study Hub:** `src/app/study-hub/page.tsx` acts as a digital library for e-books and other learning resources.

### 6. Parent Dashboard (`src/app/parent-dashboard/page.tsx`)

A dedicated view for parents to see an overview of their child's profile, including aptitude charts, strengths, and recommended careers. The chart component is located at `src/components/parent-dashboard/aptitude-chart.tsx`.

### 7. Layout and Components

- **Main Layout:** `src/app/layout.tsx` is the root layout for the entire application.
- **Header:** `src/components/layout/header.tsx` contains the main navigation and theme toggle.
- **UI Components:** Reusable UI components (Buttons, Cards, etc.) are located in `src/components/ui/`. These are based on ShadCN UI.
