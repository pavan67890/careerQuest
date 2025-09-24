"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "When faced with a difficult problem, you are more likely to:",
    options: [
      { id: "1a", label: "Analyze it logically and look for a step-by-step solution." },
      { id: "1b", label: "Brainstorm creative and unconventional ideas." },
      { id: "1c", label: "Collaborate with others to find a solution together." },
      { id: "1d", label: "Take a hands-on approach and learn by doing." },
    ],
  },
  {
    id: 2,
    question: "You enjoy spending your free time:",
    options: [
      { id: "2a", label: "Reading books, articles, or learning something new." },
      { id: "2b", label: "Creating art, music, or writing." },
      { id: "2c", label: "Socializing with friends and meeting new people." },
      { id: "2d", label: "Building, fixing, or working on a practical project." },
    ],
  },
  {
    id: 3,
    question: "Which work environment sounds most appealing?",
    options: [
        { id: "3a", label: "A structured office with clear tasks and goals." },
        { id: "3b", label: "A dynamic and creative studio or workshop." },
        { id: "3c", label: "A team-oriented, collaborative space." },
        { id: "3d", label: "Outdoors or in a setting that involves physical activity." },
    ]
  }
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

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-bold text-center mb-2">Career Aptitude Test</h1>
          <p className="text-center text-muted-foreground">Answer a few questions to find the best career path for you.</p>
        </div>
        
        <div className="space-y-4">
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
                     <Button>
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
