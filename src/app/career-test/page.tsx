
"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

const questions = [
  // --- Interests ---
  {
    id: 1,
    category: "Interests",
    question: "Which of these activities sounds most appealing for a weekend?",
    options: [
      { id: "1a", label: "Building a computer or coding a small application." },
      { id: "1b", label: "Visiting an art gallery or attending a live concert." },
      { id: "1c", label: "Volunteering for a community service event." },
      { id: "1d", label: "Analyzing stock market trends or creating a budget." },
    ],
  },
  {
    id: 2,
    category: "Interests",
    question: "You enjoy school subjects that involve:",
    options: [
      { id: "2a", label: "Logical reasoning and problem-solving, like Math or Physics." },
      { id: "2b", label: "Creative expression, like Art or Literature." },
      { id: "2c", label: "Understanding human behavior, like Psychology or Sociology." },
      { id: "2d", label: "Practical, hands-on work, like shop class or a lab." },
    ],
  },
  {
    id: 3,
    category: "Interests",
    question: "If you were to browse YouTube, which type of content would you most likely watch?",
    options: [
      { id: "3a", label: "Tech reviews and science explainers." },
      { id: "3b", label: "DIY craft tutorials or short films." },
      { id: "3c", label: "Interviews with influential leaders or documentaries on social issues." },
      { id: "3d", label: "Fixing things around the house or gardening tips." },
    ],
  },
  {
    id: 4,
    category: "Interests",
    question: "What kind of a work-related TV show would you watch?",
    options: [
      { id: "4a", label: "A show about tech innovators in Silicon Valley." },
      { id: "4b", label: "A documentary about famous architects or designers." },
      { id: "4c", label: "A medical drama set in a busy hospital." },
      { id: "4d", label: "A reality show about entrepreneurs pitching business ideas." },
    ],
  },
  {
    id: 5,
    category: "Interests",
    question: "Given a choice of a free online course, you would choose:",
    options: [
      { id: "5a", label: "Introduction to Artificial Intelligence." },
      { id: "5b", label: "Digital Photography Masterclass." },
      { id: "5c", label: "Leadership and Public Speaking." },
      { id: "5d", label: "Financial Markets 101." },
    ],
  },
  // --- Personality ---
  {
    id: 6,
    category: "Personality",
    question: "When working on a group project, you are most likely to:",
    options: [
      { id: "6a", label: "Take the lead, organize the work, and delegate tasks." },
      { id: "6b", label: "Brainstorm creative and unconventional ideas." },
      { id: "6c", label: "Ensure everyone is getting along and facilitate communication." },
      { id: "6d", label: "Focus independently on your assigned part of the project." },
    ],
  },
  {
    id: 7,
    category: "Personality",
    question: "You feel most energized when you are:",
    options: [
      { id: "7a", label: "Solving a complex problem by yourself." },
      { id: "7b", label: "In a dynamic and collaborative brainstorming session." },
      { id: "7c", label: "Helping someone else understand a difficult concept." },
      { id: "7d", label: "Organizing and structuring information or resources." },
    ],
  },
  {
    id: 8,
    category: "Personality",
    question: "When making a big decision, you primarily rely on:",
    options: [
      { id: "8a", label: "Logical analysis and data." },
      { id: "8b", label: "Your intuition and how the outcome will affect others." },
      { id: "8c", label: "Past experiences and established rules." },
      { id: "8d", label: "The most practical and efficient solution." },
    ],
  },
  {
    id: 9,
    category: "Personality",
    question: "People would describe you as:",
    options: [
      { id: "9a", label: "Analytical and objective." },
      { id: "9b", label: "Imaginative and artistic." },
      { id: "9c", label: "Empathetic and a good listener." },
      { id: "9d", label: "Organized and dependable." },
    ],
  },
  {
    id: 10,
    category: "Personality",
    question: "Your ideal work environment would be:",
    options: [
      { id: "10a", label: "A quiet space where you can focus without interruption." },
      { id: "10b", label: "A vibrant, open-plan office with lots of creative energy." },
      { id: "10c", label: "A team-oriented setting with frequent meetings and collaboration." },
      { id: "10d", label: "Flexible, with a mix of in-office and remote work." },
    ],
  },
  // --- Situational ---
  {
    id: 11,
    category: "Situational",
    question: "You're about to miss a deadline. What do you do?",
    options: [
      { id: "11a", label: "Inform your manager immediately with a revised timeline." },
      { id: "11b", label: "Work late and do whatever it takes to finish on time." },
      { id: "11c", label: "Ask a colleague for help to speed up the process." },
      { id: "11d", label: "Re-evaluate the project to see if any parts can be delivered later." },
    ],
  },
  {
    id: 12,
    category: "Situational",
    question: "You disagree with a coworker's approach to a project. You:",
    options: [
      { id: "12a", label: "Present your alternative with data to back up your reasoning." },
      { id: "12b", label: "Suggest a brainstorming session to explore other creative ideas." },
      { id: "12c", label: "Schedule a private conversation to understand their perspective." },
      { id: "12d", label: "Go with their idea to avoid conflict but note your concerns." },
    ],
  },
  {
    id: 13,
    category: "Situational",
    question: "Your team receives negative feedback on a recently completed project. Your first reaction is to:",
    options: [
      { id: "13a", label: "Analyze the feedback to identify the root cause of the issues." },
      { id: "13b", label: "Organize a team meeting to discuss what could be done differently." },
      { id: "13c", label: "Focus on the positive aspects of the project while acknowledging the feedback." },
      { id: "13d", label: "Create a detailed action plan to address each point of criticism." },
    ],
  },
  {
    id: 14,
    category: "Situational",
    question: "You're given a task with unclear instructions. You:",
    options: [
      { id: "14a", label: "Try to figure it out on your own through trial and error." },
      { id: "14b", label: "Ask for clarification to ensure you understand the goal." },
      { id: "14c", label: "Research similar tasks to see how they were done." },
      { id: "14d", label: "Start with the part you understand and ask questions as you go." },
    ],
  },
  {
    id: 15,
    category: "Situational",
    question: "A junior team member is struggling with their work. You:",
    options: [
      { id: "15a", label: "Offer to mentor them and walk them through the difficult parts." },
      { id: "15b", label: "Let them figure it out, as struggling is part of learning." },
      { id: "15c", label: "Inform your manager that the team member needs more training." },
      { id: "15d", label: "Quietly fix their mistakes to keep the project on track." },
    ],
  },
  // --- Aptitude ---
  {
    id: 16,
    category: "Aptitude",
    question: "If a car travels at 60 km/h, how far will it travel in 2.5 hours?",
    options: [
      { id: "16a", label: "120 km" },
      { id: "16b", label: "150 km" },
      { id: "16c", label: "180 km" },
      { id: "16d", label: "100 km" },
    ],
  },
  {
    id: 17,
    category: "Aptitude",
    question: "Which word is the odd one out: Cat, Dog, Lion, Eagle?",
    options: [
      { id: "17a", label: "Cat" },
      { id: "17b", label: "Dog" },
      { id: "17c", label: "Lion" },
      { id: "17d", label: "Eagle" },
    ],
  },
  {
    id: 18,
    category: "Aptitude",
    question: "If 'BOOK' is coded as 'DQQM', how is 'PEN' coded?",
    options: [
      { id: "18a", label: "RGQ" },
      { id: "18b", label: "RGP" },
      { id: "18c", label: "QGP" },
      { id: "18d", label: "PGQ" },
    ],
  },
  {
    id: 19,
    category: "Aptitude",
    question: "A store offers a 20% discount on an item priced at ₹500. What is the final price?",
    options: [
      { id: "19a", label: "₹400" },
      { id: "19b", label: "₹420" },
      { id: "19c", label: "₹450" },
      { id: "19d", label: "₹380" },
    ],
  },
  {
    id: 20,
    category: "Aptitude",
    question: "Look at this series: 2, 4, 8, 16, __. What number should come next?",
    options: [
      { id: "20a", label: "24" },
      { id: "20b", label: "32" },
      { id: "20c", label: "40" },
      { id: "20d", label: "64" },
    ],
  },
];

export default function CareerTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentCategory = questions[currentQuestion].category;

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-bold text-center mb-2">Career Aptitude Test</h1>
          <p className="text-center text-muted-foreground">Answer these questions to discover your ideal career path.</p>
        </div>
        
        <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
                <span className="text-sm font-semibold text-primary">{currentCategory}</span>
                <span className="text-sm text-muted-foreground">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <Progress value={progress} className="w-full" />
            <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline">Question {questions[currentQuestion].id}</CardTitle>
                <CardDescription className="text-lg pt-2">{questions[currentQuestion].question}</CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup 
                    value={answers[questions[currentQuestion].id]}
                    onValueChange={handleAnswerChange} 
                    className="space-y-4"
                >
                {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 p-3 rounded-md border has-[:checked]:bg-secondary has-[:checked]:border-primary transition-all">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label htmlFor={option.id} className="text-base cursor-pointer flex-1">{option.label}</Label>
                    </div>
                ))}
                </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrev} disabled={currentQuestion === 0}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                {isLastQuestion ? (
                     <Button disabled={!answers[questions[currentQuestion].id]}>
                        Submit & See Results <Check className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  )
}

    